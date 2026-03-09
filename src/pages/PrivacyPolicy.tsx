import React from 'react';
import { Header, Footer } from '../components/Navigation';
import { Mail, Globe, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 selection:bg-slate-200 selection:text-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gaming Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(71,85,105,0.15),transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <Globe size={14} className="text-slate-400" />
            Monik Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-medium italic">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Intro Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16">
          <div className="flex gap-6 items-start">
            <div className="w-1.5 h-32 bg-slate-900 rounded-full shrink-0 hidden md:block"></div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Monik Studio develops and publishes a diverse portfolio of <strong className="text-slate-900">mobile games, applications, and browser extensions</strong>. We are committed to protecting your privacy and ensuring a transparent experience across all our digital products.
              </p>
              <p>
                This Privacy Policy explains how we handle information across our different services. By using our games, apps, or extensions, you agree to the terms outlined here.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-100/50 rounded-3xl p-8 mb-20 border border-slate-200/60">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {[
              { id: "section-1", title: "1. General Information" },
              { id: "section-2", title: "2. Mobile Applications (Games)" },
              { id: "section-3", title: "3. Browser Extensions" },
              { id: "section-4", title: "4. Contact Us" }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={`#${item.id}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <span className="text-slate-300 group-hover:text-slate-400 transition-colors">{idx + 1}.</span>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <section id="section-1" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-slate-200">1</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">General Information</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>Monik Studio provides a variety of digital services including mobile games (Freemium and Premium), productivity applications, and browser utilities. Our mission is to provide high-quality entertainment and tools while respecting user privacy.</p>
              <p>We do not sell your personal information to third parties. Any data collected is used solely to provide and improve our services, facilitate in-app features, or display relevant advertisements where applicable.</p>
            </div>
          </section>

          <section id="section-2" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-slate-200">2</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">Mobile Applications (Games)</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>Our mobile games and apps may use third-party services that collect information used to identify you. This includes analytics, crash reporting, and advertising networks.</p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <h4 className="font-bold text-slate-900">Information Collection and Use</h4>
                <p className="text-sm">We may collect Log Data when an error occurs in the app, including device IP, device name, OS version, and usage statistics. This helps us debug and optimize the experience.</p>
                
                <h4 className="font-bold text-slate-900">Third-Party Service Providers</h4>
                <p className="text-sm">We use providers like Google Play Services, AdMob, Unity Ads, and Firebase. These third parties have their own privacy policies regarding data collection.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { name: "Google Play Services", url: "https://www.google.com/policies/privacy/" },
                  { name: "Apple App Store", url: "https://www.apple.com/legal/privacy/" },
                  { name: "Google AdMob", url: "https://support.google.com/admob/answer/6128543" },
                  { name: "Unity Ads", url: "https://unity3d.com/legal/privacy-policy" },
                  { name: "Firebase", url: "https://firebase.google.com/support/privacy" }
                ].map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-sm">{link.name}</span>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="section-3" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-slate-200">3</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">Browser Extensions</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
                <div>
                  <h4 className="font-display font-black text-lg mb-2 text-slate-200 uppercase tracking-wider">Data Privacy</h4>
                  <p className="text-slate-400">Our browser extensions are designed with a "privacy-first" approach. We do not collect, store, or sell any user data. All processing (such as image manipulation or data organization) happens locally within your browser. Your data never leaves your device unless you explicitly initiate a sharing action.</p>
                </div>
                
                <div>
                  <h4 className="font-display font-black text-lg mb-2 text-slate-200 uppercase tracking-wider">Permissions</h4>
                  <p className="text-slate-400">Our extensions request only the minimum permissions necessary to function. This may include <code className="bg-white/10 px-2 py-0.5 rounded text-white">activeTab</code> to interact with the current page or <code className="bg-white/10 px-2 py-0.5 rounded text-white">storage</code> to save your preferences locally. We never use permissions to track your browsing history or access private data.</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-display font-black text-lg mb-2 text-slate-200 uppercase tracking-wider">Affiliate Links & Monetization</h4>
                  <p className="text-slate-400 italic">Some of our extensions and digital products may contain affiliate links to partner services (e.g., design tools or productivity platforms). If you click on these links and make a purchase, Monik Studio may receive a small commission at no additional cost to you. This helps us keep our core tools free and supports our independent development efforts.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="section-4" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-slate-200">4</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">Contact Us</h2>
            </div>
            <p className="mb-8 leading-relaxed">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-slate-200 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Support</h3>
                <a href="mailto:contact@monikstudio.com" className="text-lg font-display font-bold text-slate-900 hover:text-slate-600 transition-colors">
                  contact@monikstudio.com
                </a>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-slate-200 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Official Website</h3>
                <a href="https://monikstudio.com" target="_blank" rel="noopener noreferrer" className="text-lg font-display font-bold text-slate-900 hover:text-slate-600 transition-colors">
                  monikstudio.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>


      <Footer />
    </div>
  );
}
