'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-gray-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-3">
            {t.privacyPage.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-12">
            {t.privacyPage.title} <br />
            <span className="text-gray-400">{t.privacyPage.subtitle}</span>
          </h1>
          
          <div className="space-y-12 text-base text-gray-600 font-medium leading-relaxed">
            <div>
              <h2 className="text-xl font-black uppercase text-gray-950 mb-3">{t.privacyPage.sec1Title}</h2>
              <p>{t.privacyPage.sec1Desc}</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase text-gray-950 mb-3">{t.privacyPage.sec2Title}</h2>
              <p>{t.privacyPage.sec2Desc}</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase text-gray-950 mb-3">{t.privacyPage.sec3Title}</h2>
              <p>{t.privacyPage.sec3Desc}</p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-medium">
              Stworzone przez{' '}
              
                Jan Michalak
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}