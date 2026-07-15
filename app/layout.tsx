import './globals.css';
import LayoutWrapper from './LayoutWrapper';
import { LanguageProvider } from './context/LanguageContext';
import CookieConsent from './components/CookieConsent';

export const metadata = {
  title: 'Patryk Michalak',
  description: 'Patryk Michalak',
  icons: {
    icon: '/logo_beztla.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased relative">
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}