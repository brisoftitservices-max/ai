import React, { useState } from 'react';
import { CONSULTING_PROCESS_STEPS } from '../data/companyData';
import { 
  Compass, 
  Search, 
  Map, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ConsultingProcessProps {
  onOpenConsultation?: () => void;
}

export const ConsultingProcess: React.FC<ConsultingProcessProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [
    Search,
    Compass,
    Map,
    Code2,
    Rocket,
    TrendingUp
  ];

  return (
    <section id="consulting-process-section" className="py-24 bg-[#071224] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Structured Engagement Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our 6-Stage Consulting Lifecycle
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A proven, milestone-driven framework that minimizes operational risk and ensures technical initiatives directly serve executive business objectives.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Flow */}
        <div className="hidden lg:block relative mb-12">
          {/* Horizontal Track Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-800 z-0" />
          <div 
            className="absolute top-1/2 left-8 h-1 -translate-y-1/2 bg-gradient-to-r from-[#146A8B] to-[#F05A28] z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / 5) * 85}%` }}
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {CONSULTING_PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isPassed = idx <= activeStepIndex;
              const Icon = icons[idx];

              return (
                <button
                  key={step.step}
                  id={`process-step-tab-${idx}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 border-[#F05A28] shadow-[0_0_20px_rgba(240,90,40,0.3)] scale-105'
                      : 'bg-[#050D1A]/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#F05A28]' : 'text-slate-400'}`}>
                      STAGE {step.step}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isSelected 
                        ? 'bg-[#F05A28] text-white shadow-md' 
                        : isPassed 
                          ? 'bg-slate-800 text-cyan-300' 
                          : 'bg-slate-900 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white tracking-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="rounded-3xl bg-[#050D1A] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#F05A28]/20 border border-[#F05A28]/40 text-[#F05A28] font-mono text-xs font-bold">
                  STAGE {CONSULTING_PROCESS_STEPS[activeStepIndex].step} &bull; {CONSULTING_PROCESS_STEPS[activeStepIndex].title}
                </span>
                <span className="text-xs font-mono text-cyan-300">
                  Lifecycle Phase
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {CONSULTING_PROCESS_STEPS[activeStepIndex].title} Phase
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {CONSULTING_PROCESS_STEPS[activeStepIndex].description}
              </p>

              {/* Deliverables List */}
              <div className="pt-2 space-y-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Deliverables & Milestones
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CONSULTING_PROCESS_STEPS[activeStepIndex].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#F05A28]/15 border border-[#F05A28]/30 flex items-center justify-center text-[#F05A28] mb-4 shadow-lg">
                {React.createElement(icons[activeStepIndex], { className: 'w-8 h-8' })}
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                Phase Velocity
              </span>
              <h4 className="text-base font-bold text-white mb-4">
                Milestone Verification & Signoff
              </h4>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  &larr; Previous Stage
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {activeStepIndex + 1} of 6
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="lg:hidden mt-8 space-y-3">
          {CONSULTING_PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const Icon = icons[idx];
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected ? 'bg-slate-900 border-[#F05A28]' : 'bg-[#050D1A] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-[#F05A28]">STAGE {step.step}</span>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-300">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
