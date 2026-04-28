import { NextRequest, NextResponse } from 'next/server';

function normalizeSouthAfricanMobile(value: string): string | null {
  const digits = value.replace(/\D/g, '');
  let local = digits;
  if (local.startsWith('27') && local.length >= 11) {
    local = `0${local.slice(2)}`;
  }
  if (!/^0[1-9]\d{8}$/.test(local)) return null;
  return local;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { phone?: string; reason?: string };
    const phone = normalizeSouthAfricanMobile(body.phone ?? '');
    const reason = (body.reason ?? '').trim();

    if (!phone) {
      return NextResponse.json(
        { error: 'Please enter a valid South African mobile number.' },
        { status: 400 },
      );
    }

    if (reason.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a reason with at least 10 characters.' },
        { status: 400 },
      );
    }

    // For MVP: keep request in server logs for support team follow-up.
    console.info('[account-deletion-request]', {
      phone,
      reason,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: 'Your account deletion request was sent successfully.',
    });
  } catch (err) {
    console.error('[account-deletion-request]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
