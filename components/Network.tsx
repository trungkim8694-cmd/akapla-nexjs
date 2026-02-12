import React from "react";
import { Language, translations } from "../translations";

interface Props {
  lang: Language;
}

const Network: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].network;

  const icons = [
    // Diversity
    <svg
      key="0"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>,
    // Scale
    <svg
      key="1"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>,
    // QC
    <svg
      key="2"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
    // Flexibility
    <svg
      key="3"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>,
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">
              {t.tag}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
              {t.title}
            </h3>
            <p className="text-slate-600 text-lg md:text-xl border-l-4 border-red-500 pl-6 italic">
              {t.slogan}
            </p>
          </div>

          <div className="flex-shrink-0 bg-blue-900 text-white p-8 rounded-2xl shadow-2xl flex items-center gap-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-black">{t.trustStat}</div>
            <div className="text-sm font-bold uppercase tracking-wider leading-snug">
              {t.trustLabel}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-950 hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 text-blue-900 group-hover:text-red-500 transition-colors">
                {icons[idx]}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {card.title}
              </h4>
              <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden h-64 shadow-inner">
          <img
            src="/intro-bg.png"
            alt="Factory Floor"
            className="w-full h-full object-cover opacity-80 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-white font-bold text-xl md:text-2xl drop-shadow-lg">
                Vietnamese Quality Managed by Japanese Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
