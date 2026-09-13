import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Cpu, BarChart3, Bot, Layers, CheckCircle2, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import { PageRoute } from '../types';

interface HeroProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRouteChange, onOpenConsultation }) => {
  const [activeNode, setActiveNode] = useState<number>(2); // Default to BI & Control Tower
  const [pulseTick, setPulseTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const pipelineNodes = [
    {
      id: 0,
      label: 'Data Ingestion',
      category: 'Foundation',
      icon: Database,
      tag: 'Streaming & Batch',
      metric: 'Zero Data Loss',
      desc: 'Heterogeneous ERP, CRM, IoT, and operational endpoints unified with strict schema validation.',
      stack: ['Kafka / EventHub', 'CDC Ingestion', 'Schema Registry']
    },
    {
      id: 1,
      label: 'Lakehouse & ETL',
      category: 'Data Engineering',
      icon: Layers,
      tag: 'Idempotent Pipelines',
      metric: '99.99% Reliability',
      desc: 'High-concurrency data transformation, lineage tracking, and automated data quality assertions.',
      stack: ['Delta / Iceberg', 'dbt / Airflow', 'Data Mesh']
    },
    {
      id: 2,
      label: 'Business Intelligence',
      category: 'Decision Tower',
      icon: BarChart3,
      tag: 'Single Source of Truth',
      metric: 'Sub-Second Queries',
      desc: 'Centralized semantic models and executive reporting suites that eliminate conflicting metrics.',
      stack: ['Semantic Layer', 'C-Suite Control Towers', 'Embedded Analytics']
    },
    {
      id: 3,
      label: 'Applied AI & ML',
      category: 'Intelligence',
      icon: Cpu,
      tag: 'Pragmatic Models',
      metric: 'Production MLOps',
      desc: 'Private domain LLM copilots, RAG architectures, and predictive forecasting engines.',
      stack: ['Private RAG', 'Enterprise LLMs', 'Feature Stores']
    },
    {
      id: 4,
      label: 'Intelligent Automation',
      category: 'Execution',
      icon: Bot,
      tag: 'Touchless Workflows',
      metric: 'Autonomous SLAs',
      desc: 'Orchestrating robotic process automation and computer vision to eliminate manual re-entry.',
      stack: ['Cognitive RPA', 'Computer Vision', 'Orchestration']
    },
    {
      id: 5,
      label: 'Business Outcomes',
      category: 'Enterprise Value',
      icon: CheckCircle2,
      tag: 'Measurable ROI',
      metric: 'Defensible Value',
      desc: 'Accelerated revenue cycles, minimized risk exposure, and sustainable operational scale.',
      stack: ['Margin Recovery', 'Reduced OpEx', 'Executive Agility']
    }
  ];

  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden bg-[#030712]"
    >
      {/* Precision Background Grid & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fine Architectural Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 106, 139, 0.45) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Global Deep Lighting */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#146A8B]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] bg-[#F05A28]/10 rounded-full blur-[170px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-[#0E4A62]/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Executive Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner backdrop-blur-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-cyan-200 truncate">
              Enterprise Data &bull; Applied AI &bull; Intelligent Automation
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Gandhinagar HQ &bull; Global Delivery
            </span>
          </div>
        </div>

        {/* Hero Display Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Engineering Intelligence <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-[#F05A28] bg-clip-text text-transparent">
              for a Smarter Business
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Brisoft IT Services helps organizations transform complex business challenges into intelligent, scalable solutions through data, artificial intelligence, machine learning, business intelligence, robotics and technology consulting.
          </p>

          {/* CRO Primary & Secondary Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full max-w-md mx-auto sm:max-w-none">
            <button
              id="hero-primary-cta"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[#F05A28] via-[#E8501E] to-[#F05A28] hover:from-[#FF6F3D] hover:to-[#F05A28] text-white shadow-[0_0_25px_rgba(240,90,40,0.35)] hover:shadow-[0_0_35px_rgba(240,90,40,0.55)] transition-all duration-200 active:scale-95 min-h-[48px]"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => {
                onRouteChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-200 min-h-[48px]"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Trust Guarantee Micro-Bar */}
          <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production-Grade Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>24h Executive Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>Pragmatic Value First</span>
            </div>
          </div>
        </div>

        {/* SOPHISTICATED HERO VISUAL: The Intelligent Pipeline Architecture */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
              The Brisoft Intelligent Pipeline &bull; Click any stage to inspect
            </span>
            <span className="text-[11px] font-mono text-cyan-300 hidden sm:inline">
              End-to-End Enterprise Lineage
            </span>
          </div>

          {/* Desktop & Tablet Interactive Architecture Chain */}
          <div className="hidden md:grid md:grid-cols-6 gap-3 relative">
            {/* Connecting Stream Line in Background */}
            <div className="absolute top-1/2 left-6 right-6 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#146A8B] via-[#0E5A78] to-[#10B981] opacity-30 z-0" />

            {pipelineNodes.map((node, index) => {
              const isSelected = activeNode === index;
              const IconComponent = node.icon;
              return (
                <div
                  key={node.id}
                  id={`hero-pipeline-node-${node.id}`}
                  onMouseEnter={() => setActiveNode(index)}
                  onClick={() => setActiveNode(index)}
                  className={`cursor-pointer group relative z-10 rounded-2xl p-4 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-slate-900/95 border-[#F05A28] shadow-[0_0_25px_rgba(240,90,40,0.25)] scale-[1.03]'
                      : 'bg-[#091526]/80 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    <div 
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#F05A28]/20 text-[#F05A28]' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-white mb-0.5 tracking-tight truncate">
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mb-2">
                    {node.category}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5">
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: isSelected ? '#F05A28' : '#146A8B' }} 
                    />
                    <span className="text-[10px] font-mono text-cyan-200/90 truncate">
                      {node.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontal Carousel */}
          <div className="flex md:hidden overflow-x-auto pb-3 gap-3 snap-x snap-mandatory scrollbar-none">
            {pipelineNodes.map((node, index) => {
              const isSelected = activeNode === index;
              const IconComponent = node.icon;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`flex-shrink-0 w-64 snap-center rounded-2xl p-4 border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-[#F05A28] shadow-lg'
                      : 'bg-[#091526] border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400">STAGE 0{index + 1}</span>
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#F05A28]' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{node.label}</h4>
                  <p className="text-xs text-cyan-300 font-mono mb-2">{node.metric}</p>
                  <p className="text-[11px] text-slate-300 leading-tight">{node.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Interactive Blueprint Strip */}
          <div className="mt-4 bg-slate-900/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F05A28]/15 border border-[#F05A28]/30 flex items-center justify-center flex-shrink-0">
                {React.createElement(pipelineNodes[activeNode].icon, { className: 'w-5 h-5 text-[#F05A28]' })}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-white">
                    {pipelineNodes[activeNode].label}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 font-mono">
                    {pipelineNodes[activeNode].metric}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 hidden md:inline">
                    &bull; {pipelineNodes[activeNode].tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  {pipelineNodes[activeNode].desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {pipelineNodes[activeNode].stack.map((stk, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {stk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onRouteChange('what-we-do');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F05A28] hover:text-[#FF6F3D] transition-colors flex-shrink-0 mt-2 sm:mt-0"
            >
              <span>Explore Architecture Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
