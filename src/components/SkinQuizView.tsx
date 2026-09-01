import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, CheckCircle2, ShoppingBag, ArrowRight, RefreshCw } from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface SkinQuizViewProps {
  lang: Language;
}

export const SkinQuizView: React.FC<SkinQuizViewProps> = ({ lang }) => {
  const [skinType, setSkinType] = useState<string>('dry');
  const [acHours, setAcHours] = useState<string>('high');
  const [sensitivity, setSensitivity] = useState<string>('yes');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getRecommendation = () => {
    if (skinType === 'dry' || acHours === 'high') {
      return {
        score: '99% ملاءمة ممتازة!',
        titleAr: 'سيروم الحلزون كوسركس 96 هو الخيار المنقذ لبشرتكِ!',
        descAr: 'بشرتكِ تعاني من ظاهرة تبخر الماء الجوي بسبب التكييف. تركيز 96.3% سيروم الحلزون سيحبس الرطوبة ويعيد النضارة المرنة من الأسبوع الأول.',
        recommendedRoutineAr: 'طريقة الاستخدام: 3 ضغطات صباحاً ومساءً على بشرة رطبة مباشرة ثم حبس الترطيب بكريم مرطب زيتي/جيل.',
      };
    } else if (skinType === 'oily') {
      return {
        score: '94% ملاءمة ممتازة!',
        titleAr: 'خفيف جداً وغير مسبب لانسداد المسام (Non-Comedogenic)!',
        descAr: 'ممتاز جداً للبشرة الدهنية في رطوبة الإمارات! يمتص فوراً دون إفراز زيوت زائدة ويهدئ آثار الحبوب.',
        recommendedRoutineAr: 'طريقة الاستخدام: ضغطتان فقط على بشرة رطبة صباحاً لترطيب مائي بدون زيت.',
      };
    } else {
      return {
        score: '96% ملاءمة رائعة!',
        titleAr: 'تركيبة خالية من العطور وآمنة للبشرة الحساسة!',
        descAr: 'خالٍ من العطور والكحول المخرش. يهدئ الاحمرار ويزيد مرونة البشرة بدون تهيج.',
        recommendedRoutineAr: 'طريقة الاستخدام: اختبار رقعة بسيط ثم استخدامه مرتين يومياً لتقوية حاجز الجلد.',
      };
    }
  };

  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'اختبار الملاءمة التفاعلي' : 'Interactive Skin Type Match Quiz'}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'هل تناسب خلاصة الحلزون نوع بشرتكِ في مناخ الإمارات؟'
            : 'Is COSRX Snail Mucin Suitable for Your Skin Type in UAE?'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
          {lang === 'ar'
            ? 'أجيبي عن 3 أسئلة سريعة للحصول على تقييم مخصص لنسبة الملاءمة ورغبة الروتين الأنسب لبشرتكِ.'
            : 'Answer 3 quick questions to receive a custom compatibility analysis for Gulf weather.'}
        </p>
      </section>

      {!submitted ? (
        <div className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 max-w-2xl mx-auto space-y-6">
          {/* Q1 */}
          <div className="space-y-2">
            <label className="font-bold text-stone-900 text-sm font-cairo block">
              1. ما هو نوع بشرتكِ الأساسي؟
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'dry', label: 'جافة / مشدودة' },
                { id: 'oily', label: 'دهنية / معرضة للحبوب' },
                { id: 'combo', label: 'مختلطة' },
                { id: 'sensitive', label: 'حساسة / متهددة' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSkinType(opt.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition ${
                    skinType === opt.id
                      ? 'bg-amber-500 text-stone-950 border-amber-500'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="space-y-2">
            <label className="font-bold text-stone-900 text-sm font-cairo block">
              2. كم ساعة تجلسين تحت التكييف يومياً في الإمارات؟
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'high', label: 'أكثر من 12 ساعة (مستمر)' },
                { id: 'medium', label: 'بين 6 إلى 12 ساعة' },
                { id: 'low', label: 'أقل من 6 ساعات' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setAcHours(opt.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition ${
                    acHours === opt.id
                      ? 'bg-amber-500 text-stone-950 border-amber-500'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div className="space-y-2">
            <label className="font-bold text-stone-900 text-sm font-cairo block">
              3. هل تتضايق بشرتكِ من العطور الاصطناعية؟
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'yes', label: 'نعم، تفضل منتجات خالية من العطور' },
                { id: 'no', label: 'لا أمانع العطور' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSensitivity(opt.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition ${
                    sensitivity === opt.id
                      ? 'bg-amber-500 text-stone-950 border-amber-500'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-sm py-4 rounded-2xl shadow-lg transition font-cairo"
          >
            {lang === 'ar' ? 'عرض نتيجة النتيجة والتوصية المخصصة' : 'Show Compatibility Result'}
          </button>
        </div>
      ) : (
        <div className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 max-w-2xl mx-auto space-y-6 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-900 text-sm font-extrabold px-4 py-1.5 rounded-full">
            {getRecommendation().score}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold font-cairo text-stone-900">
            {getRecommendation().titleAr}
          </h2>

          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed bg-amber-50 p-4 rounded-2xl border border-amber-200">
            {getRecommendation().descAr}
          </p>

          <div className="bg-stone-900 text-amber-300 p-4 rounded-2xl text-xs sm:text-sm text-start font-tajawal leading-relaxed">
            <strong>الروتين الموصى به لكِ:</strong> {getRecommendation().recommendedRoutineAr}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={CORE_PRODUCT_DATA.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-md transition"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{lang === 'ar' ? 'اطلبي علبتك بـ 35 درهم على أمازون' : 'Buy Now on Amazon.ae (AED 35)'}</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs px-4 py-3.5 rounded-xl transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>إعادة الاختبار</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
