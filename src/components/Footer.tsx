import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const { contact, social } = portfolioData[lang];

  return (
    <footer className="py-20 px-6">
      <div className="flex justify-between items-start">
        <div>
          {/* <h2 className="text-xl font-bold mb-4">YourName.dev</h2> */}
          <p>{contact.email}</p>
          {/* <p>{contact.phone}</p> */}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'en' ? 'Looking for a front-end developer?' : '¿Buscas un desarrollador full stack?'}
          </h3>
          <a href={`mailto:${contact.email}`}>
            <button className="px-6 py-2 bg-white text-black rounded-full">
              {lang === 'en' ? 'Let\'s talk' : 'Hablemos'}
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap space-x-4 mt-12">
        {Object.entries(social).map(([key, value]) =>
          value ? (
            <a
              key={key}
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 first-letter:uppercase"
            >
              {key}
            </a>
          ) : null
        )}
      </div>
    </footer>
  );
};

export default Footer;