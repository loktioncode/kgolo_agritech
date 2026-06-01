'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { clearDashboardToken, getDashboardToken } from '@/lib/dashboard-session';

/** Client-only session for the farmer web dashboard (localStorage JWT). */
export function useDashboardSession() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(getDashboardToken()));
  }, [pathname]);

  const signOut = () => {
    clearDashboardToken();
    setIsLoggedIn(false);
  };

  return { isLoggedIn, signOut };
}
