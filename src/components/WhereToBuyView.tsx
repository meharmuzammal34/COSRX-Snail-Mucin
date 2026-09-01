import React from 'react';
import { Language } from '../types';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';
import { ShoppingBag, ShieldCheck, CheckCircle2, Zap, AlertTriangle, ExternalLink } from 'lucide-react';

interface WhereToBuyViewProps {
  lang: Language;
}

export const WhereToBuyView: React.FC<WhereToBuyViewProps> = ({ lang }) => {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <ShoppingBag className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'دليل أمازون الإمارات الرسمي' : 'Amazon.ae Authenticity & Buying Guide'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'أين تشترين سيروم كوسركس الحلزون الأصلي في الإمارات بأفضل سعر؟'
            : 'Where to Buy Authentic COSRX Snail Mucin in the UAE'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'قارني الأسعار بين أمازون الإمارات والصيدليات الكبرى (بووتس، صيدلية العين). اكتشفي كيفية الحصول على العلبة الأصلية بسعر 35 درهم مع شحن برايم المجاني.'
            : 'Compare prices between Amazon.ae and local retail pharmacies in Dubai & Abu Dhabi.'}
        </p>
      </section>

      {/* Price Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="beauty-card rounded-3xl p-6 border-2 border-amber-500/60 bg-amber-50/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="bg-amber-500 text-stone-950 font-extrabold text-xs px-3 py-1 rounded-full">
              {lang === 'ar' ? 'الخيار الأفضل والموفر' : 'Best Price & Fast Delivery'}
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Prime Free
            </span>
          </div>

          <h3 className="text-xl font-bold font-cairo text-stone-900">
            أمازون الإمارات (Amazon.ae)
          </h3>

          <div className="text-3xl font-extrabold text-amber-800 font-cairo">
            AED 35.00 <span className="text-xs text-stone-500 line-through">65.00 AED</span>
          </div>

          <ul className="text-xs space-y-2 text-stone-700">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>توصيل مجاني في نفس اليوم أو اليوم التالي لأعضاء Prime</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ضمان العلبة الأصلية 100% من COSRX Direct</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>إمكانية الإرجاع السهل خلال 15 يوماً</span>
            </li>
          </ul>

          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm py-3.5 rounded-2xl shadow-lg transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'ar' ? 'اطلبي الآن بسعر 35 درهم من أمازون' : 'Order Now on Amazon.ae'}</span>
          </a>
        </div>

        <div className="beauty-card rounded-3xl p-6 border border-stone-200 space-y-4">
          <span className="bg-stone-100 text-stone-600 font-bold text-xs px-3 py-1 rounded-full">
            {lang === 'ar' ? 'الصيدليات والمحلات' : 'Retail Pharmacies'}
          </span>

          <h3 className="text-xl font-bold font-cairo text-stone-900">
            الصيدليات الكبرى (Boots / Al Ain Pharmacy)
          </h3>

          <div className="text-3xl font-extrabold text-stone-600 font-cairo">
            AED 75.00 – 90.00
          </div>

          <ul className="text-xs space-y-2 text-stone-600">
            <li className="flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>أسعار مرتفعة ضعف سعر أمازون تقريباً</span>
            </li>
            <li className="flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>يتطلب الذهاب المباشر أو رسوم توصيل إضافية</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
