import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/db';
import { requireFarmerIdHeader, requireMobileClient } from '@/lib/mobile-client';

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

  const { searchParams } = new URL(req.url);
  const since = searchParams.get('since') ?? '1970-01-01T00:00:00.000Z';

  try {
    const [farmers, parcels, animals, activities] = await Promise.all([
      prisma.farmer.findMany({
        where: { id: farmerId, updated_at: { gt: since } },
      }),
      prisma.parcel.findMany({
        where: { farmer_id: farmerId, updated_at: { gt: since } },
      }),
      // Include soft-deleted animals so the device knows about removals
      prisma.animal.findMany({
        where: { farmer_id: farmerId, updated_at: { gt: since } },
      }),
      prisma.activity.findMany({
        where: { farmer_id: farmerId, updated_at: { gt: since } },
      }),
    ]);

    return NextResponse.json({ farmers, parcels, animals, activities });
  } catch (err) {
    console.error('[sync/pull]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
