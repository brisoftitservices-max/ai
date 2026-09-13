import React from 'react';
import { WHY_BRISOFT_PILLARS } from '../data/companyData';
import { 
  TrendingUp, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  Users, 
  Target,
  ArrowUpRight 
} from 'lucide-react';

interface WhyBrisoftSectionProps {
  onOpenConsultation?: () => void;
}

export const WhyBrisoftSection: React.FC<WhyBrisoftSectionProps> = ({ onOpenConsultation }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return TrendingUp;
      case 'ShieldCheck': return ShieldCheck;
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      case 'Target': return Target;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="why-brisoft-section" className="py-24 bg-[#050D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Strategic Differentiation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Forward-Thinking Leaders Choose Brisoft
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are not a transactional body-shop. We operate as your dedicated strategic engineering partner, pairing pragmatic business acumen with rigorous technical craftsmanship.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_BRISOFT_PILLARS.map((pillar) => {
            const IconComponent = getPillarIcon(pillar.iconName);

            return (
              <div
                key={pillar.id}
                id={`why-card-${pillar.id}`}
                className="group relative rounded-3xl bg-gradient-to-b from-[#081526] to-[#040C16] border border-slate-800 p-8 transition-all duration-300 hover:border-slate-600 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-[#F05A28] group-hover:bg-[#F05A28] group-hover:text-white transition-all duration-200 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-cyan-300/90 mb-3">
                    {pillar.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span className="font-mono text-[11px]">Enterprise Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#F05A28] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        {onOpenConsultation && (
          <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0C223A] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">
                Looking for a technology partner that values long-term business impact?
              </h4>
              <p className="text-xs text-slate-300">
                Let&apos;s evaluate your current architecture and discuss practical engineering roadmaps.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F05A28] hover:bg-[#FF6F3D] text-white shadow-lg transition-all flex-shrink-0"
            >
              Start the Conversation
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
