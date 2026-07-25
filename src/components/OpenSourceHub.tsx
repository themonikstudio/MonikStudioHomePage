import React from 'react';
import { FolderDown, ExternalLink, Github, Sparkles, Heart, Code2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface OpenSourceHubProps {
  lang: Language;
}

export const OpenSourceHub: React.FC<OpenSourceHubProps> = ({ lang }) => {
  const t = translations[lang].openSource;

  return (
    <section id="open-source" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                <span>{t.tagline}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {t.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://makerworld.com/en/@monikstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2"
                >
                  <FolderDown className="w-4 h-4" />
                  <span>{t.visitMakerWorld}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/themonikstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>{t.visitGitHub}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-left font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-3xl font-extrabold text-white">50,000+</span>
                <span className="text-xs text-slate-400 block">{t.downloadCount}</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-3xl font-extrabold text-orange-400">100%</span>
                <span className="text-xs text-slate-400 block">Free Open Source STL</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 col-span-2">
                <span className="text-xs text-slate-400 block uppercase font-bold text-cyan-400">
                  {lang === 'vi' ? 'Nền Tảng Đăng Tải' : 'Hosted Platforms'}
                </span>
                <span className="text-xs text-slate-300 block pt-1">
                  {t.platforms}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
