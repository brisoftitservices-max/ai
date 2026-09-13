import React, { useState } from 'react';
import { Globe, MapPin, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/companyData';

interface GlobalPresenceProps {
  onOpenConsultation?: () => void;
}

export const GlobalPresence: React.FC<GlobalPresenceProps> = ({ onOpenConsultation }) => {
  const [activeMarket, setActiveMarket] = useState<string>('USA');

  const markets = [
    {
      code: 'USA',
      name: 'United States',
      region: 'Americas',
      focus: 'Enterprise Data Architecture, Applied AI & Business Intelligence',
      coordinates: { x: '24%', y: '38%' },
      tag: 'Key Market'
    },
    {
      code: 'EU',
      name: 'European Union',
      region: 'Europe',
      focus: 'GDPR-Compliant Data Governance, Industrial IoT & Analytics',
      coordinates: { x: '51%', y: '32%' },
      tag: 'Key Market'
    },
    {
      code: 'UK',
      name: 'United Kingdom',
      region: 'Europe',
      focus: 'Financial BI Platforms, Regulatory Analytics & Machine Learning',
      coordinates: { x: '47%', y: '29%' },
      tag: 'Key Market'
    },
    {
      code: 'CAN',
      name: 'Canada',
      region: 'Americas',
      focus: 'Cloud Data Lakes, Supply Chain Analytics & Automation',
      coordinates: { x: '21%', y: '28%' },
      tag: 'Key Market'
    },
    {
      code: 'UAE',
      name: 'United Arab Emirates',
      region: 'Middle East',
      focus: 'Intelligent Process Automation, Retail AI & Executive Portals',
      coordinates: { x: '63%', y: '45%' },
      tag: 'Strategic Hub'
    },
    {
      code: 'SGP',
      name: 'Singapore',
      region: 'Asia Pacific',
      focus: 'Fintech Analytics, Logistics Orchestration & Real-Time Data',
      coordinates: { x: '78%', y: '58%' },
      tag: 'Strategic Hub'
    },
    {
      code: 'IND',
      name: 'India',
      region: 'Asia Pacific',
      focus: 'Global Engineering Headquarters & Domestic Enterprise Solutions',
      coordinates: { x: '69%', y: '46%' },
      tag: 'Global HQ'
    }
  ];

  const selectedMarketData = markets.find(m => m.code === activeMarket) || markets[0];

  return (
    <section id="global-presence-section" className="py-20 bg-[#071224] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Reach & Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technology Expertise. Global Perspective.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Based in Gandhinagar, Gujarat, India, Brisoft IT Services works with organizations across global markets, combining engineering expertise with a practical understanding of business needs.
          </p>
        </div>

        {/* Global Markets Visual Map Container */}
        <div className="bg-[#050D1A] rounded-3xl border border-slate-800 p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Stylized Abstract World Vector Graphic */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-[#091526]/80 border border-slate-800/80 overflow-hidden flex items-center justify-center">
            {/* World Grid Lines */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-25" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#146A8B" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              {/* Abstract Continents outlines */}
              <ellipse cx="25%" cy="40%" rx="18%" ry="22%" fill="#146A8B" opacity="0.08" />
              <ellipse cx="50%" cy="33%" rx="12%" ry="14%" fill="#146A8B" opacity="0.08" />
              <ellipse cx="68%" cy="48%" rx="15%" ry="18%" fill="#146A8B" opacity="0.1" />
              <ellipse cx="80%" cy="65%" rx="10%" ry="14%" fill="#146A8B" opacity="0.08" />
            </svg>

            {/* Hub Connections lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {markets.filter(m => m.code !== 'IND').map((m) => (
                <line
                  key={m.code}
                  x1="69%"
                  y1="46%"
                  x2={m.coordinates.x}
                  y2={m.coordinates.y}
                  stroke="#F05A28"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity={activeMarket === m.code ? "0.9" : "0.3"}
                />
              ))}
            </svg>

            {/* Interactive Market Pins on Map */}
            {markets.map((m) => {
              const isSelected = activeMarket === m.code;
              const isHQ = m.code === 'IND';
              return (
                <button
                  key={m.code}
                  id={`market-pin-${m.code}`}
                  onClick={() => setActiveMarket(m.code)}
                  style={{ left: m.coordinates.x, top: m.coordinates.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 focus:outline-none`}
                  title={`${m.name} (${m.region})`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring for HQ or selected */}
                    {(isSelected || isHQ) && (
                      <span className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${isHQ ? 'bg-[#F05A28]/40' : 'bg-cyan-400/30'}`} />
                    )}
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-125 shadow-lg ${
                        isHQ 
                          ? 'bg-[#F05A28] border-white text-white' 
                          : isSelected 
                            ? 'bg-cyan-400 border-white text-slate-950' 
                            : 'bg-slate-900 border-cyan-600 text-cyan-200'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Pin Label */}
                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono font-bold whitespace-nowrap shadow-md pointer-events-none transition-opacity ${
                      isSelected ? 'bg-white text-slate-900 opacity-100' : 'bg-slate-900/90 text-slate-300 opacity-0 group-hover:opacity-100'
                    }`}>
                      {m.code} {isHQ && '★ HQ'}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Gandhinagar HQ Beacon Callout */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-slate-950/90 border border-slate-700/80 rounded-xl p-3 backdrop-blur-md max-w-xs shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#F05A28]" />
                <span>Gandhinagar, Gujarat, India</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Centralized engineering & consulting headquarters powering global engagements.
              </p>
            </div>
          </div>

          {/* Markets Badges Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {markets.map((m) => {
              const isSelected = activeMarket === m.code;
              const isHQ = m.code === 'IND';
              return (
                <button
                  key={m.code}
                  id={`market-tab-${m.code}`}
                  onClick={() => setActiveMarket(m.code)}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0E4A62]/40 border-[#F05A28] shadow-[0_0_15px_rgba(240,90,40,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-extrabold text-white">
                      {m.code}
                    </span>
                    {isHQ && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#F05A28]/20 text-[#F05A28] font-bold">
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-medium text-slate-300 truncate">
                    {m.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Market Detail Strip */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {selectedMarketData.name} ({selectedMarketData.region})
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                  {selectedMarketData.tag}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                <strong className="text-slate-200">Engagement Scope:</strong> {selectedMarketData.focus}
              </p>
            </div>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-[#F05A28] transition-colors flex-shrink-0"
              >
                <span>Inquire for {selectedMarketData.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
