import React, { useState } from 'react';
import { useI18n } from '../i18n/LanguageContext';
import { 
  PROFILES_3D, 
  FEATURED_MODELS_3D, 
  DESIGN_3D_HERO_IMAGE, 
  Model3DItem, 
  PlatformProfile 
} from '../data/design3d';
import { 
  Box, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Printer, 
  Cpu, 
  Palette, 
  Sliders, 
  Compass, 
  ChevronRight 
} from 'lucide-react';

export const Design3DSection: React.FC = () => {
  const { t } = useI18n();
  const [activeModel, setActiveModel] = useState<Model3DItem>(FEATURED_MODELS_3D[0]);

  return (
    <section id="design-3d" className="py-16 md:py-24 bg-white border-b border-[#EAE4DA] relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gradient-to-bl from-[#FA6831]/10 via-[#00AE42]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00AE42]/15 text-[#008733] text-xs font-semibold uppercase tracking-wider mb-2">
              <Box size={13} />
              <span>{t.design3d.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] tracking-tight">
              {t.design3d.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#5A626A] mt-2 max-w-2xl leading-relaxed">
              {t.design3d.subheading}
            </p>
          </div>

          {/* Quick Metrics / Stats */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center gap-3 shadow-2xs">
              <Printer size={18} className="text-[#FA6831]" />
              <div className="text-left">
                <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block font-semibold">Print Compatibility</span>
                <span className="text-xs font-bold text-[#24282C]">Bambu Lab & Prusa</span>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center gap-3 shadow-2xs">
              <Palette size={18} className="text-[#00AE42]" />
              <div className="text-left">
                <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block font-semibold">Color Support</span>
                <span className="text-xs font-bold text-[#24282C]">Bambu AMS Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Banner: Industrial Workshop Studio with 3D Prints */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-xs relative group bg-[#1F2327]">
          <div className="relative aspect-21/9 sm:aspect-16/7 md:aspect-21/8 w-full overflow-hidden">
            <img 
              src={DESIGN_3D_HERO_IMAGE} 
              alt="Monik Studio 3D Design Workshop with Bambu Lab 3D Printer and Functional Prints"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20]/90 via-[#1A1D20]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#CDB07B] text-xs font-semibold mb-3 border border-white/20">
                <Sparkles size={13} />
                <span>Physical Products by Monik Studio</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                From Digital Pixels to Precision 3D Physical Reality
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed max-w-2xl hidden sm:block">
                Alongside digital apps and indie games, we engineer physical lifestyle gadgets, workshop storage systems, and cultural heritage keepsakes. Each model undergoes rigorous slicing, tolerance tuning, and real-world durability testing.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Main 3D Creator Channels / Platform Profiles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-[#D86950]" />
              <h3 className="text-lg sm:text-xl font-extrabold text-[#24282C]">
                {t.design3d.platformsTitle}
              </h3>
            </div>
            <span className="text-xs text-[#6B7280]">Download directly on your favorite maker community</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROFILES_3D.map((profile: PlatformProfile) => {
              return (
                <div
                  key={profile.id}
                  className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#D1C9BE] transition-all flex flex-col justify-between group hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-white text-sm shadow-2xs"
                          style={{ backgroundColor: profile.accentColor }}
                        >
                          {profile.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#24282C] group-hover:text-[#D86950] transition-colors">
                            {profile.name}
                          </h4>
                          <span className="text-xs font-mono text-[#6B7280]">
                            {profile.handle}
                          </span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-[#E2DDD5] text-[#4A5157]">
                        Verified
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-[#E2DDD5] text-xs font-semibold text-[#24282C] mb-3">
                      <Sparkles size={12} className="text-[#CDB07B]" />
                      <span>{profile.badge}</span>
                    </div>

                    <p className="text-xs text-[#5A626A] leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-2xs group-hover:opacity-95 active:scale-98"
                    style={{ backgroundColor: profile.accentColor }}
                  >
                    <span>Visit {profile.name.split(' ')[0]} Profile</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured 3D Models Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FA6831]/15 text-[#D84915] text-xs font-semibold uppercase tracking-wider mb-2">
                <Layers size={13} />
                <span>Featured Prints</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#24282C]">
                {t.design3d.featuredModelsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A626A] mt-1 max-w-2xl">
                {t.design3d.featuredModelsDesc}
              </p>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#FAF8F5] rounded-2xl border border-[#E2DDD5]">
              {FEATURED_MODELS_3D.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeModel.id === model.id
                      ? 'bg-[#24282C] text-white shadow-2xs'
                      : 'text-[#5A626A] hover:text-[#24282C] hover:bg-white'
                  }`}
                >
                  <span>{model.title.split(':')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Model Spotlight Card */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Product Photo */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#E0D9CE] shadow-xs bg-white aspect-4/3 relative group">
                  <img
                    src={activeModel.image}
                    alt={activeModel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#24282C] border border-[#E0D9CE] shadow-2xs">
                      {activeModel.category === 'gadget' && '⚡ Everyday Gadget'}
                      {activeModel.category === 'functional' && '🛠️ Workshop & Desk'}
                      {activeModel.category === 'cultural' && '🇻🇳 Cultural Heritage'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#00AE42] text-white text-xs font-bold shadow-2xs">
                      Free STL
                    </span>
                  </div>
                </div>

                {/* Slicing & Print Specs Table */}
                <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E2DDD5] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#8B939E] block text-[10px] uppercase font-semibold">{t.design3d.material}</span>
                    <strong className="text-[#24282C] font-mono">{activeModel.specifications.material}</strong>
                  </div>
                  <div>
                    <span className="text-[#8B939E] block text-[10px] uppercase font-semibold">{t.design3d.infill}</span>
                    <strong className="text-[#24282C] font-mono">{activeModel.specifications.infill}</strong>
                  </div>
                  <div>
                    <span className="text-[#8B939E] block text-[10px] uppercase font-semibold">{t.design3d.supports}</span>
                    <strong className="text-[#24282C] font-mono">{activeModel.specifications.supports}</strong>
                  </div>
                  <div>
                    <span className="text-[#8B939E] block text-[10px] uppercase font-semibold">{t.design3d.layerHeight}</span>
                    <strong className="text-[#24282C] font-mono">{activeModel.specifications.layerHeight}</strong>
                  </div>
                </div>
              </div>

              {/* Model Description & Direct Links */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#24282C]">
                    {activeModel.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#D86950] mt-1">
                    {activeModel.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#4A5157] leading-relaxed">
                  {activeModel.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeModel.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#E0D9CE] text-[11px] font-medium text-[#5A626A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Feature Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#24282C] block">
                    Design Highlights:
                  </span>
                  <ul className="space-y-2 text-xs text-[#5A626A]">
                    {activeModel.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#00AE42] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Platform Buttons */}
                <div className="pt-4 border-t border-[#E5DFD5]">
                  <span className="text-xs font-semibold text-[#6B7280] block mb-3">
                    Download free print file on:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {activeModel.links.map((link, idx) => {
                      const isMakerWorld = link.platform === 'MakerWorld';
                      const isPrintables = link.platform === 'Printables';
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-2xs active:scale-98 ${
                            isMakerWorld
                              ? 'bg-[#00AE42] hover:bg-[#009638] text-white'
                              : isPrintables
                              ? 'bg-[#FA6831] hover:bg-[#E55722] text-white'
                              : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                          }`}
                        >
                          <Download size={13} />
                          <span>{link.platform}</span>
                          <ExternalLink size={12} className="opacity-80" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
