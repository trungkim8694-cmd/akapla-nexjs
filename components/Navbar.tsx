
"use client";

import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';

interface Props {
  lang: Language;
  toggleLanguage: () => void;
}

const Navbar: React.FC<Props> = ({ lang, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={scrollToTop}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-blue-900' : 'text-white md:text-blue-900'}`}>
            AKAPLA
          </span>
          <div className="hidden md:block w-1 h-6 bg-red-600"></div>
          <span className={`hidden md:block text-xs font-semibold uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
            {t.bridge}
          </span>
        </a>

        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden lg:flex items-center space-x-8 mr-4">
            <a href="#about" className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>{t.about}</a>
            <a href="#process" className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>{t.process}</a>
          </div>
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all text-[10px] md:text-xs font-bold ${
              isScrolled 
                ? 'border-slate-200 text-slate-700 hover:bg-slate-50' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <span className={lang === 'JP' ? 'text-red-500' : 'opacity-40'}>JP</span>
            <span className="opacity-20">•</span>
            <span className={lang === 'EN' ? 'text-red-500' : 'opacity-40'}>EN</span>
            <span className="opacity-20">•</span>
            <span className={lang === 'VN' ? 'text-red-500' : 'opacity-40'}>VN</span>
          </button>

          <a href="#rfq" className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-red-200 transition-all transform hover:scale-105 whitespace-nowrap">
            {t.rfq}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
