export const dynamic = 'force-dynamic';
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
      setMessages(data || []);
    }
    fetchData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Nagłówek */}
      <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-gray-950">Witaj, Patryk</h1>
        <img src="/logo_beztla.png" alt="Logo" className="h-12 w-12 object-contain" />
      </header>

      {/* Statystyki */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-600 p-6 rounded-2xl text-white">
          <p className="text-sm font-bold opacity-80">NOWE WIADOMOŚCI</p>
          <p className="text-4xl font-black mt-2">{messages.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm font-bold text-gray-500">REALIZACJE</p>
          <p className="text-4xl font-black mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm font-bold text-gray-500">ODWIEDZINY</p>
          <p className="text-4xl font-black mt-2">---</p>
        </div>
      </section>

      {/* Publikacja realizacji */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <h2 className="text-xl font-black text-gray-950 mb-6 uppercase">Dodaj nową realizację</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nazwa projektu" className="p-4 border-2 border-gray-200 rounded-xl" />
          <input type="text" placeholder="Link do zdjęcia" className="p-4 border-2 border-gray-200 rounded-xl" />
          <button className="md:col-span-2 bg-gray-950 text-white py-4 font-black rounded-xl uppercase hover:bg-blue-600 transition">
            Opublikuj realizację
          </button>
        </div>
      </section>

      {/* Wiadomości */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <h2 className="text-xl font-black text-gray-950 mb-6 uppercase">Wiadomości od klientów</h2>
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex justify-between items-start">
                <p className="font-black text-gray-950">{m.name}</p>
                <span className="text-xs font-bold text-gray-400">{new Date(m.created_at).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-blue-600 font-bold mt-1">{m.email}</p>
              <p className="mt-3 text-gray-700">{m.message}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wyloguj */}
      <button 
        onClick={handleLogout}
        className="w-full py-4 text-gray-400 font-bold uppercase tracking-widest hover:text-red-600 transition"
      >
        Wyloguj się
      </button>
    </div>
  );
}