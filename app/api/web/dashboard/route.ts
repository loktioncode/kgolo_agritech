import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  const isSuperAdmin = auth?.userId === 'super-admin-demo';
  if (!auth || (!auth.farmerId && !isSuperAdmin)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  try {
    const farmerWhere = isSuperAdmin ? {} : { id: auth.farmerId! };
    const [farmers, parcelsCount, animalsCount, activitiesCount] = await Promise.all([
      prisma.farmer.findMany({
        where: farmerWhere,
        orderBy: { updated_at: 'desc' },
        select: {
          id: true,
          name: true,
          id_number: true,
          phone: true,
          updated_at: true,
          last_synced_at: true,
          _count: {
            select: {
              parcels: true,
              animals: true,
              activities: true,
            },
          },
        },
      }),
      prisma.parcel.count({
        where: isSuperAdmin ? {} : { farmer_id: auth.farmerId! },
      }),
      prisma.animal.count({
        where: { ...(isSuperAdmin ? {} : { farmer_id: auth.farmerId! }), deleted_at: null },
      }),
      prisma.activity.count({
        where: isSuperAdmin ? {} : { farmer_id: auth.farmerId! },
      }),
    ]);

    return NextResponse.json({
      summary: {
        farmers: farmers.length,
        parcels: parcelsCount,
        animals: animalsCount,
        activities: activitiesCount,
      },
      farmers: farmers.map((f) => ({
        id: f.id,
        name: f.name,
        nationalId: f.id_number,
        phone: f.phone,
        lastSyncAt: f.last_synced_at ?? f.updated_at,
        syncedRecords: f._count.parcels + f._count.animals + f._count.activities,
        parcels: f._count.parcels,
        animals: f._count.animals,
        activities: f._count.activities,
      })),
    });
  } catch (err) {
    console.error('[web/dashboard]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
