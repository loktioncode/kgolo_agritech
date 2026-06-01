'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { House } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sanitizeLocalSaPhoneDigits } from '@/lib/farmer-validation';

type LoginMode = 'email' | 'phone';

function buildLoginIdentifier(mode: LoginMode, email: string, localPhone: string): string {
  if (mode === 'email') return email.trim();
  const digits = sanitizeLocalSaPhoneDigits(localPhone);
  if (!digits) return '';
  return `0${digits.slice(0, 9)}`;
}

export default function DashboardLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<LoginMode>('phone');
  const [email, setEmail] = useState('');
  const [localPhone, setLocalPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const identifier = buildLoginIdentifier(mode, email, localPhone);
    if (!identifier || !password) {
      setError(mode === 'email' ? 'Enter your email and password.' : 'Enter your phone number and password.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/web/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Login failed');
        return;
      }

      localStorage.setItem('kgolo_dashboard_token', data.token);
      router.push('/dashboard');
    } catch {
      setError('Network error. Please retry.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-foreground">
      <Image
        src="/images/hero-drone.jpg"
        alt="Farm landscape"
        fill
        className="object-cover opacity-35"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-primary/40" />
      <Link
        href="/"
        className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-background/35 bg-background/15 px-3 py-2 text-sm font-medium text-background backdrop-blur hover:bg-background/25 md:left-6 md:top-6"
      >
        <House className="h-4 w-4" />
        Home
      </Link>

      <div className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2">
        <section className="text-background">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Kgolo Central Dashboard
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Verified farm records in one place
          </h1>
        </section>

        <Card className="border-background/20 bg-background/95 shadow-2xl">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div>
              <h2 className="text-2xl font-bold">Farmer Login</h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={mode === 'phone' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('phone')}
                >
                  Phone
                </Button>
                <Button
                  type="button"
                  variant={mode === 'email' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('email')}
                >
                  Email
                </Button>
              </div>

              {mode === 'phone' ? (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex overflow-hidden rounded-md border border-input bg-background shadow-xs focus-within:ring-2 focus-within:ring-ring">
                    <span className="flex items-center border-r border-input bg-muted px-3 text-sm font-semibold text-foreground">
                      +27
                    </span>
                    <Input
                      id="phone"
                      inputMode="numeric"
                      placeholder="7655325054 or 0765532505"
                      value={localPhone}
                      onChange={(e) => setLocalPhone(sanitizeLocalSaPhoneDigits(e.target.value))}
                      autoComplete="tel-national"
                      className="border-0 shadow-none focus-visible:ring-0"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
