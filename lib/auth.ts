import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export type AuthPayload = {
  userId: string;
  farmerId: string | null;
};

function jwtSecret(): string {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error('JWT_SECRET env var is not set');
  return s;
}

export function signToken(payload: AuthPayload): string {
  return jwt.sign(
    { sub: payload.userId, farmerId: payload.farmerId },
    jwtSecret(),
    { expiresIn: (process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn']) ?? '30d' },
  );
}

export function verifyToken(token: string): AuthPayload | null {
  try {
    const p = jwt.verify(token, jwtSecret()) as {
      sub: string;
      farmerId?: string | null;
    };
    return { userId: p.sub, farmerId: p.farmerId ?? null };
  } catch {
    return null;
  }
}

/** Extract and verify the Bearer token from an incoming Next.js request. */
export function requireAuth(req: NextRequest): AuthPayload | null {
  const auth = req.headers.get('authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return null;
  return verifyToken(auth.slice(7));
}
