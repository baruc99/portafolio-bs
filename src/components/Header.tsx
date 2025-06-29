import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const { header } = portfolioData[lang];

  const navLinks = [
    { id: "home",        label: { es: "inicio",       en: "home" } },
    { id: "work",        label: { es: "proyectos",    en: "work" } },
    { id: "about",       label: { es: "acerca de",    en: "about" } },
    { id: "experiences", label: { es: "experiencia",  en: "experience" } },
    { id: "contact",     label: { es: "contacto",     en: "contact" } },
  ];




  return (
    <div className='fixed top-0 left-0 w-full bg-black z-50'>
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          {/* <h1 className="text-xl font-bold">YourName.dev</h1> */}
          <p className="text-sm text-gray-500">
            {header.title}<br />
            {header.subtitle}
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="first-letter:uppercase text-gray-500 hover:text-gray-300"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleLang}
            className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;