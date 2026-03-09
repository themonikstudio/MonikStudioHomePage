import React from 'react';
import { Header, Footer } from '../components/Navigation';
import { Mail, Globe, ShieldAlert, ChevronRight, Swords, Coins, UserCheck, Scale } from 'lucide-react';

export default function TermsAndConditions() {
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
            <ShieldAlert size={14} className="text-slate-400" />
            Monik Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6">
            Terms of Service
          </h1>
          <p className="text-slate-400 font-medium italic">
            Last updated: March 8, 2026
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
                Welcome to <strong className="text-slate-900">Monik Studio</strong>. These Terms of Service ("Terms") govern your access to and use of our video games, mobile applications, browser extensions, websites, and related services (collectively, the "Services").
              </p>
              <p>
                By accessing our games, apps, or extensions, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. We reserve the right to update these terms to reflect changes in our offerings or legal requirements.
              </p>
              <p>
                Our Services are intended for entertainment and utility purposes. We strive to create a fair and enjoyable environment for all users.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-100/50 rounded-3xl p-8 mb-20 border border-slate-200/60">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {[
              { id: "section-1", title: "User Accounts & Eligibility" },
              { id: "section-2", title: "Virtual Items & Currency" },
              { id: "section-3", title: "Code of Conduct & Fair Play" },
              { id: "section-4", title: "Intellectual Property Rights" },
              { id: "section-5", title: "User-Generated Content" },
              { id: "section-6", title: "Updates & Maintenance" },
              { id: "section-7", title: "Limitation of Liability" },
              { id: "section-8", title: "Contact Information" }
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
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                <UserCheck size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">1. User Accounts & Eligibility</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>To access certain features of our games, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
              <p><strong>Age Requirements:</strong> You must be at least 13 years old (or the minimum age required in your country) to create an account. If you are a minor, you represent that your parent or legal guardian has reviewed and agreed to these Terms.</p>
              <p>We reserve the right to suspend or terminate accounts that provide false information or violate our safety guidelines.</p>
            </div>
          </section>

          <section id="section-2" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                <Coins size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">2. Virtual Items & Currency</h2>
            </div>
            <div className="space-y-6 leading-relaxed">
              <p>Our games may include virtual currency (e.g., gems, coins) or virtual items (e.g., skins, weapons). These items are licensed to you, not sold. They have no "real-world" value and cannot be exchanged for legal tender or items of value outside of the game.</p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 font-medium relative pl-16 overflow-hidden">
                <div className="absolute left-6 top-6 w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">!</div>
                All purchases of virtual items and currency are final and non-refundable, except as required by applicable law or platform policies (e.g., Apple App Store or Google Play).
              </div>
              <p>Monik Studio reserves the right to manage, regulate, control, modify, or eliminate virtual items at our sole discretion.</p>
            </div>
          </section>

          <section id="section-3" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                <Swords size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">3. Code of Conduct & Fair Play</h2>
            </div>
            <div className="space-y-6 leading-relaxed">
              <p>To keep our gaming community healthy and competitive, you agree NOT to:</p>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Use cheats, exploits, automation software (bots), or hacks.",
                  "Harass, abuse, or harm other players or Monik Studio staff.",
                  "Trade or sell game accounts or virtual items for real money.",
                  "Disrupt the normal flow of gameplay or server stability."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 font-bold text-slate-700">
                    <ChevronRight size={18} className="text-slate-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Violation of these rules may result in temporary or permanent bans from our games without refund.</p>
            </div>
          </section>

          <section id="section-4" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                <Scale size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">4. Intellectual Property Rights</h2>
            </div>
            <div className="space-y-6 leading-relaxed">
              <p>All content within our games—including characters, storylines, artwork, music, and code—is the exclusive property of Monik Studio or our licensors.</p>
              <p>You are granted a limited, non-exclusive, non-transferable license to use the Services for your personal, non-commercial entertainment. You may not decompile, reverse engineer, or attempt to extract source code from our games.</p>
            </div>
          </section>

          <section id="section-6" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">6</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">6. Updates & Maintenance</h2>
            </div>
            <p className="leading-relaxed">We frequently update our games to add new content, fix bugs, or balance gameplay. These updates may be mandatory. We may also perform scheduled or unscheduled maintenance, which could result in temporary downtime of game servers. Monik Studio is not liable for any loss of progress or data during these periods.</p>
          </section>

          <section id="section-8" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">8</div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">8. Contact Us</h2>
            </div>
            <p className="mb-8 leading-relaxed">If you have any questions about these Terms or need support with our games, please reach out to our team:</p>
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
