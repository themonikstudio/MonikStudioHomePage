import React from 'react';
import { MonikCubeIcon } from './MonikLogo';
import { Heart, ShieldCheck, Sparkles, Smartphone, Award, Terminal, MapPin } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Mindful Interaction Design',
      desc: 'We craft mobile experiences that respect your time and attention—free of deceptive dark patterns, aggressive paywalls, or noisy spam notifications.'
    },
    {
      icon: ShieldCheck,
      title: 'Store-Grade Privacy & Safety',
      desc: 'Fully certified for Apple App Store Guidelines 5.1.1 and Google Play Data Safety requirements. Zero third-party telemetry; your data belongs solely to you.'
    },
    {
      icon: Smartphone,
      title: 'Native Ergonomics & Performance',
      desc: 'Hand-tuned for 120Hz ProMotion screens, tactile Taptic Engine haptics, low battery consumption, and seamless offline gameplay.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Emblem & Mission */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-4 bg-[#FAF8F5] rounded-3xl border border-[#E8E2D7] shadow-xs mb-6 inline-block">
              <MonikCubeIcon size={64} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#779585]/15 text-[#5C826F] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>About Monik Studio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] font-['Outfit'] leading-tight">
              Passionate Developers, <br />
              <span className="text-[#D86950]">Thoughtful Mobile Craft.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A626A] mt-4 leading-relaxed max-w-md">
              Monik Studio was born from a simple belief: mobile software should enrich our lives, spark creativity, and offer calm respite from everyday digital clutter.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 max-w-md">
              <span className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-semibold text-[#24282C]">
                Mobile Games & Apps
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-semibold text-[#D86950]">
                Chrome Extensions (V3)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-semibold text-[#779585]">
                iOS & Android Native
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] text-xs font-semibold text-[#24282C]">
                Policy Certified
              </span>
            </div>

            {/* Studio Headquarters Address */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] max-w-md w-full text-left flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 bg-white rounded-xl text-[#D86950] border border-[#E2DDD5] shadow-2xs shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#779585] uppercase tracking-wider block">
                  Studio Location
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#24282C]">
                  136 Ho Tung Mau Street, Phu Dien Ward
                </p>
                <p className="text-xs text-[#5A626A]">
                  Hanoi City, Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Core Values */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EBE5DB] flex items-start gap-4 hover:border-[#D1C9BE] transition-colors"
                >
                  <div className="p-3 bg-white rounded-xl text-[#D86950] border border-[#E2DDD5] shadow-2xs shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#24282C] font-['Outfit']">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A626A] mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Verification Guarantee card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#779585]/10 via-[#FAF8F5] to-[#CDB07B]/10 border border-[#779585]/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award size={24} className="text-[#779585] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#24282C]">Certified Developer Accounts</h4>
                  <p className="text-[11px] text-[#6B7280]">Verified publisher identity in good standing across Apple, Google & Chrome Web Store ecosystems.</p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#5C826F] shrink-0">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
