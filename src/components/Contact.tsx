import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const { contact, social } = portfolioData[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              {lang === 'es' ? 'Trabajemos juntos' : `Let's Work Together`}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {lang === 'es' ? '¿Tiene un proyecto en mente? Hablemos de cómo podemos ayudarle a hacer realidad sus ideas.' :
                `Have a project in mind? Let's chat about how we can help bring your ideas to life.`}
            </p>
            <div className="space-y-4 mb-8">
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
            <div className="flex gap-4">
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
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {lang === 'es' ? 'Nombre' : 'Name'}                  
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {lang === 'es' ? 'Correo Electrónico' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {lang === 'es' ? 'Mensaje' : 'Message'}

                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                { lang === 'es' ? 'Enviar Mensaje' : 'Send Message' }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;