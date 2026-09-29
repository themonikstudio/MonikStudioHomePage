import React from 'react';
import { MonikLogo } from './MonikLogo';
import { ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateToPolicy: (path: string) => void;
  onNavigateToHomeSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateToPolicy,
  onNavigateToHomeSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (e: React.MouseEvent) => {
    if (onNavigateToHomeSection) {
      e.preventDefault();
      onNavigateToHomeSection('showcase');
    }
  };

  return (
    <footer className="bg-[#24282C] text-white border-t border-[#363C42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#363C42]">
          {/* Studio Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <MonikLogo variant="horizontal" size="md" theme="dark" />
            <p className="text-xs sm:text-sm text-[#A0A8B0] leading-relaxed max-w-sm">
              Monik Studio is an independent digital studio dedicated to crafting delightful, mindful mobile games, native apps, and lightweight Chrome extensions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#779585] block">
              Releases & Extensions
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#A0A8B0]">
              <ul className="space-y-2">
                <li className="text-[#CDB07B] font-semibold text-[11px] uppercase tracking-wider">
                  iOS Apps
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/l%E1%BB%8Bch-x%C6%B0a-l%E1%BB%8Bch-%C3%A2m-v%E1%BA%A1n-ni%C3%AAn/id6816468574"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Lịch Xưa</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#CDB07B] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/lynote-draw-music/id6814047781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Lynote</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#CDB07B] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/docushelf/id6813003627"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>DocuShelf</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#CDB07B] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/knife-shooter-hit-top/id1525110538"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Knife Shooter</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#CDB07B] transition-colors" />
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-[#D86950] font-semibold text-[11px] uppercase tracking-wider">
                  Chrome Extensions
                </li>
                <li>
                  <a
                    href="https://chromewebstore.google.com/detail/monikshot-easy-screenshot/mplmcjkilfpnhccddaekpmheeecdnpcb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>MonikShot</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#D86950] transition-colors" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://chromewebstore.google.com/detail/monik-shorts-block/oifnddgbopilelbhdncceokibmccgpja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Shorts Block</span>
                    <ExternalLink size={10} className="text-[#808892] group-hover:text-[#D86950] transition-colors" />
                  </a>
                </li>
                <li className="pt-1">
                  <a
                    href="/#showcase"
                    onClick={handleProductClick}
                    className="text-[#779585] hover:text-white font-medium transition-colors inline-flex items-center gap-1"
                  >
                    <span>All Products →</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* App Store & Google Play Legal Policies - Dedicated Clean URLs */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D86950]">
              <ShieldCheck size={14} />
              <span>Store Compliance & Legal Hub</span>
            </div>
            <p className="text-[11px] text-[#808892]">
              Official public URLs for Apple App Store & Google Play Console review submission.
            </p>
            <ul className="space-y-2 text-xs text-[#A0A8B0]">
              <li>
                <a
                  href="/privacy-policy/"
                  className="hover:text-white transition-colors text-left block"
                >
                  Privacy Policy (Apple & Google Play)
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service/"
                  className="hover:text-white transition-colors text-left block"
                >
                  Terms of Service & EULA
                </a>
              </li>
              <li>
                <a
                  href="/data-deletion/"
                  className="hover:text-white transition-colors text-left block text-[#D86950]"
                >
                  User Data Deletion Request Instructions
                </a>
              </li>
              <li>
                <a
                  href="/support/"
                  className="hover:text-white transition-colors text-left block"
                >
                  Support URL & In-App Purchase Assistance
                </a>
              </li>
              <li>
                <a
                  href="/store-compliance/"
                  className="hover:text-white transition-colors text-left block text-[#779585]"
                >
                  Developer Store Compliance URLs Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Store Trademarks & Legal Notice */}
        <div className="py-6 border-b border-[#363C42]/60 text-[11px] text-[#717882] leading-relaxed">
          <p>
            Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play, the Google Play logo, Google Chrome, and Chrome Web Store are trademarks of Google LLC.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808892] gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Monik Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#808892]">
              Email: <a href="mailto:contact@monikstudio.com" className="font-mono text-[#A0A8B0] hover:text-white transition-colors">contact@monikstudio.com</a>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#2D3339] hover:bg-[#3D444C] text-[#CDB07B] transition-colors flex items-center gap-1"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
