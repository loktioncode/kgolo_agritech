import { NextRequest, NextResponse } from 'next/server';

import {
  normalizeEmail,
  normalizeSouthAfricanMobile,
  validFarmerContact,
  validSaIdNumber,
} from '@/lib/farmer-validation';
import { prisma } from '@/lib/db';
import { requireFarmerIdHeader, requireMobileClient } from '@/lib/mobile-client';

type FarmerDTO = {
  id: string;
  name: string;
  id_number: string;
  phone: string;
  email?: string | null;
  photo_path?: string | null;
  consent_given?: number;
  consent_date?: string | null;
  address?: string | null;
  farm_latitude?: number | null;
  farm_longitude?: number | null;
  farm_accuracy?: number | null;
  created_at?: string;
  updated_at?: string;
};

type ParcelDTO = {
  id: string;
  farmer_id: string;
  name: string;
  latitude?: number | null;
  longitude?: number | null;
  accuracy?: number | null;
  created_at?: string;
  updated_at?: string;
};

type AnimalDTO = {
  id: string;
  farmer_id: string;
  species: string;
  breed?: string | null;
  birth_date?: string | null;
  ear_tag?: string | null;
  photo_path?: string | null;
  parcel_id?: string | null;
  deleted_at?: string | null;
  created_at?: string;
  updated_at?: string;
};

type ActivityDTO = {
  id: string;
  farmer_id: string;
  type: string;
  timestamp: string;
  latitude?: number | null;
  longitude?: number | null;
  accuracy?: number | null;
  parcel_id?: string | null;
  animal_id?: string | null;
  animal_ids?: string | null;
  notes?: string | null;
  photo_path?: string | null;
  created_at?: string;
  updated_at?: string;
};

class SyncValidationError extends Error {}

export async function POST(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const farmerCtx = requireFarmerIdHeader(req);
  if (!farmerCtx.ok) {
    return NextResponse.json({ error: farmerCtx.error }, { status: farmerCtx.status });
  }
  const farmerId = farmerCtx.farmerId;

  try {
    const now = new Date().toISOString();
    const body = (await req.json()) as {
      farmers?: FarmerDTO[];
      parcels?: ParcelDTO[];
      animals?: AnimalDTO[];
      activities?: ActivityDTO[];
    };

    const { farmers = [], parcels = [], animals = [], activities = [] } = body;

    const mismatchedFarmer =
      farmers.some((f) => f.id !== farmerId) ||
      parcels.some((p) => p.farmer_id !== farmerId) ||
      animals.some((a) => a.farmer_id !== farmerId) ||
      activities.some((ac) => ac.farmer_id !== farmerId);
    if (mismatchedFarmer) {
      return NextResponse.json(
        { error: 'Payload farmer ids must match x-kg-farmer-id.' },
        { status: 400 },
      );
    }

    await prisma.$transaction(async (tx) => {
      // ── Farmers ────────────────────────────────────────────────────────────
      for (const f of farmers) {
        if (f.id !== farmerId) {
          throw new SyncValidationError('You can only sync your own farmer profile.');
        }

        const idNumber = (f.id_number ?? '').trim();
        const phone = normalizeSouthAfricanMobile(f.phone ?? '');
        const email = normalizeEmail(f.email ?? '');
        if (!validSaIdNumber(idNumber) || !validFarmerContact(email, phone)) {
          throw new SyncValidationError(`Invalid farmer identity data for farmer ${f.id}.`);
        }

        await tx.farmer.upsert({
          where: { id: f.id },
          create: {
            id: f.id,
            name: f.name,
            id_number: idNumber,
            phone: phone ?? '',
            email,
            photo_path: f.photo_path ?? null,
            consent_given: f.consent_given ?? 0,
            consent_date: f.consent_date ?? null,
            address: f.address ?? null,
            farm_latitude: f.farm_latitude ?? null,
            farm_longitude: f.farm_longitude ?? null,
            farm_accuracy: f.farm_accuracy ?? null,
            created_at: now,
            updated_at: now,
            sync_version: 1,
            last_synced_at: now,
          },
          update: {
            name: f.name,
            id_number: idNumber,
            phone: phone ?? '',
            email,
            photo_path: f.photo_path ?? null,
            consent_given: f.consent_given ?? 0,
            consent_date: f.consent_date ?? null,
            address: f.address ?? null,
            farm_latitude: f.farm_latitude ?? null,
            farm_longitude: f.farm_longitude ?? null,
            farm_accuracy: f.farm_accuracy ?? null,
            updated_at: now,
            sync_version: { increment: 1 },
            last_synced_at: now,
          },
        });
      }

      // ── Parcels ─────────────────────────────────────────────────────────────
      for (const p of parcels) {
        const existingParcel = await tx.parcel.findUnique({ where: { id: p.id } });
        if (existingParcel && existingParcel.farmer_id !== farmerId) {
          throw new SyncValidationError(`Parcel ${p.id} belongs to another farmer.`);
        }

        await tx.parcel.upsert({
          where: { id: p.id },
          create: {
            id: p.id,
            farmer_id: p.farmer_id,
            name: p.name,
            latitude: p.latitude ?? null,
            longitude: p.longitude ?? null,
            accuracy: p.accuracy ?? null,
            created_at: now,
            updated_at: now,
            sync_version: 1,
            last_synced_at: now,
          },
          update: {
            name: p.name,
            latitude: p.latitude ?? null,
            longitude: p.longitude ?? null,
            accuracy: p.accuracy ?? null,
            updated_at: now,
            sync_version: { increment: 1 },
            last_synced_at: now,
          },
        });
      }

      // ── Animals ─────────────────────────────────────────────────────────────
      for (const a of animals) {
        const existingAnimal = await tx.animal.findUnique({ where: { id: a.id } });
        if (existingAnimal && existingAnimal.farmer_id !== farmerId) {
          throw new SyncValidationError(`Animal ${a.id} belongs to another farmer.`);
        }

        await tx.animal.upsert({
          where: { id: a.id },
          create: {
            id: a.id,
            farmer_id: a.farmer_id,
            species: a.species,
            breed: a.breed ?? null,
            birth_date: a.birth_date ?? null,
            ear_tag: a.ear_tag ?? null,
            photo_path: a.photo_path ?? null,
            parcel_id: a.parcel_id ?? null,
            deleted_at: a.deleted_at ?? null,
            created_at: now,
            updated_at: now,
            sync_version: 1,
            last_synced_at: now,
          },
          update: {
            species: a.species,
            breed: a.breed ?? null,
            birth_date: a.birth_date ?? null,
            ear_tag: a.ear_tag ?? null,
            photo_path: a.photo_path ?? null,
            parcel_id: a.parcel_id ?? null,
            deleted_at: a.deleted_at ?? null,
            updated_at: now,
            sync_version: { increment: 1 },
            last_synced_at: now,
          },
        });
      }

      // ── Activities ──────────────────────────────────────────────────────────
      for (const ac of activities) {
        const existingActivity = await tx.activity.findUnique({ where: { id: ac.id } });
        if (existingActivity && existingActivity.farmer_id !== farmerId) {
          throw new SyncValidationError(`Activity ${ac.id} belongs to another farmer.`);
        }

        await tx.activity.upsert({
          where: { id: ac.id },
          create: {
            id: ac.id,
            farmer_id: ac.farmer_id,
            type: ac.type,
            timestamp: ac.timestamp,
            latitude: ac.latitude ?? null,
            longitude: ac.longitude ?? null,
            accuracy: ac.accuracy ?? null,
            parcel_id: ac.parcel_id ?? null,
            animal_id: ac.animal_id ?? null,
            animal_ids: ac.animal_ids ?? null,
            notes: ac.notes ?? null,
            photo_path: ac.photo_path ?? null,
            created_at: now,
            updated_at: now,
            sync_version: 1,
            last_synced_at: now,
          },
          update: {
            type: ac.type,
            timestamp: ac.timestamp,
            latitude: ac.latitude ?? null,
            longitude: ac.longitude ?? null,
            accuracy: ac.accuracy ?? null,
            parcel_id: ac.parcel_id ?? null,
            animal_id: ac.animal_id ?? null,
            animal_ids: ac.animal_ids ?? null,
            notes: ac.notes ?? null,
            photo_path: ac.photo_path ?? null,
            updated_at: now,
            sync_version: { increment: 1 },
            last_synced_at: now,
          },
        });
      }
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof SyncValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    console.error('[sync/push]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
