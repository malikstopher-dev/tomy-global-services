'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 ml-auto max-w-2xl">
        <div className="inline-block px-4 py-1.5 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
          TOMY Global Services
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {t('headline')}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-8 leading-relaxed max-w-md">
          {t('subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/services"
            className="px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-center text-sm shadow-lg shadow-brand-gold/25"
          >
            {t('cta1')}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-300 text-center text-sm backdrop-blur-sm"
          >
            {t('cta2')}
          </Link>
        </div>
      </div>
    </section>
  );
}
