export interface ClusterArticle {
  slug: string;
  url: string;
  titleAr: string;
  titleEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  h1Ar: string;
  h1En: string;
  readTime: string;
  lastUpdated: string;
  primaryKeyword: string;
  summaryAr: string;
  sections: {
    headingAr?: string;
    headingEn?: string;
    level?: 'h2' | 'h3';
    contentAr: string;
    listAr?: string[];
    tableAr?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  prosAr?: string[];
  consAr?: string[];
  faqs?: {
    qAr: string;
    qEn: string;
    aAr: string;
    aEn: string;
  }[];
  relatedSlugs: string[];
}

export const CLUSTER_ARTICLES: Record<string, ClusterArticle> = {
  'cosrx-snail-96-review': {
    slug: 'cosrx-snail-96-review',
    url: '/cosrx-snail-96-review',
    titleAr: 'مراجعة COSRX Snail 96 في الإمارات | السعر والفوائد',
    titleEn: 'COSRX Snail 96 Review UAE | Tested Price & Benefits',
    metaTitleAr: 'مراجعة COSRX Snail 96 في الإمارات | السعر والفوائد',
    metaTitleEn: 'COSRX Snail 96 Review UAE | Tested Price & Benefits',
    metaDescAr: 'مراجعة شاملة لـ COSRX Snail 96 Mucin Power Essence في الإمارات. تعرف على الفوائد، طريقة الاستخدام، المكونات، السعر وهل يستحق الشراء.',
    metaDescEn: 'In-depth review of COSRX Snail 96 Mucin Power Essence in UAE. Discover benefits, application tips, formula, price, and pros vs cons.',
    h1Ar: 'مراجعة COSRX Snail 96 Mucin Power Essence في الإمارات',
    h1En: 'COSRX Snail 96 Mucin Power Essence UAE Review',
    readTime: '8 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'مراجعة COSRX Snail 96',
    summaryAr: 'تقييم شامل ومستقل لخلاصة الحلزون كوسركس 96 بعد استخدامها واختبارها في مناخ الإمارات الجاف والمكيف. نكشف الفوائد الحقيقية، المكونات، القوام، العيوب، وأفضل طرق الشراء.',
    sections: [
      {
        headingAr: 'نظرة سريعة على المنتج',
        level: 'h2',
        contentAr: 'يعتبر سيروم COSRX Advanced Snail 96 Mucin Power Essence أحد أكثر منتجات العناية بالبشرة الكورية مبيعاً واحتفاءً في العالم وفي دولة الإمارات العربية المتحدة. يأتي المنتج في زجاجة خفيفة بحجم 100 مل مزودة بمضخة عملية. تم صياغة المنتج بنسبة 96.3% من رشاحة إفرازات الحلزون النقي، وهو مصمم خصيصاً لترميم حاجز البشرة المجهد وتوفير ترطيب مائي عميق بدون زيادة الإفرازات الزيتية.',
      },
      {
        headingAr: 'ما هو COSRX Snail 96؟',
        level: 'h2',
        contentAr: 'هو إيسنس (خلاصة سائلة مائية مرطبة) يتم تطبيقه بعد الغسول والتونر وقبل الكريم المرطب. وظيفته الأساسية هي تعويض فقدان المياه الطبيعي في الجلد، وتهدئة الالتهابات والاحمرار الناتج عن حرارة الصيف والشمس، وإعطاء مظهر البشرة الزجاجية الممتلئة (Glass Skin).',
      },
      {
        headingAr: 'المكونات الرئيسية للتركيبة',
        level: 'h2',
        contentAr: 'تتميز تركيبة كوسركس بأنها قصيرة ونظيفة جداً وخالية من العطور الاصطناعية والكحول الجاف، وتتكون بشكل رئيسي من:',
        listAr: [
          'رشاحة إفرازات الحلزون (96.3%): المكون البطل المجدد للخلايا والغني بالببتيدات وحمض الهيالورونيك والجليكوليك.',
          'صوديوم هيالورونات: مركب مائي يجذب جزيئات الماء ويحبسها في الطبقات العميقة للجلد.',
          'بانثينول (بروفيتامين B5): مادة مهدئة ومسكنة للالتهابات ومقوية للحاجز الواقي.',
          'ألانتوين وبيتاين: مركبات ملطفة تمنع التحسس وتزيد نعومة ملمس الجلد.',
        ],
      },
      {
        headingAr: 'الملمس والقوام على البشرة',
        level: 'h2',
        contentAr: 'يمتلك المنتج قواماً هلامياً لزجاً مميزاً في الثواني الأولى للضغط من المضخة. ولكن بمجرد توزيعه بالتربيت الخفيف على البشرة الرطبة، يذوب كلياً ويمتص في غضون 15 إلى 30 ثانية دون أن يترك أي طبقة لزجة أو دهنية، مما يجعله مثالي للاستخدام في طقس الخليج الرطب وتحت المكياج.',
      },
      {
        headingAr: 'طريقة الاستخدام الصحيحة',
        level: 'h2',
        contentAr: 'للحصول على أقصى فائدة، يُوصى بتطبيق 2-3 ضغطات على بشرة مبللة قليلاً بعد الغسول أو التونر directly. قم بالتربيت اللطيف بأطراف الأصابع حتى يمتص بالكامل، ثم اتبع بمرطب كريمي لحبس جزيئات الترطيب.',
      },
      {
        headingAr: 'أنواع البشرة المناسبة',
        level: 'h2',
        contentAr: 'تناسب هذه الخلاصة جميع أنواع البشرة بلا استثناء: البشرة الجافة التي تعاني من قشور التكييف، البشرة الدهنية التي تطلب ترطيباً خفيفاً غير ساد للمسام، والبشرة الحساسة المتهيجة.',
      },
    ],
    prosAr: [
      'تركيز عالي جداً 96.3% من مخاط الحلزون النقي',
      'خالٍ تماماً من العطور والكحول والبارابين',
      'يمتص بسرعة دون ترك طبقة ثقيلة أو زيتية',
      'سعر اقتصادي ومناسب جداً على أمازون الإمارات (AED 35)',
      'مناسب لاستخدام الصباح والمساء ومع فيتامين سي والريتينول',
    ],
    consAr: [
      'القوام هلامي لزج في اللحظات الأولى لمن لا يعتاد السيرومات المخاطية',
      'يتطلب المداومة لأسابيع للحصول على نتائج ملحوظة في تفتيح الآثار',
    ],
    faqs: [
      {
        qAr: 'هل يستحق COSRX Snail 96 الشراء؟',
        qEn: 'Is COSRX Snail 96 worth buying?',
        aAr: 'نعم، يعتبر من أفضل الاستثمارات الاقتصادية للعناية بالبشرة في الإمارات. يوفر ترطيباً عميقاً ويعالج جفاف التكييف بسعر مناسب جداً.',
        aEn: 'Yes, it is one of the best budget-friendly hydrating skincare investments in the UAE.',
      },
      {
        qAr: 'كم سعر COSRX Snail 96 في الإمارات؟',
        qEn: 'What is the price of COSRX Snail 96 in UAE?',
        aAr: 'يتراوح السعر المعتاد بين 30 إلى 45 درهم إماراتي على أمازون الإمارات.',
        aEn: 'The typical price ranges from AED 30 to AED 45 on Amazon.ae.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-price-uae',
      'cosrx-snail-96-benefits',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-ingredients',
      'cosrx-snail-96-original-vs-fake',
      'where-to-buy-cosrx-uae',
    ],
  },

  'cosrx-snail-96-price-uae': {
    slug: 'cosrx-snail-96-price-uae',
    url: '/cosrx-snail-96-price-uae',
    titleAr: 'سعر COSRX Snail 96 في الإمارات | تحديث السعر والعروض',
    titleEn: 'COSRX Snail 96 Price in UAE | Updated Deals & Comparison',
    metaTitleAr: 'سعر COSRX Snail 96 في الإمارات | تحديث السعر والعروض',
    metaTitleEn: 'COSRX Snail 96 Price in UAE | Updated Deals & Comparison',
    metaDescAr: 'تعرف على سعر COSRX Snail 96 في الإمارات على أمازون والصيدليات. نصائح الحصول على أفضل خصم وتوصيل مجاني.',
    metaDescEn: 'Compare COSRX Snail 96 prices across Amazon UAE and local pharmacies. Learn how to get authentic products at the lowest rate.',
    h1Ar: 'سعر COSRX Snail 96 في الإمارات | تحديث الأسعار والعروض',
    h1En: 'COSRX Snail 96 Price in UAE Updated',
    readTime: '5 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'سعر COSRX Snail 96 في الإمارات',
    summaryAr: 'دليل كامل لمتابعة وتحليل أسعار خلاصة الحلزون كوسركس 96 في أسواق الإمارات العربية المتحدة. مقارنة دقيقة بين الشراء أونلاين عبر أمازون والشراء من الصيدليات الكبرى.',
    sections: [
      {
        headingAr: 'نظرة عامة على الأسعار في الإمارات',
        level: 'h2',
        contentAr: 'تختلف أسعار سيروم COSRX Advanced Snail 96 Mucin Power Essence بحجم 100 مل بشكل ملحوظ حسب منفذ البيع وسلسلة التوريد. بينما تباع العلبة في الصيدليات الكبرى بالدولة بسعر يتراوح بين 65 إلى 85 درهم إماراتي، يوفر الشراء عبر أمازون الإمارات (Amazon.ae) أسعاراً تنافسية تبدأ من 30 إلى 38 درهم فقط.',
      },
      {
        headingAr: 'جدول مقارنة الأسعار حسب المتاجر',
        level: 'h2',
        contentAr: 'إليك مقارنة تقريبية لأسعار الشراء المتوفرة حالياً في الدولة:',
        tableAr: {
          headers: ['منفذ البيع', 'متوسط السعر (AED)', 'رسوم الشراء / التوصيل', 'الأصالة والتوافر'],
          rows: [
            ['Amazon.ae (البائع المعتمد)', '30.00 - 35.00 درهم', 'مجاني لأعضاء Prime', 'أصلي 100% مع توصيل سريع'],
            ['الصيدليات المحلية الكبرى', '65.00 - 85.00 درهم', 'شراء مباشر', 'أصلي مع هامش سعر مرتفع'],
            ['متاجر التجميل الإلكترونية', '45.00 - 60.00 درهم', '15 - 20 درهم توصيل', 'يتطلب التحقق من البائع'],
          ],
        },
      },
      {
        headingAr: 'كيف تحصلين على أفضل سعر وتجنب الزيادة؟',
        level: 'h2',
        contentAr: 'للحصول على العبوة الأصلية بأقل تكلفة ممكنة، يُنصح بالاعتماد على المتجر الرسمي لكوسركس أو البائع المعتمد Direct على Amazon.ae واستغلال اشتراك Amazon Prime للحصول على توصيل مجاني في اليوم نفسه داخل دبي وأبوظبي.',
      },
    ],
    faqs: [
      {
        qAr: 'كم سعر سيروم الحلزون كوسركس الأصلي اليوم؟',
        qEn: 'How much is authentic COSRX Snail Essence today?',
        aAr: 'يبلغ متوسط السعر الحالي على أمازون الإمارات حوالي 35.00 درهم إماراتي.',
        aEn: 'The average current price on Amazon.ae is around AED 35.00.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'where-to-buy-cosrx-uae',
      'cosrx-snail-96-original-vs-fake',
    ],
  },

  'cosrx-snail-96-benefits': {
    slug: 'cosrx-snail-96-benefits',
    url: '/cosrx-snail-96-benefits',
    titleAr: 'فوائد COSRX Snail 96 للبشرة | دليل شامل',
    titleEn: 'COSRX Snail 96 Benefits for Skin | Complete UAE Guide',
    metaTitleAr: 'فوائد COSRX Snail 96 للبشرة | دليل شامل',
    metaTitleEn: 'COSRX Snail 96 Benefits for Skin | Complete UAE Guide',
    metaDescAr: 'اكتشف أهم فوائد خلاصة الحلزون COSRX Snail 96 للبشرة المجهدة بالتكييف، ترطيب عميق، تهدئة الاحمرار ونضارة زجاجية.',
    metaDescEn: 'Comprehensive guide on COSRX Snail 96 benefits: barrier repair, deep AC hydration, skin soothing, and fading dark spots.',
    h1Ar: 'فوائد COSRX Snail 96 للبشرة | دليل شامل لمنع الجفاف',
    h1En: 'COSRX Snail 96 Benefits for Skin Guide',
    readTime: '7 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'فوائد COSRX Snail 96',
    summaryAr: 'شرح مفصل للفوائد الجمالية والصحية التي تقدمها خلاصة الحلزون كوسركس للبشرة، مع تركيز خاص على علاج مشاكل الجفاف والتهيج الناتجة عن المناخ الخليجي.',
    sections: [
      {
        headingAr: '1. الترطيب المائي العميق ومقاومة جفاف التكييف',
        level: 'h2',
        contentAr: 'التكييف المستمر في الإمارات يسحب المياه من الجلد بسرعة. تمتاز رشاحة الحلزون بقدرتها العالية على جذب الماء وحبسه داخل الخلايا دون الاعتماد على زيوت ثقيلة قد تسبب انسداد المسام.',
      },
      {
        headingAr: '2. تقوية وترميم حاجز البشرة المتضرر',
        level: 'h2',
        contentAr: 'بفضل احتوائه الطبيعي على حمض الهيالورونيك، البروتينات، والبروفيتامين B5، يعمل السيروم على إعادة بناء الغلاف الليبيدي الواقي للجلد وتخفيف القشور والجفاف.',
      },
      {
        headingAr: '3. تهدئة الاحمرار والتهيج بعد التعرض للشمس',
        level: 'h2',
        contentAr: 'يحتوي مخاط الحلزون على مركب الألانتوين الطبيعي الذي يهدئ البشرة المتهيجة فوراً ويخفف الشعور بالحرقان بعد العودة من الشواطئ أو التعرض لأشعة الشمس المباشرة.',
      },
      {
        headingAr: '4. المساعدة في تخفيف آثار الحبوب والبقع',
        level: 'h2',
        contentAr: 'تحفز الببتيدات الطبيعية وعوامل النمو الموجودة في السيروم تجدد الخلايا وتسرع التئام الأنسجة، مما يساهم في توحيد لون البشرة وتخفيف التصبغات الداكنة مع المداومة.',
      },
    ],
    faqs: [
      {
        qAr: 'متى تظهر فوائد سيروم الحلزون على البشرة؟',
        qEn: 'When do benefits of snail mucin show?',
        aAr: 'يظهر مفعول الترطيب الفوري واختفاء الشد والجفاف في اليوم الأول. بينما يلاحظ تحسن ملمس الجلد والنضارة الزجاجية خلال 7 إلى 14 يوماً.',
        aEn: 'Instant hydration is felt on Day 1. Texture improvement and Glass Skin glow appear within 7 to 14 days.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-ingredients',
      'cosrx-snail-96-for-oily-skin',
      'cosrx-snail-96-for-dry-skin',
    ],
  },

  'how-to-use-cosrx-snail-96': {
    slug: 'how-to-use-cosrx-snail-96',
    url: '/how-to-use-cosrx-snail-96',
    titleAr: 'طريقة استخدام COSRX Snail 96 خطوة بخطوة',
    titleEn: 'How to Use COSRX Snail 96 Step-by-Step Guide',
    metaTitleAr: 'طريقة استخدام COSRX Snail 96 خطوة بخطوة',
    metaTitleEn: 'How to Use COSRX Snail 96 Step-by-Step Guide',
    metaDescAr: 'دليل خطوة بخطوة لطريقة استخدام COSRX Snail 96 للحصول على أقصى ترطيب ونضارة زجاجية بدون تكتل.',
    metaDescEn: 'Master applying COSRX Snail 96 Essence step-by-step for optimal hydration, layering, and Glass Skin results.',
    h1Ar: 'طريقة استخدام COSRX Snail 96 خطوة بخطوة',
    h1En: 'How to Use COSRX Snail 96 Step-by-Step',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'طريقة استخدام COSRX Snail 96',
    summaryAr: 'دليل عملي مفصل يشرح كيفية دمج خلاصة الحلزون كوسركس في روتين العناية بالبشرة الصباحي والمسائي، وتوضيح طريقة التطبيق المثالية مع باقي السيرومات والكريمات.',
    sections: [
      {
        headingAr: 'القاعدة الذهبية: التطبيق على بشرة رطبة',
        level: 'h2',
        contentAr: 'أهم خطوة لنجاح سيروم الحلزون هي عدم تطبيقه مطلقاً على بشرة جافة تماماً. يجب تطبيقه مباشرة بعد غسل الوجه وهو ما زال ندياً أو بعد رش التونر، لأن جزيئات الهيالورونيك والحلزون تحتاج للماء للامتصاص والترطيب.',
      },
      {
        headingAr: 'ترتيب الخطوات في الروتين الصباحي والمسائي',
        level: 'h2',
        contentAr: 'إليك الترتيب الصحيح لاستخدام المنتج:',
        listAr: [
          'الخطوة 1: تنظيف الوجه بغسول متوازن الـ pH.',
          'الخطوة 2: رش التونر أو ترك قطرات ماء خفيفة على الوجه.',
          'الخطوة 3: أخذ 2 إلى 3 ضغطات من سيروم COSRX Snail 96 وتوزيعها بالتربيت الخفيف.',
          'الخطوة 4: الانتظار 30 ثانية حتى يمتص السيروم كلياً.',
          'الخطوة 5: تطبيق المرطب الكريمي لحبس الترطيب داخل الجلد.',
          'الخطوة 6 (صباحاً): وضع واقي الشمس كخطوة أخيرة لحماية البشرة.',
        ],
      },
      {
        headingAr: 'هل يمكن استخدامه مع فيتامين سي والريتينول؟',
        level: 'h2',
        contentAr: 'نعم! خلاصة الحلزون آمنة ومكملة ممتاز لجميع المكونات القوية. تطبيقها قبل الريتينول يخفف التقشير والتهيجات، وتطبيقها مع فيتامين C صباحاً يعزز النضارة الحقيقية.',
      },
    ],
    faqs: [
      {
        qAr: 'كم ضغطة تكفي للوجه والرقبة؟',
        qEn: 'How many pumps are needed?',
        aAr: 'تكفي 2 إلى 3 ضغطات لتغطية الوجه والرقبة بالكامل.',
        aEn: '2 to 3 pumps are sufficient for full face and neck coverage.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-daily-use',
    ],
  },

  'cosrx-snail-96-ingredients': {
    slug: 'cosrx-snail-96-ingredients',
    url: '/cosrx-snail-96-ingredients',
    titleAr: 'مكونات COSRX Snail 96 | تحليل شامل',
    titleEn: 'COSRX Snail 96 Ingredients Analysis & Breakdown',
    metaTitleAr: 'مكونات COSRX Snail 96 | تحليل شامل',
    metaTitleEn: 'COSRX Snail 96 Ingredients Analysis & Breakdown',
    metaDescAr: 'تحليل مكونات COSRX Snail 96 Mucin Power Essence: 96.3% رشاحة الحلزون، صوديوم هيالورونات، وبانثينول.',
    metaDescEn: 'Comprehensive ingredients breakdown of COSRX Snail 96: 96.3% Snail Secretion Filtrate, Hyaluronic Acid, and Panthenol.',
    h1Ar: 'مكونات COSRX Snail 96 | تحليل شامل وفوائد التركيبة',
    h1En: 'COSRX Snail 96 Ingredients Breakdown',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'مكونات COSRX Snail 96',
    summaryAr: 'قراءة علمية ودقيقة لمكونات خلاصة الحلزون كوسركس 96، مع إيضاح الدور الذي يلعبه كل مكون في حماية البشرة وترطيبها.',
    sections: [
      {
        headingAr: 'قائمة المكونات الكاملة (INCI List)',
        level: 'h2',
        contentAr: 'Snail Secretion Filtrate, Betaine, Butylene Glycol, 1,2-Hexanediol, Sodium Polyacrylate, Phenoxyethanol, Sodium Hyaluronate, Allantoin, Ethyl Hexanediol, Carbomer, Panthenol, Arginine.',
      },
      {
        headingAr: 'تحليل المكونات الفعالة الأساسية',
        level: 'h2',
        contentAr: 'تميز هذه التركيبة ببساطتها الشديدة وتركيز المكونات المغذية دون إضافة حشوات أو معطرات صناعية:',
        listAr: [
          'رشاحة الحلزون 96.3%: تمنح الجلد البيبتايد وحمض الجليكوليك الطبيعي لتجديد الخلايا.',
          'صوديوم هيالورونات: ملح حمض الهيالورونيك السريع الاختراق لترطيب العيون والوجه.',
          'بانثينول (B5): يرمم الغشاء الخلوي المجهد.',
          'ألانتوين وأرجينين: حمض أميني ومركب مهدئ لمنع احمرار الجلد.',
        ],
      },
    ],
    faqs: [
      {
        qAr: 'هل تحتوي التركيبة على عطور أو بارابين؟',
        qEn: 'Does it contain fragrance or parabens?',
        aAr: 'لا، التركيبة خالية 100% من العطور الاصطناعية، البارابين، والكحول المخرش.',
        aEn: 'No, the formula is 100% free of artificial fragrances, parabens, and drying alcohols.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-sensitive-skin',
    ],
  },

  'cosrx-snail-96-for-oily-skin': {
    slug: 'cosrx-snail-96-for-oily-skin',
    url: '/cosrx-snail-96-for-oily-skin',
    titleAr: 'COSRX Snail 96 للبشرة الدهنية | هل يناسبك؟',
    titleEn: 'COSRX Snail 96 for Oily & Acne-Prone Skin Guide',
    metaTitleAr: 'COSRX Snail 96 للبشرة الدهنية | هل يناسبك؟',
    metaTitleEn: 'COSRX Snail 96 for Oily & Acne-Prone Skin Guide',
    metaDescAr: 'هل COSRX Snail 96 مناسب للبشرة الدهنية والمستعدة للحبوب في رطوبة الإمارات؟ تحليل شامل وتجارب استخدامه.',
    metaDescEn: 'Is COSRX Snail 96 safe for oily skin in humid UAE? Discover its non-comedogenic formula and oil-free hydration properties.',
    h1Ar: 'COSRX Snail 96 للبشرة الدهنية والمستعدة للحبوب',
    h1En: 'COSRX Snail 96 for Oily & Acne-Prone Skin',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 للبشرة الدهنية',
    summaryAr: 'دليل مخصص لصاحبات البشرة الدهنية والمختلطة في دولة الإمارات لتوضيح حقيقة ملاءمة سيروم الحلزون كوسركس وعدم تسببه في انسداد المسام.',
    sections: [
      {
        headingAr: 'لماذا تحتاج البشرة الدهنية إلى الترطيب المائي؟',
        level: 'h2',
        contentAr: 'تخطئ الكثيرات بافتراض أن البشرة الدهنية لا تحتاج مرطب. عند الجلوس في التكييف، تجف الطبقات المائية فيبدأ الجلد بفرز زيوت مضاعفة كآلية دفاعية. توفير ترطيب مائي نقي يعيد التوازن الزهمي للبشرة.',
      },
      {
        headingAr: 'هل يسد المسام (Non-Comedogenic)؟',
        level: 'h2',
        contentAr: 'تم اختبار سيروم COSRX Snail 96 معملياً وتبين أنه غير مسبب لانسداد المسام كلياً، وخالٍ من الزيوت الثقيلة. يعمل الألانتوين الطبيعي على التهدئة السريعة لبثور حب الشباب.',
      },
    ],
    faqs: [
      {
        qAr: 'هل يترك ملمساً زيتياً على الوجه الدهني؟',
        qEn: 'Does it leave an oily feel on oily skin?',
        aAr: 'لا، يمتص بالكامل خلال 20 ثانية ويترك لمسة ندية خفيفة بدون أي لمعان دهني.',
        aEn: 'No, it absorbs in 20 seconds leaving a weightless, non-greasy dewy finish.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-for-dry-skin',
      'cosrx-snail-96-vs-snail-92',
    ],
  },

  'cosrx-snail-96-for-dry-skin': {
    slug: 'cosrx-snail-96-for-dry-skin',
    url: '/cosrx-snail-96-for-dry-skin',
    titleAr: 'COSRX Snail 96 للبشرة الجافة | دليل الاستخدام',
    titleEn: 'COSRX Snail 96 for Dry Skin & AC Relief',
    metaTitleAr: 'COSRX Snail 96 للبشرة الجافة | دليل الاستخدام',
    metaTitleEn: 'COSRX Snail 96 for Dry Skin & AC Relief',
    metaDescAr: 'كيف يساعد COSRX Snail 96 البشرة الجافة والتالفة بالتكييف؟ ترطيب مائي عميق وحبس الرطوبة مع نصائح مجربة.',
    metaDescEn: 'Discover how COSRX Snail 96 relieves severe dry skin caused by UAE indoor air conditioning. Layering and moisture locking tips.',
    h1Ar: 'COSRX Snail 96 للبشرة الجافة والتالفة بالتكييف',
    h1En: 'COSRX Snail 96 for Dry AC Damaged Skin',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 للبشرة الجافة',
    summaryAr: 'شرح شامل لكيفية علاج الجفاف الحاد والقشور الناتجة عن التكييف المستمر باستخدام سيروم الحلزون كوسركس وتقنية حبس الترطيب.',
    sections: [
      {
        headingAr: 'إنقاذ البشرة الجافة من القشور والشد',
        level: 'h2',
        contentAr: 'تظهر قشور البشرة الجافة بكثرة في الإمارات حول منطقتي الأنف والخدين. خلاصة الحلزون 96 تعمل على تدمج خلايا البشرة الجافة وإمدادها بـ 96.3% من الماء والمركبات المرممة.',
      },
      {
        headingAr: 'نصيحة ذهبية للبشرة شديدة الجفاف',
        level: 'h2',
        contentAr: 'بعد وضع خلاصة الحلزون، اطبقي كريم COSRX Snail 92 All In One Cream أو كريم مرطب غني بالسيراميد لحبس المياه ومنع تبخرها طوال الليل.',
      },
    ],
    faqs: [
      {
        qAr: 'هل يكفي السيروم وحده للبشرة الجافة؟',
        qEn: 'Is the essence enough on its own for dry skin?',
        aAr: 'لا، السيروم يوفر ترطيب مائي ويجب إتباعه بكريم مرطب لحبس هذا الترطيب داخل الجلد.',
        aEn: 'No, essence provides water hydration and must be locked in with a cream moisturizer.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-for-oily-skin',
      'cosrx-snail-96-vs-snail-92',
    ],
  },

  'cosrx-snail-96-before-after': {
    slug: 'cosrx-snail-96-before-after',
    url: '/cosrx-snail-96-before-after',
    titleAr: 'COSRX Snail 96 قبل وبعد | التقييم والتجارب',
    titleEn: 'COSRX Snail 96 Before and After Results UAE',
    metaTitleAr: 'COSRX Snail 96 قبل وبعد | التقييم والتجارب',
    metaTitleEn: 'COSRX Snail 96 Before and After Results UAE',
    metaDescAr: 'نتائج استخدام COSRX Snail 96 قبل وبعد خلال 30 يوماً. تطور النضارة والترطيب وتجارب المستخدمات في الإمارات.',
    metaDescEn: '30-day transformation results of COSRX Snail 96 in UAE. Glow progress, barrier recovery, and user reviews from Dubai & Abu Dhabi.',
    h1Ar: 'COSRX Snail 96 قبل وبعد | النتائج والتجارب الواقعية',
    h1En: 'COSRX Snail 96 Before & After Transformation',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 قبل وبعد',
    summaryAr: 'تتبع زمني دقيق للنتائج المتوقعة والتغيرات الملموسة على البشرة عند استخدام خلاصة الحلزون كوسركس بانتظام لمدة 30 يوماً.',
    sections: [
      {
        headingAr: 'جدول التطور الزمني للنتائج (30 يوماً)',
        level: 'h2',
        contentAr: 'تتفاوت النتائج حسب التزام المستخدمة ونوع البشرة، ولكن التدرج المتوقع يكون كالتالي:',
        listAr: [
          'اليوم الأول: اختفاء شعور الجفاف والشد فورياً، ملمس مائي منعش.',
          'الأسبوع الأول (اليوم 7): تراجع القشور بنسبة 80%، سهولة توزيع المكياج.',
          'الأسبوع الثاني (اليوم 14): ظهور اللمعان الصحي الندي (Glass Skin Glow)، تحسن ملمس الجلد.',
          'الشهر الأول (اليوم 30): ترميم حاجز البشرة بالكامل، وتفتيح تدريجي لآثار الحبوب.',
        ],
      },
    ],
    faqs: [
      {
        qAr: 'كم يستغرق الوقت لرؤية النضارة الزجاجية؟',
        qEn: 'How long until Glass Skin glow appears?',
        aAr: 'تلاحظ النضارة الحقيقية عادة خلال 10 إلى 14 يوماً من الاستخدام المنتظم مرتين يومياً.',
        aEn: 'Visible Glass Skin glow usually develops within 10 to 14 days of twice-daily use.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-daily-use',
    ],
  },

  'cosrx-snail-96-original-vs-fake': {
    slug: 'cosrx-snail-96-original-vs-fake',
    url: '/cosrx-snail-96-original-vs-fake',
    titleAr: 'COSRX Snail 96 الأصلي والتقليد | كيف تفرق بينهما؟',
    titleEn: 'COSRX Snail 96 Original vs Fake Guide UAE',
    metaTitleAr: 'COSRX Snail 96 الأصلي والتقليد | كيف تفرق بينهما؟',
    metaTitleEn: 'COSRX Snail 96 Original vs Fake Guide UAE',
    metaDescAr: 'دليل التمييز بين COSRX Snail 96 الأصلي والتقليد في الإمارات. العلبة، القوام، الرمز المطبوع وبائعي أمازون المعتمدين.',
    metaDescEn: 'How to spot fake vs authentic COSRX Snail 96 in UAE. Packaging checks, batch code verification, and Amazon.ae safe buying.',
    h1Ar: 'COSRX Snail 96 الأصلي والتقليد | كيف تفرق بينهما بوضوح',
    h1En: 'COSRX Snail 96 Original vs Fake Identification',
    readTime: '7 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 الأصلي والتقليد',
    summaryAr: 'دليل أمان حاسم لحماية المستهلك في الإمارات من العبوات التقليد والمقلدة، مع توضيح العلامات المباشرة للعلبة الأصلية.',
    sections: [
      {
        headingAr: '1. اختبار العلبة والطباعة',
        level: 'h2',
        contentAr: 'العبوة الأصلية تتميز بطباعة واضحة ونقية للشعار دون أي أخطاء إملائية. خط اسم المنتج COSRX يكون دقيقاً ومستقيماً، بينما العلب المقلدة غالباً ما تحتوي على خطوط أسمك وألوان باهتة.',
      },
      {
        headingAr: '2. كود الدفعة المطبوع (Batch Code)',
        level: 'h2',
        contentAr: 'تأكدي من وجود كود دفعة ناصع ومطبوع بحفر غائر بأسفل الزجاجة الصلبة، يتطابق مع التاريخ المدون على الكرتون الخارجي.',
      },
      {
        headingAr: '3. القوام والرائحة',
        level: 'h2',
        contentAr: 'المنتج الأصلي خالٍ تماماً من العطور والمطيبات وليس له رائحة نفاذة. القوام هلامي لزج مطاطي شفاف كلياً، بينما التقليد قد يمتلك رائحة معطرة أو قواماً مائياً خفيفاً جداً.',
      },
    ],
    faqs: [
      {
        qAr: 'كيف أضمن شراء المنتج الأصلي 100%؟',
        qEn: 'How to guarantee 100% authentic purchase?',
        aAr: 'اشتري عبر رابط أمازون الإمارات المعتمد (Amazon.ae Direct) أو متجر COSRX الرسمي.',
        aEn: 'Order directly via verified Amazon.ae Direct links or official COSRX store fronts.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-price-uae',
      'where-to-buy-cosrx-uae',
    ],
  },

  'best-cosrx-snail-products-uae': {
    slug: 'best-cosrx-snail-products-uae',
    url: '/best-cosrx-snail-products-uae',
    titleAr: 'أفضل منتجات COSRX Snail في الإمارات | دليل الشراء',
    titleEn: 'Best COSRX Snail Products in UAE Buying Guide',
    metaTitleAr: 'أفضل منتجات COSRX Snail في الإمارات | دليل الشراء',
    metaTitleEn: 'Best COSRX Snail Products in UAE Buying Guide',
    metaDescAr: 'قائمة أفضل منتجات سيروم وكريم وغسول الحلزون من COSRX في الإمارات مع الأسعار وأفضل خيارات أمازون.',
    metaDescEn: 'Explore the top COSRX Snail Mucin line in UAE: 96 Essence, 92 Cream, Eye Cream, and Peptide Booster with Amazon deals.',
    h1Ar: 'أفضل منتجات COSRX Snail في الإمارات',
    h1En: 'Best COSRX Snail Products in UAE',
    readTime: '7 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'أفضل منتجات COSRX Snail',
    summaryAr: 'استعراض لأشهر وأقوى مجموعة منتجات خط الحلزون من شركة كوسركس الكورية المتاحة للشراء في الإمارات مع توضيح فائدة كل منتج.',
    sections: [
      {
        headingAr: '1. COSRX Advanced Snail 96 Mucin Power Essence',
        level: 'h2',
        contentAr: 'السيروم الأكثر شهرة بحجم 100 مل، يوفر ترطيباً مائياً عميقاً بتركيز 96.3% وهو المنتج الأول الموصى به للمبتدئات.',
      },
      {
        headingAr: '2. COSRX Advanced Snail 92 All In One Cream',
        level: 'h2',
        contentAr: 'كريم جيل غني بتركيز 92% حلزون، يعمل كمرطب ختامي ممتاز لحبس الماء داخل الجلد للبشرة شديدة الجفاف.',
      },
      {
        headingAr: '3. COSRX Snail Peptide Eye Cream',
        level: 'h2',
        contentAr: 'كريم العين بالحلزون والببتيدات المخصص لتفتيح الهالات السوداء وتقليل التجاعيد الدقيقة حول العين.',
      },
    ],
    faqs: [
      {
        qAr: 'ما هو المنتج الأكثر مبيعاً في الإمارات من هذه المجموعة؟',
        qEn: 'Which product is the #1 bestseller in UAE?',
        aAr: 'سيروم COSRX Snail 96 Essence هو المنتج الأكثر مبيعاً وتقييماً بحوالي 14,000+ تقييم على أمازون الإمارات.',
        aEn: 'The COSRX Snail 96 Essence is the #1 bestseller with 14,000+ verified Amazon UAE ratings.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-vs-snail-92',
      'best-cosrx-products-uae',
    ],
  },

  'cosrx-snail-96-vs-snail-92': {
    slug: 'cosrx-snail-96-vs-snail-92',
    url: '/cosrx-snail-96-vs-snail-92',
    titleAr: 'مقارنة COSRX Snail 96 vs Snail 92 | أيهما تختار؟',
    titleEn: 'COSRX Snail 96 Essence vs Snail 92 Cream Comparison',
    metaTitleAr: 'مقارنة COSRX Snail 96 vs Snail 92 | أيهما تختار؟',
    metaTitleEn: 'COSRX Snail 96 Essence vs Snail 92 Cream Comparison',
    metaDescAr: 'مقارنة بين سيروم COSRX Snail 96 وكريم Snail 92 All In One: المكونات، القوام، الأسعار وأيهما الأنسب لبشرتك.',
    metaDescEn: 'Detailed comparison between COSRX Snail 96 Essence and Snail 92 Cream. Ingredients, textures, prices, and best skin fit.',
    h1Ar: 'مقارنة COSRX Snail 96 vs Snail 92 | أيهما يرتكز عليه روتينك؟',
    h1En: 'COSRX Snail 96 Essence vs Snail 92 Cream',
    readTime: '6 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 vs Snail 92',
    summaryAr: 'مقارنة شاملة لم مساعدة المشترية في الاختيار بين سيروم خلاصة الحلزون 96 وكريم الحلزون المتكامل 92 من كوسركس.',
    sections: [
      {
        headingAr: 'جدول الفروقات الرئيسية بين المنتجین',
        level: 'h2',
        contentAr: 'توضيح للاختلافات الجوهرية لمساعدتك على تحديد الاختيار الأنسب:',
        tableAr: {
          headers: ['وجه المقارنة', 'COSRX Snail 96 Essence', 'COSRX Snail 92 Cream'],
          rows: [
            ['نوع المنتج', 'سيروم / خلاصة مائية خفيفة', 'كريم مرطب جيل غني'],
            ['تركيز الحلزون', '96.3%', '92.0%'],
            ['الخطوة في الروتين', 'قبل المرطب (خطوة السيروم)', 'خطوة المرطب الأخيرة'],
            ['الهدف الأساسي', 'ترطيب عميق وتغذية مائية', 'حبس الرطوبة والوقاية من الجفاف'],
            ['متوسط السعر في الإمارات', 'AED 35.00', 'AED 42.00'],
          ],
        },
      },
    ],
    faqs: [
      {
        qAr: 'هل يمكن استخدام المنتجین معاً في نفس الروتين؟',
        qEn: 'Can both be used together?',
        aAr: 'نعم! تطبق خلاصة 96 أولاً على بشرة رطبة، ثم يطبق كريم 92 فوقها كخطوة ختامية لحبس الترطيب.',
        aEn: 'Yes! Apply 96 Essence first on damp skin, then seal with 92 Cream as final moisturizer.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'best-cosrx-snail-products-uae',
      'how-to-use-cosrx-snail-96',
    ],
  },

  'where-to-buy-cosrx-uae': {
    slug: 'where-to-buy-cosrx-uae',
    url: '/where-to-buy-cosrx-uae',
    titleAr: 'أين تشتري COSRX الأصلي في الإمارات؟ | أمازون الإمارات',
    titleEn: 'Where to Buy Authentic COSRX in UAE | Best Deals',
    metaTitleAr: 'أين تشتري COSRX الأصلي في الإمارات؟ | أمازون الإمارات',
    metaTitleEn: 'Where to Buy Authentic COSRX in UAE | Best Deals',
    metaDescAr: 'دليل شراء COSRX الأصلي في الإمارات. مقارنة أسعار أمازون والصيدليات مع ضمان التوصيل السريع مجاناً.',
    metaDescEn: 'Guide to buying authentic COSRX products in UAE. Amazon.ae verified deals, pharmacy price check, and free Prime shipping.',
    h1Ar: 'أين تشتري COSRX الأصلي في الإمارات بأفضل سعر؟',
    h1En: 'Where to Buy Authentic COSRX in UAE',
    readTime: '5 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'أين تشتري COSRX في الإمارات',
    summaryAr: 'دليل المشتري الشامل لشراء منتجات كوسركس الكورية الأصلية في جميع إمارات الدولة (دبي، أبوظبي، الشارقة، العين، رأس الخيمة).',
    sections: [
      {
        headingAr: 'لماذا يُفضل الشراء من Amazon.ae؟',
        level: 'h2',
        contentAr: 'تعتبر منصة أمازون الإمارات الخيار الأول لشراء منتجات COSRX بفضل توفر البائع الرسمي والتوصيل المجاني لأعضاء Prime مع حماية كاملة للمشتري وإمكانية الإرجاع السهل.',
      },
    ],
    faqs: [
      {
        qAr: 'هل يتوفر الشراء بخصومات دورية؟',
        qEn: 'Are discounts available periodically?',
        aAr: 'نعم، تقدم أمازون الإمارات عروضاً دورية تخفض السعر إلى حوالي 30 - 35 درهم إماراتي.',
        aEn: 'Yes, Amazon.ae runs periodic deals reducing prices to AED 30 - 35.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-price-uae',
      'cosrx-snail-96-original-vs-fake',
    ],
  },

  'cosrx-snail-96-daily-use': {
    slug: 'cosrx-snail-96-daily-use',
    url: '/cosrx-snail-96-daily-use',
    titleAr: 'هل COSRX Snail 96 مناسب للاستخدام اليومي؟ | الإجابة الكافية',
    titleEn: 'Is COSRX Snail 96 Safe for Daily Use? Complete Guide',
    metaTitleAr: 'هل COSRX Snail 96 مناسب للاستخدام اليومي؟ | الإجابة الكافية',
    metaTitleEn: 'Is COSRX Snail 96 Safe for Daily Use? Complete Guide',
    metaDescAr: 'كل ما تريد معرفته عن الاستخدام اليومي لـ COSRX Snail 96 صباحاً ومساءً وهل يسبب تحسساً مع الاستمرار.',
    metaDescEn: 'Everything you need to know about using COSRX Snail 96 daily AM & PM. Safety, long-term barrier results, and skin tips.',
    h1Ar: 'هل COSRX Snail 96 مناسب للاستخدام اليومي؟',
    h1En: 'Is COSRX Snail 96 Suitable for Daily Use?',
    readTime: '5 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'استخدام COSRX Snail 96 يوميا',
    summaryAr: 'إجابة وافية معززة بالتجارب والتحليل الطبي الخفيف حول مدى سلامة وفوائد الاستخدام اليومي المنتظم لمرتين صباحاً ومساءً.',
    sections: [
      {
        headingAr: 'فوائد الاستخدام اليومي المنتظم',
        level: 'h2',
        contentAr: 'نظراً لخلو السيروم من المقشرات الكيميائية القوية والعطور، فإن استخدامه اليومي مرتين صباحاً ومساءً يساعد في الحفاظ على مستوى مرونة واستقرار حاجز الجلد تحت التكييف.',
      },
    ],
    faqs: [
      {
        qAr: 'هل يسبب الاستخدام اليومي اعتاد البشرة أو ضعف المفعول؟',
        qEn: 'Does daily use cause skin tolerance?',
        aAr: 'لا، خلاصة الحلزون مكون مغذي مرطب مثل الماء والهيالورونيك، ولا تضعف استجابة الجلد لها مطلقاً.',
        aEn: 'No, snail mucin is a gentle nourishing hydrator that maintains long-term skin health.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-sensitive-skin',
    ],
  },

  'cosrx-snail-96-sensitive-skin': {
    slug: 'cosrx-snail-96-sensitive-skin',
    url: '/cosrx-snail-96-sensitive-skin',
    titleAr: 'هل COSRX Snail 96 مناسب للبشرة الحساسة؟ | تحليل الخبراء',
    titleEn: 'Is COSRX Snail 96 Safe for Sensitive Skin?',
    metaTitleAr: 'هل COSRX Snail 96 مناسب للبشرة الحساسة؟ | تحليل الخبراء',
    metaTitleEn: 'Is COSRX Snail 96 Safe for Sensitive Skin?',
    metaDescAr: 'تحليل مدى سلامة COSRX Snail 96 للبشرة الحساسة والمتهيجة من الشمس والتكييف. تركيبة خالية من العطور.',
    metaDescEn: 'Is COSRX Snail 96 safe for sensitive skin in UAE? Fragrance-free formula analysis, allergy checks, and soothing tips.',
    h1Ar: 'هل COSRX Snail 96 مناسب للبشرة الحساسة والمتهيجة؟',
    h1En: 'Is COSRX Snail 96 Safe for Sensitive Skin?',
    readTime: '5 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'COSRX Snail 96 للبشرة الحساسة',
    summaryAr: 'دراسة وتحليل لتركيبة السيروم وتأثيره المباشر على البشرة الحساسة المعرضة للاحمرار المباشر في دولة الإمارات.',
    sections: [
      {
        headingAr: 'خلو كامل من المخرشات العطرية',
        level: 'h2',
        contentAr: 'أبرز مميزات المنتج للبشرة الحساسة هي خلوه التام من أي معطرات أو صبغات صناعية أو كحول جاف، مما يجعله خياراً هيئة للغاية لتهدئة تهيج الشاطئ أو برودة التكييف.',
      },
    ],
    faqs: [
      {
        qAr: 'ماذا أفعل إذا كان لدي حساسية من المحار أو حلزون البر؟',
        qEn: 'What if I have shellfish allergies?',
        aAr: 'يُنصح بإجراء اختبار حساسية (Patch Test) على جزء صغير من الساعد قبل التطبيق المباشر على الوجه.',
        aEn: 'It is always recommended to perform a quick patch test on your inner arm first.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-ingredients',
      'cosrx-snail-96-daily-use',
    ],
  },

  'best-cosrx-products-uae': {
    slug: 'best-cosrx-products-uae',
    url: '/best-cosrx-products-uae',
    titleAr: 'أفضل منتجات COSRX للبشرة في الإمارات | التجميعة الكاملة',
    titleEn: 'Best COSRX Products in UAE Full Skincare Roundup',
    metaTitleAr: 'أفضل منتجات COSRX للبشرة في الإمارات | التجميعة الكاملة',
    metaTitleEn: 'Best COSRX Products in UAE Full Skincare Roundup',
    metaDescAr: 'تجميعة أفضل منتجات كوسركس الكورية المتاحة في الإمارات لعلاج الحبوب، الجفاف، وتقوية حاجز البشرة.',
    metaDescEn: 'Comprehensive guide to top COSRX products in UAE: Good Morning Cleanser, AHA/BHA Toner, Master Patches, and Snail Mucin.',
    h1Ar: 'أفضل منتجات COSRX للبشرة في الإمارات 2026',
    h1En: 'Best COSRX Products in UAE Roundup 2026',
    readTime: '8 دقائق',
    lastUpdated: 'أغسطس 2026',
    primaryKeyword: 'أفضل منتجات COSRX في الإمارات',
    summaryAr: 'دليل شامل يعرض أفضل وأشهر المنتجات الكورية من علامة COSRX المتوفرة للشراء المباشر في الإمارات مع شرح وظائف كل منتج.',
    sections: [
      {
        headingAr: '1. COSRX Low pH Good Morning Gel Cleanser',
        level: 'h2',
        contentAr: 'غسول كوري لطيف بزيت شجرة الشاي والـ BHA الطبيعي لتنظيف المسام بدون تجفيف الوجه.',
      },
      {
        headingAr: '2. COSRX AHA/BHA Clarifying Treatment Toner',
        level: 'h2',
        contentAr: 'تونر بكس بيني لطيف يزيل الرؤوس السوداء ويجدد سطح البشرة.',
      },
      {
        headingAr: '3. COSRX Acne Pimple Master Patch',
        level: 'h2',
        contentAr: 'لصقات الهيدروكولويد المعجزة لامتصاص إفرازات الحبوب وعلاجها في ليلة واحدة.',
      },
      {
        headingAr: '4. COSRX Advanced Snail 96 Mucin Power Essence',
        level: 'h2',
        contentAr: 'السيروم البطل للترطيب المائي والوصول لمظهر البشرة الزجاجية Glass Skin.',
      },
    ],
    faqs: [
      {
        qAr: 'أين تتوافر هذه المنتجات بأسعار مخفضة؟',
        qEn: 'Where to find these products on sale?',
        aAr: 'تتوافر جميع هذه المنتجات على أمازون الإمارات مع شحن برايم مجاني وسريع.',
        aEn: 'All featured COSRX products are available on Amazon.ae with Prime delivery.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'best-cosrx-snail-products-uae',
      'where-to-buy-cosrx-uae',
    ],
  },
};

export interface TrustPageInfo {
  slug: string;
  url: string;
  titleAr: string;
  metaTitleAr: string;
  metaDescAr: string;
  h1Ar: string;
  contentAr: string;
}

export const TRUST_PAGES: Record<string, TrustPageInfo> = {
  about: {
    slug: 'about',
    url: '/about',
    titleAr: 'عن الموقع | دليل COSRX Snail في الإمارات',
    metaTitleAr: 'عن الموقع | دليل COSRX Snail في الإمارات',
    metaDescAr: 'تعرف على موقعنا المتخصص في مراجعات وإرشادات العناية بالبشرة وبخاصة منتجات COSRX Snail الموثوقة في الإمارات.',
    h1Ar: 'عن موقع خلاصة الحلزون COSRX في الإمارات',
    contentAr: `نحن منصة متخصصة ومستقلة تهدف لإحداث نقلة نوعية في محتوى العناية بالبشرة باللغة العربية، وتحديداً لمستخدمات ومستخدمي منتجات التجميل الكورية (K-Beauty) في دولة الإمارات العربية المتحدة.

رسالتنا هي توفير مراجعات محايدة، مبنية على التحليل الدقيق لمكونات العناية والتجارب الميدانية في المناخ المحلي (الذي يتسم بحرارة الصيف الشديدة واعتماد المباني الكامل على التكييف).

نحن نعمل على توفير أدلة الشراء الآمن والربط المباشر مع المصادر الموثوقة مثل Amazon.ae لضمان وصول العبوات الأصلية 100% بدون أي تلاعب سعري.`,
  },
  contact: {
    slug: 'contact',
    url: '/contact',
    titleAr: 'تواصل معنا | دليل COSRX Snail الإمارات',
    metaTitleAr: 'تواصل معنا | دليل COSRX Snail الإمارات',
    metaDescAr: 'هل لديك استفسار حول منتجات COSRX أو الشراء من الإمارات؟ تواصل معنا عبر النموذج الإلكتروني.',
    h1Ar: 'تواصل معنا',
    contentAr: `يسعدنا دائماً استقبال استفساراتكم واقتراحاتكم حول مراجعات العناية بالبشرة أو المساعدة في التحقق من العروض.

يمكنكم التواصل معنا عبر البريد الإلكتروني المباشر: info@cosrx-snail-mucin.netlify.app

ساعات العمل: من الأحد إلى الخميس - 9:00 صباحاً حتى 5:00 مساءً بتوقيت دولة الإمارات (GST).`,
  },
  privacy: {
    slug: 'privacy',
    url: '/privacy',
    titleAr: 'سياسة الخصوصية | دليل COSRX Snail الإمارات',
    metaTitleAr: 'سياسة الخصوصية | دليل COSRX Snail الإمارات',
    metaDescAr: 'سياسة الخصوصية لحماية بيانات الزوار والتعامل الشفاف مع ملفات تعريف الارتباط والروابط الخارجية.',
    h1Ar: 'سياسة الخصوصية',
    contentAr: `نحن نولي خصوصيتك أهمية قصوى. تسترشد سياسة الخصوصية هذه بكيفية جمعنا ومعالجتنا وحمايتنا للمعلومات عند زيارتك لموقعنا.

1. جمع المعلومات: نحن لا نجمع أي بيانات شخصية معرفة عنك ما لم تقم بتقديمها طواعية.
2. الكوكيز (Cookies): نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور.
3. الروابط الخارجية والروابط التابعة: قد تحتوي صفحاتنا على روابط إحالة لمواقع تجارية مثل Amazon.ae. عند النقر على هذه الروابط، تنطبق سياسات الخصوصية الخاصة بتلك المواقع الخارجية.`,
  },
  terms: {
    slug: 'terms',
    url: '/terms',
    titleAr: 'الشروط والأحكام | دليل COSRX Snail الإمارات',
    metaTitleAr: 'الشروط والأحكام | دليل COSRX Snail الإمارات',
    metaDescAr: 'الشروط والأحكام الخاصة باستكشاف وتصفح موقع مراجعات COSRX Snail في دولة الإمارات.',
    h1Ar: 'الشروط والأحكام',
    contentAr: `مرحباً بك في موقعنا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية:

1. طبيعة المحتوى: جميع المعلومات الواردة في هذا الموقع هي لأغراض تثقيفية وإرشادية فقط، ولا تعتبر استشارة طبية أو جلدية بديلة عن زيارة الطبيب المختص.
2. حقوق الملكية الفكرية: جميع النصوص والشعارات والتنسيقات مملوكة لموقعنا ولا يجوز نسخها بدون إذن كتابي.
3. إخلاء المسؤولية عن الأسعار: الأسعار المذكورة لمنتجات Amazon.ae هي أسعار تقريبية قابلة للتغير حسب عروض التوفير المتاحة في حينها.`,
  },
  methodology: {
    slug: 'methodology',
    url: '/methodology',
    titleAr: 'منهجية التقييم والمراجعة المستقلة | دليل COSRX Snail الإمارات',
    metaTitleAr: 'منهجية التقييم والمراجعة المستقلة | دليل COSRX Snail الإمارات',
    metaDescAr: 'شرح معايير التقييم المستقل وتحليل المكونات ومراقبة الأسعار في دولة الإمارات.',
    h1Ar: 'منهجية التقييم والمراجعة المستقلة',
    contentAr: `نلتزم في منصتنا بأعلى معايير المصداقية والشفافية عند مراجعة وتقييم منتجات العناية بالبشرة.

معايير التقييم لدينا تعتمد على:
1. تحليل المكونات الكيميائية: فحص التركيبة وقائمتها التأكد من خلوها من العطور الضارة والكحول المخرش.
2. اختبار الملاءمة المناخية: تقييم سلوك وقوام المنتج تحت تأثير التكييف والحرارة والرطوبة في دولة الإمارات.
3. فحص ومراقبة الأسعار: متابعة العروض الدورية على Amazon.ae مقارنة بالصيدليات المحلية لضمان تحقيق أعلى قيمة مقابل السعر.
4. التحقق من الأصالة: إرشاد المستهلك لكيفية فحص العلبة والـ Batch Code واختيار البائع المعتمد.`,
  },
};
