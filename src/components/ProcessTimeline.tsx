import React from 'react';
import { PenTool, Box, Wrench, Code } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProcessTimelineProps {
  lang: Language;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ lang }) => {
  const t = translations[lang].process;

  const steps = [
    {
      icon: PenTool,
      title: t.step1Title,
      desc: t.step1Desc,
      stepNum: '01',
    },
    {
      icon: Box,
      title: t.step2Title,
      desc: t.step2Desc,
      stepNum: '02',
    },
    {
      icon: Wrench,
      title: t.step3Title,
      desc: t.step3Desc,
      stepNum: '03',
    },
    {
      icon: Code,
      title: t.step4Title,
      desc: t.step4Desc,
      stepNum: '04',
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 font-mono text-xs font-semibold">
            {t.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* 4 Steps Horizontal / Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 relative space-y-4 group"
            >
              {/* Step Number watermark */}
              <span className="absolute top-4 right-4 font-mono font-extrabold text-3xl text-slate-800/80 group-hover:text-orange-500/20 transition-colors">
                {step.stepNum}
              </span>

              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <step.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
