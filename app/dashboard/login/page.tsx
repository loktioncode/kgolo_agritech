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

export default function DashboardLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/web/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier }),
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
            Verify your synced farm records in one place
          </h1>
          <p className="mt-4 max-w-lg text-base text-background/85">
            Login with your National ID or phone number used in the mobile app. If your profile is not found, sync from
            the app first.
          </p>
        </section>

        <Card className="border-background/20 bg-background/95 shadow-2xl">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div>
              <h2 className="text-2xl font-bold">Farmer Login</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Use your National ID or phone number.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identifier">National ID or phone number</Label>
                <Input
                  id="identifier"
                  placeholder="e.g. 9001015009087 or 0712345678"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoComplete="off"
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
