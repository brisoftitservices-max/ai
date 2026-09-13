import React, { useState } from 'react';
import { WHAT_WE_DO_JOURNEY } from '../data/companyData';
import { 
  Compass, 
  PenTool, 
  Database, 
  BarChart3, 
  Cpu, 
  Cog, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

interface WhatWeDoSectionProps {
  onOpenConsultation?: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenConsultation }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const icons = [
    Compass,
    PenTool,
    Database,
    BarChart3,
    Cpu,
    Cog,
    TrendingUp
  ];

  return (
    <section id="what-we-do-section" className="py-24 bg-[#050D1A] relative overflow-hidden">
      {/* Background Subtle Tech Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#146A8B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F05A28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>The Brisoft Delivery Paradigm</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Data to Intelligence to Action
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our structured 7-stage approach bridges strategic discovery, resilient platform engineering, and high-impact automation to deliver sustainable enterprise transformation.
          </p>
        </div>

        {/* The Visual Journey: Interactive Journey Steps */}
        <div className="space-y-6">
          {/* Mobile Stage Selector Strip */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-none snap-x">
            {WHAT_WE_DO_JOURNEY.map((item, idx) => {
              const isSelected = activeStage === idx;
              const Icon = icons[idx];
              return (
                <button
                  key={item.number}
                  id={`mobile-journey-step-btn-${idx}`}
                  onClick={() => setActiveStage(idx)}
                  className={`flex-shrink-0 snap-start flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all min-h-[44px] ${
                    isSelected
                      ? 'bg-[#F05A28] border-[#F05A28] text-white shadow-lg shadow-orange-950/40'
                      : 'bg-[#091526] border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">{item.number}</span>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Top Progress Track on Desktop */}
          <div className="hidden lg:grid grid-cols-7 gap-2 pb-2">
            {WHAT_WE_DO_JOURNEY.map((item, idx) => {
              const isSelected = activeStage === idx;
              const Icon = icons[idx];
              return (
                <button
                  key={item.number}
                  id={`journey-step-btn-${idx}`}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 border-[#F05A28] shadow-[0_0_20px_rgba(240,90,40,0.25)]'
                      : 'bg-[#091526]/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      STAGE {item.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F05A28]' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight Card for Active Stage */}
          <div className="rounded-3xl bg-gradient-to-br from-[#081528] via-[#050E1C] to-[#081528] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#F05A28]/20 border border-[#F05A28]/40 text-[#F05A28] font-mono text-xs font-bold">
                    STEP {WHAT_WE_DO_JOURNEY[activeStage].number} OF 07
                  </span>
                  <span className="text-xs font-mono text-cyan-300">
                    Brisoft Strategic Roadmap
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {WHAT_WE_DO_JOURNEY[activeStage].title}
                </h3>

                <p className="text-lg text-slate-200 font-semibold leading-snug">
                  {WHAT_WE_DO_JOURNEY[activeStage].summary}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {WHAT_WE_DO_JOURNEY[activeStage].body}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-[#F05A28]/15 border border-[#F05A28]/30 flex items-center justify-center text-[#F05A28] mb-4">
                  {React.createElement(icons[activeStage], { className: 'w-8 h-8' })}
                </div>

                <div className="text-center w-full">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Continuous Phase
                  </div>
                  <div className="text-sm font-bold text-white mb-4">
                    {WHAT_WE_DO_JOURNEY[activeStage].title} Framework
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 6))}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      &larr; Prev
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {activeStage + 1} / 7
                    </span>
                    <button
                      onClick={() => setActiveStage((prev) => (prev < 6 ? prev + 1 : 0))}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Steps Accordion / List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:hidden pt-4">
            {WHAT_WE_DO_JOURNEY.map((item, idx) => {
              const Icon = icons[idx];
              const isSelected = activeStage === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected ? 'bg-slate-900 border-[#F05A28]' : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[#F05A28]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400">STEP {item.number}</span>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">{item.summary}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom CTA */}
        {onOpenConsultation && (
          <div className="mt-14 text-center">
            <button
              id="what-we-do-cta-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-900 hover:bg-[#F05A28] border border-slate-700 hover:border-[#F05A28] text-white transition-all duration-200"
            >
              <span>Align Your Technology Roadmap With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
