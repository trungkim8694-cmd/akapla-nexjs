
import React from 'react';
import { Language, translations } from '../translations';

interface Props {
  lang: Language;
}

const Process: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">{t.tag}</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900">{t.title}</h3>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
          {t.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center text-2xl font-black text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-xl">
                {step.number}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
              <p className="text-sm text-slate-500 px-2 line-clamp-3">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
