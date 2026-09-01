import React from 'react';
import { Language } from '../types';
import { TrustPageInfo } from '../data/clusterArticlesData';
import { FormattedText } from './FormattedText';
import { ChevronRight, ChevronLeft, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface TrustPageViewProps {
  page: TrustPageInfo;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const TrustPageView: React.FC<TrustPageViewProps> = ({
  page,
  lang,
  onNavigate,
}) => {
  return (
    <article className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-amber-700 transition"
        >
          {lang === 'ar' ? 'الرئيسية' : 'Home'}
        </button>
        {lang === 'ar' ? (
          <ChevronLeft className="w-3.5 h-3.5 text-stone-400" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        )}
        <span className="text-amber-800 font-bold">{page.titleAr}</span>
      </nav>

      {/* Main Header */}
      <header className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'معلومات التوثيق والشفافية' : 'Trust & Transparency'}</span>
        </div>

        {/* Single H1 per Page */}
        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo leading-tight text-white">
          {page.h1Ar}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
          {page.metaDescAr}
        </p>
      </header>

      {/* Body Content Box */}
      <div className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 bg-white text-stone-800 space-y-6 text-sm leading-relaxed whitespace-pre-line">
        <FormattedText text={page.contentAr} onNavigate={onNavigate} />
      </div>

      {/* Back Button */}
      <div className="pt-4 text-center">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs px-6 py-3 rounded-xl transition"
        >
          {lang === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{lang === 'ar' ? 'العودة للصفحة الرئيسية' : 'Return to Homepage'}</span>
        </button>
      </div>
    </article>
  );
};
