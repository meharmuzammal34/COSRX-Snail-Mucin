import React from 'react';
import { Language } from '../types';
import { COMPARISON_ITEMS, CORE_PRODUCT_DATA } from '../data/cosrxData';
import { Sparkles, ShoppingBag, CheckCircle2 } from 'lucide-react';

interface ComparisonsViewProps {
  lang: Language;
}

export const ComparisonsView: React.FC<ComparisonsViewProps> = ({ lang }) => {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'مقارنات السيرومات الكورية' : 'K-Beauty Product Matrix'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'مقارنة سيروم الحلزون كوسركس 96 مع أشهر السيرومات الكورية على أمازون الإمارات'
            : 'COSRX Snail Mucin 96 Essence vs Other Popular K-Beauty Products'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'مقارنة شاملة توضح الفروق بين سيروم الحلزون 96، كريم الحلزون 92، وسيرومات بيوتي أوف جوسون وسوم باي مي.'
            : 'Comparing formula intensity, texture, absorption rate, and price value on Amazon.ae.'}
        </p>
      </section>

      {/* Comparison Matrix Table */}
      <div className="beauty-card rounded-3xl p-6 border border-stone-200 overflow-x-auto">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-stone-900 text-white font-cairo">
              <th className="p-3 text-start rounded-r-xl">المنتج والبراند</th>
              <th className="p-3 text-start">القوام</th>
              <th className="p-3 text-start">الأفضل لـ</th>
              <th className="p-3 text-center">السعر المعتاد</th>
              <th className="p-3 text-center">مستوى الترطيب</th>
              <th className="p-3 text-start rounded-l-xl">الشركة الفائزة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 bg-white">
            {COMPARISON_ITEMS.map((item) => {
              const isWinner = item.id === 'cosrx-essence';
              return (
                <tr
                  key={item.id}
                  className={isWinner ? 'bg-amber-50/80 font-semibold' : 'hover:bg-stone-50'}
                >
                  <td className="p-3 border-b">
                    <div className="font-bold text-stone-900 font-cairo">{item.name}</div>
                    <div className="text-[11px] text-stone-500">{item.brand}</div>
                  </td>
                  <td className="p-3 border-b text-stone-700">{item.textureAr}</td>
                  <td className="p-3 border-b text-stone-700 max-w-xs">{item.bestForAr}</td>
                  <td className="p-3 border-b text-center text-amber-800 font-extrabold font-cairo">
                    {item.priceAed}
                  </td>
                  <td className="p-3 border-b text-center">
                    <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-xs">
                      {item.hydrationScore}%
                    </span>
                  </td>
                  <td className="p-3 border-b text-stone-700 text-xs">
                    {isWinner ? (
                      <span className="bg-amber-500 text-stone-950 font-extrabold px-2.5 py-1 rounded-full inline-block">
                        ✓ الخيار الأول للترطيب
                      </span>
                    ) : (
                      item.keyStrengthAr
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="text-center pt-2">
        <a
          href={CORE_PRODUCT_DATA.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md transition"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{lang === 'ar' ? 'اشتري سيروم الحلزون الفائز بـ 35 درهم على أمازون' : 'Get Winners Deal on Amazon.ae'}</span>
        </a>
      </div>
    </div>
  );
};
