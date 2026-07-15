'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy użytkownik już wcześniej zaakceptował cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left max-w-4xl">
          Ta strona korzysta z plików cookies oraz przetwarza zanonimizowane dane statystyczne w celu analizy ruchu i poprawnego działania witryny. Korzystając ze strony, wyrażasz na to zgodę.
        </div>

        <button
          onClick={acceptCookies}
          className="w-full sm:w-auto bg-gray-950 hover:bg-gray-800 text-white font-bold uppercase tracking-wider text-center px-6 py-2.5 border-2 border-gray-950 transition-colors text-xs flex-shrink-0"
        >
          Akceptuję
        </button>

      </div>
    </div>
  );
}