import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import monikLogo from '../images/monik-logo.svg';
import {
  Twitter,
  Youtube,
  Facebook,
  Pin,
  Gamepad2,
  Menu,
  X
} from 'lucide-react';
import { TikTokIcon, PinterestIcon } from './Icons';

export const Header = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDark = variant === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    // If it's an internal hash link
    if (to.startsWith('/#')) {
      const hash = to.substring(1); // e.g. #about
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update hash without jumping
          window.history.pushState(null, '', to);
        }
      }
    } else if (to === '/') {
      if (location.pathname === '/' && !location.hash) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${isDark
      ? 'bg-slate-900/80 border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.3)]'
      : 'bg-white/70 border-slate-100 text-slate-900'
      }`}>
      {/* Gaming Pattern Overlay for Dark Variant */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(71,85,105,0.15),transparent_70%)]"></div>
        </div>
      )}

      {/* Glowing Bottom Line for Gaming Feel */}
      {isDark && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent"></div>
      )}

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-10">
        <Link to="/" onClick={(e) => handleNavClick(e as any, '/')} className="flex items-center gap-4 group">
          <div className={`w-16 h-16 rounded-2xl overflow-hidden border-2 shadow-md group-hover:scale-105 transition-transform bg-white ${isDark ? 'border-slate-500/30 shadow-slate-500/10' : 'border-slate-100'
            }`}>
            <img
              src={monikLogo}
              alt="Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-slate-900 text-white font-black text-xs">MS</div>';
              }}
            />
          </div>
          <span className={`font-display font-black text-2xl tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Monik Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
          <Link to="/" onClick={(e) => handleNavClick(e as any, '/')} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}>Home</Link>
          <Link to="/#about" onClick={(e) => handleNavClick(e as any, '/#about')} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}>About</Link>
          <Link to="/#portfolio" onClick={(e) => handleNavClick(e as any, '/#portfolio')} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}>Portfolio</Link>
          <Link to="/#services" onClick={(e) => handleNavClick(e as any, '/#services')} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}>Services</Link>
          <Link to="/#contact" onClick={(e) => handleNavClick(e as any, '/#contact')} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-slate-300 active:scale-95">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isDark ? "text-white" : "text-slate-900"} />
          ) : (
            <Menu size={24} className={isDark ? "text-white" : "text-slate-900"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-b backdrop-blur-xl shadow-lg transition-all ${isDark
          ? 'bg-slate-900/95 border-white/10 text-white'
          : 'bg-white/95 border-slate-100 text-slate-900'
          }`}>
          <div className="flex flex-col p-6 gap-6 font-bold text-lg uppercase tracking-wider">
            <Link to="/" onClick={(e) => { handleNavClick(e as any, '/'); setIsMobileMenuOpen(false); }} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}>Home</Link>
            <Link to="/#about" onClick={(e) => { handleNavClick(e as any, '/#about'); setIsMobileMenuOpen(false); }} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}>About</Link>
            <Link to="/#games" onClick={(e) => { handleNavClick(e as any, '/#games'); setIsMobileMenuOpen(false); }} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}>Portfolio</Link>
            <Link to="/#services" onClick={(e) => { handleNavClick(e as any, '/#services'); setIsMobileMenuOpen(false); }} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}>Services</Link>
            <Link to="/#contact" onClick={(e) => { handleNavClick(e as any, '/#contact'); setIsMobileMenuOpen(false); }} className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all text-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to === '/' && location.pathname === '/' && !location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="flex items-center gap-5">
            <Link to="/" onClick={(e) => handleNavClick(e as any, '/')} className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-lg block hover:scale-105 transition-transform text-center">
              <img
                src={monikLogo}
                alt="Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-slate-900 text-white font-black text-xl">MS</div>';
                }}
              />
            </Link>
            <div className="font-display font-black text-4xl tracking-tighter text-slate-900">Monik Studio</div>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Monik Studio. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <Twitter size={20} />, url: "https://x.com/MonikStudio" },
            { icon: <TikTokIcon />, url: "https://www.tiktok.com/@monikstudiogames" },
            { icon: <Youtube size={20} />, url: "https://www.youtube.com/@MonikStudioOfficial" },
            { icon: <PinterestIcon />, url: "https://www.pinterest.com/MonikStudioOfficial/" },
            { icon: <Facebook size={20} />, url: "https://www.facebook.com/people/Monik-Studio/61584890277621/" },
            { icon: <Gamepad2 size={20} />, url: "https://monikstudio.itch.io/" }
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-slate-200">
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
