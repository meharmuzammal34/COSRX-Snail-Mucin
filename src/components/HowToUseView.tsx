import React from 'react';
import { Language } from '../types';
import { Droplets, CheckCircle2, Clock, Sparkles, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface HowToUseViewProps {
  lang: Language;
}

export const HowToUseView: React.FC<HowToUseViewProps> = ({ lang }) => {
  const steps = [
    {
      step: '01',
      titleAr: 'التنظيف اللطيف (Cleanse)',
      descAr: 'اغسلي وجهك بغسول لطيف خالٍ من الكبريتات بماء فاتر لإزالة الأتربة والشوائب.',
    },
    {
      step: '02',
      titleAr: 'ترطيب البشرة أولاً (Damp Skin Rule)',
      descAr: 'اتركي بشرتك نديّة أو رطبيها برشة تونر. لا تطبقي السيروم على بشرة جافة تماماً!',
    },
    {
      step: '03',
      titleAr: 'وضع 2-3 ضغطات سيروم الحلزون',
      descAr: 'ضعي ضغطتين على كف يدك، ثم وزعي السيروم على الوجه والرقبة بأطراف الأصابع.',
    },
    {
      step: '04',
      titleAr: 'التربيت الخفيف (Gentle Patting)',
      descAr: 'ربّتي بلطف حتى يختفي القوام اللزج ويمتصه الجلد تماماً في غضون 20 ثانية.',
    },
    {
      step: '05',
      titleAr: 'الحبس بالمرطب وواقي الشمس',
      descAr: 'اتبعيه فوراً بكريمك المرطب لحبس هذه الترطيبات المائية، ثم واقي الشمس صباحاً.',
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <Droplets className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'دليل طريقة الاستخدام الصحيحة' : 'Step-by-Step Application Guide'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'الخطوات الخمس الصحيحة لتطبيق سيروم الحلزون كوسركس ونضارة الـ Glass Skin'
            : 'How to Correctly Apply COSRX Snail Mucin Essence for Maximum Results'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'تعلمي السر الكوري البسيط: القاعدة الذهبية لتطبيق السيروم على بشرة رطبة للحصول على امتصاص مضاعف وتجنب أي لزوجة زائدة.'
            : 'Master the Korean layering technique: always apply snail essence on damp skin to triple water absorption.'}
        </p>
      </section>

      {/* Steps List */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="beauty-card rounded-2xl p-5 border border-stone-200 space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-extrabold text-amber-600 font-cairo block">
                {item.step}
              </span>
              <h3 className="font-bold text-stone-900 text-sm font-cairo mt-1">
                {item.titleAr}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2">
                {item.descAr}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tips Box */}
      <section className="beauty-card rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
        <h3 className="text-lg font-bold font-cairo text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span>{lang === 'ar' ? 'نصائح احترافية لدمجه مع المكونات الأخرى' : 'Pro Layering Tips'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-1">
            <span className="font-bold text-amber-900 block">مع فيتامين سي (Vitamin C) - صباحاً:</span>
            <p className="text-stone-700">
              طبقي سيروم فيتامين سي أولاً، وانتظري دقيقة للامتصاص، ثم ضعي سيروم الحلزون لتهدئة أي وخز وإعطاء نضارة فورية.
            </p>
          </div>

          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-1">
            <span className="font-bold text-amber-900 block">مع الريتينول (Retinol) - ليلاً:</span>
            <p className="text-stone-700">
              ضعي سيروم الحلزون أولاً كـ (Buffer) حماية لتقليل التقشير والاحمرار الناتج عن استخدام الريتينول ليلًا.
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'ar' ? 'اشتري سيروم الحلزون الاصلي بـ 35 درهم على أمازون' : 'Order Authentic COSRX on Amazon.ae'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
