import React from 'react';
import { Youtube, Facebook, Github, Mail, Globe, MapPin, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MonikLogo } from './MonikLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <MonikLogo height={38} light={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.about}
            </p>
            <div className="pt-2 font-mono text-slate-300 space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                <a
                  href="https://www.monikstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  www.monikstudio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>themonikstudio@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  {t.projectsLink}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-orange-400 transition-colors">
                  {t.estimatorLink}
                </a>
              </li>
              <li>
                <a href="#ai-assistant" className="hover:text-orange-400 transition-colors">
                  {t.aiAssistantLink}
                </a>
              </li>
              <li>
                <a href="#open-source" className="hover:text-orange-400 transition-colors">
                  {t.openSourceLink}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-orange-400 transition-colors">
                  {t.processLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              {t.socials}
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://www.youtube.com/channel/UCOFQpMmUTRg5vSoGQoKAPLg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-orange-400 transition-all flex items-center gap-1.5"
                title="YouTube Monik Studio"
              >
                <Youtube className="w-4 h-4 text-red-500" />
              </a>
              <a
                href="https://www.tiktok.com/@monikstudioofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-orange-400 transition-all flex items-center gap-1.5"
                title="TikTok Monik Studio"
              >
                <svg className="w-4 h-4 fill-current text-teal-400" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.38a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.27 8.27 0 0 0 4.93 1.6V7.19a4.83 4.83 0 0 1-1.01-.5z"/>
                </svg>
              </a>
              <a
                href="https://makerworld.com/en/@monikstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-orange-400 transition-all flex items-center gap-1.5"
                title="MakerWorld Monik Studio"
              >
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </a>
              <a
                href="https://github.com/themonikstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-orange-400 transition-all flex items-center gap-1.5"
                title="GitHub Monik Studio"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Monik-Studio/61584890277621/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 hover:text-orange-400 transition-all flex items-center gap-1.5"
                title="Facebook Monik Studio"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-mono pt-2">
              {t.summary}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-orange-500 fill-orange-500 inline" />
            <span>by Monik Studio Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
