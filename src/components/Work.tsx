import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Work: React.FC = () => {
  const { lang } = useLanguage();
  const { projects } = portfolioData[lang];

  return (
    <section id="work" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 animate-slide-in">
          {lang === 'es' ? 'Mis Proyectos' : 'My Projects'}
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-[300px] w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col justify-center items-center h-full text-center p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {lang === 'es' ? 'Ver Proyecto' : 'View Project'}                        
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory px-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-[80%] md:w-[45%] snap-start group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-[300px] w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col justify-center items-center h-full text-center p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {lang === 'es' ? 'Ver Proyecto' : 'View Project'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;