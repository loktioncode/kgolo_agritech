import { NextResponse } from 'next/server';

import { prisma } from '@/lib/db';

export async function GET() {
  const now = new Date().toISOString();

  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(
      {
        status: 'ok',
        api: 'up',
        db: 'up',
        timestamp: now,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('[health]', error);
    return NextResponse.json(
      {
        status: 'degraded',
        api: 'up',
        db: 'down',
        timestamp: now,
      },
      { status: 503 },
    );
  }
}
