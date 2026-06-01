export function normalizeEmail(value: string): string | null {
  const t = value.trim().toLowerCase();
  if (!t) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return null;
  return t;
}

export function normalizeSouthAfricanMobile(value: string): string | null {
  let digits = value.replace(/\D/g, '');
  if (!digits) return null;

  if (digits.startsWith('27') && digits.length >= 11) {
    digits = `0${digits.slice(2, 11)}`;
  } else if (digits.length === 9 && /^[1-9]/.test(digits)) {
    digits = `0${digits}`;
  } else if (digits.length === 10 && digits.startsWith('0')) {
    digits = digits.slice(0, 10);
  }

  if (!/^0[1-9]\d{8}$/.test(digits)) return null;
  return digits;
}

/** Local part only (9 digits, no leading 0) for +27 input boxes. */
export function sanitizeLocalSaPhoneDigits(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('27')) digits = digits.slice(2);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return digits.slice(0, 9);
}

export function phonesEquivalent(a: string, b: string): boolean {
  const left = normalizeSouthAfricanMobile(a);
  const right = normalizeSouthAfricanMobile(b);
  return left != null && left === right;
}

function plausibleSaIdYymmdd(yymmdd: string): boolean {
  if (!/^\d{6}$/.test(yymmdd)) return false;
  const yy = Number.parseInt(yymmdd.slice(0, 2), 10);
  const mm = Number.parseInt(yymmdd.slice(2, 4), 10);
  const dd = Number.parseInt(yymmdd.slice(4, 6), 10);
  if (mm < 1 || mm > 12 || dd < 1 || dd > 31) return false;
  const nowYear = new Date().getFullYear();
  for (const century of [1900, 2000]) {
    const year = century + yy;
    if (year < 1920 || year > nowYear + 1) continue;
    const d = new Date(year, mm - 1, dd);
    if (d.getFullYear() === year && d.getMonth() === mm - 1 && d.getDate() === dd) return true;
  }
  return false;
}

function southAfricanIdLuhnValid(id13: string): boolean {
  if (!/^\d{13}$/.test(id13)) return false;
  let sum = 0;
  let alt = false;
  for (let i = id13.length - 1; i >= 0; i -= 1) {
    let n = Number.parseInt(id13[i]!, 10);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

export function validSaIdNumber(value: string): boolean {
  return /^\d{13}$/.test(value) && plausibleSaIdYymmdd(value.slice(0, 6)) && southAfricanIdLuhnValid(value);
}

/** Farmer must have valid SA ID plus at least one of email or phone. */
export function validFarmerContact(email: string | null, phone: string | null): boolean {
  return Boolean(email || phone);
}
