import React, { useState } from 'react';
import { ShieldCheck, Target, Cpu, Users, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ExecutiveBriefingBarProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ExecutiveBriefingBar: React.FC<ExecutiveBriefingBarProps> = ({
  onRouteChange,
  onOpenConsultation
}) => {
  const [activePersona, setActivePersona] = useState<'ceo' | 'cto' | 'data'>('ceo');

  const personaContent = {
    ceo: {
      title: 'For CEOs & Managing Directors',
      headline: 'De-risk technical investments and accelerate operational velocity.',
      points: [
        'Turn legacy data assets into auditable revenue optimization and cost reduction',
        'Deploy pragmatic AI with verifiable ROI rather than speculative research experiments',
        'Establish single-source-of-truth executive reporting for agile board governance'
      ],
      primaryAction: 'Schedule Executive Briefing',
      metricLabel: 'Value Focus',
      metricValue: 'Capital Efficiency & Governance'
    },
    cto: {
      title: 'For CTOs, CIOs & Engineering Directors',
      headline: 'Production-grade architectures engineered for concurrency and security.',
      points: [
        'Idempotent, cloud-native data pipelines with automated schema drift protection',
        'Vendor-neutral technology roadmaps that eliminate expensive vendor lock-in',
        'Hardened enterprise LLM integration with zero data leakage and strict audit logging'
      ],
      primaryAction: 'Review Technical Architecture',
      metricLabel: 'Engineering Focus',
      metricValue: 'Scalability & Zero Tech Debt'
    },
    data: {
      title: 'For Heads of Data & Analytics Leaders',
      headline: 'Eliminate pipeline fires and empower teams with trusted, clean data.',
      points: [
        'Unified lakehouse architectures that bridge raw transactions to analytical models',
        'Enterprise semantic layers that end conflicting departmental KPI definitions',
        'Full-lifecycle MLOps with automated drift detection and feature store governance'
      ],
      primaryAction: 'Explore Data Frameworks',
      metricLabel: 'Platform Focus',
      metricValue: 'Lineage & Sub-Second Querying'
    }
  };

  const activeData = personaContent[activePersona];

  return (
    <section 
      id="executive-5-second-briefing" 
      className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Executive 5-Second Briefing"
    >
      <div className="rounded-2xl sm:rounded-3xl bg-[#081528]/95 backdrop-blur-xl border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-7 lg:p-8">
        {/* Top Segment: 5-Second Decision-Maker Clarity Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#F05A28] font-bold mb-1">
              <Target className="w-3.5 h-3.5" />
              <span>5-Second Executive Briefing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Select Your Strategic Perspective
            </h2>
          </div>

          {/* Persona Switcher Tabs - Mobile scrollable & accessible */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto scrollbar-none">
            <button
              id="briefing-tab-ceo"
              onClick={() => setActivePersona('ceo')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 min-h-[40px] flex items-center gap-2 ${
                activePersona === 'ceo'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>CEO & Leadership</span>
            </button>

            <button
              id="briefing-tab-cto"
              onClick={() => setActivePersona('cto')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 min-h-[40px] flex items-center gap-2 ${
                activePersona === 'cto'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>CTO & CIO</span>
            </button>

            <button
              id="briefing-tab-data"
              onClick={() => setActivePersona('data')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 min-h-[40px] flex items-center gap-2 ${
                activePersona === 'data'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Head of Data</span>
            </button>
          </div>
        </div>

        {/* Dynamic Persona Breakdown */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-300">
                {activeData.title}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-xs text-slate-400">
                {activeData.metricLabel}: <strong className="text-slate-200 font-mono">{activeData.metricValue}</strong>
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              {activeData.headline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeData.points.map((point, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
            <button
              id={`briefing-cta-${activePersona}`}
              onClick={onOpenConsultation}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#F05A28] to-[#E8501E] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white shadow-lg shadow-orange-950/40 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>{activeData.primaryAction}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onRouteChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <span>Explore All 8 Practices</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Bottom High-Confidence Pillars */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span><strong className="text-slate-200">1. What We Do:</strong> Enterprise Data, AI & Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span><strong className="text-slate-200">2. Who We Help:</strong> Global Leaders & Engineering Teams</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
            <span><strong className="text-slate-200">3. Why Us:</strong> Pragmatic Rigor, Zero Buzzword Vanity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span><strong className="text-slate-200">4. Direct Contact:</strong> Gandhinagar HQ &bull; 24h SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
