export const DASHBOARD_TOKEN_KEY = 'kgolo_dashboard_token';

export function getDashboardToken(): string | null {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem(DASHBOARD_TOKEN_KEY)?.trim();
  return token || null;
}

export function clearDashboardToken(): void {
  localStorage.removeItem(DASHBOARD_TOKEN_KEY);
}
