import React, { useState, useMemo } from 'react';
import { AppItem, AppCategory } from '../types';
import { APPS_DATA } from '../data/apps';
import { useI18n } from '../i18n/LanguageContext';
import {
  ExternalLink,
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
  Chrome,
  QrCode
} from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';

interface AppShowcaseProps {
  onNavigateToPolicy: (path: string) => void;
  onNavigateToApp?: (appId: string) => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ 
  onNavigateToPolicy,
  onNavigateToApp 
}) => {
  const { t, language } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [qrApp, setQrApp] = useState<AppItem | null>(null);

  const categories: { id: AppCategory; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
    { id: 'all', label: `${t.showcase.allProducts} (${APPS_DATA.length})`, icon: Layers },
    { id: 'game', label: `${t.showcase.mobileGames} (${APPS_DATA.filter(a => a.category === 'game').length})`, icon: Gamepad2 },
    { id: 'app', label: `${t.showcase.mobileApps} (${APPS_DATA.filter(a => a.category === 'app').length})`, icon: Wrench },
    { id: 'extension', label: `${t.showcase.chromeExtensions} (${APPS_DATA.filter(a => a.category === 'extension').length})`, icon: Chrome },
  ];

  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((item) => {
      const localized = item.localizations?.[language];
      const title = localized?.title || item.title;
      const tagline = localized?.tagline || item.tagline;

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const handleCardClick = (appId: string) => {
    if (onNavigateToApp) {
      onNavigateToApp(appId);
    }
  };

  return (
    <section id="showcase" className="py-16 md:py-24 bg-[#F4EFEA]/40 border-y border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#779585]/15 text-[#5C826F] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>{t.showcase.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] tracking-tight">
              {t.showcase.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#5A626A] mt-2 max-w-2xl">
              {t.showcase.subheading}
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
                placeholder={t.showcase.searchPlaceholder}
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

        {/* Empty state */}
        {filteredApps.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE4DA] p-8 max-w-md mx-auto">
            <p className="text-sm text-[#5A626A] mb-4">
              {t.showcase.emptySearch}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#24282C] text-white text-xs font-semibold rounded-xl hover:bg-[#3D444C] transition-colors"
            >
              {t.showcase.clearSearch}
            </button>
          </div>
        )}

        {/* Mobile Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => {
            const localized = app.localizations?.[language];
            const title = localized?.title || app.title;
            const tagline = localized?.tagline || app.tagline;
            const features = localized?.features || app.features;

            return (
              <div
                key={app.id}
                id={`app-card-${app.id}`}
                className="bg-white rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Cover Image Container (Clickable) */}
                <div 
                  className="relative aspect-16/9 overflow-hidden bg-[#EFEBE4] cursor-pointer"
                  onClick={() => handleCardClick(app.id)}
                  title={`View dedicated page for ${title}`}
                >
                  <img
                    src={app.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Status Badges Header */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-xs"
                      style={{ backgroundColor: app.accentColor }}
                    >
                      {app.category === 'game'
                        ? t.showcase.mobileGames
                        : app.category === 'extension'
                        ? t.showcase.chromeExtensions
                        : t.showcase.mobileApps}
                    </span>

                    {app.status === 'new_release' ? (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#D86950] text-white shadow-xs">
                        {t.showcase.newRelease}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 backdrop-blur-xs flex items-center gap-1 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {t.showcase.live}
                      </span>
                    )}
                  </div>

                  {/* Bottom title overlay on cover */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-white">
                    {app.icon && (
                      <img
                        src={app.icon}
                        alt={`${title} icon`}
                        className="w-11 h-11 rounded-xl shadow-md border border-white/20 object-cover shrink-0"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-white/80">
                        v{app.version} • {app.sizeMb || 'Under 100MB'} • {app.ageRating}
                      </div>
                      <h3 className="text-lg font-bold drop-shadow-xs leading-snug mt-0.5 truncate group-hover:text-[#CDB07B] transition-colors">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#4A5157] leading-relaxed line-clamp-2">
                      {tagline}
                    </p>

                    {/* Highlights Bullet List */}
                    <ul className="mt-3.5 space-y-1.5">
                      {features.slice(0, 2).map((feat, idx) => (
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
                          <span>Chrome</span>
                          <ExternalLink size={10} className="opacity-60" />
                        </a>
                      )}

                      {/* QR Code Quick Scan Button */}
                      {(app.appStoreUrl || app.playStoreUrl || app.chromeWebStoreUrl) && (
                        <button
                          type="button"
                          onClick={() => setQrApp(app)}
                          className="p-2 bg-[#FAF8F5] hover:bg-[#F0EBE3] text-[#24282C] hover:text-[#D86950] rounded-xl text-xs font-semibold flex items-center justify-center transition-colors border border-[#EAE4DA] shadow-2xs shrink-0"
                          title={`${t.showcase.qrScan}: ${app.title}`}
                          aria-label={`Open QR Code for ${app.title}`}
                        >
                          <QrCode size={15} className="text-[#5C826F]" />
                        </button>
                      )}
                    </div>

                    <a
                      id={`view-details-${app.id}`}
                      href={`/apps/${app.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCardClick(app.id);
                      }}
                      className="w-full py-2 text-xs font-semibold text-[#5A626A] hover:text-[#D86950] flex items-center justify-center gap-1.5 transition-colors bg-[#FAF8F5] hover:bg-[#F3EFEA] rounded-xl border border-[#EAE4DA]"
                    >
                      <span>{t.showcase.viewDetails}</span>
                      <ChevronRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick QR Code Modal */}
      <QRCodeModal
        app={qrApp}
        onClose={() => setQrApp(null)}
      />
    </section>
  );
};
