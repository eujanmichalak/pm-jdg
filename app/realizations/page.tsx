'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function RealizationsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Zabezpieczenie na czas ładowania tłumaczeń
  if (!t || !t.realizationsPage) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-sm font-mono text-gray-400">Ładowanie...</div>
      </div>
    );
  }

  const categories = [
    t.realizationsPage.catAll,
    t.realizationsPage.catDriers,
    t.realizationsPage.catStructures,
    t.realizationsPage.catInstallations,
  ];

  const items = [
    {
      title: t.realizationsPage.project1?.title,
      category: t.realizationsPage.catStructures,
      location: t.realizationsPage.project1?.location,
      image: '/photos/blacha.png',
    },
    {
      title: t.realizationsPage.project2?.title,
      category: t.realizationsPage.catInstallations,
      location: t.realizationsPage.project2?.location,
      image: '/photos/fasada.png',
    },
    {
      title: t.realizationsPage.project3?.title,
      category: t.realizationsPage.catStructures,
      location: t.realizationsPage.project3?.location,
      image: '/photos/panel_wartstwowy_2.png',
    },
    {
      title: t.realizationsPage.project4?.title,
      category: t.realizationsPage.catStructures,
      location: t.realizationsPage.project4?.location,
      image: '/photos/panele_warstwowe.png',
    },
    {
      title: t.realizationsPage.project5?.title,
      category: t.realizationsPage.catDriers,
      location: t.realizationsPage.project5?.location,
      image: '/photos/suszarka_szwecja.png',
    },
    {
      title: t.realizationsPage.project6?.title,
      category: t.realizationsPage.catDriers,
      location: t.realizationsPage.project6?.location,
      image: '/photos/suszarnia.png',
    },
    {
      title: t.realizationsPage.project7?.title,
      category: t.realizationsPage.catStructures,
      location: t.realizationsPage.project7?.location,
      image: '/photos/zboze.png',
    },
  ];

  // Jeśli wybrana kategoria nie należy do aktualnego języka, domyślnie ustaw "Wszystkie"
  const isCategoryValid = selectedCategory && categories.includes(selectedCategory);
  const currentCategory = isCategoryValid ? selectedCategory : t.realizationsPage.catAll;

  // Filtrowanie elementów
  const filteredItems = items.filter((item) => {
    if (currentCategory === t.realizationsPage.catAll) return true;
    return item.category === currentCategory;
  });

  return (
    <div className="bg-white text-gray-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-3">
            {t.realizationsPage.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            {t.realizationsPage.title} <br />
            <span className="text-gray-400">{t.realizationsPage.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t.realizationsPage.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Kategorie */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-6 mb-12">
          {categories.map((category, index) => {
            const isActive = currentCategory === category;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-gray-950 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-950'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Lista realizacji */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="group border border-gray-200 bg-white overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title || 'Zdjęcie realizacji'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-blue-600 font-bold uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.location}</span>
                </div>
                <h3 className="text-xl font-black text-gray-950 uppercase tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}