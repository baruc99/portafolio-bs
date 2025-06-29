// import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

import workteamImage from '../assets/Contact/workteam.jpg';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const { contact, social } = portfolioData[lang];
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log('Form submitted:', formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src={workteamImage} alt="Equipo de trabajo" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 animate-slide-in">
              {lang === 'es' ? 'Trabajemos juntos' : `Let's Work Together`}
            </h2>
            <p className="text-lg text-gray-300 mb-8 animate-slide-in">
              {lang === 'es' ? '¿Tiene un proyecto en mente? Hablemos de cómo podemos ayudarle a hacer realidad sus ideas.' :
                `Have a project in mind? Let's chat about how we can help bring your ideas to life.`}
            </p>
            <div className="space-y-4 mb-8 animate-slide-in">
              <p className="flex items-center gap-2">
                <span className="text-gray-400">
                  {lang === 'es' ? 'Correo electrónico:' : 'Email:'}
                </span>
                <a href={`mailto:${contact.email}`} className="hover:text-gray-300">
                  {contact.email}
                </a>
              </p>
              {/* <p className="flex items-center gap-2">
                <span className="text-gray-400">Phone:</span>
                <a href={`tel:${contact.phone}`} className="hover:text-gray-300">
                  {contact.phone}
                </a>
              </p> */}
            </div>
            <div className="flex gap-4 animate-slide-in">
              {Object.entries(social).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;