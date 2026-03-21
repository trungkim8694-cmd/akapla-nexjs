"use client";

import React, { useState, useEffect } from "react";
import { AppStatus, RFQFormData } from "../types";
import { Language, translations } from "../translations";

interface Props {
  lang: Language;
}

const RFQForm: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].rfq;
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState<Partial<RFQFormData>>({
    companyName: "",
    contactEmail: "",
    productType: "",
    notes: "",
    ndaAccepted: false,
    requestVisitOrPrototype: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MAX_FILE_SIZE = 100 * 1024 * 1024; // Giới hạn 100MB để an toàn

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const oversized = files.find((f) => f.size > MAX_FILE_SIZE);

      if (oversized) {
        setErrorMsg(t.fileError || "File quá lớn (Tối đa 100MB)");
        e.target.value = "";
        return;
      }
      setSelectedFiles(files);
    }
  };

  // Hàm làm sạch tên file để tránh lỗi "Invalid key" của Supabase Storage
  const sanitizeFileName = (name: string) => {
    return name
      .replace(/\s+/g, "_") // Thay khoảng trắng bằng gạch dưới
      .replace(/[^a-zA-Z0-9._-]/g, ""); // Loại bỏ ký tự đặc biệt như [ ], Japanese chars nếu cần
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(AppStatus.SUBMITTING);
    setErrorMsg(null);

    try {
      const body = new FormData();
      body.append("companyName", formData.companyName || "");
      body.append("contactEmail", formData.contactEmail || "");
      body.append("productType", formData.productType || "");
      body.append(
        "requestVisitOrPrototype",
        formData.requestVisitOrPrototype || "",
      );
      body.append("notes", formData.notes || "");

      // Xử lý từng file với tên đã được làm sạch
      selectedFiles.forEach((file) => {
        const safeName = sanitizeFileName(file.name);
        const safeFile = new File([file], safeName, { type: file.type });
        body.append("files", safeFile);
      });

      const response = await fetch("/api/rfq", {
        method: "POST",
        body: body,
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Submission failed");
      }

      setStatus(AppStatus.SUCCESS);
    } catch (err: any) {
      console.error("RFQ Error:", err);
      setStatus(AppStatus.ERROR);
      setErrorMsg(err.message || "An unexpected error occurred.");
    }
  };

  if (!mounted) return <div className="min-h-100" />;

  const renderNdaLabel = () => {
    const labelText = t.labels.nda;
    const ndaKeywords = {
      JP: "秘密保持契約 (NDA)",
      EN: "confidentiality terms (NDA)",
      VN: "điều khoản bảo mật (NDA)",
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
            className="text-blue-400 underline"
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
                <h4 className="text-2xl font-bold mb-2">
                  {t.labels.successTitle}
                </h4>
                <p>{t.labels.successDesc}</p>
                <button
                  type="button"
                  onClick={() => setStatus(AppStatus.IDLE)}
                  className="mt-6 text-sm underline opacity-70"
                >
                  {t.labels.reset}
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                      {t.labels.company}
                    </label>
                    <input
                      required
                      name="companyName"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                      {t.labels.email}
                    </label>
                    <input
                      required
                      type="email"
                      name="contactEmail"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                      {t.labels.category}
                    </label>
                    <select
                      name="productType"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none"
                    >
                      <option value="" className="bg-slate-900">
                        Select
                      </option>
                      {t.categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-slate-900">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                      {t.labels.visitRequest}
                    </label>
                    <select
                      name="requestVisitOrPrototype"
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none"
                    >
                      <option value="" className="bg-slate-900">
                        Select Option
                      </option>
                      {t.visitOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                    {t.labels.file}
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm file:bg-blue-500 file:text-white file:border-0 file:rounded-full file:px-4 cursor-pointer"
                  />
                  {selectedFiles.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {selectedFiles.map((f, i) => (
                        <p key={i} className="text-[10px] text-slate-400">
                          📄 {f.name} ({(f.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      ))}
                    </div>
                  )}
                  {errorMsg && (
                    <p className="text-red-400 text-xs mt-2">{errorMsg}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                    {t.labels.notes}
                  </label>
                  <textarea
                    name="notes"
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="nda"
                    name="ndaAccepted"
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="nda" className="text-xs text-slate-400">
                    {renderNdaLabel()}
                  </label>
                </div>

                <button
                  disabled={status === AppStatus.SUBMITTING}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
                >
                  {status === AppStatus.SUBMITTING
                    ? t.labels.sending
                    : t.labels.submit}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* NDA Modal giữ nguyên như code cũ của bạn */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-slate-900 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-blue-900">
                秘密保持合意書 (NDA)
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500"
              >
                ✕
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm space-y-6 text-slate-700">
              <p>
                Akapla（以下「当社」）は、提供された秘密情報を厳重に管理することを合意いたします...
              </p>
              {/* Nội dung NDA chi tiết giữ nguyên */}
            </div>
            <div className="p-6 bg-slate-50 border-t flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-2.5 bg-blue-900 text-white font-bold rounded-lg"
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
