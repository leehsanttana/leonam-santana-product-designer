import { setRequestLocale, getTranslations } from 'next-intl/server';
import AdocaoClient from './adocao-client';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'adocao' });

  return {
    title: `${t('projectName')} - Leonam Santana`,
    description: t('subtitle'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AdocaoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AdocaoClient />;
}
