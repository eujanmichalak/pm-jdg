'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturedProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.realizationsPage.project1.title,
      category: t.realizationsPage.catStructures, 
      location: t.realizationsPage.project1.location,
      image: '/photos/blacha.png',
    },
    {
      title: t.realizationsPage.project2.title,
      category: t.realizationsPage.catInstallations, 
      location: t.realizationsPage.project2.location,
      image: '/photos/fasada.png',
    },
    {
      title: t.realizationsPage.project3.title,
      category: t.realizationsPage.catStructures, 
      location: t.realizationsPage.project3.location,
      image: '/photos/panel_wartstwowy_2.png',
    },
  ];

  return (
    <section className="bg-white border-t border-gray-200 text-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              {t.featuredProjects.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {t.featuredProjects.title}
            </h2>
          </div>
          <Link
            href="/realizations"
            className="text-sm font-bold uppercase tracking-wider border-b-2 border-gray-950 hover:text-blue-600 hover:border-blue-600 transition-colors pb-1"
          >
            {t.featuredProjects.moreLink} &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border border-gray-200 bg-white overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-gray-400 uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}