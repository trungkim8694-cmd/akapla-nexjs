import React from "react";
import { Language, translations } from "../translations";

interface Props {
  lang: Language;
}

const Hero: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Modern industrial facility"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm">
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
            <span className="block">{t.title1}</span>
            <span className="text-red-500">{t.title2}</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#rfq"
              className="px-10 py-4 bg-white text-blue-900 font-bold rounded-lg text-center hover:bg-slate-100 transition-colors"
            >
              {t.btnStart}
            </a>
            <a
              href="#process"
              className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-center hover:bg-white/10 transition-colors"
            >
              {t.btnService}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
