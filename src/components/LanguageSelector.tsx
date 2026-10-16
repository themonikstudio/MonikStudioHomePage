import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/LanguageContext';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '../i18n/types';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'footer' | 'compact';
  theme?: 'light' | 'dark';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'navbar',
  theme = 'light'
}) => {
  const { language, setLanguage, languages, currentLangOption } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
          isDark
            ? 'bg-[#2D3339] hover:bg-[#3D444C] text-[#E5E9EF] border border-[#3D444C]'
            : 'bg-white hover:bg-[#FAF8F5] text-[#24282C] border border-[#E0D9CE] shadow-2xs'
        }`}
        title="Change Language"
      >
        <span className="text-sm leading-none" role="img" aria-label={currentLangOption.name}>
          {currentLangOption.flag}
        </span>
        <span className="hidden sm:inline-block font-sans font-semibold text-[11px]">
          {currentLangOption.nativeName}
        </span>
        <span className="sm:hidden font-mono uppercase text-[10px] font-bold">
          {currentLangOption.code}
        </span>
        <ChevronDown size={11} className={`opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-48 rounded-2xl bg-white border border-[#E5DFD5] shadow-xl py-1.5 z-50 animate-fade-in focus:outline-hidden"
        >
          <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-[#8A929B] border-b border-[#F0EBE3]">
            Select Language
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-[#779585]/10 text-[#5C826F] font-semibold'
                      : 'text-[#24282C] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <span className="font-medium">{item.nativeName}</span>
                    <span className="text-[10px] text-[#8A929B]">({item.name})</span>
                  </div>
                  {isSelected && <Check size={13} className="text-[#5C826F]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
