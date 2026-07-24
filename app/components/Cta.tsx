'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-t border-gray-200 text-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-3">
          {t.cta.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto mb-6 leading-none">
          {t.cta.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-medium max-w-xl mx-auto mb-10">
          {t.cta.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gray-950 hover:bg-gray-800 text-white font-bold uppercase tracking-wider text-center px-8 py-4 border-2 border-gray-950 transition-colors text-sm"
          >
            {t.cta.btnWrite}
          </Link>
          <a
            href="tel:+48797109552"
            className="w-full sm:w-auto bg-transparent hover:bg-gray-100 text-gray-950 font-bold uppercase tracking-wider text-center px-8 py-4 border-2 border-gray-950 transition-colors text-sm flex items-center justify-center space-x-2"
          >
            <svg className="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{t.cta.btnCall}</span>
          </a>
        </div>
      </div>
    </section>
  );
}