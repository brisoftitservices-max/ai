import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code2, 
  Users, 
  TrendingUp, 
  Send, 
  CheckCircle, 
  FileText, 
  Mail, 
  AlertCircle,
  Briefcase
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [selectedArea, setSelectedArea] = useState('Data Engineering');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const values = [
    {
      code: 'LEARN',
      title: 'Continuous Learning',
      desc: 'Deep intellectual curiosity. Staying at the frontier of distributed data systems, LLMs, and modern cloud architecture.',
      icon: GraduationCap
    },
    {
      code: 'BUILD',
      title: 'Engineering Craft',
      desc: 'Hands-on engineering that delivers resilient, clean, working software. We value working code and architectural discipline over buzzwords.',
      icon: Code2
    },
    {
      code: 'COLLABORATE',
      title: 'Shared Ownership',
      desc: 'Small, high-caliber teams, flat hierarchy, transparent communication, and collective pride in client business outcomes.',
      icon: Users
    },
    {
      code: 'GROW',
      title: 'Accelerated Growth',
      desc: 'Professional growth through high-stakes, real-world enterprise engagements across international markets.',
      icon: TrendingUp
    }
  ];

  const focusAreas = [
    'Data Engineering',
    'Business Intelligence',
    'Machine Learning',
    'Artificial Intelligence',
    'Robotics & Automation',
    'Cloud Architecture',
    'Full Stack Development',
    'Data Analytics',
    'Technology Consulting'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="careers-section" className="py-24 bg-[#071224] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Join Our Engineering Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Build What Comes Next
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are always interested in connecting with passionate technologists who believe in engineering excellence and solving real business problems.
          </p>
        </div>

        {/* 4 Culture Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((val) => {
            const IconComp = val.icon;
            return (
              <div
                key={val.code}
                className="rounded-3xl bg-[#050D1A] border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-[#F05A28] tracking-wider">
                      {val.code}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {val.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Areas & Speculative Application Callout */}
        <div className="rounded-3xl bg-gradient-to-br from-[#081528] to-[#040C16] border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F05A28] font-bold">
                Areas of Technical Discipline
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Where We Cultivate Specialized Expertise
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-200"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Status Notice */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 mt-4">
                <AlertCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  We do not currently have specific open positions listed on this portal, but we welcome speculative applications from talented engineers and technology consultants worldwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <FileText className="w-12 h-12 text-[#F05A28] mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">
                Speculative Applications
              </h4>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Send your CV / portfolio to our talent acquisition team in Gandhinagar, Gujarat.
              </p>

              <button
                id="careers-submit-speculative-btn"
                onClick={() => {
                  setShowApplyModal(true);
                  setSubmitted(false);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:from-[#FF6F3D] hover:to-[#F05A28] transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Profile & Speculative CV</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="mt-3 text-[11px] text-slate-300">
                Or write directly to:{' '}
                <a href="mailto:brisoftitservices@gmail.com" className="text-cyan-400 underline">
                  brisoftitservices@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speculative Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#030914]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#071224] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Speculative Application</h3>
                <p className="text-xs text-slate-400">Brisoft IT Services Engineering Hub</p>
              </div>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-slate-400 hover:text-white text-sm px-2 py-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Application Received</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {candidateName}. Your profile has been forwarded to our talent acquisition team at brisoftitservices@gmail.com.
                </p>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 text-xs font-bold text-white hover:bg-slate-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="e.g. Alex Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Discipline *</label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F05A28]"
                  >
                    {focusAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">LinkedIn / Portfolio / GitHub Link</label>
                  <input
                    type="url"
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    placeholder="https://linkedin.com/in/... or github.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Brief Note on Technical Interests</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Summarize your key engineering passions or architectural experience..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F05A28]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#F05A28] hover:bg-[#FF6F3D] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Profile...' : 'Submit Profile to Brisoft'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
