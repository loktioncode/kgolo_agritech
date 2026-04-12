import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  if (!auth.farmerId) {
    // No farmer linked yet — return empty payload (client will push first)
    return NextResponse.json({ farmers: [], parcels: [], animals: [], activities: [] });
  }

  const { searchParams } = new URL(req.url);
  const since = searchParams.get('since') ?? '1970-01-01T00:00:00.000Z';

  try {
    const [farmers, parcels, animals, activities] = await Promise.all([
      prisma.farmer.findMany({
        where: { id: auth.farmerId, updated_at: { gt: since } },
      }),
      prisma.parcel.findMany({
        where: { farmer_id: auth.farmerId, updated_at: { gt: since } },
      }),
      // Include soft-deleted animals so the device knows about removals
      prisma.animal.findMany({
        where: { farmer_id: auth.farmerId, updated_at: { gt: since } },
      }),
      prisma.activity.findMany({
        where: { farmer_id: auth.farmerId, updated_at: { gt: since } },
      }),
    ]);

    return NextResponse.json({ farmers, parcels, animals, activities });
  } catch (err) {
    console.error('[sync/pull]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
