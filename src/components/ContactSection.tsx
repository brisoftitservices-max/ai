import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck,
  Building 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'General Consultation');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!validateEmail(email.trim())) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please tell us briefly about your inquiry or project.');
      return;
    }

    setLoading(true);
    // Simulate submission to brisoftitservices@gmail.com
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact-section" className="py-24 bg-[#050D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Start the Technology Conversation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether evaluating an enterprise data architecture, designing predictive analytics, or exploring automation, our advisory team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Global Markets Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#071224] border border-slate-800 p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Headquarters & Inquiries
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Brisoft IT Services serves clients globally from our headquarters in Gandhinagar, Gujarat, India.
                </p>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-[#F05A28]/15 border border-[#F05A28]/30 flex items-center justify-center text-[#F05A28] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Gandhinagar, Gujarat, India
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Centralized Engineering & Consulting Operations
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Official Email
                  </div>
                  <a
                    href="mailto:brisoftitservices@gmail.com"
                    className="text-sm font-bold text-white hover:text-cyan-300 mt-0.5 block break-all underline underline-offset-2 transition-colors"
                  >
                    brisoftitservices@gmail.com
                  </a>
                  <div className="text-xs text-slate-400 mt-1">
                    Direct executive & project inquiries
                  </div>
                </div>
              </div>

              {/* Response SLA */}
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-[#F05A28]" />
                <span>Typical response time: Within 24 business hours</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Enterprise Confidentiality Assured</span>
              </div>
            </div>

            {/* Global Markets Pill Summary */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Global Client Coverage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Serving cross-border organizations in:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['USA', 'European Union', 'United Kingdom', 'Canada', 'UAE', 'Singapore', 'India'].map(m => (
                  <span key={m} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[11px]">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#071224] border border-slate-700/80 p-8 sm:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your consultation request regarding <span className="text-cyan-300">{selectedService}</span> has been dispatched to <span className="font-mono text-white">brisoftitservices@gmail.com</span>.
                  </p>
                  <p className="text-xs text-slate-400">
                    A senior member of our technology consulting team will follow up within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Direct consultation with our technology and engineering specialists.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28]"
                      />
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28]"
                      >
                        <option value="General Consultation">General Technology Consultation</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Tell Us About Your Project / Objectives *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your current business challenge, data environment, or technology objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-950/50 transition-all flex items-center justify-center gap-2.5 active:scale-98 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry to Brisoft Advisory</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    Your details are held strictly confidential. No spam or unsolicited marketing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
