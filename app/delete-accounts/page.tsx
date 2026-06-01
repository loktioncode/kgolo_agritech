'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Trash2 } from 'lucide-react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DeleteAccountsPage() {
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/account-deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, reason }),
      });
      const data = (await res.json()) as { error?: string; message?: string };
      if (!res.ok) {
        setError(data.error ?? 'Unable to send request');
        return;
      }
      setSuccess(data.message ?? 'Request sent successfully.');
      setPhone('');
      setReason('');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/team-field.jpg"
              alt="Kgolo support"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/65 to-background" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-3 py-1.5 text-sm text-background/90 hover:bg-background/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <div className="mb-8">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-sm font-medium text-primary-foreground">
                <Trash2 className="h-4 w-4" />
                Kgolo Farmer ID — data deletion
              </p>
              <h1 className="text-3xl font-bold text-background sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                Delete your Kgolo Farmer ID account &amp; data
              </h1>
              <p className="mt-3 max-w-2xl text-background/85">
                Use this page to request deletion of cloud-backed data for the{' '}
                <strong>Kgolo Digital Farmer ID</strong> mobile app (
                <strong>za.co.kgolo.farmerid</strong>). Enter the mobile number on your farmer profile. If you only
                stored data on your phone, open the app → Settings → <strong>Withdraw consent</strong> to wipe local
                data instantly.
              </p>
            </div>

            <Card className="border-border bg-background/95 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number on your farmer profile</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 082 000 0000 or +27 82 000 0000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for deletion</Label>
                    <textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Tell us why you want your account and data deleted..."
                      required
                      className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  {error ? <p className="text-sm text-red-600">{error}</p> : null}
                  {success ? (
                    <p className="inline-flex items-center gap-2 text-sm text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                      {success}
                    </p>
                  ) : null}

                  <Button type="submit" disabled={busy} className="w-full sm:w-auto">
                    {busy ? 'Processing…' : 'Submit deletion request'}
                  </Button>
                </form>

                <p className="mt-6 text-sm text-muted-foreground">
                  Questions? Email{' '}
                  <a href="mailto:info@kgolo.co.za" className="underline hover:text-foreground">
                    info@kgolo.co.za
                  </a>
                  . See also our{' '}
                  <Link href="/legal" className="underline hover:text-foreground">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
