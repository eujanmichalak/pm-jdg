'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.nav.home || 'Strona główna', href: '/' },
    { name: t.nav.about || 'O mnie', href: '/about-me' },
    { name: t.nav.realizations || 'Realizacje', href: '/realizations' },
    { name: t.nav.contact || 'Kontakt', href: '/contact' },
  ];

  const languages = [
    { code: 'pl', label: 'Polski', flag: <svg className="w-5 h-3.5 rounded-sm object-cover shadow-sm flex-shrink-0" viewBox="0 0 16 10"><rect width="16" height="5" fill="#fff" /><rect y="5" width="16" height="5" fill="#dc143c" /></svg> },
    { code: 'en', label: 'English', flag: <svg className="w-5 h-3.5 rounded-sm object-cover shadow-sm flex-shrink-0" viewBox="0 0 50 30"><clipPath id="t"><path d="M0,0 v30 h50 v-30 z" /></clipPath><g clipPath="url(#t)"><path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6" /><path d="M0,0 L50,30 M50,0 L0,30" stroke="#012169" strokeWidth="4" /><path d="M0,15 H50 M25,0 V30" stroke="#fff" strokeWidth="10" /><path d="M0,15 H50 M25,0 V30" stroke="#C8102E" strokeWidth="6" /><path d="M0,0 L25,15 M50,30 L25,15 M50,0 L25,15 M0,30 L25,15" stroke="#C8102E" strokeWidth="2" /></g></svg> },
    { code: 'de', label: 'Deutsch', flag: <svg className="w-5 h-3.5 rounded-sm object-cover shadow-sm flex-shrink-0" viewBox="0 0 5 3"><rect width="5" height="1" fill="#000" /><rect y="1" width="5" height="1" fill="#dd0000" /><rect y="2" width="5" height="1" fill="#ffce00" /></svg> }
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <nav className="bg-white border-b-2 border-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <img 
                src="/logo_beztla.png" 
                alt="Patryk Michalak" 
                className="h-10 w-10 object-contain transition-transform group-hover:scale-105" 
              />
              <span className="text-2xl font-black text-gray-950 tracking-tight ml-2 whitespace-nowrap">
                Patryk Michalak
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-blue-600 font-bold text-base uppercase tracking-wider transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="relative border-l border-gray-300 pl-6" ref={dropdownRef}>
              <button
                onClick={toggleLang}
                className="flex items-center space-x-2.5 text-sm font-black text-gray-950 hover:text-blue-600 transition-colors"
              >
                <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden shadow-sm">{currentLang.flag}</div>
                <span className="uppercase tracking-wide">{currentLang.code}</span>
                <svg className={`h-4 w-4 text-gray-950 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border-2 border-gray-900 rounded-lg shadow-xl overflow-hidden z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as 'pl' | 'en' | 'de');
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-bold transition-colors text-left ${
                        lang === l.code ? 'bg-gray-100 text-blue-600' : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden shadow-sm">{l.flag}</div>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-950 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-900 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-lg font-black text-gray-900 uppercase tracking-wide hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-gray-200">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code as 'pl' | 'en' | 'de');
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 text-sm font-black text-left ${
                  lang === l.code ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                <div className={`flex items-center border rounded-sm overflow-hidden p-0.5 ${lang === l.code ? 'border-blue-600' : 'border-gray-300'}`}>
                  {l.flag}
                </div>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}