import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageContextType } from '../types/i18n';
import { getTranslation } from '../locales';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mystic-library-language');
    return (saved === 'en' || saved === 'ja') ? saved : 'ja';
  });

  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('mystic-library-language', lang);
  };

  const t = (key: string): string => {
    const translations = getTranslation(language);
    const keys = key.split('.');
    let result: any = translations;
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleChangeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
