
"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Network from '../components/Network';
import Process from '../components/Process';
import RFQForm from '../components/RFQForm';
import Footer from '../components/Footer';
import { Language } from '../translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('JP');

  const toggleLanguage = () => {
    setLang(prev => {
      if (prev === 'JP') return 'EN';
      if (prev === 'EN') return 'VN';
      return 'JP';
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <section id="home">
          <Hero lang={lang} />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About lang={lang} />
        </section>

        <section id="network">
          <Network lang={lang} />
        </section>
        
        <section id="process" className="py-20 bg-slate-50">
          <Process lang={lang} />
        </section>
        
        <section id="rfq" className="py-20 bg-white border-t border-slate-100">
          <RFQForm lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
