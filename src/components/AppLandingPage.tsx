import React, { useState, useEffect } from 'react';
import { AppItem } from '../types';
import { APPS_DATA } from '../data/apps';
import { useI18n } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { MonikLogo } from './MonikLogo';
import { Footer } from './Footer';
import {
  ArrowLeft,
  Share2,
  Check,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Download,
  Chrome,
  ExternalLink,
  Sparkles,
  Layers,
  Award,
  Lock,
  ChevronRight,
  HardDrive,
  FileCode,
  Tag,
  QrCode
} from 'lucide-react';
import { QRCodeCard } from './QRCodeCard';

interface AppLandingPageProps {
  app: AppItem;
  onNavigateHome: () => void;
  onNavigateToApp: (appId: string) => void;
  onNavigateToPolicy: (path: string) => void;
}

export const AppLandingPage: React.FC<AppLandingPageProps> = ({
  app,
  onNavigateHome,
  onNavigateToApp,
  onNavigateToPolicy
}) => {
  const { t, language } = useI18n();
  const [copied, setCopied] = useState(false);
  const [showInlineQr, setShowInlineQr] = useState(false);

  // Get localized content for this app if available
  const localized = app.localizations?.[language];
  const displayTitle = localized?.title || app.title;
  const displayTagline = localized?.tagline || app.tagline;
  const displayDescription = localized?.description || app.description;
  const displayFeatures = localized?.features || app.features;
  const displayWhatsNew = localized?.whatsNew || app.whatsNew;
  const displayHighlights = localized?.highlights || app.highlights || [];

  // Sync document title and meta for SEO
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const pageTitle = `${displayTitle} — Monik Studio`;
    const pageDesc = displayTagline;

    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && app.image) ogImage.setAttribute('content', app.image);

    // Scroll to top upon landing
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [displayTitle, displayTagline, app.image]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: displayTitle,
          text: displayTagline,
          url: url,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // ignore
    }
  };

  // Other products by studio excluding current
  const relatedApps = APPS_DATA.filter((item) => item.id !== app.id).slice(0, 3);

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': app.category === 'extension' ? 'WebApplication' : 'MobileApplication',
    name: displayTitle,
    description: displayTagline,
    applicationCategory: app.category === 'game' ? 'GameApplication' : 'UtilitiesApplication',
    operatingSystem: app.platforms.join(', '),
    softwareVersion: app.version,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Monik Studio',
      url: 'https://monikstudio.com',
    },
    downloadUrl: app.appStoreUrl || app.playStoreUrl || app.chromeWebStoreUrl || 'https://monikstudio.com',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#24282C] relative font-sans">
      {/* Dynamic Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="p-2 rounded-xl text-[#6B7280] hover:text-[#24282C] hover:bg-[#F0EBE3] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title={t.landing.backToStudio}
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">{t.landing.backToStudio}</span>
            </button>
            <div className="h-5 w-px bg-[#EAE4DA] hidden sm:block" />
            <div className="cursor-pointer" onClick={onNavigateHome}>
              <MonikLogo variant="horizontal" size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Share Button */}
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-xl bg-white border border-[#E0D9CE] text-[#24282C] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
              title="Share this App"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#5C826F]" />
                  <span className="text-[#5C826F]">{t.landing.shareCopied}</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-[#779585]" />
                  <span>{t.landing.share}</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <LanguageSelector variant="compact" />
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-[#FAF8F5] border-b border-[#EAE4DA]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#808892]">
            <button onClick={onNavigateHome} className="hover:text-[#24282C] transition-colors">
              {t.nav.home}
            </button>
            <ChevronRight size={12} className="opacity-50" />
            <button onClick={onNavigateHome} className="hover:text-[#24282C] transition-colors">
              {t.nav.catalog}
            </button>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-[#24282C] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {displayTitle}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* App Hero Section */}
        <section className="py-10 md:py-16 bg-white border-b border-[#EAE4DA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: App Info & Store CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-start gap-4">
                  {app.icon && (
                    <img
                      src={app.icon}
                      alt={`${displayTitle} App Icon`}
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl object-cover shadow-md border border-[#EAE4DA] shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {app.status === 'new_release' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D86950]/15 text-[#D86950] text-[11px] font-bold uppercase tracking-wider">
                          {t.showcase.newRelease}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#6B7280] text-[11px] font-semibold uppercase tracking-wider">
                        v{app.version}
                      </span>
                      {app.sizeMb && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#6B7280] text-[11px] font-mono">
                          {app.sizeMb}
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] leading-tight">
                      {displayTitle}
                    </h1>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#4A5157] leading-relaxed">
                  {displayTagline}
                </p>

                {/* What's New in Version Release Notes */}
                {displayWhatsNew && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#D86950]/5 border border-[#D86950]/20 flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-[#D86950]/15 text-[#D86950] shrink-0 mt-0.5">
                      <Sparkles size={16} />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D86950]">
                          {t.landing.whatsNew}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-white border border-[#D86950]/30 text-[10px] font-mono font-bold text-[#D86950]">
                          v{app.version}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3A4148] leading-relaxed">
                        {displayWhatsNew}
                      </p>
                    </div>
                  </div>
                )}

                {/* Platform Download Actions & QR Scanner */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE5DB] space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#779585]">
                      {t.landing.installOnDevice}
                    </div>
                    <span className="text-[11px] text-[#6B7280] font-medium hidden sm:inline">
                      Official Store Downloads
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-[#24282C] hover:bg-[#383F46] text-white rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-sm group"
                      >
                        <Smartphone size={16} />
                        <div className="text-left leading-tight">
                          <div className="text-[10px] text-white/70 uppercase">Download on</div>
                          <div className="font-bold">Apple App Store</div>
                        </div>
                        <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}

                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-[#779585] hover:bg-[#628070] text-white rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-sm group"
                      >
                        <Download size={16} />
                        <div className="text-left leading-tight">
                          <div className="text-[10px] text-white/70 uppercase">Get it on</div>
                          <div className="font-bold">Google Play</div>
                        </div>
                        <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}

                    {app.chromeWebStoreUrl && (
                      <a
                        href={app.chromeWebStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-[#24282C] hover:bg-[#383F46] text-white rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-sm group"
                      >
                        <Chrome size={16} className="text-[#CDB07B]" />
                        <div className="text-left leading-tight">
                          <div className="text-[10px] text-white/70 uppercase">Available in</div>
                          <div className="font-bold">Chrome Web Store</div>
                        </div>
                        <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}

                    {/* QR Code Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setShowInlineQr(prev => !prev)}
                      className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-2xs border ${
                        showInlineQr
                          ? 'bg-[#24282C] text-white border-[#24282C]'
                          : 'bg-white hover:bg-[#F3EFEA] text-[#24282C] border-[#E0D9CE]'
                      }`}
                      title={t.landing.qrScanTitle}
                    >
                      <QrCode size={16} className={showInlineQr ? 'text-white' : 'text-[#5C826F]'} />
                      <div className="text-left leading-tight">
                        <div className="text-[10px] opacity-70 uppercase">Instant Phone Scan</div>
                        <div className="font-bold">{showInlineQr ? 'Hide QR Code' : t.landing.qrScanTitle}</div>
                      </div>
                    </button>
                  </div>

                  {/* Inline Animated QR Code Card when toggled in hero */}
                  {showInlineQr && (
                    <div className="pt-2 animate-fade-in">
                      <QRCodeCard app={app} className="w-full shadow-sm" />
                    </div>
                  )}
                </div>

                {/* Privacy Guarantee Banner */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#779585]/10 border border-[#779585]/20 text-xs text-[#24282C]">
                  <ShieldCheck size={20} className="text-[#5C826F] shrink-0" />
                  <div className="leading-snug">
                    <span className="font-bold block text-[#5C826F]">
                      {t.landing.privacyTitle}
                    </span>
                    <span className="text-[#5A626A] text-[11px]">
                      {t.landing.privacyDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Screenshot / Promo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-sm sm:max-w-md w-full rounded-3xl overflow-hidden border border-[#EAE4DA] shadow-xl bg-white p-2">
                  <img
                    src={app.image}
                    alt={`${displayTitle} Screenshot`}
                    className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="p-3 bg-white flex items-center justify-between text-xs text-[#6B7280]">
                    <span className="font-medium font-mono">100% Real Store Asset</span>
                    <span className="text-[#779585] font-semibold flex items-center gap-1">
                      <CheckCircle2 size={12} /> Verified Store Build
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-12 md:py-16 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#779585]/15 text-[#5C826F] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles size={13} />
                <span>{t.landing.keyHighlights}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24282C]">
                Official Store Highlights & Innovations
              </h2>
            </div>

            {/* Rich Store Highlights Cards */}
            {displayHighlights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {displayHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-3xl border border-[#EBE5DB] shadow-2xs hover:border-[#779585]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-lg bg-[#779585]/10 text-[#5C826F] uppercase">
                          Highlight #{idx + 1}
                        </span>
                        <Sparkles size={14} className="text-[#CDB07B] opacity-70 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#24282C] mb-2 group-hover:text-[#D86950] transition-colors">
                        {hl.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A626A] leading-relaxed">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Complete Feature Checklist */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#EBE5DB] shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#779585] mb-5 flex items-center gap-2">
                <CheckCircle2 size={16} /> Detailed Store Feature Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4DA] flex items-start gap-3"
                  >
                    <div className="p-1 rounded-lg bg-[#779585]/15 text-[#5C826F] shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#779585] uppercase tracking-wider block mb-0.5">
                        Feature #{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#3A4148] leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Overview & Tech Specifications */}
        <section className="py-12 md:py-16 bg-white border-t border-[#EAE4DA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Detailed Overview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D86950]/15 text-[#D86950] text-xs font-semibold uppercase tracking-wider">
                  <Layers size={13} />
                  <span>{t.landing.detailedOverview}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#24282C]">
                  About {displayTitle}
                </h3>
                <div className="prose text-sm text-[#4A5157] leading-relaxed space-y-3">
                  <p>{displayDescription}</p>
                </div>

                {/* Tags Chips */}
                <div className="pt-4 border-t border-[#EAE4DA]">
                  <div className="text-xs font-semibold text-[#808892] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Tag size={13} /> Keywords & Tags
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#EAE4DA] text-xs text-[#5A626A] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4DA] p-6 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAE4DA]">
                    <h3 className="text-sm font-bold text-[#24282C] flex items-center gap-2">
                      <FileCode size={16} className="text-[#779585]" />
                      <span>{t.landing.specifications}</span>
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-[#EAE4DA] text-[#5C826F] font-bold">
                      {t.landing.complianceVerified}
                    </span>
                  </div>

                  <dl className="divide-y divide-[#EAE4DA]/60 text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6B7280]">{t.landing.platform}</dt>
                      <dd className="font-semibold text-[#24282C] uppercase font-mono">
                        {app.platforms.join(' / ')}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6B7280]">{t.landing.category}</dt>
                      <dd className="font-semibold text-[#24282C] capitalize">
                        {app.category}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6B7280]">{t.landing.version}</dt>
                      <dd className="font-semibold text-[#24282C] font-mono">
                        v{app.version}
                      </dd>
                    </div>

                    {/* Official Store ID */}
                    {app.storeId && (
                      <div className="py-2.5 flex justify-between items-center gap-2">
                        <dt className="text-[#6B7280]">{t.landing.storeId}</dt>
                        <dd className="font-semibold text-[#24282C] font-mono text-right select-all truncate max-w-[190px]">
                          {app.storeId}
                        </dd>
                      </div>
                    )}

                    {/* Bundle ID / Package Name */}
                    {app.bundleId && (
                      <div className="py-2.5 flex justify-between items-center gap-2">
                        <dt className="text-[#6B7280]">{t.landing.bundleId}</dt>
                        <dd className="font-semibold text-[#24282C] font-mono text-right select-all truncate max-w-[190px]">
                          {app.bundleId}
                        </dd>
                      </div>
                    )}

                    {/* Pricing */}
                    {app.pricing && (
                      <div className="py-2.5 flex justify-between items-start gap-2">
                        <dt className="text-[#6B7280]">{t.landing.pricing}</dt>
                        <dd className="font-semibold text-[#5C826F] text-right max-w-[210px]">
                          {app.pricing}
                        </dd>
                      </div>
                    )}

                    {/* Requirements */}
                    {app.requirements && (
                      <div className="py-2.5 flex justify-between items-start gap-2">
                        <dt className="text-[#6B7280]">{t.landing.requirements}</dt>
                        <dd className="font-medium text-[#24282C] text-right max-w-[210px]">
                          {app.requirements}
                        </dd>
                      </div>
                    )}

                    {/* Device Compatibility */}
                    {app.compatibility && app.compatibility.length > 0 && (
                      <div className="py-2.5 flex justify-between items-start gap-2">
                        <dt className="text-[#6B7280]">{t.landing.compatibility}</dt>
                        <dd className="font-medium text-[#24282C] text-right max-w-[210px]">
                          {app.compatibility.join(', ')}
                        </dd>
                      </div>
                    )}

                    {/* Extension Manifest Version */}
                    {app.manifestVersion && (
                      <div className="py-2.5 flex justify-between items-center gap-2">
                        <dt className="text-[#6B7280]">Manifest Standard</dt>
                        <dd className="font-semibold text-[#24282C] font-mono">
                          {app.manifestVersion}
                        </dd>
                      </div>
                    )}

                    {app.sizeMb && (
                      <div className="py-2.5 flex justify-between">
                        <dt className="text-[#6B7280]">{t.landing.downloadSize}</dt>
                        <dd className="font-semibold text-[#24282C] font-mono">
                          {app.sizeMb}
                        </dd>
                      </div>
                    )}
                    {app.ageRating && (
                      <div className="py-2.5 flex justify-between">
                        <dt className="text-[#6B7280]">{t.landing.ageRating}</dt>
                        <dd className="font-semibold text-[#24282C]">
                          {app.ageRating}
                        </dd>
                      </div>
                    )}
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6B7280]">{t.landing.offlineMode}</dt>
                      <dd className="font-semibold text-[#5C826F] flex items-center gap-1">
                        <Check size={13} /> {t.landing.offlineModeYes}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#6B7280]">{t.landing.telemetry}</dt>
                      <dd className="font-semibold text-[#5C826F] flex items-center gap-1">
                        <Lock size={12} /> {t.landing.telemetryZero}
                      </dd>
                    </div>
                  </dl>

                  {/* Legal quick links */}
                  <div className="pt-3 border-t border-[#EAE4DA] flex flex-wrap gap-2 text-[11px]">
                    <a
                      href="/privacy-policy/"
                      onClick={(e) => { e.preventDefault(); onNavigateToPolicy('/privacy-policy'); }}
                      className="text-[#779585] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-[#808892]">•</span>
                    <a
                      href="/terms-of-service/"
                      onClick={(e) => { e.preventDefault(); onNavigateToPolicy('/terms-of-service'); }}
                      className="text-[#779585] hover:underline"
                    >
                      Terms of Service
                    </a>
                    <span className="text-[#808892]">•</span>
                    <a
                      href="/data-deletion/"
                      onClick={(e) => { e.preventDefault(); onNavigateToPolicy('/data-deletion'); }}
                      className="text-[#D86950] hover:underline"
                    >
                      Data Deletion
                    </a>
                  </div>
                </div>

                {/* Permanent QR Code Card for Desktop Visitors */}
                <div className="mt-6">
                  <QRCodeCard app={app} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Apps Carousel / Grid */}
        <section className="py-12 md:py-16 bg-[#FAF8F5] border-t border-[#EAE4DA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#24282C]">
                  {t.landing.moreAppsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A626A] mt-1">
                  {t.landing.moreAppsSubtitle}
                </p>
              </div>
              <button
                onClick={onNavigateHome}
                className="text-xs font-semibold text-[#D86950] hover:underline flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedApps.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNavigateToApp(item.id)}
                  className="p-5 bg-white rounded-2xl border border-[#EAE4DA] shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-12 h-12 rounded-2xl object-cover border border-[#EAE4DA] shadow-xs"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center text-[#D86950]">
                          <Smartphone size={20} />
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-[#808892] uppercase">
                          {item.category} • v{item.version}
                        </span>
                        <h4 className="text-sm font-bold text-[#24282C] group-hover:text-[#D86950] transition-colors truncate">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-[#5A626A] line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold text-[#779585]">
                    <span>View Dedicated Page</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onNavigateToPolicy={onNavigateToPolicy}
        onNavigateToHomeSection={onNavigateHome}
      />
    </div>
  );
};
