import React from 'react';
import { Box, Cpu, Wrench, Share2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CapabilitiesProps {
  lang: Language;
}

export const CapabilitiesSection: React.FC<CapabilitiesProps> = ({ lang }) => {
  const t = translations[lang].capabilities;

  const pillars = [
    {
      icon: Box,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      title: t.cadTitle,
      desc: t.cadDesc,
      highlights: ['Fusion 360 & CAD', 'Tolerance ±0.05mm', 'PLA+, PETG, TPU, Resin'],
    },
    {
      icon: Cpu,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      title: t.electronicsTitle,
      desc: t.electronicsDesc,
      highlights: ['ESP32, Arduino, RP2040', 'Custom PCB Layout', 'MicroPython & C++'],
    },
    {
      icon: Wrench,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      title: t.diyTitle,
      desc: t.diyDesc,
      highlights: ['Smart Desk Clocks', 'Mechanical Macropads', 'IoT Automation'],
    },
    {
      icon: Share2,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      title: t.openSourceTitle,
      desc: t.openSourceDesc,
      highlights: ['Free STL / 3MF Downloads', 'Circuit Schematics', 'GitHub Repositories'],
    },
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 font-mono text-xs font-semibold tracking-wider">
            {t.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.color} transition-transform group-hover:scale-110`}
                >
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-1.5">
                {p.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
