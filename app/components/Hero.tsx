'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 mb-3 leading-tight">
              {t.hero.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              {t.hero.title} <br className="hidden sm:inline" />
              <span className="text-gray-400">{t.hero.subtitle}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl leading-relaxed mb-8">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gray-950 hover:bg-gray-800 text-white font-bold uppercase tracking-wider text-center px-8 py-4 border-2 border-gray-950 transition-colors text-sm"
              >
                {t.hero.btnContact}
              </Link>
              <Link
                href="/realizations"
                className="w-full sm:w-auto bg-transparent hover:bg-gray-100 text-gray-950 font-bold uppercase tracking-wider text-center px-8 py-4 border-2 border-gray-950 transition-colors text-sm"
              >
                {t.hero.btnRealizations}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="border-l-2 border-gray-950 pl-8 space-y-8">
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-1">01</span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-gray-950">{t.hero.step1.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{t.hero.step1.desc}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-1">02</span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-gray-950">{t.hero.step2.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{t.hero.step2.desc}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-1">03</span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-gray-950">{t.hero.step3.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{t.hero.step3.desc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}