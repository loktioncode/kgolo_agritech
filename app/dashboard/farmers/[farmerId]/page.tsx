'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type FarmerPayload = {
  farmer: {
    id: string;
    name: string;
    nationalId: string;
    phone: string;
    lastSyncAt: string;
  };
  counts: {
    parcels: number;
    animals: number;
    activities: number;
  };
};

export default function FarmerDetailPage() {
  const params = useParams<{ farmerId: string }>();
  const router = useRouter();

  const [data, setData] = useState<FarmerPayload | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    plots: true,
    animals: true,
    activities: true,
    reminders: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('kgolo_dashboard_token');
    if (!token) {
      router.replace('/dashboard/login');
      return;
    }

    const load = async () => {
      try {
        const res = await fetch(`/api/web/farmers/${params.farmerId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 401) {
          localStorage.removeItem('kgolo_dashboard_token');
          router.replace('/dashboard/login');
          return;
        }
        const payload = await res.json();
        if (!res.ok) {
          setError(payload.error ?? 'Failed to load farmer');
          return;
        }
        setData(payload);
      } catch {
        setError('Network error while loading farmer');
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [params.farmerId, router]);

  const includeParam = useMemo(
    () =>
      Object.entries(filters)
        .filter(([, enabled]) => enabled)
        .map(([name]) => name)
        .join(','),
    [filters],
  );

  function toggle(key: keyof typeof filters) {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function downloadCsv() {
    const token = localStorage.getItem('kgolo_dashboard_token');
    if (!token) {
      router.replace('/dashboard/login');
      return;
    }

    const url = new URL(
      `/api/web/farmers/${params.farmerId}/export`,
      window.location.origin,
    );
    if (includeParam) {
      url.searchParams.set('include', includeParam);
    }

    fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to export');
        const blob = await res.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `farmer-${params.farmerId}-export.csv`;
        link.click();
        URL.revokeObjectURL(link.href);
      })
      .catch(() => {
        setError('Failed to export CSV');
      });
  }

  if (loading) return <main className="p-8">Loading farmer...</main>;
  if (error) return <main className="p-8 text-red-600">{error}</main>;
  if (!data) return <main className="p-8">No farmer data.</main>;

  return (
    <main className="min-h-screen bg-secondary/20 p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{data.farmer.name}</h1>
            <p className="text-sm text-muted-foreground">
              National ID: {data.farmer.nationalId} | Last Sync:{' '}
              {new Date(data.farmer.lastSyncAt).toLocaleString()}
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/dashboard">Back to dashboard</Link>
          </Button>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Plots</p>
              <p className="mt-2 text-2xl font-bold">{data.counts.parcels}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Animals</p>
              <p className="mt-2 text-2xl font-bold">{data.counts.animals}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Activities</p>
              <p className="mt-2 text-2xl font-bold">{data.counts.activities}</p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">CSV Export Filters</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(filters).map(([name, enabled]) => (
                <label key={name} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() => toggle(name as keyof typeof filters)}
                  />
                  <span className="capitalize">{name}</span>
                </label>
              ))}
            </div>
            <Button onClick={downloadCsv}>Download Farmer CSV</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
