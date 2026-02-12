
"use client";

import React, { useState } from 'react';
import { AppStatus, RFQFormData } from '../types';
import { Language, translations } from '../translations';
import { submitRFQ } from '../services/rfqService';

interface Props {
  lang: Language;
}

const RFQForm: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].rfq;
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<RFQFormData>>({
    companyName: '',
    contactEmail: '',
    productType: '',
    notes: '',
    ndaAccepted: false,
    requestVisitOrPrototype: ''
  });

  const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > MAX_FILE_SIZE) {
        setErrorMsg(t.fileError);
        e.target.value = ''; 
        return;
      }
      setFormData(prev => ({ ...prev, drawingFile: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (errorMsg) return;
    
    setStatus(AppStatus.SUBMITTING);

    try {
      const success = await submitRFQ(formData as RFQFormData);
      if (success) {
        setStatus(AppStatus.SUCCESS);
      } else {
        setStatus(AppStatus.ERROR);
        setErrorMsg("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus(AppStatus.ERROR);
      setErrorMsg("An unexpected error occurred.");
    }
  };

  const renderNdaLabel = () => {
    const labelText = t.labels.nda;
    const ndaKeywords = {
      JP: "秘密保持契約 (NDA)",
      EN: "confidentiality terms (NDA)",
      VN: "điều khoản bảo mật (NDA)"
    };
    
    const keyword = ndaKeywords[lang];
    if (labelText.includes(keyword)) {
      const parts = labelText.split(keyword);
      return (
        <>
          {parts[0]}
          <button 
            type="button" 
            onClick={() => setIsModalOpen(true)}
            className="text-blue-400 hover:text-blue-300 underline font-medium"
          >
            {keyword}
          </button>
          {parts[1]}
        </>
      );
    }
    return labelText;
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <div className="relative z-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
            <p className="text-slate-400 mb-8">{t.desc}</p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {status === AppStatus.SUCCESS ? (
              <div className="bg-green-500/20 border border-green-500/50 p-8 rounded-2xl text-center">
                <h4 className="text-2xl font-bold mb-2">{t.labels.successTitle}</h4>
                <p>{t.labels.successDesc}</p>
                <button 
                  type="button"
                  onClick={() => setStatus(AppStatus.IDLE)}
                  className="mt-6 text-sm underline opacity-70 hover:opacity-100"
                >
                  {t.labels.reset}
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.company}</label>
                    <input 
                      required
                      name="companyName"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.email}</label>
                    <input 
                      required
                      type="email"
                      name="contactEmail"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.category}</label>
                    <select 
                      name="productType"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-900">Select</option>
                      {t.categories.map(cat => (
                        <option key={cat} value={cat} className="bg-slate-900">{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.visitRequest}</label>
                    <select 
                      name="requestVisitOrPrototype"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-900">Select Option</option>
                      {t.visitOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.file}</label>
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all cursor-pointer"
                  />
                  {errorMsg && <p className="text-red-400 text-xs mt-2 font-medium">{errorMsg}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.labels.notes}</label>
                  <textarea 
                    name="notes"
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="nda" 
                    name="ndaAccepted"
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 rounded border-white/10 text-blue-500 focus:ring-blue-500" 
                    required 
                  />
                  <label htmlFor="nda" className="text-xs text-slate-400 leading-normal">
                    {renderNdaLabel()}
                  </label>
                </div>

                <button 
                  disabled={status === AppStatus.SUBMITTING}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/40 transition-all transform hover:-translate-y-1"
                >
                  {status === AppStatus.SUBMITTING ? t.labels.sending : t.labels.submit}
                </button>
                {status === AppStatus.ERROR && (
                  <p className="text-red-400 text-sm text-center mt-2">{errorMsg}</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-blue-900">秘密保持合意書 (NDA)</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto text-sm leading-relaxed text-slate-700 space-y-6">
              <p>
                Akapla（以下「当社」）は、お客様が当社のお見積りフォームを通じて提供された技術図面、CADデータ、製品仕様、および商業的な情報（以下「秘密情報」）を、以下の条件に従って厳重に管理することを合意いたします。
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2">1. 秘密情報の目的内利用</h4>
                  <p>当社は、秘密情報を当社からの見積り提示、技術評価、および製品製造の検討目的のみに使用し、それ以外の目的で使用いたしません。</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2">2. 第三者への開示禁止</h4>
                  <p>当社は、秘密情報を厳重に保管し、お客様の事前の書面による同意なく、第三者に開示または漏洩いたしません。ただし、製造委託先であるパートナー工場へ、本目的達成のために必要最低限の情報を開示する場合を除きます。この場合、当社は当該委託先に対し、本合意書と同等の義務を負わせます。</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2">3. 秘密情報の返還・廃棄</h4>
                  <p>お見積りの終了後またはお客様の要請があった場合、当社は直ちに秘密情報を速やかに返還または廃棄いたします。</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2">4. セキュリティ管理</h4>
                  <p>当社は、秘密情報の紛失、盗難、改ざんを防ぐため、適切な安全管理措置を講じます。</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-500 italic">
                ※本規約は、お客様がチェックボックスに同意し、情報を送信した時点で効力を生じます。
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-2.5 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RFQForm;
