const isDev = process.env.NODE_ENV === 'development';

const devPorts = { travel: 5173, tech: 3000, interior: 3002, barber: 3001, elect: 3003 };
const prodUrls = {
  travel: 'https://tomy-global-services.pages.dev',
  tech: 'https://tomy-tech.vercel.app',
  interior: 'https://tomy-interior.vercel.app',
  barber: 'https://tomy-barber.vercel.app',
  elect: 'https://tomy-elect-.vercel.app',
};

const serviceData = {
  travel: {
    icon: '✈',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  },
  tech: {
    icon: '⚙',
    image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&q=80',
  },
  interior: {
    icon: '🏛',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
  },
  barber: {
    icon: '✂',
    image: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&q=80',
  },
  elect: {
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
  },
};

export default function ServiceCard({ serviceKey, name, description, visitBtnText }) {
  const data = serviceData[serviceKey];

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] xl:min-h-[440px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/50 to-transparent" />

      <div className="relative z-10 h-full min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] xl:min-h-[440px] flex flex-col justify-end p-6 md:p-8 lg:p-10">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/20 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-all duration-300">
          <span className="text-2xl">{data.icon}</span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{name}</h3>
        <p className="text-sm lg:text-base text-gray-300 mb-6 lg:mb-8 leading-relaxed">{description}</p>
        <a
          href={isDev && devPorts[serviceKey] ? `http://localhost:${devPorts[serviceKey]}` : prodUrls[serviceKey]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-start px-6 lg:px-8 py-3 lg:py-4 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm uppercase tracking-wider shadow-lg shadow-brand-gold/20"
        >
          {visitBtnText}
        </a>
      </div>
    </div>
  );
}
