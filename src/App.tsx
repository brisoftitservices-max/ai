import React, { useState } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutiveBriefingBar } from './components/ExecutiveBriefingBar';
import { GlobalPresence } from './components/GlobalPresence';
import { InteractiveEcosystem } from './components/InteractiveEcosystem';
import { ServicesSection } from './components/ServicesSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { LeadershipSection } from './components/LeadershipSection';
import { WhyBrisoftSection } from './components/WhyBrisoftSection';
import { ConsultingProcess } from './components/ConsultingProcess';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MobileConversionBar } from './components/MobileConversionBar';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationService, setConsultationService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    } else {
      setConsultationService('General Consultation');
    }
    setIsConsultationOpen(true);
  };

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  return (
    <div className="min-h-screen bg-[#050D1A] text-slate-100 font-sans selection:bg-[#F05A28] selection:text-white flex flex-col antialiased overflow-x-hidden pb-16 md:pb-0">
      {/* Primary Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Areas based on selected Route */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <>
            <Hero
              onRouteChange={handleRouteChange}
              onOpenConsultation={() => handleOpenConsultation()}
            />
            
            {/* 5-Second Executive Briefing for Decision Makers (CEO, CTO, Head of Data) */}
            <ExecutiveBriefingBar
              onRouteChange={handleRouteChange}
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* Premium Interactive Services Experience */}
            <ServicesSection
              onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
            />

            {/* Global Reach & Headquarters */}
            <GlobalPresence
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* Interactive End-to-End Technology Ecosystem */}
            <InteractiveEcosystem />

            {/* 7-Stage Delivery Journey */}
            <WhatWeDoSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* Why Brisoft - 6 Distinct Strategic Pillars */}
            <WhyBrisoftSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 6-Stage Consulting Process */}
            <ConsultingProcess
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 10 Industry Domains */}
            <IndustriesSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* Illustrative Case Studies */}
            <CaseStudiesSection
              onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
            />

            {/* Executive Leadership: Kajal G, MD & CEO */}
            <LeadershipSection />

            {/* Client Testimonials */}
            <TestimonialsSection />

            {/* Insights & Editorial Perspectives */}
            <InsightsSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* Direct Inquiries & Consultation Form */}
            <ContactSection initialService={consultationService} />
          </>
        )}

        {currentRoute === 'what-we-do' && (
          <div className="pt-24">
            <WhatWeDoSection onOpenConsultation={() => handleOpenConsultation()} />
            <InteractiveEcosystem />
            <ConsultingProcess onOpenConsultation={() => handleOpenConsultation()} />
            <ContactSection initialService="Architecture & Delivery Inquiries" />
          </div>
        )}

        {currentRoute === 'services' && (
          <div className="pt-24">
            <ServicesSection
              onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
            />
            <InteractiveEcosystem />
            <IndustriesSection
              onOpenConsultation={() => handleOpenConsultation()}
            />
            <CaseStudiesSection
              onOpenConsultationWithService={(svc) => handleOpenConsultation(svc)}
            />
            <ContactSection initialService={consultationService} />
          </div>
        )}

        {currentRoute === 'who-we-are' && (
          <div className="pt-24">
            <LeadershipSection />
            <WhyBrisoftSection onOpenConsultation={() => handleOpenConsultation()} />
            <GlobalPresence onOpenConsultation={() => handleOpenConsultation()} />
            <TestimonialsSection />
            <ContactSection initialService="Leadership & Strategic Partnership" />
          </div>
        )}

        {currentRoute === 'insights' && (
          <div className="pt-24">
            <InsightsSection onOpenConsultation={() => handleOpenConsultation()} />
            <ContactSection initialService="Research & Advisory Consultation" />
          </div>
        )}

        {currentRoute === 'careers' && (
          <div className="pt-24">
            <CareersSection />
            <WhyBrisoftSection onOpenConsultation={() => handleOpenConsultation()} />
          </div>
        )}

        {currentRoute === 'contact' && (
          <div className="pt-24">
            <ContactSection initialService={consultationService} />
            <GlobalPresence onOpenConsultation={() => handleOpenConsultation()} />
          </div>
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={consultationService}
      />

      {/* Sticky Mobile Conversion Bar */}
      <MobileConversionBar
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
