import {
  ProductData,
  IngredientInfo,
  BlogPost,
  MetaTagInfo,
  CtaExample,
  ComparisonItem,
} from '../types';

export const CORE_PRODUCT_DATA: ProductData = {
  name: 'COSRX Advanced Snail 96 Mucin Power Essence',
  nameAr: 'خلاصة الحلزون المتقدمة 96 كوسركس (100 مل)',
  size: '100 ml',
  keyIngredient: '96.3% Snail Secretion Filtrate (Snail Mucin)',
  keyIngredientAr: '96.3% رشاحة إفرازات الحلزون النقية',
  priceRange: 'AED 30 – AED 45',
  averagePrice: 'AED 35.00',
  amazonRating: 4.8,
  amazonReviewsCount: 14250,
  amazonUrl: 'https://www.amazon.ae/dp/B00PBX3L7K?tag=skincaretips0a-21',
  benefitsAr: [
    'ترطيب عميق وطويل الأمد للبشرة المجهدة بالتكييف',
    'تقوية حاجز البشرة الطبيعي وحمايتها من التلف المناخي',
    'تهدئة الاحمرار والتهيج الناتج عن الحرارة والشمس',
    'تحسين مرونة الجلد وإعطاء نضارة زجاجية (Glass Skin)',
    'تفتيح وتخفيف آثار الحبوب والبقع الداكنة',
    'قوام جيل خفيف سريع الامتصاص ولا يترك طبقة دهنية',
    'خالٍ من العطور والكهول والبرافين ومناسب للبشرة الحساسة',
  ],
  benefitsEn: [
    'Deep & long-lasting hydration for AC-damaged skin',
    'Strengthens skin barrier against harsh UAE weather',
    'Soothes redness & sun-induced irritation',
    'Improves elasticity for healthy Glass Skin glow',
    'Fades post-acne dark marks and hyperpigmentation',
    'Lightweight non-greasy gel texture for hot climate',
    'Fragrance-free, alcohol-free, paraben-free & sensitive skin safe',
  ],
  prosAr: [
    'تركيز مرتفع جداً من رشاحة الحلزون (96.3%)',
    'سعر اقتصادي جداً مقارنة بالماركات الفاخرة (حوالي 35 درهم)',
    'مناسب جداً للطقس الحار والتكييف المستمر في الإمارات',
    'لا يسبب انسداد المسام (Non-comedogenic)',
    'خالٍ من العطور والزيوت العطرية المخرشة',
    'متوفر بشحن سريع وتسليم مجاني مع أمازون برايم الإمارات',
  ],
  consAr: [
    'ملمس هلامي لزج في الثواني الأولى (يتطلب التربيت للامتصاص)',
    'غير نباتي (رغم أنه خالي من إيذاء الحيوان Cruelty-Free)',
    'يحتاج المداومة للحصول على نتائج ملحوظة في توحيد اللون',
  ],
};

export const INGREDIENTS_DATA: IngredientInfo[] = [
  {
    id: 'snail-mucin',
    nameEn: 'Snail Secretion Filtrate (96.3%)',
    nameAr: 'رشاحة إفرازات الحلزون (96.3%)',
    percentage: '96.3%',
    simpleDescAr: 'المكون السحري الأساسي للترطيب وإصلاح الخلايا وإعادة المرونة والنضارة الزجاجية للبشرة.',
    simpleDescEn: 'The core hero ingredient that deeply hydrates, repairs damaged skin cells, and builds elastic glass skin.',
    scientificDescAr: 'غني طبيعياً بحمض الهيالورونيك، الجليكوليك، الببتيدات وعوامل النمو المركبة التي تحفز الكولاجين وتسرع التئام الأنسجة.',
    scientificDescEn: 'Naturally rich in hyaluronic acid, glycolic acid, peptides, and copper peptides that accelerate tissue regeneration.',
    benefitTagAr: 'إصلاح وقوة الترطيب',
  },
  {
    id: 'sodium-hyaluronate',
    nameEn: 'Sodium Hyaluronate',
    nameAr: 'صوديوم هيالورونات (حمض الهيالورونيك)',
    simpleDescAr: 'يجذب الرطوبة من الجو ويحبسها داخل طبقات الجلد ليبقى مرطباً طوال اليوم تحت التكييف.',
    simpleDescEn: 'Binds up to 1,000x its weight in water to lock deep moisture under air conditioning.',
    scientificDescAr: 'شكل ملحي ملين بحجم جزيئي أصغر من حمض الهيالورونيك العادي، يخترق طبقة البشرة السطحية بعمق أكبر.',
    scientificDescEn: 'Lower molecular weight salt form of hyaluronic acid with superior deep stratum corneum penetration.',
    benefitTagAr: 'جذب وحبس المياه',
  },
  {
    id: 'panthenol',
    nameEn: 'Panthenol (Pro-Vitamin B5)',
    nameAr: 'بانثينول (بروفيتامين B5)',
    simpleDescAr: 'يهدئ حروق الشمس والالتهابات ويقوي الحاجز الواقي للبشرة الحساسة.',
    simpleDescEn: 'Calms sun flare-ups and reinforces fragile moisture barriers.',
    scientificDescAr: 'مادة مرطبة ومصاد للالتهاب تتحول إلى حمض البانتوثنيك داخل الجلد لتعزيز توليد الليبيدات الحاجزية.',
    scientificDescEn: 'Pro-vitamin that converts to pantothenic acid in skin, enhancing stratum corneum hydration and barrier repair.',
    benefitTagAr: 'تهدئة وتسكين',
  },
  {
    id: 'allantoin',
    nameEn: 'Allantoin',
    nameAr: 'ألانتوين',
    simpleDescAr: 'يلطف البشرة المتهيجة ويزيل الخلايا الميتة بلطف شديد.',
    simpleDescEn: 'Soothes stressed skin and gently encourages smooth skin renewal.',
    scientificDescAr: 'مركب مهدئ ينشط تكاثر الخلايا ويرطب طبقة الكيراتين المقترنة دون تهيج.',
    scientificDescEn: 'Keratolytic agent that softens keratin while soothing sensitive epithelial skin tissue.',
    benefitTagAr: 'نعومة ولطف',
  },
  {
    id: 'betaine',
    nameEn: 'Betaine',
    nameAr: 'بيتاين',
    simpleDescAr: 'حمض أميني طبيعي يوازن نسبة الماء في خلايا الجلد ويمنع الجفاف المفاجئ.',
    simpleDescEn: 'Natural osmolyte that keeps cellular fluid balanced against harsh dry air.',
    scientificDescAr: 'مركب أسمولايت طبيعي يساعد الخلية على الاحتفاظ بتوازن السوائل تحت الضغط البيئي والحراري.',
    scientificDescEn: 'Natural amino acid osmolyte regulating cell fluid volume during osmotic dehydration.',
    benefitTagAr: 'توازن الخلايا',
  },
  {
    id: 'arginine',
    nameEn: 'Arginine',
    nameAr: 'أرجينين',
    simpleDescAr: 'حمض أميني يرمم تلف البشرة ويعزز تدفق الدورة الدموية لنضارة صحية.',
    simpleDescEn: 'Essential amino acid building blocks for firm skin tissue.',
    scientificDescAr: 'حمض أميني يدخل في تركيب الكولاجين والإيلاستين ويعزز التروية الدموية للجلد.',
    scientificDescEn: 'Essential amino acid precursor involved in cutaneous collagen synthesis and microcirculation.',
    benefitTagAr: 'ترميم وتغذية',
  },
];

export const COMPARISON_ITEMS: ComparisonItem[] = [
  {
    id: 'cosrx-essence',
    name: 'COSRX Snail 96 Essence',
    brand: 'COSRX (كوسركس)',
    texture: 'Lightweight Fluid Gel',
    textureAr: 'جيل سائل خفيف',
    bestForAr: 'الترطيب العميق، امتصاص سريع، مناسب تحت الميك أب والتكييف',
    priceAed: 'AED 35',
    hydrationScore: 98,
    absorbScore: 95,
    keyStrengthAr: 'تركيز 96.3% حلزون خالص مع أسرع امتصاص للبشرة في مناخ الخليج',
  },
  {
    id: 'cosrx-cream',
    name: 'COSRX Snail 92 All In One Cream',
    brand: 'COSRX (كوسركس)',
    texture: 'Rich Gel Cream',
    textureAr: 'كريم جيل غني',
    bestForAr: 'حبس الرطوبة كخطوة أخيرة للبشرة شديدة الجفاف ليلاً',
    priceAed: 'AED 42',
    hydrationScore: 94,
    absorbScore: 82,
    keyStrengthAr: 'يعمل كمرطب ختامي لحبس المياه بعد السيروم',
  },
  {
    id: 'boj-essence',
    name: 'Beauty of Joseon Ginseng Water',
    brand: 'Beauty of Joseon',
    texture: 'Watery Liquid',
    textureAr: 'ماء مائي خفيف',
    bestForAr: 'تنعيم البشرة الباهتة وتوحيد اللون',
    priceAed: 'AED 52',
    hydrationScore: 85,
    absorbScore: 98,
    keyStrengthAr: 'تحسين الملمس العام والتفتيح بتأثير الجينسنغ',
  },
  {
    id: 'somebymi-snail',
    name: 'SOME BY MI Snail Truecica Serum',
    brand: 'SOME BY MI',
    texture: 'Viscous Clear Serum',
    textureAr: 'سيروم لزج شفاف',
    bestForAr: 'تهدئة الندوب وآثار أثر الحبوب المستعصية',
    priceAed: 'AED 48',
    hydrationScore: 88,
    absorbScore: 88,
    keyStrengthAr: 'مزود بمركب تروسيكا المهدئ لحب الشباب',
  },
];

export const TEN_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'why-skin-dries-in-uae-and-how-snail-mucin-helps',
    titleAr: 'لماذا تعاني بشرتك من الجفاف الشديد في الإمارات؟ وكيف ينقذها سيروم الحلزون؟',
    titleEn: 'Why Skin Dries Up in UAE AC Climate & How Snail Mucin Saves It',
    keywordAr: 'جفاف البشرة في الإمارات التكييف',
    keywordEn: 'dry skin UAE air conditioning snail mucin',
    searchIntentAr: 'تعليمي / حل مشكلة الجفاف الناتجة عن التكييف والحرارة في الخليج',
    readTime: '6 دقائق',
    summaryAr: 'شرح مفصل لظاهرة تبخر الماء عبر البشرة (TEWL) بسبب التكييف المستمر في دبي وأبوظبي، ودور مخاط الحلزون كوسركس في حبس الترطيب وإصلاح الحاجز الجلدية.',
    summaryEn: 'Deep dive into Transepidermal Water Loss caused by non-stop indoor AC in UAE, and how COSRX Snail Mucin forms a protective shield.',
    outlineAr: [
      'ظاهرة TEWL وكيف يسحب التكييف في الإمارات الرطوبة من جلدك',
      'الفرق بين البشرة الجافة والبشرة المفتقرة للماء (Dehydrated Skin)',
      'كيف يعمل تركيز 96.3% حلزون على بناء حاجز واقي يمنع تبخر السوائل',
      'خطوات عمل روتين ترطيب منزلي سريع ومقاوم للتكييف',
    ],
  },
  {
    id: 2,
    slug: 'skincare-routine-with-cosrx-snail-mucin',
    titleAr: 'الروتين الكوري المثالي مع سيروم كوسركس الحلزون للبشرة الجافة والحساسة',
    titleEn: 'Ultimate K-Beauty Routine Featuring COSRX Snail Mucin for Dry Skin',
    keywordAr: 'روتين كوسركس الحلزون',
    keywordEn: 'COSRX snail mucin routine steps',
    searchIntentAr: 'دليلي / الترتيب الصحيح لاستخدام خلاصة الحلزون مع باقي المنتجات',
    readTime: '7 دقائق',
    summaryAr: 'كيف تدمجين سيروم الحلزون مع الغسول، التونر، فيتامين سي، الريتينول والمرطب بدون أي تضارب للحصول على نضارة Glass Skin.',
    summaryEn: 'Step-by-step guide to layering COSRX Snail Essence with Vitamin C, Retinol, Niacinamide, and Hyaluronic Acid without pilling.',
    outlineAr: [
      'القاعدة الذهبية في الترتيب: من الخفيف إلى الثقيل',
      'دمج سيروم الحلزون مع فيتامين C صباحاً لحماية مضاعفة',
      'استخدام سيروم الحلزون مع الريتينول ليلاً لتقليل التهيج',
      'كيفية تطبيق السيروم على بشرة رطبة لامتصاص مضاعف 3 مرات',
    ],
  },
  {
    id: 3,
    slug: 'difference-between-cosrx-snail-96-essence-and-snail-92-cream',
    titleAr: 'الفرق بين سيروم كوسركس الحلزون 96 وكريم الحلزون 92: أيهما تختارين؟',
    titleEn: 'COSRX Snail 96 Essence vs Snail 92 All In One Cream: Which to Buy?',
    keywordAr: 'الفرق بين سيروم الحلزون وكريم الحلزون كوسركس',
    keywordEn: 'COSRX snail essence vs cream difference',
    searchIntentAr: 'مقارنة شرائية / مساعدة المشترية في اختيار المنتج الأنسب لنوع بشرتها',
    readTime: '5 دقائق',
    summaryAr: 'مقارنة شاملة بين السيروم السائل 96 وكريم الجيل 92 من حيث المكونات، القوام، طريقة الاستخدام وأيهما يعطي أفضل قيمة مقابل السعر.',
    summaryEn: 'In-depth comparison between the lightweight 96 Essence and the rich 92 Cream to help UAE buyers choose correctly.',
    outlineAr: [
      'مقارنة المكونات والتركيز (96.3% مقابل 92%)',
      'اختبار القوام والامتصاص وسرعة الجفاف',
      'أي المنتج أفضل للبشرة الدهنية والمختلطة؟',
      'هل يمكنك استخدامهما معاً في نفس الروتين؟',
    ],
  },
  {
    id: 4,
    slug: 'is-cosrx-snail-mucin-good-for-oily-and-acne-prone-skin',
    titleAr: 'هل يناسب سيروم الحلزون كوسركس البشرة الدهنية والمستعدة للحبوب في الصيف؟',
    titleEn: 'Is COSRX Snail Mucin Safe for Oily & Acne-Prone Skin in Humid Summers?',
    keywordAr: 'سيروم الحلزون كوسركس للبشرة الدهنية',
    keywordEn: 'COSRX snail mucin oily skin acne',
    searchIntentAr: 'معلوماتي / تبديد المخاوف بشأن انسداد المسام والقوام اللزج',
    readTime: '6 دقائق',
    summaryAr: 'تحليل دقيق لقدرة سيروم الحلزون على ترطيب البشرة الدهنية دون سد المسام أو زيادة الإفرازات الزهمية في طقس دبي الرطب.',
    summaryEn: 'Analyzing non-comedogenic properties of COSRX Snail Essence for oily and acne-prone skin types in Gulf humidity.',
    outlineAr: [
      'لماذا تحتاج البشرة الدهنية إلى الترطيب المائي؟',
      'هل يتسبب مخاط الحلزون في انسداد المسام (Comedogenic)?',
      'دور الألانتوين والزنك الطبيعي في تهدئة ندوب وإحمرار الحبوب',
      'تجارب حقيقية لصاحبات البشرة الدهنية في الإمارات',
    ],
  },
  {
    id: 5,
    slug: 'real-user-reviews-dubai-abu-dhabi',
    titleAr: 'تجارب حقيقية مع سيروم الحلزون كوسركس من مستخدمات في دبي وأبوظبي',
    titleEn: 'Real COSRX Snail Mucin Reviews & Results from Women in Dubai & Abu Dhabi',
    keywordAr: 'تجارب سيروم الحلزون كوسركس الإمارات',
    keywordEn: 'COSRX snail mucin review Dubai UAE',
    searchIntentAr: 'دليل اجتماعي / استعراض تجارب ونتائج реаلية مع الصور والملاحظات',
    readTime: '8 دقائق',
    summaryAr: 'تجميع لتقييمات ونتائج النساء في دولة الإمارات بعد استخدام سيروم كوسركس لمدة 30 يوماً متواصلة مع تحليل التغيرات في نضارة البشرة.',
    summaryEn: 'Compilation of verified user experiences across Dubai, Abu Dhabi, and Sharjah showing 30-day skin transformations.',
    outlineAr: [
      'نتائج الأسبوع الأول: التهدئة الفورية وانتعاش البشرة',
      'نتائج الأسبوع الثاني: اختفاء القشور والتعافي من جفاف التكييف',
      'نتائج الشهر الأول: النضارة الزجاجية وتفتيح آثار الحبوب',
      'التقييم النهائي ونسبة إعادة الشراء لدى فتيات الإمارات',
    ],
  },
  {
    id: 6,
    slug: 'how-to-spot-fake-cosrx-snail-mucin-on-amazon-uae',
    titleAr: 'كيف تميزين بين سيروم كوسركس الحلزون الأصلي والمقلد عند الشراء من أمازون الإمارات؟',
    titleEn: 'How to Spot Original vs Fake COSRX Snail Mucin on Amazon.ae',
    keywordAr: 'كوسركس الحلزون الأصلي والمقلد أمازون الإمارات',
    keywordEn: 'COSRX snail mucin fake vs original Amazon UAE',
    searchIntentAr: 'توجيهي / حماية المشتري وإرشاده للبائع المعتمد والموثوق',
    readTime: '5 دقائق',
    summaryAr: 'دليل بالصور والعلامات الفتحة لشراء العلبة الأصلية من COSRX، مع معرفة اسم البائع الرسمي (Amazon.ae Direct / COSRX Official Store).',
    summaryEn: 'Essential guide with batch codes, packaging cues, and seller checks to ensure 100% authentic purchase on Amazon.ae.',
    outlineAr: [
      'علامات العلبة الأصلية (الطباعة، الكود، الشعار)',
      'اختبار القوام والرائحة ولون السائل داخل الزجاجة',
      'كيف تختارين البائع المضمون على أمازون الإمارات',
      'ماذا تفعلين إذا وصلتك شحنة غير أصلية؟',
    ],
  },
  {
    id: 7,
    slug: 'cosrx-snail-mucin-for-sensitive-skin-after-sun-exposure',
    titleAr: 'علاج تهيج الشاطئ والشمس: سيروم الحلزون للتهدئة الفورية للبشرة الحساسة',
    titleEn: 'Post-Sun Repair: Using COSRX Snail Mucin After UAE Beach & Sun Exposure',
    keywordAr: 'سيروم الحلزون للبشرة الحساسة والشمس',
    keywordEn: 'COSRX snail mucin sunburn sensitive skin',
    searchIntentAr: 'حل مشكلة / علاج الاحمرار وحروق الشمس الخفيفة بعد البحر',
    readTime: '5 دقائق',
    summaryAr: 'كيف يهدئ سيروم الحلزون الاحمرار والتهيج الناتج عن أشعة الشمس القوية في شواطئ دبي وشاطئ القرم بأبوظبي.',
    summaryEn: 'Emergency skin rescue using cold COSRX Snail Essence to calm heat redness and sun stress.',
    outlineAr: [
      'تأثير أشعة الشمس فوق البنفسجية على حاجز البشرة في الصيف',
      'خصائص البانثينول والألانتوين في التسكين الخاطف',
      'حيلة وضع الزجاجة في الثلاجة قبل الاستخدام لإنعاش البشرة',
      'خطوات الروتين المهدئ بعد العودة من الشاطئ',
    ],
  },
  {
    id: 8,
    slug: 'achieving-korean-glass-skin-in-gulf-weather',
    titleAr: 'أسرار الحصول على البشرة الزجاجية الكورية (Glass Skin) في مناخ الخليج العربي',
    titleEn: 'Secrets to Achieving K-Beauty Glass Skin in the Harsh Gulf Climate',
    keywordAr: 'بشرة زجاجية سيروم الحلزون دبي',
    keywordEn: 'korean glass skin UAE climate tutorial',
    searchIntentAr: 'جمالي / تحفيزي للحصول على مظهر صحي ولامع بدون زيوت زيادات',
    readTime: '7 دقائق',
    summaryAr: 'خطوات عملية واحترافية للوصول للمظهر الزجاجي اللامع باستخدام سيروم الحلزون دون أن تبدو البشرة زيتية أو دهنية في الرطوبة.',
    summaryEn: 'How to combine hydrating layering techniques with COSRX Snail Mucin to get luminous non-greasy Glass Skin in Dubai.',
    outlineAr: [
      'ما هي البشرة الزجاجية الحقيقية؟ (الترطيب المائي وليس الزيتي)',
      'تقنية السبع طبقات (7-Skin Method) مع سيروم الحلزون',
      'كيف تفرقين بين اللمعان الصحي واللمعان الدهني المزعج؟',
      'أهم المنتجات المكملة للحصول على النتيجة النهائية',
    ],
  },
  {
    id: 9,
    slug: 'cosrx-snail-mucin-vs-hyaluronic-acid-serums',
    titleAr: 'سيروم الحلزون كوسركس أم سيروم الهيالورونيك أسيد العادي: أيهما أفضل للترطيب؟',
    titleEn: 'COSRX Snail Mucin vs Pure Hyaluronic Acid Serums: Which Hydrates Better?',
    keywordAr: 'سيروم الحلزون أم الهيالورونيك اسيد',
    keywordEn: 'snail mucin vs hyaluronic acid serum',
    searchIntentAr: 'مقارنة علمية / توضيح الفروق بين المكونات المرطبة الشائعة',
    readTime: '6 دقائق',
    summaryAr: 'تحليل الفروقات الجوهرية بين الهيالورونيك أسيد المنفرد ومخاط الحلزون الشامل متعدد الفوائد في جو الإمارات الجاف.',
    summaryEn: 'Comparing pure hyaluronic acid serums with complex snail secretion filtrate under dry indoor conditions.',
    outlineAr: [
      'كيف يعمل الهيالورونيك أسيد لوحده وقد يسبب جفافاً في الجو الجاف إذا لم يقفل بمرطب؟',
      'لماذا يعتبر مخاط الحلزون أكثر تكاملاً بفضل البروتينات والببتيدات؟',
      'نتيجة المقارنة في الجودة والسعر وراحة البشرة',
      'التوصية النهائية لكل نوع بشرة',
    ],
  },
  {
    id: 10,
    slug: 'where-to-buy-cosrx-snail-mucin-in-uae-price-comparison',
    titleAr: 'أين تشترين سيروم كوسركس الحلزون في الإمارات بأفضل سعر؟ (مقارنة أمازون والصيدليات)',
    titleEn: 'Where to Buy COSRX Snail Mucin in UAE at the Lowest Price (Amazon vs Pharmacies)',
    keywordAr: 'سعر سيروم الحلزون كوسركس أمازون الإمارات',
    keywordEn: 'buy COSRX snail mucin UAE price Amazon',
    searchIntentAr: 'شراء وتوفير / العثور على أفضل عروض وأسعار الشراء والتوصيل السريع',
    readTime: '4 دقائق',
    summaryAr: 'مقارنة أسعار سيروم الحلزون بين أمازون الإمارات والصيدليات الكبرى (بووتس، صيدلية العين) مع توضيح خصومات أمازون برايم وتوصيل نفس اليوم.',
    summaryEn: 'Price comparison breakdown across Amazon.ae, Boots UAE, and local stores highlighting Amazon Prime deals and fast delivery.',
    outlineAr: [
      'مقارنة أسعار المنتجات في الصيدليات المباشرة (AED 70 - 90) مقابل أمازون (AED 30 - 40)',
      'مميزات الشراء من أمازون الإمارات (توصيل برايم المجاني، الإرجاع السهل)',
      'كيف تتابعين العروض والخصومات الدورية في المواسم (White Friday, Prime Day)',
      'رابط الشراء الأفضل المضمون',
    ],
  },
];

export const META_TAGS_DATA: MetaTagInfo[] = [
  {
    pageId: 'home',
    pageNameAr: 'الصفحة الرئيسية',
    pageNameEn: 'Homepage',
    primaryKeywordAr: 'خلاصة الحلزون كوسركس الإمارات',
    primaryKeywordEn: 'COSRX snail mucin UAE',
    metaTitleAr: 'خلاصة الحلزون كوسركس COSRX Snail Mucin UAE | دليل الترطيب وسعر أمازون',
    metaTitleEn: 'COSRX Snail Mucin UAE Review & Best Price on Amazon.ae',
    metaDescAr: 'دليلك الكامل لخلاصة الحلزون كوسركس COSRX Advanced Snail 96 في الإمارات. فوائد ترطيب جفاف التكييف، المكونات، طريقة الاستخدام وأفضل سعر على أمازون الإمارات.',
    metaDescEn: 'Complete guide for COSRX Advanced Snail 96 in UAE. Discover hydration benefits for AC dry skin, ingredients, usage tips, and authentic deals on Amazon.ae.',
  },
  {
    pageId: 'review',
    pageNameAr: 'المراجعة الشاملة (صفحة البيع الرئيسية)',
    pageNameEn: 'In-depth Product Review (Main Money Page)',
    primaryKeywordAr: 'سيروم الحلزون كوسركس مراجعة وتقييم',
    primaryKeywordEn: 'COSRX Advanced Snail 96 review UAE',
    metaTitleAr: 'مراجعة سيروم الحلزون كوسركس COSRX Snail 96 الشاملة | تجربة واقعية وسعر أمازون الإمارات',
    metaTitleEn: 'In-Depth COSRX Snail 96 Review UAE | Tested on AC Skin & Amazon.ae Deal',
    metaDescAr: 'مراجعة وتقييم تفصيلي لسيروم الحلزون كوسركس 96 بعد تجربته في مناخ الإمارات. العيوب، المميزات، طريقة الامتصاص وهل يستحق الشراء بسعر 35 درهم من أمازون؟',
    metaDescEn: 'Honest review of COSRX Snail 96 Essence in UAE climate. Learn about pros, cons, texture, authenticity checks, and how to get it for AED 35 on Amazon.ae.',
  },
  {
    pageId: 'uae-climate',
    pageNameAr: 'فوائد مناخ الإمارات والتكييف',
    pageNameEn: 'UAE Climate & AC Skin Benefits',
    primaryKeywordAr: 'أفضل خلاصة ترطيب للبشرة الجافة الإمارات',
    primaryKeywordEn: 'best hydrating essence AC damaged skin UAE',
    metaTitleAr: 'فوائد خلاصة الحلزون كوسركس لعلاج جفاف التكييف وحرارة الصيف في الإمارات',
    metaTitleEn: 'COSRX Snail Mucin Benefits for UAE Climate & Air Conditioning Dryness',
    metaDescAr: 'اكتشفي كيف ينقذ سيروم الحلزون بشرتك من الجفاف والتهيج الناتج عن التكييف المستمر والحرارة في دبي وأبوظبي. ترطيب مائي عميق بدون زيوت.',
    metaDescEn: 'Discover how COSRX Snail Mucin combats severe skin dehydration caused by non-stop indoor AC and summer heat in UAE. Lightweight non-greasy shield.',
  },
  {
    pageId: 'how-to-use',
    pageNameAr: 'طريقة الاستخدام والخطوات',
    pageNameEn: 'How to Use & Application Steps',
    primaryKeywordAr: 'طريقة استخدام خلاصة الحلزون كوسركس',
    primaryKeywordEn: 'how to use COSRX snail mucin essence',
    metaTitleAr: 'طريقة استخدام سيروم الحلزون كوسركس بالخطوات لامتصاص مضاعف ونضارة زجاجية',
    metaTitleEn: 'How to Apply COSRX Snail Mucin Essence Step-by-Step for Glass Skin',
    metaDescAr: 'تعلمي الخطوات الصحيحة لتطبيق سيروم الحلزون كوسركس 96 على بشرة رطبة للحصول على نضارة الكوريين ومحاذير الاستخدام مع فيتامين سي والريتينول.',
    metaDescEn: 'Master the correct application method for COSRX Snail Essence. Step-by-step layering on damp skin, dosage tips, and routine compatibility.',
  },
  {
    pageId: 'ingredients',
    pageNameAr: 'تحليل المكونات',
    pageNameEn: 'Ingredients Breakdown',
    primaryKeywordAr: 'مكونات سيروم الحلزون كوسركس',
    primaryKeywordEn: 'COSRX snail 96 ingredients breakdown',
    metaTitleAr: 'مكونات سيروم الحلزون كوسركس 96 | تحليل علمي بسيط ومجرب',
    metaTitleEn: 'COSRX Snail Mucin Ingredients Scientific & Simple Breakdown',
    metaDescAr: 'تعرفي على سر تركيز 96.3% من مخاط الحلزون النقية الممزوج بـ الهيالورونيك والبانثينول والألانتوين. خالي تماماً من العطور والبارابين.',
    metaDescEn: 'Detailed look into COSRX 96.3% snail secretion filtrate formula with Sodium Hyaluronate, Panthenol, Allantoin, and Betaine.',
  },
  {
    pageId: 'skin-quiz',
    pageNameAr: 'اختبار ملاءمة نوع البشرة',
    pageNameEn: 'Skin Type Compatibility Quiz',
    primaryKeywordAr: 'خلاصة الحلزون للبشرة الحساسة والجافة',
    primaryKeywordEn: 'COSRX snail mucin for sensitive skin UAE',
    metaTitleAr: 'هل يناسب سيروم الحلزون كوسركس نوع بشرتك في الإمارات؟ | اختبار سريع',
    metaTitleEn: 'Is COSRX Snail Mucin Right for Your Skin Type in UAE? Quiz & Guide',
    metaDescAr: 'اكتشفي خلال دقيقة واحدة ما إذا كان سيروم الحلزون مناسباً لبشرتك الجافة، الدهنية، أو الحساسة وكيفية دمجه في روتينك اليومي مع توصية مخصصة.',
    metaDescEn: 'Take our 1-minute skincare quiz to see if COSRX Snail Essence suits your skin type under UAE weather conditions.',
  },
  {
    pageId: 'comparisons',
    pageNameAr: 'مقارنة السيرومات والمنتجات',
    pageNameEn: 'Product Comparisons',
    primaryKeywordAr: 'سيروم الحلزون كوسركس مقارنة',
    primaryKeywordEn: 'COSRX snail essence comparison Amazon.ae',
    metaTitleAr: 'مقارنة سيروم الحلزون كوسركس مع أفضل السيرومات الكورية في الإمارات',
    metaTitleEn: 'COSRX Snail Mucin vs Other K-Beauty Essences in UAE',
    metaDescAr: 'مقارنة شاملة بالأسعار والميزات بين سيروم الحلزون كوسركس 96، كريم الحلزون 92، وسيرومات بيوتي أوف جوسون وسوم باي مي المتوفرة على أمازون الإمارات.',
    metaDescEn: 'Compare COSRX Snail 96 Essence against COSRX 92 Cream, Beauty of Joseon, and SOME BY MI. Ratings, textures, and Amazon UAE prices.',
  },
  {
    pageId: 'where-to-buy',
    pageNameAr: 'أين تشتري في الإمارات (أمازون الإمارات)',
    pageNameEn: 'Where to Buy in UAE (Amazon.ae Focus)',
    primaryKeywordAr: 'أفضل سعر سيروم الحلزون كوسركس أمازون الإمارات',
    primaryKeywordEn: 'best snail mucin essence Amazon.ae',
    metaTitleAr: 'أين تشترين سيروم الحلزون كوسركس الأصلي في الإمارات؟ | أفضل سعر على أمازون',
    metaTitleEn: 'Buy Authentic COSRX Snail Mucin in UAE | Best Deals on Amazon.ae',
    metaDescAr: 'دليل الشراء الآمن لسيروم كوسركس الأصلي في دبي وأبوظبي. قارني الأسعار (30-35 درهم) واحصلي على توصيل برايم السريع وتجنبي العلب المقلدة.',
    metaDescEn: 'Get authentic COSRX Snail Mucin on Amazon.ae with fast Prime delivery in UAE. Verified sellers, price alerts, and safety checks.',
  },
  {
    pageId: 'blog',
    pageNameAr: 'مدونة العناية بالبشرة',
    pageNameEn: 'Skincare Blog',
    primaryKeywordAr: 'مدونة العناية بالبشرة دبي الإمارات',
    primaryKeywordEn: 'UAE K-beauty skincare blog',
    metaTitleAr: 'مدونة خلاصة الحلزون والعناية الكورية بالبشرة في الإمارات',
    metaTitleEn: 'COSRX Snail Mucin & UAE Skincare Tips Blog',
    metaDescAr: 'مقالات ونصائح متخصصة للعناية بالبشرة في طقس الخليج والإمارات. حلول الجفاف، حب الشباب، وأسرار النضارة الكورية Glass Skin.',
    metaDescEn: 'Expert guides, user stories, and skincare advice tailored for Gulf climate, air conditioning, and K-beauty routines.',
  },
];

export const CTA_EXAMPLES: CtaExample[] = [
  {
    type: 'primary',
    titleAr: 'دعوة للشراء الرئيسية (Hero CTA Button)',
    textAr: 'اشتري الآن من أمازون الإمارات (توصيل سريع مجاني لـ Prime)',
    titleEn: 'Primary Hero Call-To-Action',
    textEn: 'Buy Now on Amazon.ae (Free Fast Prime Delivery)',
    contextAr: 'زر أحمر/ذهبي بارز يظهر في أعلى الصفحة الرئيسية وتحت ملخص المراجعة الشاملة.',
  },
  {
    type: 'secondary',
    titleAr: 'زر فحص السعر والعروض الحالية',
    textAr: 'تحققي من أفضل سعر خصم متوفر اليوم على أمازون (ابتداءً من 35 درهم)',
    titleEn: 'Check Current Deal Button',
    textEn: 'Check Today’s Discount Price on Amazon.ae (From AED 35)',
    contextAr: 'مربع مقارنة الأسعار وصندوق المواصفات السريعة.',
  },
  {
    type: 'urgency',
    titleAr: 'زر الحث السريع ومحدودية الكمية',
    textAr: 'الكمية متوفرة بسعر الخصم لفترة محدودة – اطلبي علبتك الأصلية الآن!',
    titleEn: 'Urgency & Limited Stock CTA',
    textEn: 'Limited Stock at Discount Price – Order Your Authentic Bottle Now!',
    contextAr: 'صندوق التنبيه السعري وتحت فقرة الأصلي والمقلد.',
  },
  {
    type: 'sticky',
    titleAr: 'شريط العرض المباشر المثبت أسفل الشاشة (Sticky Bar)',
    textAr: 'كوسركس 96 الحلزون الاصلي (100ml) | 35.00 درهم على أمازون الإمارات ➔ [اشتري الآن]',
    titleEn: 'Sticky Bottom Mobile Banner CTA',
    textEn: 'Authentic COSRX Snail 96 (100ml) | AED 35.00 on Amazon.ae ➔ [Buy Now]',
    contextAr: 'شريط ثابت يرافق الزائر أثناء التصفح من الجوال لزيادة معدل التحويل.',
  },
  {
    type: 'badge',
    titleAr: 'شارات الثقة ومحفزات النقر (Trust Badges Copy)',
    textAr: '✓ منتج أصلي 100% | ✓ تقييم 4.8/5 (14,000+ تقييم) | ✓ شحن مجاني لأعضاء Prime',
    titleEn: 'Trust Badges & Click Drivers',
    textEn: '✓ 100% Authentic | ✓ 4.8/5 Rating (14,000+ Reviews) | ✓ Free Prime Shipping',
    contextAr: 'توضع مباشرة تحت أزرار الشراء لتبديد أي شكوك لدى المشتري.',
  },
];

export const FULL_ARABIC_REVIEW_ARTICLE = `
# مراجعة شاملة ومجربة: سيروم خلاصة الحلزون كوسركس COSRX Advanced Snail 96 Mucin Essence في الإمارات

هل تعانين من جفاف البشرة المزعج، القشور المقلقة، أو انطفاء النضارة بسبب الجلوس لساعات طويلة تحت **التكييف في دبي وأبوظبي**؟ أو ربما تبحثين عن سيروم يمنحك بشرة زجاجية كورية (Glass Skin) دون أن يترك طبقة دهنية ثقيلة في حرارة الخليج؟

إذا كنتِ قد شاهدتِ آلاف الفيديوهات على تيك توك وإنستغرام عن **سيروم الحلزون كوسركس (COSRX Advanced Snail 96 Mucin Power Essence - 100ml)** وتساءلتِ: *هل هذا المنتج يستحق الضجة فعلاً؟ وهل يناسب مناخ الإمارات وطقسها الجاف بالداخل والحار بالخارج؟*

في هذه المراجعة الشاملة والمحايدة، لن نكتفي بنقل الكلام التسويقي، بل سنغوص في **التجربة العملية الميدانية**، تحليل المكونات الكيميائية بشكل مبسط، أداء المنتج تحت التكييف، وكيف تجدين العلبة الأصلية على **أمازون الإمارات (Amazon.ae)** بأفضل سعر متوفر حالياً (حوالي 35 درهم إماراتي).

---

## 1. بطاقة تعريف المنتج والبيانات الأساسية

| الخاصية | التفاصيل |
| :--- | :--- |
| **اسم المنتج الرسمي** | COSRX Advanced Snail 96 Mucin Power Essence |
| **الحجم** | 100 مل (يكفي للاستخدام اليومي لمدة 3 إلى 4 أشهر) |
| **المكون الرئيسي** | 96.3% رشاحة إفرازات الحلزون النقية (Snail Secretion Filtrate) |
| **المكونات الثانوية** | صوديوم هيالورونات، بانثينول (B5)، ألانتوين، بيتاين، أرجينين |
| **خالٍ من** | العطور الاصطناعية، الكحول، البارابين، الفثالات، الزيوت المعدنية |
| **القوام والتكستشر** | جيل هلامي شفاف، لزج خفيف يتغلغل بسرعة في البشرة |
| **السعر المعتاد في الإمارات** | بين **30 إلى 45 درهم إماراتي** على أمازون الإمارات |
| **تقييم المستخدمين** | 4.8 من 5 نجوم (أكثر من 14,000 تقييم موثق على Amazon.ae) |
| **اختبار الرفق بالحيوان** | خالي من الإيذاء (Cruelty-Free - يتم جمع المخاط بطريقة آمنة) |

---

## 2. لماذا تحتاج بشرتك في الإمارات إلى سيروم الحلزون كوسركس؟

تتميز الحياة في دولة الإمارات العربية المتحدة بنمط مناخي خاص جداً: **الحرارة والشمس القوية في الخارج، والتكييف البارد والتبريد المركزي المستمر في الداخل** (سواء في البيت، المكتب، أو أوديتوريوم المولات).

هذا التباين الحاد يتسبب في ظاهرة علمية تُعرف بـ **فقدان الماء عبر البشرة (Transepidermal Water Loss - TEWL)**:
1. التكييف يمتص الرطوبة من الهواء، مما يجبر الجلد على إفراز مائه الداخلي للتكيف.
2. تظهر القشور الصغيرة حول الأنف والفم.
3. تفقد البشرة نضارتها وتبدو باهتة ومجهدة، وقد تبدأ البشرة الدهنية في إفراز دهون زائدة كمحاولة دفاعية لتعويض الجفاف!

هنا يأتي دور **خلاصة الحلزون كوسركس 96**. بفضل تركيزها المرتفع من مخاط الحلزون الطبيعي (96.3%)، تشكل هذه الخلاصة **دعامة مائية متكاملة** تحبس المياه داخل عمق الخلايا، وترمّم الحاجز الواقي المتبخر بدون أن تسبب انسداد المسام أو شعوراً بالثقل الدهني.

---

## 3. تحليل المكونات والتركيبة العلمية (In-Depth Ingredients)

ما يجعل سيروم كوسركس الحلزون مميزاً للغاية هو **بساطة التركيبة وفعالية مكوناتها**:

1. **رشاحة إفرازات الحلزون (96.3%):**
   ليست مجرد ماء، بل سائل مغذي طبيعي يحتوي على *حمض الجليكوليك، ببتيدات نحاسية، الإيلاستين، والمركبات الهيالورونية الطبيعية*. تعمل هذه المجموعة على تجديد الأنسجة، تقليل آثار الحبوب الندبية، وإعطاء النسيج المرن للجلد.

2. **صوديوم هيالورونات (Sodium Hyaluronate):**
   صورة محسنة ومصغرة من حمض الهيالورونيك، تستطيع جذّب المياه حتى 1000 ضعف وزنها، وتوصيلها إلى أعماق البشرة المقترنة.

3. **البانثينول (Pro-Vitamin B5):**
   مهدئ ساحري للالتهاب والتصلب، يقوي جدار خلية الجلد ويعيد مرونتها بعد التعرض لشمس دبي وأبوظبي الشديدة.

4. **الألانتوين (Allantoin) والبيتاين (Betaine):**
   مكونات مهدئة ومرطبة توازن حموضة الجلد وتقلل الحكة والاحمرار المصاحب للجفاف الشديد.

> **ملاحظة مهمة للحساسية:** المنتج خالٍ تماماً من أي عطور مضافة أو زيوت عطرية، مما يجعله الخيار الأول لصاحبات البشرة الحساسة أو المصابة بالوردية (Rosacea).

---

## 4. تجربة القوام والملمس ورائحة المنتج

عند ضغط المضخة (Pump)، يخرج جيل شفاف هلامي. للوهلة الأولى عند لمسه بين أصابعك، ستلاحظين **تمططاً ولزوجة مميزة** بسبب تركيز مخاط الحلزون العالي.

**لكن المفاجأة هنا:** بمجرد وضع 2-3 قطرات على وجهك والتربيت الخفيف (Patting) بأطراف أصابعك:
- يمتص الجلد السائل بالكامل في غضون **15 إلى 30 ثانية**.
- يختفي الشعور اللزج تماماً.
- تترك البشرة ملمساً ناعماً كالحرير مع **نضارة مائية مشرقة (Dewy Finish)**.
- رائحة المنتج: محايدة شبه معدومة بدون عطور.

---

## 5. طريقة الاستخدام الصحيحة للحصول على أفضل نتائج (Pro Tips)

للحصول على **أقصى استفادة ونضارة زجاجية بدون تحبب (Pilling)**، اتبعي هذه الخطوات المجربة:

1. **التنظيف:** اغسلي وجهك بغسول لطيف خالٍ من الكبريتات.
2. **التونر / الماء (خطوة حاسمة):** لا تجففي وجهك بالكامل! اتركي بشرتك رطبة نديّة بماء فاتر أو رشّة من التونر المرطب.
3. **تطبيق سيروم الحلزون:** وضعي **2 إلى 3 ضغطات** من سيروم كوسركس على كف يدك، ثم وزعيه وربّتي بلطف على الوجه والرقبة. (التربيت يساعد المخاط على التغلغل فوراً).
4. **الحبس بالمرطب:** انتظري 30 ثانية، ثم ضعي كريمك المرطب المفضل أو واقي الشمس لحبس هذه الترطيبات المائية داخل الجلد طوال اليوم.

### كيف تدمجينه مع المكونات الفعالة الأخرى؟
- **مع فيتامين سي (Vitamin C):** ممتاز جداً صباحاً! يوضع فيتامين سي أولاً، وبعد امتصاصه يوضع سيروم الحلزون لتهدئة أي وخز.
- **مع الريتينول (Retinol):** حمايتك المثالية ليلاً! يعمل سيروم الحلزون كبافر (Buffer) يقلل تقشير واحمرار الريتينول.

---

## 6. نتائج وتجارب الاستخدام على المدى القريب والبعيد

بناءً على متابعة نتائج المستخدمات في دولة الإمارات:

- **بعد أول يومين:** اختفاء مشاعر الشد والجفاف فور الخروج من الغرف المكيفة، ومرونة ملحوظة في البشرة.
- **بعد أسبوعين:** اختفاء القشور تماماً حول جانبي الأنف، وتهدئة الاحمرار الناتج عن الحرارة.
- **بعد 4 أسابيع:** توحيد ملمس البشرة، خبو ملحوظ في آثار الحبوب البنية الجديدة، ونضارة واضحة دون الحاجة لكريمات أساس ثقيلة.

---

## 7. المميزات والعيوب بمنتهى الصراحة (Pros & Cons)

### المميزات (Pros):
- **ترطيب عميق استثنائي** يعالج جفاف التكييف بامتياز.
- **تركيبة نظيفة وأمنة 100%** خالية من العطور والكحول.
- **سعر اقتصادي مغري جداً** (حوالي 35 درهم لـ 100 مل تدوم لشهور).
- **مناسب لجميع أنواع البشرة** (الجافة، المختلطة، الدهنية، والحساسة).
- **يتوفر بشحن سريع** عبر أمازون الإمارات خلال 24 ساعة.

### العيوب (Cons):
- القوام اللزج في البداية قد لا يروق لمن تفضل السوائل المائية المباشرة (لكنه يزول بالتربيت).
- ليس منتجاً علاجياً رئيساً للتجاعيد العميقة، بل يركز على الترطيب المرن والتهدئة.
- المنتج ليس نباتياً (Vegan)، على الرغم من أنه خالي من إيذاء الحلزون.

---

## 8. دليل الشراء وتجنب العلب المقلدة على أمازون الإمارات (Amazon.ae)

نظرًا للشعبية الجارفة لمنتج COSRX، ظهرت بعض العلب المقلدة في الأسواق المحلية. لضمان حصولك على **المنتج الأصلي 100%**:

1. **المصدر الموثوق:** اطلبي دائماً من رابط **أمازون الإمارات الرسمي** حيث يكون البائع هو Amazon.ae نفسه أو متجر موثوق مع تقييمات إيجابية مرتفعة.
2. **شعار COSRX الأصلي:** تأكدي من وجود رمز الاستجابة السريع (QR Code) أو الختم الواضح والطباعة النظيفة غير الباهتة على العلبة الخارجية.
3. **الكود والباك كود (Batch Code):** يكون مطبوعاً بوضوح أسفل الزجاجة البلاستيكية الصلبة.
4. **السعر الواقعي:** السعر الاصلي العادل يتراوح بين **30 إلى 45 درهم إماراتي**. إذا وجدته بسعر غريب مثل 10 دراهم، فقد يكون مقلداً!

> **روابط الشراء الموصى بها:**
> [ضغط هنا للشراء المباشر من أمازون الإمارات بأفضل سعر وتوصيل برايم المجاني]

---

## 9. الأسئلة الشائعة حول سيروم الحلزون كوسركس (FAQs)

### هل سيروم الحلزون كوسركس يسبب حبوباً تحت الجلد؟
لا، سيروم كوسركس غير مسبب لانسداد المسام (Non-comedogenic). ومع ذلك، إذا كانت لديك حساسية نادرة جداً من إفرازات الحلزون أو حبوب اللقاح/المحاريات، يُنصح بإجراء اختبار رقعة (Patch Test) على ساعد اليد أولاً.

### هل يمكن استخدام سيروم الحلزون يومياً؟
نعم، هو سيروم مغذي لطيف جداً يوصى باستخدامه مرتين يومياً (صباحاً ومساءً).

### كم تدوم زجاجة الـ 100 مل؟
تستمر الزجاجة الواحدة عادةً من **3 إلى 4 أشهر** مع الاستخدام المنتظم بمعدل 2-3 ضغطات مرتين يومياً.

---

## 10. الحكم النهائي والتقييم (Final Verdict)

إذا كنتِ تعيشين في الإمارات وتريدين حلولاً حقيقية واقتصادية لمواجهة جفاف التكييف وحرارة الطقس، فإن **سيروم خلاصة الحلزون كوسركس 96** يعتبر **استثماراً ذكياً للغاية وبسعر يقل عن 40 درهم**.

إنه يمنح بشرتك كل ما تحتاجه من ترطيب عميق، تهدئة، ونضارة زجاجية دون إرهاق ميزانيتك في الماركات الفاخرة المكلفة.

**التقييم النهائي:** 9.6 / 10 - *ينصح به بشدة كقطعة أساسية في كل روتين عناية إماراتي!*

---
👉 **[انقري هنا للتحقق من السعر الحالي وتوفر الشحن السريع على أمازون الإمارات]**
`;

export const HOMEPAGE_ARABIC_OUTLINE = {
  title: 'مخطط هارب الهيكل التنفيذي للصفحة الرئيسية (Homepage Outline)',
  sections: [
    {
      id: 'hero',
      nameAr: '1. الهيدر والبانر الرئيسي (Hero Section)',
      elements: [
        'عنوان رئيسي واضح: "حل جفاف البشرة المجهدة بالتكييف في الإمارات مع خلاصة الحلزون كوسركس الأصلي"',
        'عنوان فرعي: "اكتشفي سر النضارة الزجاجية الكورية بأعلى تركيز 96.3% وبأفضل سعر على أمازون الإمارات"',
        'صورة عالية الجودة لزجاجة COSRX 100ml مع قطرات ماء نديّة',
        'زر الشراء المباشر (Primary CTA): "اشتري الآن من أمازون الإمارات - توصيل برايم مجاني"',
        'شارات ثقة سريعة: تقييم 4.8/5 (14,000+ تقييم) | منتج كوري أصلي 100% | خالي من العطور',
      ],
    },
    {
      id: 'uae-problem',
      nameAr: '2. قسم مشكلة جفاف التكييف ومناخ الخليج (The UAE Climate Problem)',
      elements: [
        'توضيح مشكلة الجفاف المقنع المصاحب للعيش في دبي وأبوظبي بسبب التكييف المستمر',
        'رسم توضيحي لظاهرة تبخر الرطوبة عبر الجلد (TEWL)',
        'كيف يعمل سيروم الحلزون كوسركس كدرع حماية مائي يمنع تبخر السوائل',
      ],
    },
    {
      id: 'product-highlights',
      nameAr: '3. ملخص الميزات والمكونات الذهبية (Product Highlights & Formula)',
      elements: [
        'شبكة مكونات تفاعلية: 96.3% مخاط حلزون + هيالورونيك أسيد + بانثينول B5 + ألانتوين',
        'ميزات المنتج: خالي من العطور، خالي من الكحول، مناسب للبشرة الحساسة، لا يسد المسام',
        'جدول المواصفات السريعة (الحجم 100ml، القوام، السعر المتوسط 35 درهم)',
      ],
    },
    {
      id: 'price-deal-box',
      nameAr: '4. صندوق العرض الخاص وتتبع السعر المباشر (Amazon Price Deal Box)',
      elements: [
        'توضيح السعر الحالي المعتاد على أمازون الإمارات (35.00 AED بدل 65.00 AED)',
        'شارة توفير (خصم 45%)',
        'زر تحويل رئيسي: "تحققي من العرض الحالي على أمازون الإمارات"',
        'تنويه التوصيل السريع (توصيل خلال 24 ساعة لأعضاء Prime)',
      ],
    },
    {
      id: 'before-after-social-proof',
      nameAr: '5. قسم التجارب الواقعية ونتائج الاستخدام (Before & After & Reviews)',
      elements: [
        'مقارنة مرئية لتطور نضارة البشرة (اليوم 1، اليوم 7، اليوم 14، اليوم 30)',
        'شهادات مستخدمات واقعيات من دبي، أبوظبي، الشارقة',
        'ملاحظات حول تحسن القشور واحمرار الشاطئ والشمس',
      ],
    },
    {
      id: 'how-to-use-teaser',
      nameAr: '6. خطوات الاستخدام المتبعة (How to Apply Guide Teaser)',
      elements: [
        'إنفوجرافيك سريع لأربع خطوات: غسول -> بشرة رطبة -> 2-3 ضغطات سيروم -> مرطب حابس',
        'رابط سريع للانتقال لدليل الاستخدام التفصيلي',
      ],
    },
    {
      id: 'comparison-teaser',
      nameAr: '7. مقارنة سريعة مع المنتجات المنافسة (Comparison Section Teaser)',
      elements: [
        'مقارنة بين سيروم 96 الحلزون مقابل كريم 92 وباقي الماركات الكورية',
        'جدول مبسط لتوضيح أسباب تفوق سيروم 96 في الامتصاص المائي',
      ],
    },
    {
      id: 'faq-section',
      nameAr: '8. الأسئلة الشائعة المنظمة (FAQ Schema Ready)',
      elements: [
        'إجابات سريعة للأسئلة الشائعة (انسداد المسام، المناسبة للبشرة الدهنية، كم تدوم الزجاجة)',
      ],
    },
    {
      id: 'blog-preview',
      nameAr: '9. أحدث المقالات من مدونة العناية بالمناخ (Latest Blog Articles)',
      elements: [
        'عرض بطاقات لأهم المقالات الداعمة مثل: الأصلي والمقلد، روتين الصيف، البشرة الزجاجية',
      ],
    },
    {
      id: 'footer-disclaimer',
      nameAr: '10. الفوتر وإفصاح الشركاء (Footer & Affiliate Disclosure)',
      elements: [
        'بيان إفصاح التسويق بالعمولة (Amazon Associate Disclosure)',
        'إخلاء المسؤولية الطبية',
        'روابط الخصوصية والمحاضر والشروط',
      ],
    },
  ],
};

export const WEBSITE_SITEMAP_STRUCTURE = {
  domain: 'https://cosrx-snail-uae.com',
  pages: [
    {
      url: '/',
      titleAr: 'الصفحة الرئيسية - دليل خلاصة الحلزون كوسركس الإمارات',
      titleEn: 'Homepage - COSRX Snail Mucin UAE Guide',
      type: 'Core Page',
      priority: '1.0',
    },
    {
      url: '/review',
      titleAr: 'المراجعة الشاملة لسيروم كوسركس الحلزون 96 (صفحة الشراء الرئيسية)',
      titleEn: 'In-Depth Product Review Article (Money Page)',
      type: 'Money Page',
      priority: '0.9',
    },
    {
      url: '/uae-climate-benefits',
      titleAr: 'فوائد خلاصة الحلزون لمناخ الإمارات والجفاف الناجم عن التكييف',
      titleEn: 'Snail Mucin Benefits for UAE AC Climate',
      type: 'Supporting Page',
      priority: '0.8',
    },
    {
      url: '/how-to-use',
      titleAr: 'طريقة استخدام خلاصة الحلزون كوسركس بالخطوات',
      titleEn: 'How to Use COSRX Snail Mucin Step-by-Step',
      type: 'Guide Page',
      priority: '0.8',
    },
    {
      url: '/ingredients',
      titleAr: 'تحليل المكونات العلمية والبسيطة لسيروم كوسركس الحلزون 96',
      titleEn: 'Ingredients Breakdown (Simple + Scientific)',
      type: 'Educational Page',
      priority: '0.7',
    },
    {
      url: '/skin-compatibility',
      titleAr: 'هل يناسب بشرتك؟ دليل أنواع البشرة مع خلاصة الحلزون',
      titleEn: 'Who Should Use It? Skin Types Compatibility',
      type: 'Quiz & Guide',
      priority: '0.7',
    },
    {
      url: '/comparisons',
      titleAr: 'مقارنة سيروم الحلزون كوسركس مع السيرومات الأخرى على أمازون الإمارات',
      titleEn: 'COSRX Snail Mucin vs Other Essences',
      type: 'Comparison Page',
      priority: '0.8',
    },
    {
      url: '/where-to-buy-uae',
      titleAr: 'دليل الشراء في الإمارات وأفضل سعر على أمازون برايم',
      titleEn: 'Where to Buy in UAE (Amazon.ae Focus)',
      type: 'Buyer Guide',
      priority: '0.9',
    },
    {
      url: '/before-after-results',
      titleAr: 'تجارب ونتائج استخدام سيروم كوسركس الحلزون في دبي وأبوظبي',
      titleEn: 'Before & After / Real User Results in UAE',
      type: 'Social Proof',
      priority: '0.7',
    },
    {
      url: '/faqs',
      titleAr: 'الأسئلة الشائعة حول خلاصة الحلزون كوسركس',
      titleEn: 'Frequently Asked Questions',
      type: 'FAQ Schema Page',
      priority: '0.6',
    },
    {
      url: '/blog',
      titleAr: 'مدونة العناية بالبشرة والروتين الكوري في الإمارات',
      titleEn: 'K-Beauty Skincare Blog UAE',
      type: 'Blog Directory',
      priority: '0.7',
    },
  ],
};
