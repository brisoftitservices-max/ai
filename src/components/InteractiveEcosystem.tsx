import React, { useState } from 'react';
import { ECOSYSTEM_STEPS } from '../data/ecosystemData';
import { ArrowDown, CheckCircle, Sparkles, ChevronRight, Layers, Cpu, Database, BarChart3, Bot, TrendingUp, ShieldCheck } from 'lucide-react';

interface InteractiveEcosystemProps {
  onSelectService?: (serviceId: string) => void;
}

export const InteractiveEcosystem: React.FC<InteractiveEcosystemProps> = ({ onSelectService }) => {
  const [selectedStepId, setSelectedStepId] = useState<string>(ECOSYSTEM_STEPS[0].id);

  const selectedStep = ECOSYSTEM_STEPS.find(s => s.id === selectedStepId) || ECOSYSTEM_STEPS[0];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return Database;
      case 1: return Layers;
      case 2: return BarChart3;
      case 3: return TrendingUp;
      case 4: return Cpu;
      case 5: return Sparkles;
      case 6: return Bot;
      case 7: return ShieldCheck;
      default: return CheckCircle;
    }
  };

  return (
    <section id="technology-ecosystem-section" className="py-24 bg-[#050D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>End-to-End Enterprise Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            The Brisoft Technology Ecosystem
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            How our core engineering and advisory services interconnect to transform raw operational data into continuous, automated enterprise value.
          </p>
        </div>

        {/* Desktop & Tablet: Side-by-Side Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The 8-Step Interactive Pipeline Vertical Flow */}
          <div className="lg:col-span-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 px-2 flex items-center justify-between">
              <span>Interactive Architecture Pipeline</span>
              <span>Hover or Click Stage</span>
            </div>

            {ECOSYSTEM_STEPS.map((step, idx) => {
              const isSelected = selectedStepId === step.id;
              const IconComp = getStepIcon(idx);
              const isFinal = idx === ECOSYSTEM_STEPS.length - 1;

              return (
                <div key={step.id} className="relative">
                  <button
                    id={`ecosystem-node-${step.id}`}
                    onMouseEnter={() => setSelectedStepId(step.id)}
                    onClick={() => setSelectedStepId(step.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-gradient-to-r from-slate-900 via-[#0B1E33] to-slate-900 border-[#F05A28] shadow-[0_0_20px_rgba(240,90,40,0.25)] translate-x-1.5'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div 
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                          isSelected 
                            ? 'bg-[#F05A28] text-white shadow-md' 
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {step.stepNumber}
                          </span>
                          <span className="text-sm font-bold text-white tracking-tight">
                            {step.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-300 block">
                          {step.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-orange-950/80 text-[#FF6F3D] border border-orange-800/80' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.impactMetric}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#F05A28] translate-x-0.5' : 'text-slate-600'}`} />
                    </div>
                  </button>

                  {/* Flow Arrow connecting to next step */}
                  {!isFinal && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-[#F05A28]' : 'text-slate-700'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Blueprint Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#081528] to-[#040C18] border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#146A8B]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F05A28]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Step Stage Badge */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-[#F05A28]/20 border border-[#F05A28]/40 text-[#F05A28] font-mono text-xs font-bold">
                    STAGE {selectedStep.stepNumber} / 08
                  </span>
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                    {selectedStep.impactMetric}
                  </span>
                </div>
              </div>

              {/* Step Title & Tagline */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {selectedStep.name}
                </h3>
                <p className="text-sm font-semibold text-[#F05A28]">
                  {selectedStep.tagline}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {selectedStep.description}
                </p>
              </div>

              {/* Capabilities & Engineering Principles */}
              <div className="relative z-10 mb-6 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Architectural Capabilities
                </h4>
                {selectedStep.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-200 leading-relaxed font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies & Frameworks */}
              <div className="relative z-10 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Underlying Tech Stack & Paradigms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStep.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
