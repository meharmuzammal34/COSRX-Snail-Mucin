import React from 'react';
import { Language } from '../types';
import { Wind, Sun, Flame, Droplets, ShieldCheck, ShoppingBag, ArrowLeft } from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface UaeClimateViewProps {
  lang: Language;
}

export const UaeClimateView: React.FC<UaeClimateViewProps> = ({ lang }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <Wind className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'مناخ الإمارات والجفاف الداخلي' : 'UAE Climate & Indoor AC Guide'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'سر حماية البشرة من جفاف التكييف وحرارة الصيف في دبي وأبوظبي'
            : 'How COSRX Snail Mucin Protects Skin from Harsh UAE Weather'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'دليل عملي لكيفية تأثير مناخ الخليج العربي والتكييف المركزي على حاجز البشرة، وكيف يقدم سيروم الحلزون كوسركس 96 حلاً مائياً غير زيتي يعيد الرطوبة والنضارة.'
            : 'Understanding how Gulf weather and non-stop AC impact your cutaneous moisture barrier, and how COSRX Snail Mucin provides non-greasy hydration.'}
        </p>
      </section>

      {/* Climate Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="beauty-card rounded-3xl p-6 border border-stone-200 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Wind className="w-6 h-6 text-amber-700" />
          </div>
          <h3 className="text-lg font-bold font-cairo text-stone-900">
            {lang === 'ar' ? '1. التكييف يمتص رطوبة الجو الداخلي' : '1. Indoor AC Dehydration'}
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            {lang === 'ar'
              ? 'التكييف يقلل نسبة الرطوبة في المكاتب والمنازل إلى مستويات منخفضة جداً (أقل من 30%). يتسبب ذلك في تبخر الماء الطبيعي من طبقات البشرة، فتظهر الخطوط الدقيقة والقشور.'
              : 'Indoor AC drops humidity below 30%, drawing water out of the stratum corneum and creating dry flakes and tightness.'}
          </p>
        </div>

        <div className="beauty-card rounded-3xl p-6 border border-stone-200 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Sun className="w-6 h-6 text-amber-700" />
          </div>
          <h3 className="text-lg font-bold font-cairo text-stone-900">
            {lang === 'ar' ? '2. التباين الحراري المفاجئ' : '2. Extreme Temperature Fluctuations'}
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            {lang === 'ar'
              ? 'الخروج والتدفق بين حرارة الصيف الشديدة بالخارج (45 درجة مئوية) والتكييف بالداخل يسبب ارتباكاً في مسام البشرة ويهيج البشرة الحساسة.'
              : 'Switching rapidly between 45°C outdoor heat and 20°C indoor AC strains skin capillaries and induces flare-ups.'}
          </p>
        </div>
      </div>

      {/* Solution Section */}
      <section className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold font-cairo text-stone-900 border-b border-stone-200 pb-3">
          {lang === 'ar'
            ? 'كيف يعمل مخاط الحلزون كوسركس كدرع واقي في الإمارات؟'
            : 'How 96.3% Snail Secretion Filtrate Acts as a Protective Shield'}
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-tajawal">
          <p>
            يمتاز مخاط الحلزون الطبيعي بمركب الجليكان الببتيدي المائي الذي تشكل مادة لزجة مرنة جداً. عند وضعها على البشرة، تشكل طبقة حماية مسامية تسمح بتنفس الجلد بينما تمنع جزيئات الماء من التبخر.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block font-cairo">ترطيب مائي خالص</span>
              <span className="text-xs text-stone-600">لا يتأثر بالحرارة أو الزيوت ولا يسد المسام.</span>
            </div>
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block font-cairo">تهدئة احمرار الشمس</span>
              <span className="text-xs text-stone-600">بفضل الألانتوين والبانثينول المهدئ للبشرة المتهيجة.</span>
            </div>
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block font-cairo">مرونة Glass Skin</span>
              <span className="text-xs text-stone-600">يعيد مرونة النسيج ويمنحك لمعاناً صحياً نديّاً.</span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'ar' ? 'اطلبي المنتج الأصلي بـ 35 درهم على أمازون الإمارات' : 'Get Authentic Bottle for AED 35 on Amazon.ae'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
