import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';

type Params = {
  params: Promise<{ farmerId: string }>;
};

export async function GET(req: NextRequest, { params }: Params) {
  const auth = requireAuth(req);
  const isSuperAdmin = auth?.userId === 'super-admin-demo';
  if (!auth || (!auth.farmerId && !isSuperAdmin)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const { farmerId } = await params;
  if (!isSuperAdmin && auth.farmerId !== farmerId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const farmer = await prisma.farmer.findUnique({
      where: { id: farmerId },
      include: {
        parcels: true,
        animals: true,
        activities: true,
      },
    });

    if (!farmer) {
      return NextResponse.json({ error: 'Farmer not found' }, { status: 404 });
    }

    return NextResponse.json({
      farmer: {
        id: farmer.id,
        name: farmer.name,
        nationalId: farmer.id_number,
        phone: farmer.phone,
        lastSyncAt: farmer.last_synced_at ?? farmer.updated_at,
      },
      counts: {
        parcels: farmer.parcels.length,
        animals: farmer.animals.filter((a) => !a.deleted_at).length,
        activities: farmer.activities.length,
      },
      parcels: farmer.parcels,
      animals: farmer.animals,
      activities: farmer.activities,
      reminders: [],
    });
  } catch (err) {
    console.error('[web/farmers/:farmerId]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
