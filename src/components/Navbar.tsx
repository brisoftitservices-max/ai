import React, { useState, useEffect } from 'react';
import { BrisoftLogo } from './BrisoftLogo';
import { PageRoute } from '../types';
import { 
  Menu, 
  X, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'What We Do', route: 'what-we-do' },
    { label: 'Services', route: 'services' },
    { label: 'Who We Are', route: 'who-we-are' },
    { label: 'Insights', route: 'insights' },
    { label: 'Careers', route: 'careers' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050D1A]/95 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3'
          : 'bg-gradient-to-b from-[#050D1A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F05A28] rounded-lg transition-transform hover:scale-[1.02]"
            aria-label="Brisoft IT Services Home"
          >
            <BrisoftLogo iconSize={42} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#146A8B] to-[#F05A28] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (TALK TO AN EXPERT) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="nav-cta-talk-expert"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#F05A28] to-[#E8501E] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white shadow-[0_0_20px_rgba(240,90,40,0.3)] hover:shadow-[0_0_25px_rgba(240,90,40,0.5)] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F05A28]/50"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Quick Action */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              id="mobile-expert-quick-btn"
              onClick={onOpenConsultation}
              className="px-2.5 sm:px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white hover:bg-[#E8501E] transition-colors min-h-[40px] flex items-center gap-1 shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Consult</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F05A28] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-0 top-[65px] bg-[#050D1A]/98 backdrop-blur-xl z-40 border-t border-slate-800 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="max-w-md mx-auto px-6 py-6 flex flex-col gap-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3">
                Navigation
              </span>
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    id={`mobile-nav-${item.route}`}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-slate-800/80 text-[#F05A28] font-semibold border-l-4 border-[#F05A28]'
                        : 'text-slate-200 hover:bg-slate-900/60 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F05A28]' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-4">
              <button
                id="mobile-drawer-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F05A28] to-[#E8501E] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-950/40"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to an Expert</span>
              </button>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#F05A28]" />
                  <span>Gandhinagar, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href="mailto:brisoftitservices@gmail.com" className="hover:text-white transition-colors">
                    brisoftitservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
