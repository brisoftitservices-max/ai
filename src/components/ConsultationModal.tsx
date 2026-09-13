import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, MapPin, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { BrisoftLogo } from './BrisoftLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'General Consultation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#030914]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#071224] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#050D1A]">
          <div className="flex items-center gap-2">
            <BrisoftLogo iconSize={32} />
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Consultation Request Dispatched</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Our senior technology advisory team will review your inquiry and reach out to <span className="text-cyan-300">{email}</span> shortly.
              </p>
              <div className="p-3 bg-slate-900/80 rounded-xl text-xs text-slate-400 font-mono">
                Direct inquiry routed to: brisoftitservices@gmail.com
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#F05A28] hover:bg-[#FF6F3D] text-xs font-bold text-white uppercase tracking-wider transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F05A28] font-bold">
                  Executive Consultation
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
                  Talk to a Technology Expert
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Discuss your data foundations, AI feasibility, or process automation with our senior engineering team in Gandhinagar.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@enterprise.com"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Service or Practice of Interest</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-[#F05A28]"
                  >
                    <option value="General Consultation">General Strategic Consultation</option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Brief Description of Goals or Challenges *</label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide context regarding your data volume, current systems, or strategic objectives..."
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#F05A28]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Schedule Advisory Discussion</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F05A28]" /> 24-hour response
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Enterprise NDA protected
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
