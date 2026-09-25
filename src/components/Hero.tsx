import React from 'react';
import { STUDIO_METRICS } from '../data/apps';
import { MonikCubeIcon } from './MonikLogo';
import { Smartphone, ArrowRight, Sparkles, ShieldCheck, Chrome } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onNavigateToPolicy?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onNavigateToPolicy }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Gentle ambient background glows matching logo palette */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#D86950]/8 via-[#779585]/10 to-[#CDB07B]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Studio Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E5DFD5] shadow-2xs mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-[#779585] animate-pulse" />
            <span className="text-xs font-semibold text-[#4A5157] tracking-wider uppercase font-mono">
              Monik Studio
            </span>
            <span className="text-xs text-[#9CA3AF]">•</span>
            <span className="text-xs font-medium text-[#779585]">
              Games, Apps & Chrome Extensions
            </span>
          </div>

          {/* Large Hero Emblem */}
          <div className="mb-6 relative group">
            <div className="absolute inset-0 bg-[#D86950]/15 rounded-3xl blur-xl transition-all group-hover:blur-2xl" />
            <div className="relative p-4 md:p-5 bg-white rounded-3xl border border-[#EBE5DB] shadow-xs inline-flex items-center justify-center">
              <MonikCubeIcon size={64} className="transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#24282C] tracking-tight font-['Outfit'] leading-[1.15]">
            Crafting Thoughtful <br className="hidden sm:inline" />
            <span className="text-[#D86950]">Mobile Games</span>, <span className="text-[#779585]">Apps</span> & <span className="text-[#CDB07B]">Extensions</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#5A626A] max-w-2xl leading-relaxed font-normal">
            Monik Studio designs peaceful puzzle titles, responsive arcade runners, distraction-free mobile tools, and lightweight Chrome browser extensions. Built with meticulous craftsmanship, zero telemetry, and certified store compliance.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              id="hero-explore-btn"
              onClick={() => onNavigate('showcase')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl bg-[#24282C] text-white hover:bg-[#343B41] transition-all shadow-xs flex items-center justify-center gap-2 group active:scale-98"
            >
              <Sparkles size={16} className="text-[#CDB07B]" />
              <span>Explore Products & Releases</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-about-btn"
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl bg-white text-[#24282C] hover:bg-[#F7F4EE] border border-[#E0D9CE] transition-all shadow-2xs flex items-center justify-center gap-2 active:scale-98"
            >
              <span>About the Studio</span>
            </button>
          </div>

          {/* Optional Direct Legal Link for App Reviewers */}
          <div className="mt-4">
            <a
              href="/store-compliance/"
              className="inline-flex items-center gap-1.5 text-xs text-[#779585] hover:text-[#5C826F] font-semibold hover:underline"
            >
              <ShieldCheck size={14} />
              <span>Store Legal & Compliance Hub →</span>
            </a>
          </div>

          {/* Supported Target Platforms Badge strip */}
          <div className="mt-10 pt-8 border-t border-[#EBE5DB]/70 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-[#EBE5DB] shadow-2xs">
              <Smartphone size={14} className="text-[#24282C]" />
              <span className="font-semibold text-[#24282C]">App Store (iOS)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-[#EBE5DB] shadow-2xs">
              <Smartphone size={14} className="text-[#779585]" />
              <span className="font-semibold text-[#24282C]">Google Play (Android)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-[#EBE5DB] shadow-2xs">
              <Chrome size={14} className="text-[#D86950]" />
              <span className="font-semibold text-[#24282C]">Chrome Web Store (V3)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-[#EBE5DB] shadow-2xs">
              <ShieldCheck size={14} className="text-[#779585]" />
              <span className="font-semibold text-[#24282C]">100% Policy Compliant</span>
            </div>
          </div>

          {/* Studio Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 w-full">
            {STUDIO_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/80 rounded-2xl border border-[#EAE4DA] shadow-2xs text-center"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#24282C] font-['Outfit']">
                  {metric.value}
                </div>
                <div className="text-xs text-[#6B7280] mt-1 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
