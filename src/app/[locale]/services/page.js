'use client';

import { useTranslations, useLocale } from 'next-intl';
import ServiceCardGrid from '@/components/ServiceCardGrid';

export default function ServicesPage() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-14">
        <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
          {locale === 'fr' ? 'Expertises' : locale === 'pt' ? 'Expertises' : 'Expertise'}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{t('description')}</p>
      </div>
      <ServiceCardGrid />
    </div>
  );
}
