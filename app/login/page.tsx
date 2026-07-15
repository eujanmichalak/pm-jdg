'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Inicjalizacja bezpośrednio tutaj, żeby uniknąć problemów ze ścieżkami
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Błąd logowania: ' + error.message);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 p-4">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-2xl border border-gray-100">
        <Link href="/" className="flex justify-center mb-8">
          <div className="relative w-24 h-24">
            <img src="/logo_beztla.png" alt="Logo" className="object-contain w-full h-full" />
          </div>
        </Link>
        <h1 className="text-2xl font-black text-gray-950 mb-8 text-center tracking-tight">Logowanie</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Email</label>
            <input 
              type="email" 
              required 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 outline-none transition-colors bg-gray-50 font-medium text-gray-950" 
              placeholder="twoj@email.pl" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Hasło</label>
            <input 
              type="password" 
              required 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 outline-none transition-colors bg-gray-50 font-medium text-gray-950" 
              placeholder="••••••••" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gray-950 text-white font-black rounded-xl hover:bg-blue-600 transition-colors mt-6 text-lg uppercase tracking-wider disabled:opacity-50"
          >
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>
        </form>
      </div>
    </div>
  );
}