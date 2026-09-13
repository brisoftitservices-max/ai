import React from 'react';
import { BrisoftLogo } from './BrisoftLogo';
import { PageRoute } from '../types';
import { Mail, MapPin, Globe, Linkedin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenConsultation }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#030914] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand Statement & Quick Inquiry */}
        <div className="pb-12 border-b border-slate-800/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <BrisoftLogo iconSize={44} />
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Engineering Intelligence for a Smarter Business.
            </p>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Brisoft IT Services helps organizations transform data, AI and engineering into measurable business value through strategic technology consulting and enterprise systems.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
            <button
              id="footer-talk-expert-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white hover:from-[#FF6F3D] hover:to-[#F05A28] shadow-lg shadow-orange-950/40 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400">
              Direct response within 24 business hours
            </span>
          </div>
        </div>

        {/* Middle Tier: 4 Clean Columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Company Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28]" />
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLink('who-we-are')} 
                  className="hover:text-white transition-colors"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('what-we-do')} 
                  className="hover:text-white transition-colors"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('insights')} 
                  className="hover:text-white transition-colors"
                >
                  Insights & Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('careers')} 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Careers</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300">
                    Hiring Notice
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#146A8B]" />
              Core Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Business Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Data Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Robotics & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Data Analytics
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Digital Transformation
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors">
                  Technology Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Locations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F05A28] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Headquarters</div>
                  <div className="text-slate-300 text-xs">Gandhinagar, Gujarat, India</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Inquiries</div>
                  <a 
                    href="mailto:brisoftitservices@gmail.com" 
                    className="text-slate-300 text-xs hover:text-white underline underline-offset-2 transition-colors break-all"
                  >
                    brisoftitservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <span className="text-slate-400 text-xs">
                    Official Corporate Profile (Coming Soon)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Global Markets Served */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              Global Engagement
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Serving organizations across primary global markets from our engineering hub in India:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {['USA', 'European Union', 'United Kingdom', 'Canada', 'UAE', 'Singapore', 'India'].map((market) => (
                <span 
                  key={market} 
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200 font-mono"
                >
                  {market}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>Enterprise Data Privacy & Security Aligned</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal, Copyright & Attribution */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} <span className="text-white font-medium">Brisoft IT Services</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleLink('contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleLink('contact')} className="hover:text-slate-300 transition-colors">
              Terms of Use
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleLink('contact')} className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
