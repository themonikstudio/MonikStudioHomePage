import React from 'react';
import { ArrowRight, Sparkles, Calculator, Cpu, ShieldCheck, Download, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ThreeCanvas } from './ThreeCanvas';

interface HeroProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenOrderModal }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Glow Orbs background effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold tracking-wide">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                {t.titleHighlight}
              </span>{' '}
              {t.titleRest}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-xl shadow-orange-600/30 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>{t.quoteBtn}</span>
              </a>

              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{t.aiAssistantBtn}</span>
              </a>
            </div>

            {/* Key Value Props */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">150+</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.stats.projects}</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">50k+</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.stats.downloads}</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">±0.05mm</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.stats.precision}</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.stats.satisfaction}</div>
              </div>
            </div>
          </div>

          {/* Right Interactive 3D Canvas */}
          <div className="lg:col-span-6 w-full">
            <ThreeCanvas lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};
