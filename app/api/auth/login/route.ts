import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { signToken } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { requireMobileClient } from '@/lib/mobile-client';

export async function POST(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  try {
    const { email, password } = (await req.json()) as {
      email?: string;
      password?: string;
    };

    if (!email?.trim() || !password) {
      return NextResponse.json({ error: 'email and password are required' }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: normalised } });

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken({ userId: user.id, farmerId: user.farmer_id });
    return NextResponse.json({ token, email: normalised });
  } catch (err) {
    console.error('[login]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
