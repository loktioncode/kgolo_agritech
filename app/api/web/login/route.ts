import { NextRequest, NextResponse } from 'next/server';

import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/db';

const DEMO_SUPER_ADMIN_IDENTIFIER =
  process.env.DEMO_SUPER_ADMIN_LOGIN?.trim() || '+27655325054';

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

function isValidSaIdNumber(value: string): boolean {
  return /^\d{13}$/.test(value) && plausibleSaIdYymmdd(value.slice(0, 6)) && southAfricanIdLuhnValid(value);
}

export async function POST(req: NextRequest) {
  try {
    const { identifier } = (await req.json()) as { identifier?: string };
    const cleaned = identifier?.trim();

    if (!cleaned) {
      return NextResponse.json(
        { error: 'National ID or phone number is required' },
        { status: 400 },
      );
    }
    if (/^\d{13}$/.test(cleaned) && !isValidSaIdNumber(cleaned)) {
      return NextResponse.json({ error: 'Invalid SA ID number.' }, { status: 400 });
    }

    if (cleaned === DEMO_SUPER_ADMIN_IDENTIFIER) {
      const token = signToken({ userId: 'super-admin-demo', farmerId: null });
      return NextResponse.json({
        token,
        farmer: {
          id: 'super-admin-demo',
          name: 'Demo Super Admin',
          nationalId: null,
          phone: DEMO_SUPER_ADMIN_IDENTIFIER,
          lastSyncAt: new Date().toISOString(),
        },
      });
    }

    const farmer = await prisma.farmer.findFirst({
      where: {
        OR: [{ id_number: cleaned }, { phone: cleaned }],
      },
      select: { id: true, id_number: true, phone: true, name: true, updated_at: true },
    });

    if (!farmer) {
      return NextResponse.json(
        {
          error:
            'No synced farmer profile found for this National ID or phone number. Please sync in the mobile app first.',
        },
        { status: 404 },
      );
    }

    const token = signToken({ userId: `farmer:${farmer.id}`, farmerId: farmer.id });
    return NextResponse.json({
      token,
      farmer: {
        id: farmer.id,
        name: farmer.name,
        nationalId: farmer.id_number,
        phone: farmer.phone,
        lastSyncAt: farmer.updated_at,
      },
    });
  } catch (err) {
    console.error('[web/login]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
