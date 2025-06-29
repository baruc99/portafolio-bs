import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const { about } = portfolioData[lang];

  return (
    <section id='about' className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-10">
        {lang === 'es' ? 'Acerca de mí' : 'About Me'}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-8">{about.description}</p>
          <div className="space-y-4">
            {about.skills.map((skill, index) => (
              <div key={index} className="border-b border-gray-700 py-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;