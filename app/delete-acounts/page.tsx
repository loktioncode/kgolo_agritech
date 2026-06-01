import { redirect } from 'next/navigation';

/** Legacy typo URL — redirect to canonical path for Play Console data-deletion link. */
export default function LegacyDeleteAccountsRedirect() {
  redirect('/delete-accounts');
}
