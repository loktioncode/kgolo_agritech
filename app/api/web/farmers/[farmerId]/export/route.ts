import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/db';

type Params = {
  params: Promise<{ farmerId: string }>;
};

function esc(value: unknown): string {
  const s = String(value ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

function sectionHeader(name: string) {
  return `section,${esc(name)}\n`;
}

function toCsvRows<T extends Record<string, unknown>>(rows: T[]): string {
  if (!rows.length) return 'empty,true\n';
  const keys = Object.keys(rows[0]);
  const header = `${keys.join(',')}\n`;
  const body = rows
    .map((row) => keys.map((key) => esc(row[key])).join(','))
    .join('\n');
  return `${header}${body}\n`;
}

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
  const include = new Set(
    (req.nextUrl.searchParams.get('include') ?? '')
      .split(',')
      .map((v) => v.trim().toLowerCase())
      .filter(Boolean),
  );

  try {
    const farmer = await prisma.farmer.findUnique({
      where: { id: farmerId },
      include: { parcels: true, animals: true, activities: true },
    });

    if (!farmer) {
      return NextResponse.json({ error: 'Farmer not found' }, { status: 404 });
    }

    const includeAll = include.size === 0;
    let csv = '';

    csv += sectionHeader('farmer');
    csv += toCsvRows([
      {
        id: farmer.id,
        name: farmer.name,
        national_id: farmer.id_number,
        phone: farmer.phone,
        last_sync_at: farmer.last_synced_at ?? farmer.updated_at,
      },
    ]);

    if (includeAll || include.has('plots') || include.has('parcels')) {
      csv += '\n';
      csv += sectionHeader('plots');
      csv += toCsvRows(farmer.parcels);
    }

    if (includeAll || include.has('animals')) {
      csv += '\n';
      csv += sectionHeader('animals');
      csv += toCsvRows(farmer.animals);
    }

    if (includeAll || include.has('activities')) {
      csv += '\n';
      csv += sectionHeader('activities');
      csv += toCsvRows(farmer.activities);
    }

    if (includeAll || include.has('reminders')) {
      csv += '\n';
      csv += sectionHeader('reminders');
      csv += 'empty,true\n';
    }

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="farmer-${farmerId}-export.csv"`,
      },
    });
  } catch (err) {
    console.error('[web/farmers/:farmerId/export]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
