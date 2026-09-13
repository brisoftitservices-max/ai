import React, { useState } from 'react';
import { INSIGHTS_DATA } from '../data/insightsData';
import { InsightArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Filter
} from 'lucide-react';

interface InsightsSectionProps {
  onOpenConsultation?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);

  const categories = [
    'All',
    'Business Intelligence',
    'Data Engineering',
    'Machine Learning',
    'Data Quality',
    'Automation',
    'Cloud & Data',
    'AI Strategy'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="insights-section" className="py-24 bg-[#050D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#F05A28]" />
            <span>Research & Editorial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Insights & Engineering Perspectives
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In-depth strategic analyses, engineering frameworks, and pragmatic perspectives on data, AI, and business transformation from our team.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#F05A28] text-white shadow-[0_0_15px_rgba(240,90,40,0.3)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={`insight-card-${article.id}`}
              onClick={() => setReadingArticle(article)}
              className="group cursor-pointer rounded-3xl bg-gradient-to-b from-[#081526] to-[#040C16] border border-slate-800 p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 font-mono text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-[#F05A28]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#FF6F3D] transition-colors">
                  {article.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Footer */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {article.date}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F05A28] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {readingArticle && (
        <ArticleModal
          article={readingArticle}
          onClose={() => setReadingArticle(null)}
          onOpenConsultation={onOpenConsultation}
        />
      )}
    </section>
  );
};
