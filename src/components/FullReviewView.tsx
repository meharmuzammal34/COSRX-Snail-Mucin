import React, { useState } from 'react';
import { Language } from '../types';
import { FULL_ARABIC_REVIEW_ARTICLE, CORE_PRODUCT_DATA } from '../data/cosrxData';
import { ASSETS } from '../assets/images';
import {
  ShoppingBag,
  Star,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Award,
  Droplets,
  Heart,
} from 'lucide-react';

interface FullReviewViewProps {
  lang: Language;
}

export const FullReviewView: React.FC<FullReviewViewProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const copyArticleText = () => {
    navigator.clipboard.writeText(FULL_ARABIC_REVIEW_ARTICLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-amber-400">
          <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-bold border border-amber-500/30 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'المقال الرئيسي المقال المالي (1500+ كلمة)' : 'Main Money Article (1500+ Words)'}</span>
          </span>
          <span className="flex items-center gap-1 text-stone-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'زمن القراءة: 10 دقائق' : '10 min read'}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo leading-tight text-white">
          {lang === 'ar'
            ? 'مراجعة شاملة ومجربة: سيروم خلاصة الحلزون كوسركس COSRX Advanced Snail 96 Mucin Essence في الإمارات'
            : 'In-Depth Tested Review: COSRX Advanced Snail 96 Mucin Essence in the UAE'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'دليل تقييم واستخدام شامل يغطي الأداء الميداني تحت التكييف، القوام، المكونات، خلو المنتج من العطور، وكيفية الشراء الآمن للعلبة الأصلية من أمازون الإمارات بسعر 35 درهم.'
            : 'Comprehensive 1500+ word review covering real AC climate testing in UAE, texture, safety, ingredients, and authentic purchase guide on Amazon.ae.'}
        </p>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'ar' ? 'اشتري من أمازون الإمارات (35 درهم)' : 'Buy on Amazon.ae (AED 35)'}</span>
          </a>

          <button
            onClick={copyArticleText}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs px-4 py-3 rounded-xl transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">
                  {lang === 'ar' ? 'تم نسخ المقال كاملاً!' : 'Article Copied!'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'ar' ? 'نسخ نص المقال كاملاً (Markdown)' : 'Copy Article Text (Markdown)'}
                </span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Main Review Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Article Body */}
        <div className="lg:col-span-8 space-y-8">
          {/* Quick Rating Summary Card */}
          <div className="beauty-card rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-lg font-bold font-cairo text-stone-900 border-b border-stone-200 pb-3 flex items-center justify-between">
              <span>{lang === 'ar' ? 'بطاقة التقييم الشاملة' : 'Product Rating Breakdown'}</span>
              <span className="text-amber-700 text-sm font-extrabold bg-amber-100 px-3 py-1 rounded-full">
                4.8 / 5.0
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                <span className="block text-xs text-stone-500 font-medium">{lang === 'ar' ? 'قوة الترطيب' : 'Hydration'}</span>
                <span className="text-lg font-extrabold text-stone-900 font-cairo">10 / 10</span>
              </div>
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                <span className="block text-xs text-stone-500 font-medium">{lang === 'ar' ? 'سرعة الامتصاص' : 'Absorption'}</span>
                <span className="text-lg font-extrabold text-stone-900 font-cairo">9.5 / 10</span>
              </div>
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                <span className="block text-xs text-stone-500 font-medium">{lang === 'ar' ? 'القيمة مقابل السعر' : 'Value'}</span>
                <span className="text-lg font-extrabold text-stone-900 font-cairo">10 / 10</span>
              </div>
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                <span className="block text-xs text-stone-500 font-medium">{lang === 'ar' ? 'الأمان للحساسة' : 'Safety'}</span>
                <span className="text-lg font-extrabold text-stone-900 font-cairo">9.8 / 10</span>
              </div>
            </div>
          </div>

          {/* Render Full Review Markdown Article Text in styled prose container */}
          <article className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6 text-stone-800 leading-relaxed text-sm sm:text-base">
            <div className="prose prose-amber max-w-none space-y-6">
              {/* Rendered styled sections */}
              <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 text-stone-900 font-medium text-xs sm:text-sm">
                💡 <strong>{lang === 'ar' ? 'ملاحظة التحرير:' : 'Editorial Note:'}</strong>{' '}
                {lang === 'ar'
                  ? 'تم إعداد هذه المراجعة خصيصاً للجمهور والقرّاء في دولة الإمارات العربية المتحدة بالاعتماد على الفحوصات الميدانية لقوة الترطيب في الجو المكّيف وطقس الخليج.'
                  : 'This 1500+ word review is specifically tailored for UAE readers testing hydration under heavy indoor air conditioning.'}
              </div>

              {/* Formatted Article Prose */}
              <div className="space-y-6 text-stone-800 font-tajawal text-sm sm:text-base leading-relaxed">
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2">
                  1. بطاقة تعريف المنتج والبيانات الأساسية
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border-collapse border border-stone-300 rounded-xl">
                    <thead className="bg-stone-800 text-white font-cairo">
                      <tr>
                        <th className="p-3 border border-stone-700 text-start">الخاصية</th>
                        <th className="p-3 border border-stone-700 text-start">التفاصيل</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 bg-white">
                      <tr>
                        <td className="p-3 border font-bold">اسم المنتج الرسمي</td>
                        <td className="p-3 border">{CORE_PRODUCT_DATA.name}</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-bold">الحجم</td>
                        <td className="p-3 border">100 مل (تكفي لـ 3-4 أشهر)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-bold">المكون الرئيسي</td>
                        <td className="p-3 border">96.3% رشاحة إفرازات الحلزون النقية</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-bold">خالٍ من</td>
                        <td className="p-3 border">العطور الاصطناعية، الكحول، البارابين، والزيوت المعدنية</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-bold">السعر المعتاد</td>
                        <td className="p-3 border text-amber-700 font-bold">30 – 45 درهم إماراتي على أمازون الإمارات</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2 pt-4">
                  2. لماذا تحتاج بشرتك في الإمارات إلى سيروم الحلزون كوسركس؟
                </h2>
                <p>
                  تتميز الحياة في دولة الإمارات العربية المتحدة بنمط مناخي خاص جداً: <strong>الحرارة والشمس القوية في الخارج، والتكييف البارد والتبريد المركزي المستمر في الداخل</strong> (سواء في البيت، المكتب، أو أوديتوريوم المولات).
                </p>
                <p>
                  هذا التباين الحاد يتسبب في ظاهرة علمية تُعرف بـ <strong>فقدان الماء عبر البشرة (Transepidermal Water Loss - TEWL)</strong>، حيث يمتص التكييف الرطوبة من الهواء الداخلي، مما يجبر الجلد على إفراز مائه الداخلي للتكيف. تظهر القشور وتفقد البشرة نضارتها وتبدو باهتة ومجهدة.
                </p>
                <p>
                  هنا يأتي دور <strong>خلاصة الحلزون كوسركس 96</strong>. بفضل تركيزها المرتفع من مخاط الحلزون الطبيعي (96.3%)، تشكل هذه الخلاصة دعامة مائية متكاملة تحبس المياه داخل عمق الخلايا، وترمّم الحاجز الواقي المتبخر بدون أن تسبب انسداد المسام أو شعوراً بالثقل الدهني.
                </p>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2 pt-4">
                  3. تحليل المكونات والتركيبة العلمية
                </h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>رشاحة إفرازات الحلزون (96.3%):</strong> تحتوي طبيعياً على حمض الجليكوليك، الببتيدات النحاسية، والإيلاستين لتجديد الخلايا وتنعيم الملمس.</li>
                  <li><strong>صوديوم هيالورونات (Sodium Hyaluronate):**</strong> تجذب المياه حتى 1000 ضعف وزنها وتوصلها لعمق البشرة المقترنة.</li>
                  <li><strong>البانثينول (Pro-Vitamin B5):</strong> مهدئ للالتهاب والتصلب ويقوي حاجز البشرة.</li>
                  <li><strong>الألانتوين والبيتاين:</strong> مكونات مهدئة توازن حموضة الجلد وتقلل الحكة والاحمرار المصاحب للجفاف الشديد.</li>
                </ul>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2 pt-4">
                  4. تجربة القوام وطريقة الاستخدام الصحيحة
                </h2>
                <p>
                  عند ضغط المضخة، يخرج جيل شفاف هلامي. للوهلة الأولى تلاحظين لزوجة خفيفة، ولكن بمجرد وضعه على بشرة رطبة والتطبيق بالتربيت الخفيف بأطراف أصابعك، يمتص الجلد السائل بالكامل في غضون 20 ثانية دون أي أثر لزج، لتترك البشرة ناعمة وندية!
                </p>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs sm:text-sm space-y-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>القاعدة الذهبية للتطبيق:</span>
                  </span>
                  <p className="text-emerald-950">
                    ضعيه دائماً على بشرة رطبة بعد الغسيل والتونر، ثم ربّتي بلطف بثلاث ضغطات، واتبعيه فوراً بالمرطب المفضل لحبس الرطوبة داخل الجلد طوال اليوم تحت التكييف.
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2 pt-4">
                  5. المميزات والعيوب بمنتهى الصراحة (Pros & Cons)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 space-y-2">
                    <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1 font-cairo">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>المميزات (Pros):</span>
                    </h4>
                    <ul className="text-xs space-y-1.5 text-stone-700">
                      {CORE_PRODUCT_DATA.prosAr.map((pro, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200 space-y-2">
                    <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1 font-cairo">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>العيوب (Cons):</span>
                    </h4>
                    <ul className="text-xs space-y-1.5 text-stone-700">
                      {CORE_PRODUCT_DATA.consAr.map((con, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-rose-600 font-bold">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-cairo border-b border-amber-200 pb-2 pt-4">
                  6. الحكم النهائي والتقييم (Final Verdict)
                </h2>
                <p>
                  إذا كنتِ تعيشين في الإمارات وتريدين حلولاً حقيقية واقتصادية لمواجهة جفاف التكييف وحرارة الطقس، فإن <strong>سيروم خلاصة الحلزون كوسركس 96</strong> يعتبر استثماراً ذكياً للغاية وبسعر يقل عن 40 درهم على أمازون الإمارات.
                </p>
                <div className="bg-stone-900 text-white p-6 rounded-2xl text-center space-y-2">
                  <span className="text-amber-400 font-extrabold text-2xl font-cairo block">
                    التقييم النهائي: 9.6 / 10
                  </span>
                  <p className="text-xs text-stone-300">
                    ينصح به بشدة كقطعة أساسية في كل روتين عناية بالبشرة في الإمارات والخليج!
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar Product Card & Purchase Sticky Widget */}
        <div className="lg:col-span-4 space-y-6">
          <div className="beauty-card rounded-3xl p-6 border border-stone-200 sticky top-20 space-y-5">
            <div className="aspect-square rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src={ASSETS.cosrxProduct}
                alt="COSRX Snail Essence Bottle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">100 ml (3.38 fl.oz)</span>
                <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                  Original COSRX
                </span>
              </div>
              <h3 className="font-bold text-stone-900 text-base font-cairo leading-snug">
                {CORE_PRODUCT_DATA.nameAr}
              </h3>
            </div>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-600">{lang === 'ar' ? 'سعر الخصم' : 'Discount Price'}</span>
                <span className="text-xl font-extrabold text-amber-800 font-cairo">AED 35.00</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>{lang === 'ar' ? 'السعر الأصلي:' : 'Retail Price:'}</span>
                <span className="line-through">AED 65.00</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-emerald-700 font-bold pt-1 border-t border-amber-200/50">
                <span>{lang === 'ar' ? 'الشحن:' : 'Delivery:'}</span>
                <span>{lang === 'ar' ? 'توصيل مجاني لـ Prime' : 'Free Prime Delivery'}</span>
              </div>
            </div>

            <a
              href={CORE_PRODUCT_DATA.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-stone-950 font-extrabold text-sm py-3.5 rounded-2xl shadow-lg transition"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{lang === 'ar' ? 'اشتري الآن من أمازون الإمارات' : 'Buy Now on Amazon.ae'}</span>
            </a>

            <div className="text-[11px] text-stone-500 space-y-1 pt-2">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'ar' ? 'بائع معتمد وموثوق على أمازون' : 'Verified Amazon.ae Seller'}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'ar' ? 'ضمان المنتج الأصلي 100%' : '100% Authentic Product Guarantee'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
