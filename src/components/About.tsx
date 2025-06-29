import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const { about } = portfolioData[lang];

  return (
    <section id='about' className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-10 animate-slide-in">
        {lang === 'es' ? 'Acerca de mí' : 'About Me'}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-8 animate-slide-in">{about.description}</p>
        </div>
        <div>{about.skills.map((skill, index) => (
              <div key={index} className="border-b border-gray-700 py-2 animate-slide-in">
                {skill}
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default About;