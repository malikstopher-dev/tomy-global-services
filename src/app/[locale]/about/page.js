'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <>
      <section className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-72 h-72 border border-brand-gold/30 rounded-full" />
          <div className="absolute bottom-20 left-20 w-96 h-96 border border-brand-gold/20 rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            TOMY Global Services
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t('title')}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-16">{t('text')}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('mission')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
            </div>
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('vision')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('visionText')}</p>
            </div>
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('values')}</h3>
              <ul className="text-gray-600 space-y-2">
                {t.raw('valuesList').map((value, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
