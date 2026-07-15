'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const advantages = [
    {
      num: '01',
      title: t.features.adv1.title,
      desc: t.features.adv1.desc,
    },
    {
      num: '02',
      title: t.features.adv2.title,
      desc: t.features.adv2.desc,
    },
    {
      num: '03',
      title: t.features.adv3.title,
      desc: t.features.adv3.desc,
    },
  ];

  return (
    <section className="bg-white text-gray-950 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            {t.features.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4 border-l-2 border-gray-200 pl-6 hover:border-blue-600 transition-colors duration-300">
              <span className="text-sm font-mono text-blue-600 font-bold">
                {item.num}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-gray-950">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}