import React from 'react';
import { PhoneCall, Calendar, Mail, ArrowRight } from 'lucide-react';

interface MobileConversionBarProps {
  onOpenConsultation: () => void;
}

export const MobileConversionBar: React.FC<MobileConversionBarProps> = ({
  onOpenConsultation
}) => {
  return (
    <aside 
      id="mobile-conversion-bar"
      aria-label="Quick Mobile Consultation Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050D1A]/95 backdrop-blur-lg border-t border-slate-800/90 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="mailto:brisoftitservices@gmail.com"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold min-h-[44px] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span className="truncate">Email Direct</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-950/40 min-h-[44px] active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="truncate">Talk to Expert</span>
          <ArrowRight className="w-3 h-3 hidden xs:inline" />
        </button>
      </div>
    </aside>
  );
};
