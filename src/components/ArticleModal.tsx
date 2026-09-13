import React from 'react';
import { InsightArticle } from '../types';
import { X, Clock, Calendar, Share2, ArrowLeft, BookmarkCheck } from 'lucide-react';
import { BrisoftLogo } from './BrisoftLogo';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ 
  article, 
  onClose,
  onOpenConsultation 
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#030914]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#071224] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#050D1A]">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </button>
            <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/60">
              {article.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Content Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Metadata & Title */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F05A28]" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {article.readTime}
              </span>
              <span>&bull;</span>
              <span>Author: {article.author} ({article.authorRole})</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article Editorial Body */}
          <div className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-3 mt-8">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <BookmarkCheck className="w-4 h-4 text-[#F05A28]" />
                <span>Executive Architectural Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Article Call to Action */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BrisoftLogo iconSize={36} />
              <div>
                <div className="text-xs font-bold text-white">Brisoft IT Services Advisory</div>
                <div className="text-[11px] text-slate-400">Engineering Intelligence for a Smarter Business</div>
              </div>
            </div>

            {onOpenConsultation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F05A28] hover:bg-[#FF6F3D] text-white shadow-lg transition-all"
              >
                Discuss This Topic With Our Team
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
