import { setRequestLocale } from 'next-intl/server';
import CoreSystemClient from './core-system-client';

export default async function CoreSystemPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CoreSystemClient />;
}
