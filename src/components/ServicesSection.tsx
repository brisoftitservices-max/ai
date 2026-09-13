import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  BarChart3, 
  Database, 
  Sparkles, 
  Cpu, 
  Cog, 
  LineChart, 
  Layers, 
  Compass, 
  ArrowRight, 
  AlertCircle, 
  Wrench, 
  TrendingUp, 
  FolderKanban, 
  CheckCircle2, 
  SlidersHorizontal,
  LayoutGrid,
  Maximize2
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultationWithService
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('business-intelligence');
  const [viewMode, setViewMode] = useState<'interactive' | 'grid'>('interactive');

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return BarChart3;
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'Cog': return Cog;
      case 'LineChart': return LineChart;
      case 'Layers': return Layers;
      case 'Compass': return Compass;
      default: return Database;
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];
  const ActiveIcon = getIconComponent(activeService.iconName);

  return (
    <section id="services-section" className="py-24 bg-[#050D1A] relative border-t border-slate-800/80">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#146A8B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F05A28]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>Enterprise Consulting Practices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Strategic Technology Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-3 leading-relaxed">
              Every capability is engineered to solve specific operational friction, establish auditable governance, and drive measurable return on technical investment.
            </p>
          </div>

          {/* View Mode Toggle Switch */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Explorer</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All 8 Practices</span>
            </button>
          </div>
        </div>

        {/* INTERACTIVE WORKBENCH VIEW */}
        {viewMode === 'interactive' && (
          <div className="space-y-6">
            {/* Horizontal Practice Selector - Touch friendly, scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {SERVICES_DATA.map((svc) => {
                const isSelected = svc.id === activeServiceId;
                const Icon = getIconComponent(svc.iconName);
                return (
                  <button
                    key={svc.id}
                    id={`service-tab-${svc.id}`}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`flex-shrink-0 px-4 py-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 min-h-[48px] ${
                      isSelected
                        ? 'bg-slate-900 border-[#F05A28] text-white shadow-lg shadow-orange-950/30 ring-1 ring-[#F05A28]'
                        : 'bg-[#081526]/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#F05A28]/20 text-[#F05A28]' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono opacity-70">PRACTICE {svc.number}</div>
                      <div className="text-xs font-bold whitespace-nowrap">{svc.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Comprehensive Single Practice Blueprint Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#081526] via-[#050E1B] to-[#040A14] border border-slate-700/80 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Practice Top Header Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F05A28]/20 to-[#146A8B]/20 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <ActiveIcon className="w-7 h-7 text-[#F05A28]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold text-[#F05A28]">
                        PRACTICE {activeService.number}
                      </span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-800/70 text-cyan-300">
                        {activeService.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                      {activeService.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {activeService.headline}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultationWithService && onOpenConsultationWithService(activeService.title)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F05A28] to-[#E8501E] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white shadow-lg transition-all self-start lg:self-auto min-h-[44px]"
                >
                  <span>{activeService.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Core 5-Facet Deep Dive: Problem, Approach, Capabilities, Business Value, Typical Use Cases */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Problem & Approach (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* 1. Problem */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-rose-950/40 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>The Business & Technical Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeService.problem}
                    </p>
                  </div>

                  {/* 2. Approach */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-950/40 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                      <Wrench className="w-4 h-4" />
                      <span>The Brisoft Approach</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeService.approach}
                    </p>
                  </div>

                  {/* Architecture & Engineering Tags */}
                  {activeService.architectureTags && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Architectural Principles
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeService.architectureTags.map((tag, idx) => (
                          <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Capabilities, Business Value & Typical Use Cases (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* 3. Core Capabilities */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Practice Capabilities
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {activeService.capabilities.length} Core Areas
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.capabilities.map((cap, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F05A28] mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Business Value & 5. Typical Use Cases in 2 sub-cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Business Value */}
                    <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Business Value</span>
                      </div>
                      <ul className="space-y-2">
                        {activeService.businessValue.map((val, vIdx) => (
                          <li key={vIdx} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">&bull;</span>
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Use Cases */}
                    <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                        <FolderKanban className="w-4 h-4" />
                        <span>Typical Use Cases</span>
                      </div>
                      <ul className="space-y-2">
                        {activeService.typicalUseCases.map((uc, uIdx) => (
                          <li key={uIdx} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">&bull;</span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FULL 8 PRACTICES GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_DATA.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  id={`service-grid-card-${service.id}`}
                  className="rounded-3xl bg-gradient-to-b from-[#081526] to-[#040C16] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#F05A28] group-hover:bg-[#F05A28]/20 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
                        {service.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#FF6F3D] transition-colors mt-0.5">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Problem teaser */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-[11px] text-slate-400">
                      <strong className="text-slate-300 block mb-1">Problem Solved:</strong>
                      <p className="line-clamp-2">{service.problem}</p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActiveServiceId(service.id);
                        setViewMode('interactive');
                      }}
                      className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                    >
                      Deep Dive
                    </button>

                    <button
                      onClick={() => onOpenConsultationWithService && onOpenConsultationWithService(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#F05A28] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
