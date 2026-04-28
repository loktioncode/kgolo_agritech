import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { requireMobileClient } from '@/lib/mobile-client';

/**
 * DELETE /api/sync/user
 * Called when a farmer withdraws consent on their device.
 * Anonymises the farmer's personal data and marks all records for deletion.
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
      const now = new Date().toISOString();
      // Anonymise farmer PII
      await prisma.farmer.update({
        where: { id: auth.farmerId },
        data: {
          name: '[withdrawn]',
          id_number: '[withdrawn]',
          phone: '[withdrawn]',
          address: null,
          photo_path: null,
          consent_given: 0,
          consent_date: null,
          updated_at: now,
        },
      });
    }
    // Unlink farmer from user account
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
