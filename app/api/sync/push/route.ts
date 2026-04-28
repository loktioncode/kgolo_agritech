import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { requireMobileClient } from '@/lib/mobile-client';

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

function plausibleSaIdYymmdd(yymmdd: string): boolean {
  if (!/^\d{6}$/.test(yymmdd)) return false;
  const yy = Number.parseInt(yymmdd.slice(0, 2), 10);
  const mm = Number.parseInt(yymmdd.slice(2, 4), 10);
  const dd = Number.parseInt(yymmdd.slice(4, 6), 10);
  if (mm < 1 || mm > 12 || dd < 1 || dd > 31) return false;
  const nowYear = new Date().getFullYear();
  for (const century of [1900, 2000]) {
    const year = century + yy;
    if (year < 1920 || year > nowYear + 1) continue;
    const d = new Date(year, mm - 1, dd);
    if (d.getFullYear() === year && d.getMonth() === mm - 1 && d.getDate() === dd) return true;
  }
  return false;
}

function southAfricanIdLuhnValid(id13: string): boolean {
  if (!/^\d{13}$/.test(id13)) return false;
  let sum = 0;
  let alt = false;
  for (let i = id13.length - 1; i >= 0; i -= 1) {
    let n = Number.parseInt(id13[i]!, 10);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

function validSaIdNumber(value: string): boolean {
  return /^\d{13}$/.test(value) && plausibleSaIdYymmdd(value.slice(0, 6)) && southAfricanIdLuhnValid(value);
}

function normalizeSouthAfricanMobile(value: string): string | null {
  const digits = value.replace(/\D/g, '');
  let local = digits;
  if (local.startsWith('27') && local.length >= 11) {
    local = `0${local.slice(2)}`;
  }
  if (!/^0[1-9]\d{8}$/.test(local)) return null;
  return local;
}

export async function POST(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const now = new Date().toISOString();
    const body = (await req.json()) as {
      farmers?: FarmerDTO[];
      parcels?: ParcelDTO[];
      animals?: AnimalDTO[];
      activities?: ActivityDTO[];
    };

    const { farmers = [], parcels = [], animals = [], activities = [] } = body;

    await prisma.$transaction(async (tx) => {
      // ── Farmers ────────────────────────────────────────────────────────────
      for (const f of farmers) {
        const idNumber = (f.id_number ?? '').trim();
        const phone = normalizeSouthAfricanMobile(f.phone ?? '');
        if (!validSaIdNumber(idNumber) || !phone) {
          return NextResponse.json(
            { error: `Invalid farmer identity data for farmer ${f.id}.` },
            { status: 400 },
          );
        }

        await tx.farmer.upsert({
          where: { id: f.id },
          create: {
            id: f.id,
            name: f.name,
            id_number: idNumber,
            phone,
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
            phone,
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
        if (!auth.farmerId) {
          await tx.user.update({
            where: { id: auth.userId },
            data: { farmer_id: f.id },
          });
          auth.farmerId = f.id;
        }
      }

      // ── Parcels ─────────────────────────────────────────────────────────────
      for (const p of parcels) {
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
    console.error('[sync/push]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
