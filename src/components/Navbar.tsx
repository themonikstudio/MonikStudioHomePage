import React, { useState, useEffect } from 'react';
import { MonikLogo } from './MonikLogo';
import { Menu, X, Sparkles, Layers, Info } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'showcase',
      label: 'Products & Releases',
      icon: Layers,
    },
    {
      id: 'about',
      label: 'About Studio',
      icon: Info,
    },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#EBE5DB]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Studio Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center text-left focus:outline-hidden group"
          >
            <MonikLogo variant="horizontal" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors relative flex items-center gap-2 ${
                    isActive
                      ? 'text-[#24282C] bg-[#EBE5DB]/70 font-semibold'
                      : 'text-[#4A5157] hover:text-[#24282C] hover:bg-[#F3EFEA]/70'
                  }`}
                >
                  <Icon size={15} className="text-[#779585]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Explore Catalog */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('showcase')}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#24282C] text-white hover:bg-[#383F46] transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles size={14} className="text-[#CDB07B]" />
              <span>Explore Mobile Catalog</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#24282C] hover:bg-[#F3EFEA]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EBE5DB] px-4 pt-2 pb-5 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-3 text-sm font-medium text-[#24282C] hover:bg-white rounded-xl flex items-center gap-2.5"
              >
                <Icon size={16} className="text-[#779585]" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#EBE5DB]">
            <button
              onClick={() => handleNavClick('showcase')}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-[#24282C] text-white"
            >
              Explore Mobile Catalog
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
