import { NextRequest, NextResponse } from 'next/server';

import { processAccountDeletionRequest } from '@/lib/account-deletion';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { phone?: string; reason?: string };
    const result = await processAccountDeletionRequest({
      phone: body.phone ?? '',
      reason: body.reason ?? '',
    });

    let message =
      'Your deletion request was received. Our team will follow up if further verification is needed.';
    if (result.farmerAnonymized) {
      message =
        'Your Kgolo Farmer ID cloud records linked to this phone number have been anonymised and farm data removed.';
    } else if (!result.farmerMatched) {
      message =
        'Your request was logged. No cloud records matched this phone number — if you only used the app offline, use “Withdraw consent” in the app Settings to delete local data.';
    }

    return NextResponse.json({
      ok: true,
      requestId: result.requestId,
      message,
    });
  } catch (err) {
    if (err instanceof Error) {
      if (err.message === 'INVALID_CONTACT') {
        return NextResponse.json(
          { error: 'Please enter a valid South African mobile number or email address.' },
          { status: 400 },
        );
      }
      if (err.message === 'INVALID_PHONE') {
        return NextResponse.json(
          { error: 'Please enter a valid South African mobile number.' },
          { status: 400 },
        );
      }
      if (err.message === 'REASON_TOO_SHORT') {
        return NextResponse.json(
          { error: 'Please provide a reason with at least 10 characters.' },
          { status: 400 },
        );
      }
    }
    console.error('[account-deletion-request]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
