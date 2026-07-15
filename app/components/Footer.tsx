'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const links = [
    { name: t.nav.home || 'Strona główna', href: '/' },
    { name: t.nav.about || 'O mnie', href: '/about-me' },
    { name: t.nav.realizations || 'Realizacje', href: '/realizations' },
    { name: t.nav.contact || 'Kontakt', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col space-y-3">
<div className="w-32 h-32 relative">
  <img 
    src="/logo_beztla.png" 
    alt="Patryk Michalak" 
    className="w-full h-full object-contain brightness-0 invert" 
  />
</div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t.footer.contactTitle}
            </span>
            
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+48 797 109 552</span>
              </li>
              
              <li className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>kontakt@twojadomena.pl</span>
              </li>

              <li className="flex items-start space-x-2 pt-1 border-t border-gray-800">
                <svg className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="text-xs text-gray-400">
                  <p className="font-semibold text-gray-300">Patryk Michalak</p>
                  <p>ul. Plac Słoneczny 11/11, 66-400 Gorzów Wielkopolski</p>
                  <p className="mt-1">NIP: 5992928184 | REGON: 388186432</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} Patryk Michalak. {t.footer.rights}
          </div>
          <div>
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}