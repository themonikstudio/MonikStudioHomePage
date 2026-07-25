import React, { useState } from 'react';
import { Sparkles, Cpu, Wrench, Printer, Code, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { Language, AIProjectAnalysis } from '../types';
import { translations } from '../data/translations';

interface AiProjectAssistantProps {
  lang: Language;
  onRequestBuildIdea: (ideaSummary: string) => void;
}

const SAMPLE_IDEAS_VI = [
  'Đồng hồ để bàn ESP32 hiển thị thời tiết & nhiệt độ phòng',
  'Khay đựng dụng cụ 3D tích hợp sạc không dây MagSafe',
  'Mạch tự động tưới cây qua Wi-Fi vỏ in 3D chống nước',
  'Bàn phím MacroPad 4 phím cơ xoay tăng giảm âm lượng',
];

const SAMPLE_IDEAS_EN = [
  'ESP32 desktop clock displaying weather & room temperature',
  '3D tool tray with integrated MagSafe wireless charger',
  'Wi-Fi automatic plant watering system in waterproof 3D case',
  '4-key mechanical MacroPad with rotary volume control',
];

export const AiProjectAssistant: React.FC<AiProjectAssistantProps> = ({
  lang,
  onRequestBuildIdea,
}) => {
  const t = translations[lang].aiAssistant;

  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AIProjectAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (ideaText?: string) => {
    const queryPrompt = ideaText || prompt;
    if (!queryPrompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryPrompt,
          language: lang,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to analyze project idea');
      }

      const data: AIProjectAnalysis = await res.json();
      setAnalysis(data);
    } catch (err: any) {
      console.error('Error analyzing idea:', err);
      setError(err?.message || 'Co loi xay ra khi phan tich y tuong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Idea Input Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-slate-300 uppercase block">
              {lang === 'vi' ? 'Mô tả ý tưởng hoặc yêu cầu của bạn:' : 'Describe your idea or requirement:'}
            </label>
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={t.inputPlaceholder}
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Quick Idea Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-mono">{lang === 'vi' ? 'Gợi ý nhanh:' : 'Quick ideas:'}</span>
            {(lang === 'vi' ? SAMPLE_IDEAS_VI : SAMPLE_IDEAS_EN).map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPrompt(sample);
                  handleAnalyze(sample);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-orange-500/40 transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={() => handleAnalyze()}
            disabled={loading || !prompt.trim()}
            className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-orange-600/25 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{t.loadingText}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t.submitBtn}</span>
              </>
            )}
          </button>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* AI Analysis Result Cards */}
        {analysis && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
            {/* Header Result */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-orange-400 font-bold uppercase">
                  {lang === 'vi' ? 'Phân Tích Chi Tiết' : 'Detailed Analysis'}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{analysis.projectTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{analysis.summary}</p>
              </div>

              {/* Feasibility score pill */}
              <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {t.feasilibility}: {analysis.feasibilityScore}%
                </span>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CAD Advice */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                  <Wrench className="w-4 h-4" />
                  <span>{t.cadAdvice}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{analysis.cadDesignAdvice}</p>
              </div>

              {/* Print Specs */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                  <Printer className="w-4 h-4" />
                  <span>{t.printSpecs}</span>
                </div>
                <div className="space-y-1 text-xs font-mono text-slate-300">
                  <div>{lang === 'vi' ? 'Vật liệu:' : 'Material:'} <strong className="text-white">{analysis.threeDPrintingSpecs.recommendedMaterial}</strong></div>
                  <div>{lang === 'vi' ? 'Mật độ in:' : 'Infill:'} <strong className="text-white">{analysis.threeDPrintingSpecs.infillPercentage}</strong></div>
                  <div>{lang === 'vi' ? 'Thời gian in:' : 'Print time:'} <strong className="text-white">{analysis.threeDPrintingSpecs.estimatedPrintTime}</strong></div>
                </div>
              </div>
            </div>

            {/* Hardware Electronics BOM */}
            {analysis.electronicsBOM && analysis.electronicsBOM.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span>{t.electronicsBOM}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {analysis.electronicsBOM.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono flex items-center justify-between">
                      <span className="text-slate-200">{item.item}</span>
                      <span className="text-slate-400 text-[11px]">{item.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippet Outline */}
            {analysis.firmwareCodeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
                  <Code className="w-4 h-4" />
                  <span>{t.firmwareSnippet}</span>
                </div>
                <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto">
                  <code>{analysis.firmwareCodeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Monik Recommendation & Request CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-300 italic max-w-md">
                "{analysis.monikStudioRecommendation}"
              </p>
              <button
                onClick={() =>
                  onRequestBuildIdea(
                    `Dự Án AI: ${analysis.projectTitle}. Tóm tắt: ${analysis.summary}. Đề xuất: ${analysis.monikStudioRecommendation}`
                  )
                }
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                <span>{t.orderAssistance}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
