'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const skills = [
    t.aboutPage.skill1,
    t.aboutPage.skill2,
    t.aboutPage.skill3,
    t.aboutPage.skill4,
    t.aboutPage.skill5,
    t.aboutPage.skill6,
  ];

  return (
    <div className="bg-white text-gray-950">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-3">
            {t.aboutPage.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            {t.aboutPage.title} <br />
            <span className="text-gray-400">{t.aboutPage.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t.aboutPage.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              {t.aboutPage.rulesTitle}
            </h2>
            <div className="space-y-6 text-base text-gray-600 font-medium leading-relaxed">
              <p>{t.aboutPage.rulesP1}</p>
              <p>{t.aboutPage.rulesP2}</p>
            </div>
          </div>

          <div className="border-l-2 border-gray-950 pl-6 lg:pl-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
              {t.aboutPage.skillsTitle}
            </h2>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 text-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8">
          {t.aboutPage.ctaTitle}
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-bold uppercase tracking-wider px-8 py-4 border-2 border-gray-950 transition-colors text-sm"
        >
          {t.aboutPage.ctaBtn}
        </Link>
      </section>

    </div>
  );
}