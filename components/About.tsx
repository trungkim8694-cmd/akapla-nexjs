import React from "react";
import { Language, translations } from "../translations";

interface Props {
  lang: Language;
}

const About: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">
            {t.tag}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {t.title}
          </h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            {t.desc}
          </p>

          <div className="space-y-6 mb-10">
            {t.points.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">
                    {item.title}
                  </h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/jis.png"
              alt="Engineers working together"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-blue-900 text-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
            <p className="text-3xl font-bold mb-2">100%</p>
            <p className="text-sm text-blue-200">{t.badge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
