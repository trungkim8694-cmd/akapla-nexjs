import React from "react";
import { Language, translations } from "../translations";

interface Props {
  lang: Language;
}

const Footer: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  // Specific emails from user request
  const vnEmail = "trungkim8694@gmail.com";
  const jpEmail = "tqcjapan2022@gmail.com";

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold text-white mb-6 block tracking-tighter">
              AKAPLA
            </span>
            <p className="text-sm leading-relaxed mb-6">{t.desc}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              VIETNAM HQ
            </h4>
            <div className="text-sm leading-relaxed space-y-2">
              <p className="font-bold text-slate-200">{t.vnHq}</p>
              <p>{t.vnAddr}</p>
              <p>{t.vnTax}</p>
              <p>{t.vnPhone}</p>
              <p className="text-blue-400 hover:underline">
                <a href={`mailto:${vnEmail}`}>{vnEmail}</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              JAPAN BRANCH
            </h4>
            <div className="text-sm leading-relaxed space-y-2">
              <p className="font-bold text-slate-200">{t.jpHq}</p>
              <p>{t.jpAddr}</p>
              <p>{t.jpPhone}</p>
              <p>{t.jpFax}</p>
              <p className="text-blue-400 hover:underline">
                <a href={`mailto:${jpEmail}`}>{jpEmail}</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              {t.nav}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {navT.about}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  {navT.process}
                </a>
              </li>
              <li>
                <a href="#rfq" className="hover:text-white transition-colors">
                  {navT.rfq}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2022 Akapla Industrial Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-slate-600">AKAPLA x TQC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
