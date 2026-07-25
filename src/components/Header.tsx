import React, { useState } from 'react';
import { Globe, Menu, X, Cpu, Calculator, Sparkles, FolderDown, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MonikLogo } from './MonikLogo';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenOrderModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { name: t.projects, href: '#projects', icon: Cpu },
    { name: t.estimator, href: '#estimator', icon: Calculator },
    { name: t.aiAssistant, href: '#ai-assistant', icon: Sparkles },
    { name: t.openSource, href: '#open-source', icon: FolderDown },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <MonikLogo height={38} light={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-orange-400 hover:bg-slate-900/80 transition-all flex items-center gap-1 xl:gap-1.5 whitespace-nowrap shrink-0"
            >
              {link.icon && <link.icon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-orange-500 opacity-80 shrink-0" />}
              <span className="whitespace-nowrap">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switch & Custom Order CTA */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Language Selectbox */}
          <div className="relative flex items-center">
            <Globe className="w-3.5 h-3.5 text-orange-400 absolute left-2.5 pointer-events-none z-10" />
            <select
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-semibold text-slate-200 hover:border-orange-500/50 focus:border-orange-500 focus:outline-none transition-all cursor-pointer appearance-none"
              title="Select Language / Chọn ngôn ngữ"
            >
              <option value="vi" className="bg-slate-900 text-slate-100">
                VN - Tiếng Việt
              </option>
              <option value="en" className="bg-slate-900 text-slate-100">
                EN - English
              </option>
            </select>
          </div>

          {/* Primary CTA button */}
          <button
            onClick={onOpenOrderModal}
            className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-600/25 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">{t.orderBtn}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Mobile Menu Toggle button */}
        <div className="flex sm:hidden items-center gap-2">
          <select
            value={lang}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="px-2 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-bold text-orange-400 focus:outline-none cursor-pointer"
          >
            <option value="vi" className="bg-slate-900 text-slate-100">VN</option>
            <option value="en" className="bg-slate-900 text-slate-100">EN</option>
          </select>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:bg-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-lg"
            >
              <span>{t.orderBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
