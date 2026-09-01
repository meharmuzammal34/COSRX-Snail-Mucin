import React, { useState } from 'react';
import { Language, PageView } from '../types';
import {
  CORE_PRODUCT_DATA,
  INGREDIENTS_DATA,
  COMPARISON_ITEMS as COMPARISONS_DATA,
} from '../data/cosrxData';
import { ASSETS } from '../assets/images';
import {
  ShoppingBag,
  Star,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  Wind,
  Sun,
  ExternalLink,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  AlertTriangle,
  HelpCircle,
  ThumbsUp,
  RefreshCw,
  Clock,
  Check,
} from 'lucide-react';

interface HomepageViewProps {
  setActivePage: (page: PageView) => void;
  lang: Language;
}

export const HomepageView: React.FC<HomepageViewProps> = ({ setActivePage, lang }) => {
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<'day1' | 'day7' | 'day14' | 'day30'>('day14');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Skin Quiz State
  const [quizSkinType, setQuizSkinType] = useState<string>('dry');
  const [quizAcHours, setQuizAcHours] = useState<string>('high');
  const [quizSensitivity, setQuizSensitivity] = useState<string>('yes');
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const getQuizResult = () => {
    if (quizSkinType === 'dry' || quizAcHours === 'high') {
      return {
        score: '99% Match!',
        titleAr: 'سيروم الحلزون كوسركس 96 هو الخيار المنقذ لبشرتكِ!',
        titleEn: 'COSRX Snail 96 is the Ultimate Lifesaver for Your Skin!',
        descAr: 'بشرتكِ تعاني من تبخر المياه السريع بسبب الهواء التكييفي الجاف. تركيز 96.3% من مخاط الحلزون سيحبس الرطوبة ويعيد النضارة المرنة من الأسبوع الأول.',
        descEn: 'Your skin suffers from accelerated water loss due to indoor AC air. 96.3% snail mucin will lock deep moisture and restore elastic glow in week 1.',
        routineAr: 'طريقة الاستخدام: 2-3 ضغطات صباحاً ومساءً على بشرة رطبة مباشرة ثم حبس الترطيب بكريم مرطب.',
        routineEn: 'How to use: Apply 2-3 pumps morning & night on damp skin, then lock in with moisturizer.',
      };
    } else if (quizSkinType === 'oily') {
      return {
        score: '94% Match!',
        titleAr: 'خفيف جداً وغير مسبب لانسداد المسام (Non-Comedogenic)!',
        titleEn: 'Weightless & Non-Comedogenic Hydration!',
        descAr: 'ممتاز جداً للبشرة الدهنية في رطوبة الإمارات! يمتص خلال ثوان دون إفراز زيوت زائدة ويهدئ آثار الحبوب.',
        descEn: 'Perfect for oily skin in humid UAE weather! Absorbs in seconds with zero greasy residue.',
        routineAr: 'طريقة الاستخدام: ضغطتان فقط على بشرة رطبة صباحاً لترطيب مائي نقي.',
        routineEn: 'How to use: 2 pumps on damp skin in the morning for crisp oil-free hydration.',
      };
    } else {
      return {
        score: '96% Match!',
        titleAr: 'تركيبة خالية من العطور وآمنة للبشرة الحساسة!',
        titleEn: 'Fragrance-Free & Ultra-Safe for Sensitive Skin!',
        descAr: 'خالٍ من العطور والكحول المخرش. يهدئ الاحمرار ويزيد مرونة البشرة المجهدة دون أي تهيج.',
        descEn: 'Free of synthetic fragrance & harsh drying alcohols. Soothes redness and strengthens skin barrier.',
        routineAr: 'طريقة الاستخدام: استخدامه مرتين يومياً لتقوية حاجز الجلد وتقليل التحسس.',
        routineEn: 'How to use: Apply twice daily to reinforce barrier strength and soothe reactivity.',
      };
    }
  };

  const beforeAfterData = {
    day1: {
      titleAr: 'اليوم الأول: التهدئة والامتصاص',
      titleEn: 'Day 1: Instant Calm & Hydration',
      descAr: 'امتصاص سريع خلال 20 ثانية. اختفاء شعور الجفاف والشد المزعج بعد ساعتين تحت التكييف.',
      descEn: 'Rapid 20-second skin absorption. Eliminates tight AC-induced dryness instantly.',
      glowPercentage: '30%',
    },
    day7: {
      titleAr: 'اليوم السابع: زوال القشور وتوازن المياه',
      titleEn: 'Day 7: Flakiness Gone & Water Balance',
      descAr: 'اختفاء القشور حول الأنف والفم. البشرة تبدو مرنة وتستجيب للمكياج بسلاسة دون تكتل.',
      descEn: 'Dry patches completely disappear around nose & lips. Makeup applies seamlessly.',
      glowPercentage: '60%',
    },
    day14: {
      titleAr: 'اليوم الـ 14: النضارة الزجاجية الحقيقية (Glass Skin)',
      titleEn: 'Day 14: True K-Beauty Glass Skin',
      descAr: 'لمعان صحي ندي بدون زيوت ثقيلة. تحسن ملمس الجلد المجهد من حرارة وشمس الإمارات.',
      descEn: 'Healthy dewy glow with non-greasy finish. Visible refinement of tired skin texture.',
      glowPercentage: '85%',
    },
    day30: {
      titleAr: 'اليوم الـ 30: ترميم كامل وتفتيح الآثار',
      titleEn: 'Day 30: Full Barrier Repair & Faded Marks',
      descAr: 'حاجز بشرة قوي ومقاوم للتكييف. خبو ملحوظ في آثار الحبوب البنية والبقع الداكنة.',
      descEn: 'Strengthened skin barrier against daily AC dryness. Faded acne scars and dark spots.',
      glowPercentage: '98%',
    },
  };

  const faqs = [
    {
      qAr: 'لماذا تعتبر خلاصة الحلزون كوسركس مثالية لمناخ الإمارات والتكييف؟',
      qEn: 'Why is COSRX Snail Mucin perfect for UAE weather & AC?',
      aAr: 'التكييف يمتص الرطوبة الطبيعية من الهواء الداخلي في الإمارات، مما يتسبب في جفاف البشرة المستمر. تعمل خلاصة الحلزون بتركيز 96.3% كحاجز مائي طبيعي يحبس الترطيب ويعوض نقص المياه دون أن تسد المسام أو تسبب طبقة زيتية ثقيلة.',
      aEn: 'Non-stop indoor AC strips moisture from ambient air. COSRX 96.3% snail mucin binds deep water into the skin barrier without feeling heavy in hot weather.',
    },
    {
      qAr: 'كم سعر المنتج المعتاد على أمازون الإمارات؟ وهل الشحن مجاني؟',
      qEn: 'What is the usual price on Amazon.ae and is shipping free?',
      aAr: 'يتراوح السعر المعتاد بين 30 إلى 45 درهم إماراتي (غالباً حوالي 35 درهم أثناء العروض). يتوفر شحن مجاني وسريع لأعضاء أمازون برايم (Prime) مع إمكانية التوصيل في نفس اليوم في دبي وأبوظبي.',
      aEn: 'Usually ranges between AED 30 to AED 45 (often AED 35 on sale). Amazon Prime members enjoy free same-day or next-day delivery in Dubai & Abu Dhabi.',
    },
    {
      qAr: 'كيف أتأكد أن العلبة أصلية 100% وليست مقلدة؟',
      qEn: 'How to make sure I am buying 100% authentic bottle?',
      aAr: 'اطلبي دائماً من خلال الرابط المعتمد لأمازون الإمارات (Amazon.ae Direct)، وتأكدي من وجود رمز الشعار المطبوع بنقاء على العلبة والكود المطبوع بالأسفل (Batch Code).',
      aEn: 'Always buy from verified sellers via our official Amazon.ae link. Verify clean label printing and the crisp batch code stamped on the bottle base.',
    },
    {
      qAr: 'هل يناسب البشرة الدهنية والمستعدة للحبوب؟',
      qEn: 'Is it suitable for oily and acne-prone skin?',
      aAr: 'نعم بامتياز! خلاصة كوسركس خالية من الزيوت الثقيلة وغير مسببة لانسداد المسام (Non-comedogenic). بفضل الألانتوين والزنك الطبيعي في مخاط الحلزون، فهي تهدئ الحبوب المتهيج وتخفف الآثار.',
      aEn: 'Yes! It is oil-free and non-comedogenic. Allantoin and natural trace minerals soothe active acne flare-ups and lighten post-acne dark spots.',
    },
    {
      qAr: 'ما هي الطريقة الصحيحة لتطبيقه للحصول على أفضل نتيجة؟',
      qEn: 'What is the correct way to apply it for best results?',
      aAr: 'القاعدة الذهبية هي تطبيقه على بشرة رطبة بعد الغسول أو التونر مباشرة (2-3 ضغطات)، ثم الانتظار 30 ثانية وتثبيته بكريم مرطب لحبس جزيئات الماء داخل الجلد.',
      aEn: 'The golden rule is applying 2-3 pumps on damp skin immediately after cleansing/toning, then sealing it with a moisturizer 30 seconds later.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section id="hero" className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-stone-800 p-6 sm:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>
                {lang === 'ar'
                  ? 'دليل وشراء المنتج الأصلي في الإمارات 2026'
                  : 'Official UAE Product & Authenticity Guide 2026'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-cairo text-amber-50">
              {lang === 'ar' ? (
                <>
                  حل جفاف البشرة المجهدة بالتكييف مع{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                    خلاصة الحلزون كوسركس الأصلي
                  </span>
                </>
              ) : (
                <>
                  Conquer AC Dryness in UAE with Authentic{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                    COSRX Snail 96 Mucin Essence
                  </span>
                </>
              )}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ar'
                ? 'استعيدي نضارة بشرتكِ الزجاجية الكورية (Glass Skin) بتركيز 96.3% من مخاط الحلزون النقي. ترطيب مائي عميق يعالج جفاف التكييف المستمر في دبي وأبوظبي، بدون طبقة دهنية أو انسداد للمسام.'
                : 'Restore your natural K-Beauty Glass Skin glow with 96.3% pure Snail Secretion Filtrate. Lightweight deep water hydration engineered for severe indoor AC air in the UAE.'}
            </p>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-stone-800/80 border border-stone-700/60 p-3.5 rounded-2xl text-center">
                <span className="block text-amber-400 font-extrabold text-lg sm:text-xl">96.3%</span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {lang === 'ar' ? 'تركيز الحلزون النقي' : 'Pure Snail Mucin'}
                </span>
              </div>
              <div className="bg-stone-800/80 border border-stone-700/60 p-3.5 rounded-2xl text-center">
                <span className="block text-amber-400 font-extrabold text-lg sm:text-xl">AED 35</span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {lang === 'ar' ? 'السعر على أمازون' : 'Amazon.ae Price'}
                </span>
              </div>
              <div className="bg-stone-800/80 border border-stone-700/60 p-3.5 rounded-2xl text-center">
                <span className="block text-amber-400 font-extrabold text-lg sm:text-xl">4.8 / 5</span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {lang === 'ar' ? '14,000+ تقييم' : '14,000+ Reviews'}
                </span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href={CORE_PRODUCT_DATA.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-sm px-6 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  {lang === 'ar'
                    ? 'اشتري الآن من أمازون الإمارات (35 درهم)'
                    : 'Buy Now on Amazon.ae (AED 35)'}
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-800/80">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                {lang === 'ar' ? 'منتج كوري أصلي 100%' : '100% Original K-Beauty'}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-amber-400" />
                {lang === 'ar' ? 'توصيل مجاني لأعضاء برايم' : 'Free Prime Delivery'}
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {lang === 'ar' ? 'خالٍ من العطور والبارابين' : 'Fragrance & Paraben Free'}
              </span>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl group">
              <img
                src={ASSETS.cosrxProduct}
                alt="COSRX Advanced Snail 96 Mucin Power Essence UAE"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                  COSRX 100ml Bottle
                </span>
                <span className="text-white font-extrabold text-lg">
                  {CORE_PRODUCT_DATA.nameAr}
                </span>
                <div className="flex items-center justify-between text-xs text-stone-300 pt-1">
                  <span className="text-emerald-400 font-bold">In Stock on Amazon.ae</span>
                  <span className="text-amber-400 font-bold">AED 35.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Product Review & Specifications (`#review`) */}
      <section id="review" className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            <Award className="w-4 h-4 text-amber-600" />
            <span>
              {lang === 'ar'
                ? 'مراجعة وتقييم الشراء الشامل'
                : 'Comprehensive Product Review & Specs'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'مواصفات وتقييم سيروم الحلزون كوسركس COSRX Snail 96'
              : 'Detailed Tested Specifications of COSRX Snail 96'}
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed">
            {lang === 'ar'
              ? 'سيروم خفيف بقوام لزج هلامي يمتص خلال 20 ثانية دون ترك أي أثر دهني. صُمم خصيصاً لترميم حاجز البشرة المجهد، تهدئة الاحمرار، وإعطاء مظهر البشرة الزجاجية (Glass Skin).'
              : 'Lightweight mucin gel serum that absorbs in 20 seconds. Formulated to repair damaged moisture barriers and soothe redness.'}
          </p>
        </div>

        {/* Pros and Cons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 p-6 rounded-2xl space-y-3">
            <h3 className="font-bold text-emerald-950 text-base font-cairo flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{lang === 'ar' ? 'المميزات الرئيسية' : 'Key Advantages'}</span>
            </h3>
            <ul className="space-y-2 text-xs text-emerald-900">
              {CORE_PRODUCT_DATA.prosAr.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Formula Specs */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-6 rounded-2xl space-y-3">
            <h3 className="font-bold text-amber-950 text-base font-cairo flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>{lang === 'ar' ? 'ضمانات ونقاء التركيبة' : 'Formula Purity Specs'}</span>
            </h3>
            <ul className="space-y-2 text-xs text-amber-900">
              <li className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold">{lang === 'ar' ? 'تركيز السيروم' : 'Concentration'}</span>
                <span className="font-bold bg-amber-200 px-2 py-0.5 rounded text-amber-950">96.3% Snail Mucin</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold">{lang === 'ar' ? 'العطور والكحول' : 'Fragrance & Alcohol'}</span>
                <span className="font-bold text-emerald-700">0% (خالٍ تماماً)</span>
              </li>
              <li className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold">{lang === 'ar' ? 'اختبار المسام' : 'Comedogenicity'}</span>
                <span className="font-bold text-emerald-700">Non-Comedogenic (لا يسد المسام)</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span className="font-semibold">{lang === 'ar' ? 'الرفق بالحيوان' : 'Cruelty-Free'}</span>
                <span className="font-bold text-emerald-700">100% Cruelty Free</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. UAE AC Climate Problem & Solution (`#climate`) */}
      <section id="climate" className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            <Wind className="w-4 h-4 text-amber-600" />
            <span>
              {lang === 'ar'
                ? 'مشكلة جفاف البشرة في مناخ دولة الإمارات'
                : 'The UAE Indoor Climate Challenge'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'لماذا تعاني بشرتكِ من الجفاف والقشور الشديدة تحت التكييف؟'
              : 'Why Does Indoor Air Conditioning Wreck Your Skin Hydration?'}
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed">
            {lang === 'ar'
              ? 'العيش في الإمارات يعني البقاء في غرف مكيفة لأكثر من 18 ساعة يومياً. التكييف يمتص الرطوبة من الهواء، مما يجبر الجلد على إفراز مائه الداخلي وتبخره (TEWL)، فتظهر القشور ويصبح الملمس باهتاً وحساساً.'
              : 'Living in the UAE means spending 18+ hours daily under heavy air conditioning. Indoor AC extracts humidity from the air, accelerating Transepidermal Water Loss (TEWL).'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold">
              <Wind className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-stone-900 text-base font-cairo">
              {lang === 'ar' ? '1. امتصاص رطوبة الهواء' : '1. Dry AC Air'}
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              {lang === 'ar'
                ? 'التكييف يقلل رطوبة المكان إلى أقل من 30%، مما يجفف الطبقة السطحية للبشرة.'
                : 'AC reduces room humidity below 30%, constantly drawing moisture out of skin.'}
            </p>
          </div>

          <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold">
              <Sun className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-stone-900 text-base font-cairo">
              {lang === 'ar' ? '2. التباين الحراري والشمس' : '2. Heat & UV Stress'}
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              {lang === 'ar'
                ? 'الانتقال المباشر من حرارة الشارع (45°C) إلى برودة التكييف يصيب حاجز البشرة بالإجهاد.'
                : 'Moving from 45°C outdoor heat to 20°C indoor AC causes thermal stress on skin barrier.'}
            </p>
          </div>

          <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/60 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-800 flex items-center justify-center font-bold">
              <Droplets className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-bold text-emerald-950 text-base font-cairo">
              {lang === 'ar' ? '3. الحل: حماية مخاط الحلزون' : '3. The Snail Shield'}
            </h3>
            <p className="text-emerald-900 text-xs leading-relaxed">
              {lang === 'ar'
                ? 'رشاحة الحلزون 96.3% تبني درعاً مائياً مطاطياً يمنع تبخر السوائل طوال اليوم.'
                : '96.3% Snail Filtrate seals in water molecules and prevents moisture evaporation all day.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step How to Use Guide (`#how-to-use`) */}
      <section id="how-to-use" className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {lang === 'ar'
                ? 'الروتين اليومي الصحيح'
                : 'Step-by-Step Daily Skincare Routine'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-white">
            {lang === 'ar'
              ? 'كيف تستخدمين خلاصة الحلزون كوسركس للحصول على أفضل نتيجة؟'
              : 'How to Apply COSRX Snail Essence Correctly'}
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {lang === 'ar'
              ? 'القاعدة الذهبية لأي سيروم يحتوي على حمض الهيالورونيك ومخاط الحلزون هي التطبيق المباشر على بشرة رطبة.'
              : 'The golden rule for snail mucin is always applying it onto freshly cleansed damp skin.'}
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              titleAr: 'غسول لطيف',
              titleEn: 'Gentle Cleanser',
              descAr: 'تنظيف الوجه بغسول متوازن الـ pH دون تجفيف الجلد.',
            },
            {
              step: '02',
              titleAr: 'رش الماء / التونر',
              titleEn: 'Dampen Skin / Toner',
              descAr: 'ترك الوجه مبللاً قليلاً أو رش تونر مرطب.',
            },
            {
              step: '03',
              titleAr: 'تطبيق سيروم الحلزون',
              titleEn: 'Apply Snail Mucin',
              descAr: 'ضغطي 2-3 ضغطات وزعيها بلطف بطريقة الطبطبة.',
            },
            {
              step: '04',
              titleAr: 'تثبيت بالمرطب',
              titleEn: 'Lock with Moisturizer',
              descAr: 'ضع كريم مرطب لحبس جزيئات الماء داخل الجلد.',
            },
            {
              step: '05',
              titleAr: 'واقي الشمس (صباحاً)',
              titleEn: 'Sunscreen (AM)',
              descAr: 'حماية البشرة من أشعة الشمس المباشرة في الإمارات.',
            },
          ].map((s, idx) => (
            <div key={idx} className="bg-stone-800/80 border border-stone-700/80 p-5 rounded-2xl space-y-2">
              <span className="text-amber-400 font-extrabold text-sm block">STEP {s.step}</span>
              <h3 className="font-bold text-white text-sm font-cairo">
                {lang === 'ar' ? s.titleAr : s.titleEn}
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">{s.descAr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Ingredients Analysis (`#ingredients`) */}
      <section id="ingredients" className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
            {lang === 'ar' ? 'المكونات الفعالة' : 'Hero Ingredients Analysis'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'تركيبة علمية نظيفة خالية من الشوائب والعطور'
              : 'Scientific Clean Formulation Breakdown'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {lang === 'ar'
              ? 'تتكون الخلاصة من تركيبة قصيرة وقوية خالية تماماً من البارابين، العطور الاصطناعية، الزيوت المعدنية، والكحول الجاف.'
              : 'Formulated with minimal clean active ingredients to avoid clogging pores or triggering skin sensitivities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {INGREDIENTS_DATA.map((ing) => (
            <div
              key={ing.id}
              className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 hover:border-amber-400/60 transition space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-stone-900 font-cairo">
                  {lang === 'ar' ? ing.nameAr : ing.nameEn}
                </span>
                <span className="text-[10px] bg-amber-200/60 text-amber-900 font-extrabold px-2 py-0.5 rounded-full">
                  {ing.benefitTagAr}
                </span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                {lang === 'ar' ? ing.simpleDescAr : ing.simpleDescEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive Skin Type Match Quiz (`#quiz`) */}
      <section id="quiz" className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'اختبار الملاءمة التفاعلي' : 'Interactive Skin Type Match Quiz'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-white">
            {lang === 'ar'
              ? 'هل تناسب خلاصة الحلزون نوع بشرتكِ في مناخ الإمارات؟'
              : 'Is COSRX Snail Mucin Suitable for Your Skin Type in UAE?'}
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm">
            {lang === 'ar'
              ? 'أجيبي عن 3 أسئلة سريعة لمعرفة نسبة الملاءمة ورغبة الروتين الأنسب لبشرتكِ.'
              : 'Answer 3 quick questions to receive a instant compatibility analysis for Gulf weather.'}
          </p>
        </div>

        {!quizSubmitted ? (
          <div className="bg-stone-800/90 rounded-2xl p-6 border border-stone-700/80 space-y-6">
            {/* Q1 */}
            <div className="space-y-2">
              <label className="font-bold text-amber-300 text-xs sm:text-sm font-cairo block">
                1. ما هو نوع بشرتكِ الأساسي؟
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'dry', label: 'جافة / مشدودة' },
                  { id: 'oily', label: 'دهنية / معرضة للحبوب' },
                  { id: 'combo', label: 'مختلطة' },
                  { id: 'sensitive', label: 'حساسة / متهيج' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuizSkinType(opt.id)}
                    className={`p-3 rounded-xl border text-xs font-bold transition ${
                      quizSkinType === opt.id
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md'
                        : 'bg-stone-900 border-stone-700 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-2">
              <label className="font-bold text-amber-300 text-xs sm:text-sm font-cairo block">
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
                    onClick={() => setQuizAcHours(opt.id)}
                    className={`p-3 rounded-xl border text-xs font-bold transition ${
                      quizAcHours === opt.id
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md'
                        : 'bg-stone-900 border-stone-700 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="space-y-2">
              <label className="font-bold text-amber-300 text-xs sm:text-sm font-cairo block">
                3. هل تعانين من حبوب متهيجة أو آثار حبوب بنية؟
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'yes', label: 'نعم، تعاني بشرتي من حبوب/آثار' },
                  { id: 'no', label: 'لا، أرغب في ترطيب ونضارة زجاجية' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuizSensitivity(opt.id)}
                    className={`p-3 rounded-xl border text-xs font-bold transition ${
                      quizSensitivity === opt.id
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md'
                        : 'bg-stone-900 border-stone-700 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setQuizSubmitted(true)}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold py-3.5 rounded-xl transition shadow-lg text-sm font-cairo"
            >
              عرض النتيجة والتوصية المخصصة
            </button>
          </div>
        ) : (
          <div className="bg-stone-800 rounded-2xl p-6 border border-amber-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-700 pb-3">
              <span className="text-emerald-400 font-extrabold text-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5" />
                <span>{getQuizResult().score}</span>
              </span>
              <button
                type="button"
                onClick={() => setQuizSubmitted(false)}
                className="text-stone-400 hover:text-stone-200 text-xs flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة الاختبار</span>
              </button>
            </div>

            <h3 className="font-extrabold text-white text-lg font-cairo">
              {lang === 'ar' ? getQuizResult().titleAr : getQuizResult().titleEn}
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'ar' ? getQuizResult().descAr : getQuizResult().descEn}
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-amber-200 text-xs leading-relaxed">
              <span className="font-bold block text-amber-400 mb-1">الروتين الموصى به:</span>
              <span>{lang === 'ar' ? getQuizResult().routineAr : getQuizResult().routineEn}</span>
            </div>

            <div className="pt-2">
              <a
                href={CORE_PRODUCT_DATA.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>اشتري سيروم الحلزون الأصلي الآن من أمازون (35 درهم)</span>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 7. Product Comparisons (`#comparisons`) */}
      <section id="comparisons" className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
            {lang === 'ar' ? 'المقارنة الشاملة' : 'Product Comparisons'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'مقارنة COSRX Snail 96 مع أشهر السيرومات الكورية في الإمارات'
              : 'COSRX Snail 96 vs Popular K-Beauty Serums'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {lang === 'ar'
              ? 'جدول مقارنة تفصيلي يوضح الفروق الجوهرية في القوام، الأسعار، والملاءمة للتكييف.'
              : 'Side-by-side comparison of texture, price range, and suitability for Gulf weather.'}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-start text-xs">
            <thead className="bg-stone-900 text-white font-cairo">
              <tr>
                <th className="p-3.5 text-start font-bold">المنتج</th>
                <th className="p-3.5 text-start font-bold">الماركة</th>
                <th className="p-3.5 text-start font-bold">القوام</th>
                <th className="p-3.5 text-start font-bold">الأفضل لـ</th>
                <th className="p-3.5 text-start font-bold">السعر تقريباً</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {COMPARISONS_DATA.map((item) => {
                const isCosrx = item.id === 'cosrx-essence';
                return (
                  <tr
                    key={item.id}
                    className={isCosrx ? 'bg-amber-50/80 font-semibold' : 'hover:bg-stone-50'}
                  >
                    <td className="p-3.5">
                      <div className="flex items-center gap-1.5 font-bold text-stone-900">
                        <span>{item.name}</span>
                        {isCosrx && (
                          <span className="bg-amber-500 text-stone-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                            الفائز
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3.5 text-stone-600">{item.brand}</td>
                    <td className="p-3.5 text-stone-600">{item.textureAr}</td>
                    <td className="p-3.5 text-stone-700 font-medium">{item.bestForAr}</td>
                    <td className="p-3.5 font-bold text-amber-800">{item.priceAed} AED</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Where to Buy & Authenticity (`#where-to-buy`) */}
      <section id="where-to-buy" className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              {lang === 'ar'
                ? 'دليل الشراء الآمن والأصالة'
                : 'Authenticity & Verified Purchase Guide'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-white">
            {lang === 'ar'
              ? 'أين تشتري سيروم الحلزون كوسركس الأصلي بأفضل سعر في الإمارات؟'
              : 'Where to Buy Authentic COSRX Snail Essence in UAE'}
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {lang === 'ar'
              ? 'تصل أسعار العلبة في الصيدليات الكبرى بالدولة إلى 65-80 درهم، بينما تتوفر العلبة الأصلية نفسها بسعر 35 درهم على أمازون الإمارات مع شحن برايم مجاني.'
              : 'Pharmacy retail prices reach AED 65-80, while the exact genuine bottle sells for AED 35 on Amazon.ae.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">01. السعر والوفر</span>
            <h3 className="font-bold text-white text-base font-cairo">توفير 45% من السعر</h3>
            <p className="text-stone-300 text-xs leading-relaxed">
              شراء العلبة من أمازون الإمارات يوفر لكِ ما يقارب نصف السعر المعتاد بالصيدليات.
            </p>
          </div>

          <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">02. كود الأصالة</span>
            <h3 className="font-bold text-white text-base font-cairo">رمز العلبة الأصلي (Batch Code)</h3>
            <p className="text-stone-300 text-xs leading-relaxed">
              تأكدي من وجود رمز الشعار والـ Batch Code المطبوع بوضوح أسفل العلبة الصلبة.
            </p>
          </div>

          <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">03. الشحن السريع</span>
            <h3 className="font-bold text-white text-base font-cairo">توصيل برايم نفس اليوم</h3>
            <p className="text-stone-300 text-xs leading-relaxed">
              أعضاء Amazon Prime يحصلون على توصيل مجاني سريع خلال نفس اليوم أو اليوم التالي.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Before & After Timeline + User Reviews */}
      <section className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            {lang === 'ar' ? 'تطوّر النتائج والتجارب' : 'Transformation & Verified Reviews'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'تطور نتائج البشرة وتجارب المشترين في دبي وأبوظبي'
              : 'Real Progress Timeline & Local User Experiences'}
          </h2>
        </div>

        {/* Timeline Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {(['day1', 'day7', 'day14', 'day30'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveBeforeAfterTab(key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeBeforeAfterTab === key
                  ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {key === 'day1' && (lang === 'ar' ? 'اليوم 1' : 'Day 1')}
              {key === 'day7' && (lang === 'ar' ? 'اليوم 7' : 'Day 7')}
              {key === 'day14' && (lang === 'ar' ? 'اليوم 14 (Glass Skin)' : 'Day 14 (Glass Skin)')}
              {key === 'day30' && (lang === 'ar' ? 'اليوم 30' : 'Day 30')}
            </button>
          ))}
        </div>

        <div className="bg-stone-900 text-white p-6 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>
                {lang === 'ar'
                  ? beforeAfterData[activeBeforeAfterTab].titleAr
                  : beforeAfterData[activeBeforeAfterTab].titleEn}
              </span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'ar'
                ? beforeAfterData[activeBeforeAfterTab].descAr
                : beforeAfterData[activeBeforeAfterTab].descEn}
            </p>
          </div>

          <div className="md:col-span-4 bg-stone-800 p-4 rounded-xl border border-stone-700 text-center space-y-2">
            <span className="text-xs text-stone-400 font-medium">
              {lang === 'ar' ? 'مستوى النضارة والترطيب' : 'Glow & Hydration Level'}
            </span>
            <div className="text-3xl font-extrabold text-amber-400 font-cairo">
              {beforeAfterData[activeBeforeAfterTab].glowPercentage}
            </div>
            <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-500"
                style={{ width: beforeAfterData[activeBeforeAfterTab].glowPercentage }}
              />
            </div>
          </div>
        </div>

        {/* User Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-stone-500 font-semibold">دبي (Dubai)</span>
            </div>
            <p className="text-stone-700 text-xs italic leading-relaxed">
              &quot;كنت أعاني من جفاف وقشور مقلقة بسبب مكيف المكتب في دبي. سيروم الحلزون كوسركس غير بشرتي تماماً خلال أسبوع! أستخدمه على بشرة رطبة.&quot;
            </p>
            <div className="text-xs font-bold text-stone-900">— مريم الكعبي، دبي</div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-stone-500 font-semibold">أبوظبي (Abu Dhabi)</span>
            </div>
            <p className="text-stone-700 text-xs italic leading-relaxed">
              &quot;بشرتي دهنية ومستعدة للحبوب. يمتص خلال ثواني ولا يترك أي طبقة دهنية! خفف آثار الحبوب البنية بوضوح ووصلني خلال يوم واحد.&quot;
            </p>
            <div className="text-xs font-bold text-stone-900">— سارة المنصوري، أبوظبي</div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-stone-500 font-semibold">الشارقة (Sharjah)</span>
            </div>
            <p className="text-stone-700 text-xs italic leading-relaxed">
              &quot;سعره ممتاااز جداً على أمازون الإمارات (35 درهم بدل 80 درهم في الصيدليات). أشتري علبتين دائماً. منتج أصلي ومضمون.&quot;
            </p>
            <div className="text-xs font-bold text-stone-900">— خلود السويدي، الشارقة</div>
          </div>
        </div>
      </section>

      {/* 10. FAQs Accordion (`#faq`) */}
      <section id="faq" className="beauty-card rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-stone-900">
            {lang === 'ar'
              ? 'إجابات سريعة لأهم استفسارات المشترين في الإمارات'
              : 'Everything You Need to Know Before Buying'}
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-start p-4 font-bold text-sm text-stone-900 flex items-center justify-between hover:bg-stone-50 transition font-cairo"
                >
                  <span>{lang === 'ar' ? faq.qAr : faq.qEn}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-stone-600 text-xs leading-relaxed border-t border-stone-100 bg-amber-50/20">
                    {lang === 'ar' ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Final Conversion CTA Box */}
      <section className="bg-stone-900 text-white rounded-3xl p-8 text-center space-y-4 border border-amber-500/30 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-amber-300">
          {lang === 'ar'
            ? 'جاهزة لتوديع جفاف التكييف والحصول على بشرة زجاجية؟'
            : 'Ready to Say Goodbye to AC Dryness and Get Glass Skin?'}
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
          {lang === 'ar'
            ? 'اطلبي علبتكِ الأصلية اليوم من أمازون الإمارات بسعر 35 درهم واستفيدي من الشحن السريع المباشر لجميع إمارات الدولة.'
            : 'Order your authentic COSRX bottle today on Amazon.ae for AED 35.00 with fast Prime delivery across UAE.'}
        </p>
        <div className="pt-2">
          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl transition transform hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>
              {lang === 'ar'
                ? 'اشتري الآن من أمازون الإمارات (35 درهم)'
                : 'Buy Now on Amazon.ae (AED 35)'}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

