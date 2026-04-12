import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';

type FarmerDTO = {
  id: string;
  name: string;
  id_number: string;
  phone: string;
  photo_path?: string | null;
  consent_given?: number;
  consent_date?: string | null;
  address?: string | null;
  farm_latitude?: number | null;
  farm_longitude?: number | null;
  farm_accuracy?: number | null;
  created_at: string;
  updated_at: string;
};

type ParcelDTO = {
  id: string;
  farmer_id: string;
  name: string;
  latitude?: number | null;
  longitude?: number | null;
  accuracy?: number | null;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
};

function newer(a: string, b: string) {
  return a > b;
}

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = (await req.json()) as {
      farmers?: FarmerDTO[];
      parcels?: ParcelDTO[];
      animals?: AnimalDTO[];
      activities?: ActivityDTO[];
    };

    const { farmers = [], parcels = [], animals = [], activities = [] } = body;

    // ── Farmers ──────────────────────────────────────────────────────────────
    for (const f of farmers) {
      const existing = await prisma.farmer.findUnique({ where: { id: f.id } });
      if (!existing || newer(f.updated_at, existing.updated_at)) {
        await prisma.farmer.upsert({
          where: { id: f.id },
          create: {
            id: f.id,
            name: f.name,
            id_number: f.id_number,
            phone: f.phone,
            photo_path: f.photo_path ?? null,
            consent_given: f.consent_given ?? 0,
            consent_date: f.consent_date ?? null,
            address: f.address ?? null,
            farm_latitude: f.farm_latitude ?? null,
            farm_longitude: f.farm_longitude ?? null,
            farm_accuracy: f.farm_accuracy ?? null,
            created_at: f.created_at,
            updated_at: f.updated_at,
          },
          update: {
            name: f.name,
            id_number: f.id_number,
            phone: f.phone,
            photo_path: f.photo_path ?? null,
            consent_given: f.consent_given ?? 0,
            consent_date: f.consent_date ?? null,
            address: f.address ?? null,
            farm_latitude: f.farm_latitude ?? null,
            farm_longitude: f.farm_longitude ?? null,
            farm_accuracy: f.farm_accuracy ?? null,
            updated_at: f.updated_at,
          },
        });
      }
      // Link this farmer to the authenticated user if not yet linked
      if (!auth.farmerId) {
        await prisma.user.update({
          where: { id: auth.userId },
          data: { farmer_id: f.id },
        });
        auth.farmerId = f.id;
      }
    }

    // ── Parcels ───────────────────────────────────────────────────────────────
    for (const p of parcels) {
      const existing = await prisma.parcel.findUnique({ where: { id: p.id } });
      if (!existing || newer(p.updated_at, existing.updated_at)) {
        await prisma.parcel.upsert({
          where: { id: p.id },
          create: {
            id: p.id,
            farmer_id: p.farmer_id,
            name: p.name,
            latitude: p.latitude ?? null,
            longitude: p.longitude ?? null,
            accuracy: p.accuracy ?? null,
            created_at: p.created_at,
            updated_at: p.updated_at,
          },
          update: {
            name: p.name,
            latitude: p.latitude ?? null,
            longitude: p.longitude ?? null,
            accuracy: p.accuracy ?? null,
            updated_at: p.updated_at,
          },
        });
      }
    }

    // ── Animals ───────────────────────────────────────────────────────────────
    for (const a of animals) {
      const existing = await prisma.animal.findUnique({ where: { id: a.id } });
      if (!existing || newer(a.updated_at, existing.updated_at)) {
        await prisma.animal.upsert({
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
            created_at: a.created_at,
            updated_at: a.updated_at,
          },
          update: {
            species: a.species,
            breed: a.breed ?? null,
            birth_date: a.birth_date ?? null,
            ear_tag: a.ear_tag ?? null,
            photo_path: a.photo_path ?? null,
            parcel_id: a.parcel_id ?? null,
            deleted_at: a.deleted_at ?? null,
            updated_at: a.updated_at,
          },
        });
      }
    }

    // ── Activities ────────────────────────────────────────────────────────────
    for (const ac of activities) {
      const existing = await prisma.activity.findUnique({ where: { id: ac.id } });
      if (!existing || newer(ac.updated_at, existing.updated_at)) {
        await prisma.activity.upsert({
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
            created_at: ac.created_at,
            updated_at: ac.updated_at,
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
            updated_at: ac.updated_at,
          },
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[sync/push]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
