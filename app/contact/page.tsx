'use client';

import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-gray-950 min-h-screen">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-3">
            {t.contactPage.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-8">
            {t.contactPage.title} <br />
            <span className="text-gray-400">{t.contactPage.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t.contactPage.desc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 border-t border-gray-200 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {t.contactPage.infoCall}
              </span>
              <a 
                href="tel:+48797109552" 
                className="text-2xl font-black uppercase tracking-tight hover:text-blue-600 transition-colors"
              >
                +48 797 109 552
              </a>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {t.contactPage.infoEmail}
              </span>
              <a 
                href="mailto:patryk.michalak83@wp.pl" 
                className="text-2xl font-black uppercase tracking-tight hover:text-blue-600 transition-colors"
              >
                patryk.michalak83@wp.pl
              </a>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {t.contactPage.infoHoursTitle}
              </span>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                {t.contactPage.infoHoursDays} <br />
                {t.contactPage.infoArea}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-950 mb-2">
                    {t.contactPage.formName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-blue-600 text-gray-950 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-950 mb-2">
                    {t.contactPage.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-blue-600 text-gray-950 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-950 mb-2">
                  {t.contactPage.formSubject}
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-blue-600 text-gray-950 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-950 mb-2">
                  {t.contactPage.formMessage}
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-blue-600 text-gray-950 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-gray-950 hover:bg-gray-800 text-white font-bold uppercase tracking-wider px-8 py-4 border-2 border-gray-950 transition-colors text-sm"
              >
                {t.contactPage.formSubmit}
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}