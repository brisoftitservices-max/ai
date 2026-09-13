import React from 'react';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Info,
  TrendingUp 
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ 
  onOpenConsultationWithService 
}) => {
  return (
    <section id="case-studies-section" className="py-24 bg-[#071224] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Representative Architectures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Illustrative Solutions & Case Studies
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Examining how our strategic data foundations, machine learning models, and automated document workflows solve complex structural challenges.
          </p>

          {/* Mandatory Transparency Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Illustrative Solutions &bull; Representative frameworks demonstrating technical approach</span>
          </div>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((cs) => (
            <div
              key={cs.id}
              id={`case-study-card-${cs.id}`}
              className="rounded-3xl bg-[#050D1A] border border-slate-800 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:shadow-2xl"
            >
              <div className="space-y-4">
                {/* Badge & Industry */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded bg-[#F05A28]/20 text-[#F05A28] border border-[#F05A28]/30">
                    {cs.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {cs.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {cs.title}
                </h3>

                {/* The Challenge */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    The Challenge
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                    The Engineered Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* Capabilities Applied */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Capabilities Applied
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Illustrative Outcome */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Illustrative Outcome
                  </span>
                  <p className="text-xs text-emerald-100/90 leading-relaxed italic">
                    &ldquo;{cs.illustrativeOutcome}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenConsultationWithService?.(cs.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-[#F05A28] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>{cs.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
