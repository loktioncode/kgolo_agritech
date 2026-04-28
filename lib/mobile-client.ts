import { NextRequest } from 'next/server';

export type MobileClientCheckResult =
  | { ok: true; appId: string }
  | { ok: false; status: number; error: string };

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} env var is not set`);
  return value;
}

function parseAllowedIds(): Set<string> {
  const raw = (process.env.KG_ALLOWED_APP_IDS ?? '').trim();
  if (!raw) return new Set<string>();
  return new Set(
    raw
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean),
  );
}

export function requireMobileClient(req: NextRequest): MobileClientCheckResult {
  const appId = (req.headers.get('x-kg-app-id') ?? '').trim();
  const appSecret = (req.headers.get('x-kg-app-secret') ?? '').trim();

  if (!appId || !appSecret) {
    return { ok: false, status: 401, error: 'Missing app credentials' };
  }

  const appIdPattern = /^KG_[A-Za-z0-9]{8,64}$/;
  if (!appIdPattern.test(appId)) {
    return { ok: false, status: 401, error: 'Invalid app id format' };
  }

  const allowedIds = parseAllowedIds();
  if (allowedIds.size > 0 && !allowedIds.has(appId)) {
    return { ok: false, status: 403, error: 'Unrecognised app id' };
  }

  const expectedSecret = requiredEnv('KG_APP_SECRET');
  if (appSecret !== expectedSecret) {
    return { ok: false, status: 403, error: 'Invalid app credentials' };
  }

  return { ok: true, appId };
}
