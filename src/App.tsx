import React, { useState } from 'react';
import { Language, Project } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { PrintEstimator } from './components/PrintEstimator';
import { AiProjectAssistant } from './components/AiProjectAssistant';
import { OpenSourceHub } from './components/OpenSourceHub';
import { ProcessTimeline } from './components/ProcessTimeline';
import { QuoteFormModal } from './components/QuoteFormModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalPrefilledText, setModalPrefilledText] = useState('');

  const handleOpenOrderModal = (prefill = '') => {
    setModalPrefilledText(prefill);
    setIsOrderModalOpen(true);
  };

  const handleSelectProjectForOrder = (project: Project) => {
    const text = lang === 'vi'
      ? `Tôi muốn đặt hàng sản phẩm/dự án: "${project.title[lang]}". (Mã ID: ${project.id}). Kích thước: ${project.dimensions || 'Tiêu chuẩn'}.`
      : `I would like to order project/product: "${project.title[lang]}". (ID: ${project.id}). Dimensions: ${project.dimensions || 'Standard'}.`;
    handleOpenOrderModal(text);
  };

  const handleApplyQuoteToOrder = (quoteDetails: string) => {
    handleOpenOrderModal(quoteDetails);
  };

  const handleRequestBuildIdea = (ideaSummary: string) => {
    handleOpenOrderModal(ideaSummary);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Navigation Bar */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenOrderModal={() => handleOpenOrderModal('')}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenOrderModal={() => handleOpenOrderModal('')}
      />

      {/* Core Capabilities */}
      <CapabilitiesSection lang={lang} />

      {/* Products & Projects Showcase */}
      <ProjectShowcase
        lang={lang}
        onSelectProjectForOrder={handleSelectProjectForOrder}
      />

      {/* 3D Print Cost Estimator */}
      <PrintEstimator
        lang={lang}
        onApplyQuoteToOrder={handleApplyQuoteToOrder}
      />

      {/* AI DIY Assistant */}
      <AiProjectAssistant
        lang={lang}
        onRequestBuildIdea={handleRequestBuildIdea}
      />

      {/* Free Open Source Hub */}
      <OpenSourceHub lang={lang} />

      {/* Creation Process */}
      <ProcessTimeline lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Custom Order / Quote Modal */}
      <QuoteFormModal
        lang={lang}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        prefilledText={modalPrefilledText}
      />
    </div>
  );
}
