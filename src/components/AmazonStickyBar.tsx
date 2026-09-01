import React from 'react';
import { Language } from '../types';
import { ShoppingBag, Star, Zap, CheckCircle } from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface AmazonStickyBarProps {
  lang: Language;
}

export const AmazonStickyBar: React.FC<AmazonStickyBarProps> = ({ lang }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-amber-500/30 p-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Info: Rating & Price */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col">
            <span className="text-xs text-stone-400 font-medium">
              {CORE_PRODUCT_DATA.nameAr}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-extrabold text-base font-cairo">
                {CORE_PRODUCT_DATA.averagePrice}
              </span>
              <span className="text-xs text-stone-400 line-through">AED 65.00</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">
                {lang === 'ar' ? 'وفر 45%' : 'Save 45%'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-300">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold ml-1">4.8</span>
            </div>
            <span className="text-stone-500 text-[11px] hidden md:inline">
              (14,000+ {lang === 'ar' ? 'تقييم' : 'reviews'})
            </span>
            <span className="hidden lg:flex items-center gap-1 text-emerald-400 text-[11px] bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
              <CheckCircle className="w-3 h-3" />
              <span>{lang === 'ar' ? 'شحن برايم مجاني' : 'Free Prime Delivery'}</span>
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <a
          href={CORE_PRODUCT_DATA.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition transform active:scale-95"
        >
          <ShoppingBag className="w-4 h-4 animate-bounce" />
          <span>
            {lang === 'ar'
              ? 'اشتري الآن من أمازون الإمارات (35 درهم)'
              : 'Buy Now on Amazon.ae (AED 35)'}
          </span>
          <Zap className="w-3.5 h-3.5 hidden sm:inline" />
        </a>
      </div>
    </div>
  );
};
