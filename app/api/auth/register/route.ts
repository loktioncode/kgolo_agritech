import { NextRequest, NextResponse } from 'next/server';

import { requireMobileClient } from '@/lib/mobile-client';

export async function POST(req: NextRequest) {
  const client = requireMobileClient(req);
  if (!client.ok) {
    return NextResponse.json({ error: client.error }, { status: client.status });
  }

  return NextResponse.json(
    {
      error:
        'Registration via web API is disabled. Farmer registration must happen in the mobile app sync flow.',
    },
    { status: 410 },
  );
}
