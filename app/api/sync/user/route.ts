import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { anonymizeFarmerAndData } from '@/lib/account-deletion';
import { prisma } from '@/lib/db';
import { requireMobileClient } from '@/lib/mobile-client';

/**
 * DELETE /api/sync/user
 * Called when a farmer withdraws consent on their device (signed in).
 */
export async function DELETE(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    if (auth.farmerId) {
      await anonymizeFarmerAndData(auth.farmerId);
    }
    await prisma.user.update({
      where: { id: auth.userId },
      data: { farmer_id: null },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[sync/user DELETE]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
