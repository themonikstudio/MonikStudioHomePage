import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, UploadCloud, MessageSquare, Mail, Globe, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { translations } from '../data/translations';

interface QuoteFormModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  prefilledText?: string;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  lang,
  isOpen,
  onClose,
  prefilledText = '',
}) => {
  const t = translations[lang].contact;

  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [serviceType, setServiceType] = useState('printOnly');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledText) {
      setMessage(prefilledText);
    }
  }, [prefilledText]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo) return;

    setSubmitted(true);

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // Ignore if canvas-confetti fails
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 my-8 space-y-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">{lang === 'vi' ? 'Cảm Ơn Bạn!' : 'Thank You!'}</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {t.successMessage}
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              <div>Website: <strong className="text-white">www.monikstudio.com</strong></div>
              <div>Email: <strong className="text-white">themonikstudio@gmail.com</strong></div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs"
            >
              {lang === 'vi' ? 'Đóng Cửa Sổ' : 'Close Window'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-mono text-[11px] font-bold">
                {t.tagline}
              </div>
              <h3 className="text-2xl font-extrabold text-white">{t.title}</h3>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-300 block">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'vi' ? 'Ví dụ: Nguyễn Văn A' : 'E.g., Alex Johnson'}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Contact info */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-300 block">
                  {t.emailLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Email / Zalo / Telegram"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-300 block">
                {t.serviceType}
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
              >
                <option value="printOnly">{t.services.printOnly}</option>
                <option value="cadAndPrint">{t.services.cadAndPrint}</option>
                <option value="electronicsDiy">{t.services.electronicsDiy}</option>
                <option value="bulkOrder">{t.services.bulkOrder}</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-300 block">
                {t.messageLabel}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'vi' ? 'Mô tả kích thước, loại nhựa, số lượng hoặc link file 3D...' : 'Describe dimensions, material, quantity, or 3D file link...'}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* File Upload Simulation */}
            <div className="p-3.5 rounded-xl border border-dashed border-slate-800 bg-slate-950 text-center cursor-pointer hover:border-orange-500/50 transition-colors">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                accept=".stl,.3mf,.step,.zip,.png,.jpg"
                className="hidden"
              />
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-1.5">
                <UploadCloud className="w-5 h-5 text-orange-400" />
                <span className="text-xs text-slate-300 font-mono">
                  {fileName
                    ? (lang === 'vi' ? `Đã chọn: ${fileName}` : `Selected: ${fileName}`)
                    : (lang === 'vi' ? 'Đính kèm file STL / 3MF / STEP (Nếu có)' : 'Attach STL / 3MF / STEP file (Optional)')}
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t.sendBtn}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
