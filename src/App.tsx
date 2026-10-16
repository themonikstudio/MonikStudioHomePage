import React, { useState, useEffect, useCallback } from 'react';
import { 
  resolvePolicyRoute, 
  resolveAppRoute,
  updateDocumentMeta, 
  DEFAULT_HOME_META, 
  PolicyTabId 
} from './routes';
import { LanguageProvider, useI18n } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppShowcase } from './components/AppShowcase';
import { AboutStudio } from './components/AboutStudio';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { AppLandingPage } from './components/AppLandingPage';
import { ShieldCheck, X } from 'lucide-react';

function AppContent() {
  const { t } = useI18n();

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // Check if user entered via a legacy hash link (e.g. /#privacy)
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const legacyHashMap: Record<string, string> = {
        privacy: '/privacy-policy',
        'privacy-policy': '/privacy-policy',
        terms: '/terms-of-service',
        'terms-of-service': '/terms-of-service',
        'data-deletion': '/data-deletion',
        'data-deletion-instructions': '/data-deletion',
        support: '/support',
        'store-urls': '/store-compliance',
        compliance: '/store-compliance',
      };

      if (legacyHashMap[hash]) {
        const canonical = legacyHashMap[hash];
        window.history.replaceState(null, '', canonical);
        return canonical;
      }

      return window.location.pathname || '/';
    }
    return '/';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  // Navigate handler for clean paths (e.g. /apps/lich-xua, /privacy-policy, /)
  const navigate = useCallback((path: string, scrollToSectionId?: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);

    const appRoute = resolveAppRoute(path);
    if (appRoute) {
      updateDocumentMeta(`${appRoute.title} — Monik Studio`, appRoute.tagline);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const policyRoute = resolvePolicyRoute(path);
    if (policyRoute) {
      updateDocumentMeta(policyRoute.title, policyRoute.description);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      updateDocumentMeta(DEFAULT_HOME_META.title, DEFAULT_HOME_META.description);
      if (scrollToSectionId) {
        setTimeout(() => {
          const el = document.getElementById(scrollToSectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  // Handle browser back / forward buttons (popstate) & custom monik:navigate events
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);

      const appRoute = resolveAppRoute(path);
      if (appRoute) {
        updateDocumentMeta(`${appRoute.title} — Monik Studio`, appRoute.tagline);
        return;
      }

      const policyRoute = resolvePolicyRoute(path);
      if (policyRoute) {
        updateDocumentMeta(policyRoute.title, policyRoute.description);
      } else {
        updateDocumentMeta(DEFAULT_HOME_META.title, DEFAULT_HOME_META.description);
      }
    };

    const handleCustomNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string; sectionId?: string }>;
      if (customEvent.detail?.path) {
        navigate(customEvent.detail.path, customEvent.detail.sectionId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('monik:navigate', handleCustomNavigate);

    // Initial meta tag synchronization
    const initialApp = resolveAppRoute(window.location.pathname);
    if (initialApp) {
      updateDocumentMeta(`${initialApp.title} — Monik Studio`, initialApp.tagline);
    } else {
      const initialRoute = resolvePolicyRoute(window.location.pathname);
      if (initialRoute) {
        updateDocumentMeta(initialRoute.title, initialRoute.description);
      } else {
        updateDocumentMeta(DEFAULT_HOME_META.title, DEFAULT_HOME_META.description);
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('monik:navigate', handleCustomNavigate);
    };
  }, [navigate]);

  // Handle home page in-page smooth scroll navigation
  const handleHomeSectionNavigate = (sectionId: string) => {
    if (currentPath !== '/') {
      navigate('/', sectionId);
    } else {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 1. Check if current path matches an App landing page (/apps/:id)
  const activeApp = resolveAppRoute(currentPath);
  if (activeApp) {
    return (
      <AppLandingPage
        app={activeApp}
        onNavigateHome={() => navigate('/')}
        onNavigateToApp={(appId) => navigate(`/apps/${appId}`)}
        onNavigateToPolicy={(path) => navigate(path)}
      />
    );
  }

  // 2. Check if current path matches any policy route (/privacy-policy, etc.)
  const activePolicyRoute = resolvePolicyRoute(currentPath);
  if (activePolicyRoute) {
    return (
      <LegalPage
        currentTab={activePolicyRoute.tabId}
        currentPath={activePolicyRoute.path}
        onNavigate={(path) => navigate(path)}
      />
    );
  }

  // 3. Main Studio Landing Page (/)
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#24282C] relative font-sans">
      {/* Navigation Bar with Language Selector */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleHomeSectionNavigate}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        <Hero 
          onNavigate={handleHomeSectionNavigate} 
          onNavigateToPolicy={(path) => navigate(path)}
        />
        <AppShowcase 
          onNavigateToPolicy={(path) => navigate(path)} 
          onNavigateToApp={(appId) => navigate(`/apps/${appId}`)}
        />
        <AboutStudio />
      </main>

      {/* Footer with direct links and language switcher */}
      <Footer 
        onNavigateToPolicy={(path) => navigate(path)}
        onNavigateToHomeSection={handleHomeSectionNavigate}
      />

      {/* Apple & Google Privacy Compliance Mini Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-40 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E0D9CE] shadow-lg animate-fade-in text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#779585]/15 text-[#5C826F] rounded-xl shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div className="flex-1">
              <span className="font-bold text-[#24282C] block mb-0.5">
                {t.cookieBanner.title}
              </span>
              <p className="text-[#5A626A] text-[11px] leading-relaxed">
                {t.cookieBanner.desc}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="px-3 py-1 bg-[#24282C] text-white rounded-lg text-[11px] font-semibold hover:bg-[#3B4248] transition-colors"
                >
                  {t.cookieBanner.gotIt}
                </button>
                <a
                  href="/privacy-policy/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/privacy-policy');
                  }}
                  className="text-[#D86950] font-semibold text-[11px] hover:underline"
                >
                  {t.cookieBanner.readPolicy}
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="text-[#9CA3AF] hover:text-[#24282C] p-1"
              aria-label="Close Notice"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
