'use client';

import { useTranslations } from 'next-intl';
import ServiceCard from './ServiceCard';

const services = ['travel', 'tech', 'interior', 'barber', 'elect'];

export default function ServiceCardGrid() {
  const t = useTranslations('services');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {services.map((key) => (
        <ServiceCard
          key={key}
          serviceKey={key}
          name={t(`${key}.name`)}
          description={t(`${key}.desc`)}
          visitBtnText={t('visitBtn')}
        />
      ))}
    </div>
  );
}
