import React, { useState, useMemo } from 'react';
import { AppItem, AppCategory } from '../types';
import { APPS_DATA } from '../data/apps';
import {
  ExternalLink,
  CheckCircle2,
  Shield,
  Sparkles,
  X,
  ChevronRight,
  Download,
  Smartphone,
  Search,
  Layers,
  Gamepad2,
  Wrench,
  Check,
  Chrome
} from 'lucide-react';

interface AppShowcaseProps {
  onNavigateToPolicy: (path: string) => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ onNavigateToPolicy }) => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

  const categories: { id: AppCategory; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
    { id: 'all', label: `All Products (${APPS_DATA.length})`, icon: Layers },
    { id: 'game', label: `Mobile Games (${APPS_DATA.filter(a => a.category === 'game').length})`, icon: Gamepad2 },
    { id: 'app', label: `Mobile Apps (${APPS_DATA.filter(a => a.category === 'app').length})`, icon: Wrench },
    { id: 'extension', label: `Chrome Extensions (${APPS_DATA.filter(a => a.category === 'extension').length})`, icon: Chrome },
  ];

  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="showcase" className="py-16 md:py-24 bg-[#F4EFEA]/40 border-y border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#779585]/15 text-[#5C826F] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Product Catalog & Releases</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] font-['Outfit'] tracking-tight">
              Games, Apps & Chrome Extensions
            </h2>
            <p className="text-sm sm:text-base text-[#5A626A] mt-2 max-w-2xl">
              Every title and browser extension is built with zero telemetry, privacy-first architecture, and certified compliance for the Apple App Store, Google Play Store, and Chrome Web Store.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games, apps & extensions..."
                className="w-full sm:w-60 pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white border border-[#E0D9CE] text-[#24282C] placeholder:text-[#9CA3AF] focus:outline-hidden focus:border-[#779585] shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#24282C]"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 p-1 bg-white/90 rounded-xl border border-[#E0D9CE] shadow-2xs">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    id={`cat-filter-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-[#24282C] text-white shadow-2xs'
                        : 'text-[#5A626A] hover:text-[#24282C] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredApps.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#E5DFD5]">
            <p className="text-base font-semibold text-[#24282C]">No matching apps or games found</p>
            <p className="text-xs text-[#6B7280] mt-1">Try clearing your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-[#24282C] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Mobile Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image Container */}
              <div className="relative aspect-16/9 overflow-hidden bg-[#EFEBE4]">
                <img
                  src={app.image}
                  alt={app.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Status Badges Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-xs"
                    style={{ backgroundColor: app.accentColor }}
                  >
                    {app.category === 'game'
                      ? 'Mobile Game'
                      : app.category === 'extension'
                      ? 'Chrome Extension'
                      : 'Mobile Utility'}
                  </span>

                  {app.status === 'new_release' ? (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#D86950] text-white shadow-xs">
                      New Release
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 backdrop-blur-xs flex items-center gap-1 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Stores
                    </span>
                  )}
                </div>

                {/* Bottom title overlay on cover */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-white">
                  {app.icon && (
                    <img
                      src={app.icon}
                      alt={`${app.title} icon`}
                      className="w-11 h-11 rounded-xl shadow-md border border-white/20 object-cover shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-white/80">
                      v{app.version} • {app.sizeMb || 'Under 100MB'} • {app.ageRating}
                    </div>
                    <h3 className="text-lg font-bold font-['Outfit'] drop-shadow-xs leading-snug mt-0.5 truncate">
                      {app.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#4A5157] leading-relaxed line-clamp-2">
                    {app.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-3.5 space-y-1.5">
                    {app.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-[#5A626A]">
                        <Check size={13} className="text-[#779585] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-[#F0EBE3]">
                    {app.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#EBE5DB] text-[10px] text-[#6B7280] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions & Store Links */}
                <div className="mt-5 pt-3.5 border-t border-[#F0EBE3] space-y-2.5">
                  <div className="flex items-center gap-2">
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-[#24282C] hover:bg-[#383F46] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                        title="Download on Apple App Store"
                      >
                        <Smartphone size={13} />
                        <span>App Store</span>
                        <ExternalLink size={10} className="opacity-60" />
                      </a>
                    )}

                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-[#779585] hover:bg-[#628070] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                        title="Get on Google Play Store"
                      >
                        <Download size={13} />
                        <span>Google Play</span>
                        <ExternalLink size={10} className="opacity-60" />
                      </a>
                    )}

                    {app.chromeWebStoreUrl && (
                      <a
                        href={app.chromeWebStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-[#24282C] hover:bg-[#383F46] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                        title="Install from Chrome Web Store"
                      >
                        <Chrome size={13} className="text-[#CDB07B]" />
                        <span>Add to Chrome</span>
                        <ExternalLink size={10} className="opacity-60" />
                      </a>
                    )}
                  </div>

                  <button
                    id={`view-details-${app.id}`}
                    onClick={() => setSelectedApp(app)}
                    className="w-full py-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#D86950] flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Full Specifications & Privacy Info</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up">
            {/* Close Button */}
            <button
              id="close-app-modal-btn"
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#24282C] rounded-full border border-[#E0D9CE] shadow-xs transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header Media */}
            <div className="relative aspect-16/9 w-full bg-[#E5DFD5]">
              <img
                src={selectedApp.image}
                alt={selectedApp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24282C]/90 via-[#24282C]/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white flex items-end gap-3.5">
                {selectedApp.icon && (
                  <img
                    src={selectedApp.icon}
                    alt={`${selectedApp.title} icon`}
                    className="w-14 h-14 rounded-2xl shadow-lg border-2 border-white/20 object-cover shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <span
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: selectedApp.accentColor }}
                  >
                    {selectedApp.category === 'game'
                      ? 'Mobile Game'
                      : selectedApp.category === 'extension'
                      ? 'Chrome Extension'
                      : 'Mobile App'}
                  </span>
                  <h3 className="text-2xl font-extrabold font-['Outfit'] mt-1 truncate">
                    {selectedApp.title}
                  </h3>
                  <p className="text-xs text-white/80 font-mono mt-0.5">
                    Version {selectedApp.version} • {selectedApp.category === 'extension' ? `${selectedApp.manifestVersion || 'Manifest V3'} • ${selectedApp.usersCount || 'Community'}` : `Size: ${selectedApp.sizeMb || 'Standard'} • Age Rating: ${selectedApp.ageRating}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold text-[#779585] tracking-wider mb-1.5">
                  About this title
                </h4>
                <p className="text-sm text-[#4A5157] leading-relaxed">
                  {selectedApp.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs uppercase font-bold text-[#779585] tracking-wider mb-2">
                  Key Systems & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedApp.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-[#EBE5DB] flex items-start gap-2.5 text-xs text-[#24282C]"
                    >
                      <CheckCircle2 size={16} className="text-[#779585] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store & Distribution Links */}
              <div className="pt-4 border-t border-[#EBE5DB]">
                <h4 className="text-xs uppercase font-bold text-[#6B7280] tracking-wider mb-3">
                  Store Availability & Official Downloads
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedApp.appStoreUrl && (
                    <a
                      href={selectedApp.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#24282C] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-[#383E44] transition-colors"
                    >
                      <Smartphone size={14} />
                      <span>Apple App Store</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}

                  {selectedApp.playStoreUrl && (
                    <a
                      href={selectedApp.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#779585] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-[#628070] transition-colors"
                    >
                      <Download size={14} />
                      <span>Google Play Store</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}

                  {selectedApp.chromeWebStoreUrl && (
                    <a
                      href={selectedApp.chromeWebStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#24282C] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-[#383E44] transition-colors"
                    >
                      <Chrome size={14} className="text-[#CDB07B]" />
                      <span>Chrome Web Store</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  )}
                </div>
              </div>

              {/* Policy Quick Direct Links for App Reviewers */}
              <div className="p-3.5 bg-white rounded-xl border border-[#EBE5DB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#4A5157]">
                  <Shield size={16} className="text-[#779585]" />
                  <span>Compliant with Apple Guideline 5.1.1 & Google Play Developer Policy</span>
                </div>
                <a
                  href="/privacy-policy/"
                  className="text-[#D86950] font-semibold hover:underline"
                >
                  Open Dedicated Privacy Policy →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
