import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { requireMobileClient } from '@/lib/mobile-client';

/**
 * Returns the number of records on the server for each entity type,
 * scoped to the authenticated farmer. Used by the mobile app to render
 * the local/cloud sync progress bars in Settings.
 */
export async function GET(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  if (!auth.farmerId) {
    return NextResponse.json({ parcels: 0, animals: 0, activities: 0 });
  }

  try {
    const [parcels, animals, activities] = await Promise.all([
      prisma.parcel.count({ where: { farmer_id: auth.farmerId } }),
      // Only count active (non-deleted) animals to match what the app shows
      prisma.animal.count({ where: { farmer_id: auth.farmerId, deleted_at: null } }),
      prisma.activity.count({ where: { farmer_id: auth.farmerId } }),
    ]);

    return NextResponse.json({ parcels, animals, activities });
  } catch (err) {
    console.error('[sync/counts]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
