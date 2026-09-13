import React from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Quote, MessageSquare, AlertCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-20 bg-[#050D1A] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Client Perspectives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            What Leaders Value in Our Approach
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            The foundation of our relationships is transparent communication, engineering excellence, and grounded business understanding.
          </p>

          {/* Prominent Editorial Disclaimer Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Sample Illustrative Content &bull; Design placeholders for approved client references</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-gradient-to-b from-[#081526] to-[#040C16] border border-slate-800 p-8 flex flex-col justify-between relative shadow-xl hover:border-slate-700 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#F05A28]/30 mb-4" />

              <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  SAMPLE CLIENT &bull; {item.attributionRole}
                </div>
                <div className="text-[11px] font-mono text-amber-400/90">
                  {item.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
