import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const { services } = portfolioData[lang];

  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-10">
        {lang === 'es' ? 'Mis Servicios' : 'My Services'}
      </h2>
      <div className='grid grid-cols-2'>
        {services.map((service) => (
          <div key={service.id} className="mb-20">
            {/* <div className="text-8xl font-bold mb-6 animate-slide-in">{service.number}</div> */}
            <h3 className="text-3xl font-bold mb-4 animate-slide-in">{service.title}</h3>
            <p className="mb-8 max-w-3xl">{service.description}</p>
            <div className="space-y-2">
              {service.details?.map((detail, index) => (
                <div key={index} className="flex items-center space-x-2 animate-slide-in">
                  <span className="text-sm text-gray-400">
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
