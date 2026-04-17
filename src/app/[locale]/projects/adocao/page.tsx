import { setRequestLocale } from 'next-intl/server';
import AdocaoClient from './adocao-client';

export default async function AdocaoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AdocaoClient />;
}
