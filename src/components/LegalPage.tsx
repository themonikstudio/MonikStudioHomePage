import React, { useState } from 'react';
import { POLICIES_DATA, FAQ_DATA } from '../data/policies';
import { CANONICAL_DOMAIN, PolicyTabId, TAB_TO_PATH, POLICY_ROUTES } from '../routes';
import { DataDeletionForm } from './DataDeletionForm';
import { MonikLogo } from './MonikLogo';
import { 
  ArrowLeft, 
  Shield, 
  FileText, 
  Trash2, 
  HelpCircle, 
  Copy, 
  Check, 
  Printer, 
  ExternalLink, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  Globe
} from 'lucide-react';

interface LegalPageProps {
  currentTab: PolicyTabId;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  currentTab,
  currentPath,
  onNavigate,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const domain = CANONICAL_DOMAIN;

  const tabs = [
    {
      id: 'privacy' as PolicyTabId,
      path: '/privacy-policy',
      label: 'Privacy Policy',
      icon: Shield,
      subtitle: 'Apple Guideline 5.1.1 & Google Play Data Safety',
    },
    {
      id: 'terms' as PolicyTabId,
      path: '/terms-of-service',
      label: 'Terms of Service',
      icon: FileText,
      subtitle: 'In-App Purchases & Standard EULA',
    },
    {
      id: 'data-deletion' as PolicyTabId,
      path: '/data-deletion',
      label: 'User Data Deletion',
      icon: Trash2,
      subtitle: 'Google Play Mandatory Deletion URL',
    },
    {
      id: 'support' as PolicyTabId,
      path: '/support',
      label: 'App Support & Help',
      icon: HelpCircle,
      subtitle: 'Restore Purchases & Direct Contact',
    },
    {
      id: 'store-urls' as PolicyTabId,
      path: '/store-compliance',
      label: 'Developer Store URLs',
      icon: ShieldCheck,
      subtitle: 'App Store Connect & Play Console Links',
    },
  ];

  const currentDoc = POLICIES_DATA.find((doc) => doc.id === currentTab);
  const routeMeta = POLICY_ROUTES[currentPath] || POLICY_ROUTES[TAB_TO_PATH[currentTab]];
  const activeCanonicalUrl = `${domain}${TAB_TO_PATH[currentTab]}`;

  const storeSubmissionLinks = [
    {
      id: 'privacy',
      title: 'Privacy Policy URL',
      url: `${domain}/privacy-policy`,
      path: '/privacy-policy',
      storeTarget: 'Required: Apple App Store Connect (App Privacy) & Google Play Console (Data Safety)',
    },
    {
      id: 'support',
      title: 'Support URL',
      url: `${domain}/support`,
      path: '/support',
      storeTarget: 'Required: Apple App Store Connect (App Information > Support URL)',
    },
    {
      id: 'data-deletion',
      title: 'Account / Data Deletion URL',
      url: `${domain}/data-deletion`,
      path: '/data-deletion',
      storeTarget: 'Required: Google Play Console Data Safety section (Account deletion web link)',
    },
    {
      id: 'terms',
      title: 'Terms of Service / EULA URL',
      url: `${domain}/terms-of-service`,
      path: '/terms-of-service',
      storeTarget: 'Recommended: In-App Subscriptions, In-App Purchases, and License Agreements',
    },
    {
      id: 'store-urls',
      title: 'Developer Store Compliance Hub URL',
      url: `${domain}/store-compliance`,
      path: '/store-compliance',
      storeTarget: 'Official public store compliance reference & developer policies hub',
    },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24282C] flex flex-col">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE5DB] shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              id="legal-back-home-btn"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EFEA] border border-[#E0D9CE] text-xs font-semibold text-[#24282C] transition-all shadow-2xs group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5 text-[#D86950]" />
              <span>Back to Studio</span>
            </a>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="hover:opacity-85 transition-opacity"
              title="Monik Studio Home"
            >
              <MonikLogo variant="horizontal" size="sm" />
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Canonical URL indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E0D9CE] text-[11px] font-mono text-[#5A626A]">
              <Globe size={12} className="text-[#779585]" />
              <span className="truncate max-w-[240px]">{activeCanonicalUrl}</span>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E0D9CE] hover:bg-[#F3EFEA] text-xs font-medium text-[#4A5157] transition-colors shadow-2xs"
              title="Print Document or Save as PDF"
            >
              <Printer size={13} />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header Area for Policies */}
      <section className="bg-white border-b border-[#EBE5DB] pt-10 pb-8 sm:pt-14 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#779585]/15 text-[#5C826F] text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} />
                <span>Official Store Compliance & Legal Hub</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#24282C] font-['Outfit']">
                {routeMeta?.heading || 'Policies & Developer Documentation'}
              </h1>
              <p className="text-sm sm:text-base text-[#5A626A] mt-2 max-w-2xl leading-relaxed">
                Published by Monik Studio with certified compliance for the Apple App Store, Google Play Store, and Chrome Web Store.
              </p>
            </div>

            <div className="flex flex-col gap-1 text-xs text-[#6B7280] font-mono bg-[#FAF8F5] p-3 rounded-2xl border border-[#EBE5DB] shrink-0">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#8B939E]">Developer:</span>
                <strong className="text-[#24282C]">Monik Studio</strong>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#8B939E]">Canonical URL:</span>
                <span className="text-[#779585] font-semibold">{TAB_TO_PATH[currentTab]}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#8B939E]">Last Updated:</span>
                <span className="text-[#24282C]">September 2026</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation Bar - Real URLs without anchor links */}
          <nav aria-label="Legal Sections Navigation" className="flex items-center gap-2 mt-8 p-1.5 bg-[#FAF8F5] rounded-2xl border border-[#E0D9CE] overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.path}
                  id={`legal-tab-${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(tab.path);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#24282C] text-white shadow-xs'
                      : 'text-[#4A5157] hover:text-[#24282C] hover:bg-white'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[#CDB07B]' : 'text-[#779585]'} />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1, 2, 3: Markdown / Structured Document from POLICIES_DATA */}
          {currentTab !== 'store-urls' && currentTab !== 'support' && currentDoc && (
            <div className="bg-white rounded-3xl border border-[#E5DFD5] p-6 sm:p-10 shadow-xs">
              {/* Document Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EBE5DB] gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                    <Calendar size={13} className="text-[#779585]" />
                    <span>
                      Effective Date: <strong className="text-[#24282C]">{currentDoc.lastUpdated}</strong>
                    </span>
                    <span>•</span>
                    <span className="font-mono text-[#779585]">Monik Studio</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#24282C] font-['Outfit']">
                    {currentDoc.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(activeCanonicalUrl, 'doc-url')}
                    className="px-3 py-1.5 rounded-lg border border-[#E0D9CE] text-xs font-semibold text-[#4A5157] hover:text-[#24282C] hover:bg-[#FAF8F5] flex items-center gap-1.5 transition-colors"
                    title={`Copy official URL: ${activeCanonicalUrl}`}
                  >
                    {copiedKey === 'doc-url' ? (
                      <>
                        <Check size={13} className="text-[#779585]" />
                        <span className="text-[#779585]">Copied Official URL</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Official URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* URL Reference Pill */}
              <div className="mt-4 px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#6B7280] truncate">
                  <span className="font-semibold text-[#24282C]">Permanent URL:</span>
                  <code className="font-mono text-[#779585] truncate select-all">{activeCanonicalUrl}</code>
                </div>
                <span className="text-[11px] text-[#9CA3AF] hidden sm:inline">Clean dedicated route</span>
              </div>

              {/* Executive Summary */}
              <div className="my-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] text-xs sm:text-sm text-[#4A5157] leading-relaxed">
                <strong className="text-[#24282C] block mb-1">
                  Key Summary for Store Reviewers & Users:
                </strong>
                {currentDoc.summary}
              </div>

              {/* Document Text */}
              <div className="mt-6">
                {currentDoc.content}
              </div>

              {/* Interactive Data Deletion Portal on the data-deletion tab */}
              {currentTab === 'data-deletion' && (
                <div className="mt-10 pt-8 border-t border-[#EBE5DB]">
                  <DataDeletionForm />
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Dedicated Support Desk with In-App Purchase Help & FAQ */}
          {currentTab === 'support' && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl border border-[#E5DFD5] p-6 sm:p-10 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EBE5DB] gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#779585] font-semibold uppercase tracking-wider mb-1">
                      <HelpCircle size={14} />
                      <span>Official Customer Support Desk</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#24282C] font-['Outfit']">
                      App Support & In-App Purchase Assistance
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5A626A] mt-1">
                      Published to meet Apple App Store submission requirements (Support URL) and Google Play guidelines.
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(`${domain}/support`, 'support-url')}
                    className="px-3 py-1.5 rounded-lg border border-[#E0D9CE] text-xs font-semibold text-[#4A5157] hover:text-[#24282C] hover:bg-[#FAF8F5] flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
                  >
                    {copiedKey === 'support-url' ? (
                      <>
                        <Check size={13} className="text-[#779585]" />
                        <span className="text-[#779585]">Copied Support URL</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Support URL</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Instructions for Restoring Purchases */}
                <div className="my-6 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DA] space-y-3">
                  <h3 className="text-sm font-bold text-[#24282C] flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#779585]" />
                    <span>How to Restore Purchases on iOS / Android:</span>
                  </h3>
                  <ol className="list-decimal pl-5 text-xs sm:text-sm text-[#5A626A] space-y-1.5 leading-relaxed">
                    <li>
                      Ensure you are signed into the exact Apple ID or Google Account used for the original transaction.
                    </li>
                    <li>
                      Open the Monik Studio game/app, navigate to Settings &gt; tap &quot;Restore Purchases&quot;.
                    </li>
                    <li>
                      If items do not unlock immediately, please allow up to 5-10 minutes for store receipt synchronization.
                    </li>
                    <li>
                      Need further help? Write directly to <a href="mailto:contact@monikstudio.com" className="text-[#D86950] font-semibold underline">contact@monikstudio.com</a> with your Order Receipt ID (GPA.XXXX).
                    </li>
                  </ol>
                </div>

                {/* FAQ List */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-sm font-bold text-[#24282C] mb-3">
                    Common Troubleshooting Questions (FAQ)
                  </h3>
                  {FAQ_DATA.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE5DB]">
                      <h4 className="text-xs sm:text-sm font-bold text-[#24282C] mb-1.5">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5A626A] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact Box */}
                <div className="mt-8 p-6 rounded-2xl bg-[#24282C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold font-['Outfit']">
                      Need Direct Developer Assistance?
                    </h4>
                    <p className="text-xs text-[#A0A8B0] mt-1">
                      Please email our engineering desk with your device model, app title, and store receipt.
                    </p>
                  </div>
                  <a
                    href="mailto:contact@monikstudio.com?subject=[Monik%20Studio%20Support]%20App%20Inquiry"
                    className="px-5 py-2.5 rounded-xl bg-[#D86950] hover:bg-[#C25840] text-white text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
                  >
                    <Mail size={14} />
                    <span>contact@monikstudio.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Dedicated Developer Store Submission URLs Hub */}
          {currentTab === 'store-urls' && (
            <div className="bg-white rounded-3xl border border-[#E5DFD5] p-6 sm:p-10 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#EBE5DB] gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#779585] font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck size={14} />
                    <span>Store Submission Quick Reference</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#24282C] font-['Outfit']">
                    App Store Connect & Google Play Console Submission URLs
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A626A] mt-1">
                    Dedicated, independent public URLs formatted for direct copy-paste into App Store & Google Play metadata fields. No anchor hashes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {storeSubmissionLinks.map((item) => {
                  const isCopied = copiedKey === item.id;
                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#D1C9BE] transition-colors flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-[#24282C]">
                            {item.title}
                          </span>
                          <a
                            href={item.path}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(item.path);
                            }}
                            className="text-[11px] text-[#779585] hover:underline flex items-center gap-1 font-medium"
                          >
                            <span>Open Page</span>
                            <ExternalLink size={10} />
                          </a>
                        </div>
                        <p className="text-[11px] text-[#6B7280] mb-3">
                          {item.storeTarget}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <code className="flex-1 px-3 py-2 rounded-xl bg-white border border-[#E0D9CE] font-mono text-[11px] text-[#24282C] truncate select-all">
                          {item.url}
                        </code>
                        <button
                          onClick={() => handleCopy(item.url, item.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                            isCopied
                              ? 'bg-[#779585] text-white'
                              : 'bg-white hover:bg-[#FAF8F5] text-[#24282C] border border-[#D9D2C7]'
                          }`}
                          title="Copy URL to clipboard"
                        >
                          {isCopied ? (
                            <>
                              <Check size={13} />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Store Guidelines Checklist */}
              <div className="mt-8 pt-8 border-t border-[#EBE5DB]">
                <h3 className="text-sm font-bold text-[#24282C] mb-4">
                  Store Review Compliance Verification
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5A626A]">
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EBE5DB]">
                    <strong className="text-[#24282C] block mb-1">
                      Apple App Store Guideline 5.1.1 (Data Collection)
                    </strong>
                    Explicit disclosure of all telemetry, analytics identifiers, and in-app purchase tokens with zero unannounced tracking.
                  </div>
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EBE5DB]">
                    <strong className="text-[#24282C] block mb-1">
                      Google Play Data Safety & Account Deletion
                    </strong>
                    Dedicated web-based deletion portal available to any user without requiring an installed application.
                  </div>
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EBE5DB]">
                    <strong className="text-[#24282C] block mb-1">
                      COPPA & Google Play Families Policy
                    </strong>
                    Safe-for-all-ages standards with zero behavioral profiling or sensitive data harvesting.
                  </div>
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EBE5DB]">
                    <strong className="text-[#24282C] block mb-1">
                      Apple Guideline 3.1.1 & Google Play In-App Billing
                    </strong>
                    Clear EULA rules, transparent terms, and straightforward purchase restore mechanisms.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Dedicated Legal Footer */}
      <footer className="bg-white border-t border-[#EBE5DB] py-8 text-xs text-[#6B7280]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Monik Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#808892]">
              Email: <a href="mailto:contact@monikstudio.com" className="font-mono text-[#6B7280] hover:text-[#24282C]">contact@monikstudio.com</a>
            </span>
            <span>•</span>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="text-[#779585] font-semibold hover:underline"
            >
              ← Back to Monik Studio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
