'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const serviceLinks = [
  { name: 'TOMY Travel', url: 'https://tomy-global-services.pages.dev' },
  { name: 'TOMY Tech', url: 'https://tech.tomyglobalservices.com' },
  { name: 'TOMY Interior', url: 'https://interior.tomyglobalservices.com' },
  { name: 'TOMY Barber', url: 'https://barber.tomyglobalservices.com' },
  { name: 'TOMY Elect', url: 'https://elect.tomyglobalservices.com' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const logoSrc = `/images/logo-${locale}.jpg`;

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Image
              src={logoSrc}
              alt="TOMY Global Services"
              width={200}
              height={50}
              className="h-10 md:h-12 w-auto mb-3"
            />
            <p className="text-gray-400 italic">{t('tagline')}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-gold">{t('services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((svc, i) => (
                <li key={i}>
                  <a href={svc.url} target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-gold">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">{t('quickLinks')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-8 text-center text-gray-500 text-sm">
          {t('copyright', { year: new Date().getFullYear() })}
          <div className="mt-1">
            Website by{' '}
            <a href="https://stopher-malik.co.za" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              Stopher Malik
            </a>
            {' & '}
            <a href="https://smk.stopher-malik.co.za" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              SMK Web Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
