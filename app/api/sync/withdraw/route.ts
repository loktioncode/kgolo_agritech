import { NextRequest, NextResponse } from 'next/server';

import { anonymizeFarmerAndData } from '@/lib/account-deletion';
import { normalizeEmail, normalizeSouthAfricanMobile } from '@/lib/farmer-validation';
import { prisma } from '@/lib/db';
import { requireFarmerIdHeader, requireMobileClient } from '@/lib/mobile-client';

/**
 * POST /api/sync/withdraw
 * Withdraw consent / delete cloud data without JWT — verified by farmer id + email or phone.
 */
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
    const body = (await req.json()) as { email?: string; phone?: string };
    const email = normalizeEmail(body.email ?? '');
    const phone = normalizeSouthAfricanMobile(body.phone ?? '');

    const farmer = await prisma.farmer.findUnique({ where: { id: farmerCtx.farmerId } });
    if (!farmer) {
      return NextResponse.json({ ok: true, detail: 'No cloud profile found.' });
    }

    const storedEmail = farmer.email?.trim().toLowerCase() ?? '';
    const storedPhone = farmer.phone?.trim() ?? '';
    const emailMatch = email && storedEmail && email === storedEmail;
    const phoneMatch = phone && storedPhone && phone === storedPhone;

    if (!emailMatch && !phoneMatch) {
      return NextResponse.json(
        { error: 'Email or phone does not match this farmer profile on the server.' },
        { status: 403 },
      );
    }

    await anonymizeFarmerAndData(farmer.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[sync/withdraw]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
