import React from 'react';
import { LEADERSHIP_DATA } from '../data/companyData';
import { Quote, Mail, MapPin, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section 
      id="leadership-section" 
      className="py-24 sm:py-32 bg-gradient-to-b from-[#050D1A] via-[#071326] to-[#050D1A] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Architectural Ambient Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#146A8B]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F05A28]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Executive Leadership & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pragmatic Leadership. <br className="hidden sm:inline" />
            <span className="text-slate-300">Client-First Stewardship.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Leading Brisoft IT Services with disciplined adherence to measurable business outcomes, transparent engineering delivery, and long-term client stewardship.
          </p>
        </div>

        {/* Executive Profile Container - High-End Editorial Layout */}
        <div className="rounded-3xl bg-[#061120] border border-slate-700/70 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Executive Portrait in Editorial Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[340px]">
                {/* Hairline Outer Glow Frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#146A8B]/60 via-slate-700/40 to-[#F05A28]/50 opacity-60 blur-[6px] pointer-events-none" />

                {/* Portrait Card */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl aspect-[3/4] flex items-center justify-center">
                  <img
                    id="leadership-ceo-photo"
                    src={'${import.meta.env.BASE_URL}kajal-g.png'}
                    alt={'${LEADERSHIP_DATA.name} - ${LEADERSHIP_DATA.title}'}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '${import.meta.env.BASE_URL}kajal-g.png';
                    }}
                  />
                  {/* Subtle lower gradient overlay for architectural grounding */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061120] via-[#061120]/60 to-transparent pointer-events-none" />

                  {/* On-image status pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/80 border border-slate-800/80 rounded-xl px-3.5 py-2">
                    <span className="text-slate-200 font-bold tracking-tight">Kajal G</span>
                    <span className="text-[11px] font-mono text-cyan-300">Managing Director & CEO</span>
                  </div>
                </div>

                {/* Sub-card Metadata */}
                <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F05A28]" />
                    <span>Gandhinagar, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Stewardship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Executive Narrative & Values (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Name & Title Header */}
              <div className="border-b border-slate-800/90 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F05A28]/15 border border-[#F05A28]/30 text-[#F05A28] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                  Managing Director & CEO
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {LEADERSHIP_DATA.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-cyan-300 mt-1">
                  Managing Director & CEO, Brisoft IT Services
                </p>
              </div>

              {/* Factual Executive Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {LEADERSHIP_DATA.bio}
              </p>

              {/* Verified Editorial Pull Quote */}
              <div className="p-6 rounded-2xl bg-[#040C16] border border-slate-800/90 relative">
                <Quote className="w-8 h-8 text-[#F05A28]/25 absolute top-4 right-4 pointer-events-none" />
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed pr-6 font-medium">
                  &ldquo;{LEADERSHIP_DATA.quote}&rdquo;
                </p>
                <div className="mt-3 text-xs font-mono text-slate-400">
                  &mdash; Kajal G &bull; Leadership Philosophy
                </div>
              </div>

              {/* Core Stewardship Tenets - Grounded in provided factual context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] mt-0.5 flex-shrink-0" />
                  <span><strong>Long-Term Client Focus:</strong> High-trust partnership over transactional volume.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Business-Aligned Technology:</strong> Every technical decision tied directly to commercial value.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Pragmatic Delivery:</strong> Architectures built for production reality, maintainability, and scale.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Executive Accessibility:</strong> Direct executive sponsorship on every major client engagement.</span>
                </div>
              </div>

              {/* Direct Leadership Access Trigger */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>
                    Executive Inquiries:{' '}
                    <a 
                      href="mailto:brisoftitservices@gmail.com" 
                      className="text-white hover:text-[#F05A28] font-mono underline underline-offset-2 transition-colors"
                    >
                      brisoftitservices@gmail.com
                    </a>
                  </span>
                </div>

                <a
                  href="#contact-section"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F05A28] hover:text-[#FF6F3D] transition-colors"
                >
                  <span>Connect with Executive Office</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
