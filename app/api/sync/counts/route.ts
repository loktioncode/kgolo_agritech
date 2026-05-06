import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/db';
import { requireFarmerIdHeader, requireMobileClient } from '@/lib/mobile-client';

/**
 * Returns the number of records on the server for each entity type,
 * scoped to the requested farmer id. Used by the mobile app to render
 * the local/cloud sync progress bars in Settings.
 */
export async function GET(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  const farmerCtx = requireFarmerIdHeader(req);
  if (!farmerCtx.ok) {
    return NextResponse.json({ error: farmerCtx.error }, { status: farmerCtx.status });
  }
  const farmerId = farmerCtx.farmerId;

  try {
    const [parcels, animals, activities] = await Promise.all([
      prisma.parcel.count({ where: { farmer_id: farmerId } }),
      // Only count active (non-deleted) animals to match what the app shows
      prisma.animal.count({ where: { farmer_id: farmerId, deleted_at: null } }),
      prisma.activity.count({ where: { farmer_id: farmerId } }),
    ]);

    return NextResponse.json({ parcels, animals, activities });
  } catch (err) {
    console.error('[sync/counts]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
