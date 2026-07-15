'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'pl' | 'en' | 'de';

const LanguageContext = createContext({
  lang: 'pl' as Language,
  setLang: (lang: Language) => {},
  t: translations['pl']
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pl');

  useEffect(() => {
    const savedLang = localStorage.getItem('site-lang') as Language;
    if (savedLang && (savedLang === 'pl' || savedLang === 'en' || savedLang === 'de')) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    localStorage.setItem('site-lang', newLang);
    setLangState(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);