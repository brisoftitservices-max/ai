import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { 
  Factory, 
  Activity, 
  Landmark, 
  ShoppingBag, 
  Truck, 
  Car, 
  Zap, 
  Briefcase, 
  Server, 
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return Factory;
      case 'Activity': return Activity;
      case 'Landmark': return Landmark;
      case 'ShoppingBag': return ShoppingBag;
      case 'Truck': return Truck;
      case 'Car': return Car;
      case 'Zap': return Zap;
      case 'Briefcase': return Briefcase;
      case 'Server': return Server;
      case 'GraduationCap': return GraduationCap;
      default: return Briefcase;
    }
  };

  const activeIndustry = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  return (
    <section id="industries-section" className="py-24 bg-[#050D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Sector Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Where Technology Can Create Impact
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Targeted application domains where our data engineering, predictive intelligence, and automation architectures address distinct structural challenges.
          </p>

          <div className="mt-4 text-xs font-mono text-slate-400">
            * Application domains structured by architectural fit & enterprise requirements
          </div>
        </div>

        {/* 10 Industry Badges Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustryId === ind.id;
            const Icon = getIndustryIcon(ind.iconName);

            return (
              <button
                key={ind.id}
                id={`industry-tab-${ind.id}`}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-[72px] ${
                  isSelected
                    ? 'bg-slate-900 border-[#F05A28] shadow-[0_0_20px_rgba(240,90,40,0.25)] ring-1 ring-[#F05A28]'
                    : 'bg-[#081526]/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-[#F05A28] text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight line-clamp-1">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#081528] to-[#040C16] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F05A28]/20 border border-[#F05A28]/40 text-[#F05A28] font-mono text-xs font-bold">
                APPLICATION DOMAIN
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeIndustry.name}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-cyan-300">
                {activeIndustry.tagline}
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Architectural Interventions
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#F05A28] mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-300 mb-4">
                {React.createElement(getIndustryIcon(activeIndustry.iconName), { className: 'w-7 h-7' })}
              </div>

              <h4 className="text-sm font-bold text-white mb-1">
                Explore Domain Solutions
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Consult with our engineering team on specific use cases in {activeIndustry.name}.
              </p>

              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:from-[#FF6F3D] hover:to-[#F05A28] transition-all"
                >
                  Request Consultation
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
