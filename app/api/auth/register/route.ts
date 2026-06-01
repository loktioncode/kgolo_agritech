import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/db';
import {
  normalizeEmail,
  normalizeSouthAfricanMobile,
  validFarmerContact,
  validSaIdNumber,
} from '@/lib/farmer-validation';
import { requireFarmerIdHeader, requireMobileClient } from '@/lib/mobile-client';

type RegisterBody = {
  farmer_id?: string;
  name?: string;
  id_number?: string;
  phone?: string | null;
  email?: string | null;
  password?: string;
  photo_path?: string | null;
  consent_given?: number;
  consent_date?: string | null;
  address?: string | null;
  farm_latitude?: number | null;
  farm_longitude?: number | null;
  farm_accuracy?: number | null;
};

export async function POST(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const farmerCtx = requireFarmerIdHeader(req);
  if (!farmerCtx.ok) {
    return NextResponse.json({ error: farmerCtx.error }, { status: farmerCtx.status });
  }

  try {
    const body = (await req.json()) as RegisterBody;
    const farmerId = (body.farmer_id ?? farmerCtx.farmerId).trim();

    if (farmerId !== farmerCtx.farmerId) {
      return NextResponse.json({ error: 'farmer_id must match x-kg-farmer-id header' }, { status: 400 });
    }

    const name = (body.name ?? '').trim();
    const idNumber = (body.id_number ?? '').trim();
    const phone = normalizeSouthAfricanMobile(body.phone ?? '');
    const email = normalizeEmail(body.email ?? '');
    const password = body.password ?? '';

    if (!name) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }
    if (!validSaIdNumber(idNumber)) {
      return NextResponse.json({ error: 'Invalid SA ID number' }, { status: 400 });
    }
    if (!validFarmerContact(email, phone)) {
      return NextResponse.json(
        { error: 'Provide an email (recommended) or a mobile number for cloud backup.' },
        { status: 400 },
      );
    }
    if (email && password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters when registering with email.' },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();

    await prisma.farmer.upsert({
      where: { id: farmerId },
      create: {
        id: farmerId,
        name,
        id_number: idNumber,
        phone: phone ?? '',
        email,
        photo_path: body.photo_path ?? null,
        consent_given: body.consent_given ?? 1,
        consent_date: body.consent_date ?? null,
        address: body.address ?? null,
        farm_latitude: body.farm_latitude ?? null,
        farm_longitude: body.farm_longitude ?? null,
        farm_accuracy: body.farm_accuracy ?? null,
        created_at: now,
        updated_at: now,
        sync_version: 1,
        last_synced_at: now,
      },
      update: {
        name,
        id_number: idNumber,
        phone: phone ?? '',
        email,
        photo_path: body.photo_path ?? null,
        consent_given: body.consent_given ?? 1,
        consent_date: body.consent_date ?? null,
        address: body.address ?? null,
        farm_latitude: body.farm_latitude ?? null,
        farm_longitude: body.farm_longitude ?? null,
        farm_accuracy: body.farm_accuracy ?? null,
        updated_at: now,
        sync_version: { increment: 1 },
        last_synced_at: now,
      },
    });

    let token: string | null = null;

    if (email && password) {
      const password_hash = await bcrypt.hash(password, 12);
      const existing = await prisma.user.findUnique({ where: { email } });

      if (existing && existing.farmer_id && existing.farmer_id !== farmerId) {
        return NextResponse.json(
          { error: 'This email is already linked to another farmer profile.' },
          { status: 409 },
        );
      }

      const user = existing
        ? await prisma.user.update({
            where: { id: existing.id },
            data: { password_hash, farmer_id: farmerId },
          })
        : await prisma.user.create({
            data: { email, password_hash, farmer_id: farmerId },
          });

      token = signToken({ userId: user.id, farmerId });
    }

    return NextResponse.json({
      ok: true,
      farmer_id: farmerId,
      token,
      email,
    });
  } catch (err) {
    console.error('[register]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
