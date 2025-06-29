import React from 'react';

import { useLanguage } from '../context/LanguageContext'; 
import { portfolioData } from '../data/portfolio-data';

const Experience: React.FC = () => {

    const { lang } = useLanguage();
    const { experiences } = portfolioData[lang];

    return (
        <section id='experiences' className="scroll-trigger py-20 px-6">
            <h2 className="text-3xl font-bold mb-8">
                {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold">
                            {exp.role} - {exp.company}
                        </h3>
                        <p className="text-sm px-8 text-gray-400">{exp.period}</p>
                        <p className='ms-8'>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;