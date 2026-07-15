'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hideLayout = pathname === '/login' || pathname === '/dashboard';

  if (!mounted) {
    return <main className="flex-grow bg-white">{children}</main>;
  }

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-grow bg-white">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}