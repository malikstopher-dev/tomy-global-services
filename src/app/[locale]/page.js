import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import ServiceCardGrid from '@/components/ServiceCardGrid';

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection locale={locale} />
      <OurServicesSection locale={locale} />
      <GlobalExcellenceSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </>
  );
}

function StatsSection() {
  const stats = [
    { number: '5', label: 'Divisions' },
    { number: '50+', label: 'Experts' },
    { number: '1000+', label: 'Clients Servis' },
    { number: '3', label: 'Langues' },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function WhoWeAreSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'whoWeAre' });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
              {locale === 'fr' ? 'Qui sommes-nous' : locale === 'pt' ? 'Quem somos' : 'About'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">{t('title')}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t('text')}</p>
          </div>
          <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-white text-sm font-medium">TOMY Global Services — Excellence mondiale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function OurServicesSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            {locale === 'fr' ? 'Expertises' : locale === 'pt' ? 'Expertises' : 'Expertise'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h2>
        </div>
        <ServiceCardGrid />
      </div>
    </section>
  );
}

async function GlobalExcellenceSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'globalExcellence' });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 right-10 w-80 h-80 border border-brand-gold/40 rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 border border-brand-gold/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-gold/10 rounded-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
          Global
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('title')}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{t('text')}</p>
      </div>
    </section>
  );
}

async function FinalCtaSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'finalCta' });

  return (
    <section className="relative py-20 md:py-28 bg-brand-gold overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-navy rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-navy rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h2>
        <p className="text-lg text-brand-navy/80 mb-10">{t('text')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-navy/90 transition-all duration-300 text-lg shadow-lg shadow-brand-navy/20"
          >
            {t('btn')}
          </a>
        </div>
      </div>
    </section>
  );
}
