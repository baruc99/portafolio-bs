// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextProps {
    lang: Language;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('es');

    const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));


    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de LanguageProvider');
    }
    return context;
};
