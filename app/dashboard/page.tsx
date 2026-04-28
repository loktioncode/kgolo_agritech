'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type DashboardFarmer = {
  id: string;
  name: string;
  nationalId: string;
  phone: string;
  lastSyncAt: string;
  syncedRecords: number;
  parcels: number;
  animals: number;
  activities: number;
};

type DashboardPayload = {
  summary: {
    farmers: number;
    parcels: number;
    animals: number;
    activities: number;
  };
  farmers: DashboardFarmer[];
};

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('kgolo_dashboard_token');
    if (!token) {
      router.replace('/dashboard/login');
      return;
    }

    const load = async () => {
      try {
        const res = await fetch('/api/web/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) {
          localStorage.removeItem('kgolo_dashboard_token');
          router.replace('/dashboard/login');
          return;
        }

        const payload = await res.json();
        if (!res.ok) {
          setError(payload.error ?? 'Failed to load dashboard');
          return;
        }
        setData(payload);
      } catch {
        setError('Network error while loading dashboard');
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [router]);

  const summaryCards = useMemo(() => {
    if (!data) return [];
    return [
      { label: 'Farmers', value: data.summary.farmers },
      { label: 'Plots', value: data.summary.parcels },
      { label: 'Animals', value: data.summary.animals },
      { label: 'Activities', value: data.summary.activities },
    ];
  }, [data]);

  if (loading) {
    return <main className="p-8">Loading dashboard...</main>;
  }

  if (error) {
    return <main className="p-8 text-red-600">{error}</main>;
  }

  if (!data) {
    return <main className="p-8">No data available.</main>;
  }

  return (
    <main className="min-h-screen bg-secondary/20 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sync Validation Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem('kgolo_dashboard_token');
              router.push('/dashboard/login');
            }}
          >
            Log out
          </Button>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {summaryCards.map((card) => (
            <Card key={card.label}>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className="mt-2 text-2xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="overflow-x-auto rounded-lg border bg-background">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="bg-muted/30 text-left">
              <tr>
                <th className="px-4 py-3">Farmer</th>
                <th className="px-4 py-3">National ID</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Synced Records</th>
                <th className="px-4 py-3">Last Sync</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.farmers.map((farmer) => (
                <tr key={farmer.id} className="border-t">
                  <td className="px-4 py-3">{farmer.name}</td>
                  <td className="px-4 py-3">{farmer.nationalId}</td>
                  <td className="px-4 py-3">{farmer.phone}</td>
                  <td className="px-4 py-3">
                    {farmer.syncedRecords} ({farmer.parcels} plots, {farmer.animals} animals,{' '}
                    {farmer.activities} activities)
                  </td>
                  <td className="px-4 py-3">{new Date(farmer.lastSyncAt).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <Button asChild size="sm">
                      <Link href={`/dashboard/farmers/${farmer.id}`}>View Farmer</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
