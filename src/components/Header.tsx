import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const { header } = portfolioData[lang];



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
            <a href="#home" className="first-letter:uppercase text-gray-500 hover:text-gray-300">
              {lang === 'es' ? 'inicio' : 'home'}
            </a>
            <a href="#work" className="first-letter:uppercase text-gray-500 hover:text-gray-300">
              {lang === 'es' ? 'proyectos' : 'work'}
            </a>
            <a href="#experience" className="first-letter:uppercase text-gray-500 hover:text-gray-300">
              {lang === 'es' ? 'experiencia' : 'experience'}
            </a>
            <a href="#about" className="first-letter:uppercase text-gray-500 hover:text-gray-300">
              {lang === 'es' ? 'acerca de' : 'about'}
            </a>
            <a href="#contact" className="first-letter:uppercase text-gray-500 hover:text-gray-300">
              {lang === 'es' ? 'contacto' : 'contact'}
            </a>
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