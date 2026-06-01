import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { normalizeEmail, normalizeSouthAfricanMobile, phonesEquivalent } from '@/lib/farmer-validation';

const DEMO_SUPER_ADMIN_IDENTIFIER =
  process.env.DEMO_SUPER_ADMIN_LOGIN?.trim() || '+27655325054';
const DEMO_SUPER_ADMIN_PASSWORD = process.env.DEMO_SUPER_ADMIN_PASSWORD?.trim() || '';

async function findUserByIdentifier(identifier: string) {
  const email = normalizeEmail(identifier);
  if (email) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        farmer: {
          select: { id: true, id_number: true, phone: true, name: true, updated_at: true },
        },
      },
    });
  }

  const phone = normalizeSouthAfricanMobile(identifier);
  if (!phone) return null;

  const farmer = await prisma.farmer.findFirst({
    where: { phone },
    select: { id: true },
  });
  if (!farmer) return null;

  return prisma.user.findFirst({
    where: { farmer_id: farmer.id },
    include: {
      farmer: {
        select: { id: true, id_number: true, phone: true, name: true, updated_at: true },
      },
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { identifier, password } = (await req.json()) as {
      identifier?: string;
      password?: string;
    };
    const cleaned = identifier?.trim();

    if (!cleaned || !password) {
      return NextResponse.json(
        { error: 'Email or phone number and password are required' },
        { status: 400 },
      );
    }

    if (
      phonesEquivalent(cleaned, DEMO_SUPER_ADMIN_IDENTIFIER) &&
      DEMO_SUPER_ADMIN_PASSWORD &&
      password === DEMO_SUPER_ADMIN_PASSWORD
    ) {
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

    const user = await findUserByIdentifier(cleaned);
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return NextResponse.json({ error: 'Invalid email, phone, or password' }, { status: 401 });
    }

    if (!user.farmer) {
      return NextResponse.json(
        {
          error:
            'Account found but no farmer profile is linked yet. Open the mobile app, register, and sync first.',
        },
        { status: 404 },
      );
    }

    const token = signToken({ userId: user.id, farmerId: user.farmer.id });
    return NextResponse.json({
      token,
      farmer: {
        id: user.farmer.id,
        name: user.farmer.name,
        nationalId: user.farmer.id_number,
        phone: user.farmer.phone,
        lastSyncAt: user.farmer.updated_at,
      },
    });
  } catch (err) {
    console.error('[web/login]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
