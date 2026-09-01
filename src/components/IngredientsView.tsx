import React, { useState } from 'react';
import { Language } from '../types';
import { INGREDIENTS_DATA, CORE_PRODUCT_DATA } from '../data/cosrxData';
import { Sparkles, ShieldCheck, ShoppingBag, CheckCircle2 } from 'lucide-react';

interface IngredientsViewProps {
  lang: Language;
}

export const IngredientsView: React.FC<IngredientsViewProps> = ({ lang }) => {
  const [mode, setMode] = useState<'simple' | 'scientific'>('simple');

  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'تحليل المكونات والنقاء' : 'Full Formula Breakdown'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'تركيبة سيروم كوسركس الحلزون 96: تحليل نقي مبسط وعلمي'
            : 'COSRX Snail Mucin Ingredients: Simple & Scientific Breakdown'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'اكتشفي سر تركيز 96.3% من مخاط الحلزون النقي الممزوج بـ صوديوم هيالورونات والبانثينول. خالي تماماً من العطور، الكحول والبارابين.'
            : 'Discover the power of 96.3% Snail Secretion Filtrate enriched with Sodium Hyaluronate, Panthenol B5, Allantoin, and Betaine.'}
        </p>

        {/* Toggle Mode */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => setMode('simple')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              mode === 'simple'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            {lang === 'ar' ? 'العرض المبسط (للقراء)' : 'Simple Mode'}
          </button>
          <button
            onClick={() => setMode('scientific')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              mode === 'scientific'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            {lang === 'ar' ? 'العرض العلمي (المختبري)' : 'Scientific Mode'}
          </button>
        </div>
      </section>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INGREDIENTS_DATA.map((ing) => (
          <div
            key={ing.id}
            className="beauty-card rounded-3xl p-6 border border-stone-200 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <span className="text-xs text-stone-400 font-medium block">
                  {ing.nameEn}
                </span>
                <h3 className="font-extrabold text-base text-stone-900 font-cairo">
                  {lang === 'ar' ? ing.nameAr : ing.nameEn}
                </h3>
              </div>
              <span className="bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-1 rounded-full">
                {ing.benefitTagAr}
              </span>
            </div>

            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              {mode === 'simple'
                ? lang === 'ar'
                  ? ing.simpleDescAr
                  : ing.simpleDescEn
                : lang === 'ar'
                ? ing.scientificDescAr
                : ing.scientificDescEn}
            </p>
          </div>
        ))}
      </div>

      <div className="beauty-card rounded-3xl p-6 text-center space-y-3 border border-stone-200">
        <h3 className="font-bold text-stone-900 text-base font-cairo">
          {lang === 'ar' ? 'هل تركيبة المنتج آمنة للبشرة الحساسة؟' : '100% Clean & Fragrance-Free Formula'}
        </h3>
        <p className="text-stone-600 text-xs max-w-xl mx-auto">
          {lang === 'ar'
            ? 'نعم، المنتج خالٍ تماماً من العطور الاصطناعية، الزيوت العطرية المخرشة، الكحول، الفثالات والبارابين.'
            : 'Formulated without parabens, ethanol, synthetic fragrances, or essential oils.'}
        </p>
        <a
          href={CORE_PRODUCT_DATA.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{lang === 'ar' ? 'احصلي عليه بسعر 35 درهم على أمازون الإمارات' : 'Buy Authentic COSRX on Amazon.ae'}</span>
        </a>
      </div>
    </div>
  );
};
