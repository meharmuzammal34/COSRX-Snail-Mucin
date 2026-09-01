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
    summaryAr: 'تقييم شامل ومستقل لخلاصة الحلزون كوسركس 96 بعد اختبارها في مناخ الإمارات الجاف والمكيف. نكشف الفوائد الحقيقية، المكونات، القوام، العيوب، وأفضل طرق الشراء.',
    sections: [
      {
        headingAr: 'نظرة سريعة على المنتج ومكانته في الإمارات',
        level: 'h2',
        contentAr: 'يعتبر سيروم COSRX Advanced Snail 96 Mucin Power Essence أحد أكثر منتجات العناية بالبشرة الكورية مبيعاً واحتفاءً في العالم وفي دولة الإمارات العربية المتحدة. يأتي المنتج في زجاجة خفيفة بحجم 100 مل مزودة بمضخة عملية، ويقدم حلاً مثالياً لمشكلة جفاف البشرة الناتج عن التكييف المستمر في المنازل والمكاتب. كما نوضح في [سعر COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae)، فإن السعر الاقتصادي مقارنة بفعاليته يجعله من أكثر مستحضرات الترطيب طلباً.',
      },
      {
        headingAr: 'ما هي خلاصة الحلزون COSRX Snail 96؟',
        level: 'h2',
        contentAr: 'هو إيسنس مائي هلامي مركّز صُمم بنسبة 96.3% من رشاحة إفرازات الحلزون الطبيعية. تكمن [فوائد COSRX Snail 96 للبشرة](/cosrx-snail-96-benefits) في قدرته الفائقة على حبس الترطيب المائي، ترميم حاجز الجلد المتضرر، وتهدئة الالتهابات دون ترك أي طبقة دهنية ثقيلة. كما أنه يدعم الحصول على مظهر البشرة الزجاجية المتوهجة (Glass Skin) التي تشتهر بها طقوس الجمال الكوري.',
      },
      {
        headingAr: 'المكونات الفعالة وجودة التركيبة',
        level: 'h2',
        contentAr: 'تتميز التركيبة ببساطتها الشديدة وخلوها التام من الكحول والعطور الاصطناعية، كما فصلنا في دليل [مكونات COSRX Snail 96 الكاملة](/cosrx-snail-96-ingredients). تضم التركيبة رشاحة الحلزون المعززة بملح الهيالورونيك (Sodium Hyaluronate)، بالإضافة إلى البانثينول والألانتوين المهدئين للاحمرار وحروق الشمس الخفيفة.',
        listAr: [
          'رشاحة الحلزون (96.3%): المكون الأساسي لترميم الأنسجة وتعزيز المرونة.',
          'صوديوم هيالورونات: مركب مائي فائق الترطيب يمنع جفاف التكييف.',
          'بانثينول (B5) وألانتوين: لتهدئة التهيج وتخفيف حساسية الجلد.',
        ],
      },
      {
        headingAr: 'مدى ملاءمته لمختلف أنواع البشرة',
        level: 'h2',
        contentAr: 'سواء كنتِ تبحثين عن حل خفيف لـ [سيروم الحلزون للبشرة الدهنية والمختلطة](/cosrx-snail-96-for-oily-skin) بدون انسداد للمسام، أو تعانين من قشور شديدة وتودين معرفة تأثير [خلاصة الحلزون للبشرة الجافة](/cosrx-snail-96-for-dry-skin)، فإن السيروم يتكيف تماماً مع احتياجات الجلد. كما أنه آمن ومثالي عند اتباع إرشادات [العناية بالبشرة الحساسة والمتهيجة](/cosrx-snail-96-sensitive-skin).',
      },
      {
        headingAr: 'طريقة الاستخدام الصحيحة والتطبيق العملي',
        level: 'h2',
        contentAr: 'القاعدة الأساسية لنجاح المنتج هي التطبيق على بشرة رطبة مباشرة بعد الغسول والتونر. تعرفي على تفاصيل [طريقة استخدام COSRX Snail 96 خطوة بخطوة](/how-to-use-cosrx-snail-96) وكيفية دمجه ضمن [جدول الاستخدام اليومي صباحاً ومساءً](/cosrx-snail-96-daily-use). وإذا كنتِ محتارة بين السيروم والكريم، اطلعي على [مقارنة COSRX Snail 96 Essence مع كريم Snail 92](/cosrx-snail-96-vs-snail-92).',
      },
      {
        headingAr: 'التحقق من العبوة الأصلية والشراء في الإمارات',
        level: 'h2',
        contentAr: 'نظراً لانتشار بعض النسخ المقلدة في الأسواق غير الرسمية، نحث بشدة على مراجعة دليل [التمييز بين COSRX Snail 96 الأصلي والتقليد](/cosrx-snail-96-original-vs-fake). يمكنك دائماً الرجوع إلى دليلنا حول [أين تشتري COSRX الأصلي في الإمارات](/where-to-buy-cosrx-uae) للحصول على أفضل سعر وضمان التوصيل السريع من المتاجر الموثوقة مثل Amazon.ae.',
      },
    ],
    prosAr: [
      'تركيز عالي 96.3% من رشاحة الحلزون النقية والمغذية',
      'ترطيب مائي عميق يمتص خلال 20 ثانية دون أي ملمس دهني',
      'خالٍ تماماً من العطور، الكحول المخرش، والبارابين',
      'سعر ممتاز واقتصادي يبدأ من 35 درهم إماراتي على أمازون الإمارات',
      'مناسب لجميع أنواع البشرة وآمن مع الريتينول وفيتامين سي',
    ],
    consAr: [
      'القوام هلامي لزج قليلاً في الثواني الأولى قبل الامتصاص',
      'يتطلب تثبيته بكريم مرطب لحبس الماء للبشرة شديدة الجفاف',
    ],
    faqs: [
      {
        qAr: 'هل يستحق سيروم COSRX Snail 96 الشراء في الإمارات؟',
        qEn: 'Is COSRX Snail 96 worth buying in UAE?',
        aAr: 'نعم بالتأكيد. يعد من أفضل المستحضرات الاقتصادية التي أثبتت فعاليتها في علاج جفاف التكييف واستعادة مرونة البشرة بدون تكلفة باهظة.',
        aEn: 'Yes, it is one of the most effective and budget-friendly hydrating serums for UAE weather.',
      },
      {
        qAr: 'ما هو السعر المتوقع للمنتج الأصلي في الإمارات؟',
        qEn: 'What is the price of COSRX Snail 96 in UAE?',
        aAr: 'يتراوح السعر المعتاد بين 30 إلى 45 درهم إماراتي على أمازون الإمارات، بينما يصل في الصيدليات إلى 70 - 85 درهم.',
        aEn: 'It typically ranges between AED 30 and AED 45 on Amazon.ae.',
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
    summaryAr: 'دليل كامل لمتابعة وتحليل أسعار خلاصة الحلزون كوسركس 96 في أسواق الإمارات. مقارنة دقيقة بين الشراء أونلاين عبر أمازون والشراء من الصيدليات الكبرى.',
    sections: [
      {
        headingAr: 'نظرة عامة على الأسعار وفروقات المنافذ في الإمارات',
        level: 'h2',
        contentAr: 'تختلف أسعار سيروم COSRX Advanced Snail 96 Mucin Power Essence بحجم 100 مل بشكل ملحوظ حسب منفذ البيع وسلسلة التوريد. بينما تباع العلبة في الصيدليات الكبرى بالدولة بسعر يتراوح بين 65 إلى 85 درهم إماراتي، يوفر الشراء عبر أمازون الإمارات (Amazon.ae) أسعاراً تنافسية تبدأ من 30 إلى 38 درهم فقط للعبوة الأصلية 100%. للحصول على تقييم شامل للمنتج راجعي [مراجعة COSRX Snail 96 في الإمارات](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'جدول مقارنة الأسعار حسب المتاجر',
        level: 'h2',
        contentAr: 'إليك مقارنة تقريبية لأسعار الشراء المتوفرة حالياً في الدولة:',
        tableAr: {
          headers: ['منفذ البيع', 'متوسط السعر (AED)', 'رسوم الشراء / التوصيل', 'الأصالة والتوافر'],
          rows: [
            ['Amazon.ae (البائع المعتمد Direct)', '30.00 - 35.00 درهم', 'مجاني وسريع لأعضاء Prime', 'أصلي 100% مع ضمان الإرجاع'],
            ['الصيدليات المحلية والمولات', '65.00 - 85.00 درهم', 'شراء فوري مباشر', 'أصلي ولكن بهامش ربحي مضاعف'],
            ['المتاجر الإلكترونية المتفرقة', '45.00 - 60.00 درهم', '15 - 20 درهم للشحن', 'يتطلب فحص تقييم المتجر'],
          ],
        },
      },
      {
        headingAr: 'كيف تضمنين الحصول على أقل سعر مع ضمان الأصالة؟',
        level: 'h2',
        contentAr: 'للحصول على العبوة بأفضل سعر، يُنصح بالاستفادة من عروض أمازون الدورية وشحن Prime المجاني. قبل الشراء، تأكدي دائماً من مراجعة معايير [التمييز بين COSRX Snail 96 الأصلي والتقليد](/cosrx-snail-96-original-vs-fake). كما يمكنك استكشاف باقي المنتجات الاقتصادية من خلال دليل [أفضل منتجات COSRX Snail في الإمارات](/best-cosrx-snail-products-uae) ومراجعة [دليل أماكن شراء COSRX الموثوقة](/where-to-buy-cosrx-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'كم سعر سيروم الحلزون كوسركس الأصلي اليوم في الإمارات؟',
        qEn: 'How much is authentic COSRX Snail Essence today in UAE?',
        aAr: 'يبلغ متوسط السعر الحالي على أمازون الإمارات حوالي 35.00 درهم إماراتي مع عروض تخفيضية متكررة.',
        aEn: 'The average current price on Amazon.ae is around AED 35.00.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'where-to-buy-cosrx-uae',
      'cosrx-snail-96-original-vs-fake',
      'best-cosrx-snail-products-uae',
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
        headingAr: '1. الترطيب المائي العميق ومقاومة جفاف التكييف المستمر',
        level: 'h2',
        contentAr: 'التكييف المستمر في دبي وأبوظبي يسحب الرطوبة من الجلد مسبباً الجفاف والخطوط الدقيقة. تعمل رشاحة الحلزون على جذب جزيئات الماء بعمق داخل الخلايا، مما يجعله خطوة إنقاذ رئيسية لمن يعانون من مشكلات [جفاف البشرة والتلف الناتج عن التكييف](/cosrx-snail-96-for-dry-skin). كما يمكنك الاطلاع على [المراجعة التفصيلية لسيروم الحلزون 96](/cosrx-snail-96-review).',
      },
      {
        headingAr: '2. تقوية وترميم حاجز البشرة المتضرر',
        level: 'h2',
        contentAr: 'بفضل العناصر المغذية التي وثقناها في دليل [تحليل مكونات سيروم الحلزون](/cosrx-snail-96-ingredients)، يمد السيروم البشرة بالبروتينات والببتيدات الطبيعية وحمض الجليكوليك، مما يسهم في إعادة بناء الطبقة العازلة للبشرة وتخفيف تحسسها.',
      },
      {
        headingAr: '3. موازنة الإفرازات الزهمية وتهدئة آثار الحبوب',
        level: 'h2',
        contentAr: 'على عكس الزيوت الثقيلة، يعتبر السيروم خفيفاً ومائياً، مما يجعله الحل المفضل في روتين [سيروم الحلزون للبشرة الدهنية المعرضة للحبوب](/cosrx-snail-96-for-oily-skin). يساعد الألانتوين الطبيعي على تسريع تعافي البثور وتقليل الاحمرار، وهو ما أكدته تجارب المستخدمين الموثقة في [نتائج استخدام سيروم الحلزون قبل وبعد](/cosrx-snail-96-before-after).',
      },
      {
        headingAr: '4. تلطيف احمرار البشرة الحساسة بعد التعرض للشمس',
        level: 'h2',
        contentAr: 'يمنح السيروم إحساساً مهدئاً فورياً للبشرة الحساسة والمتهيجة من شمس الصيف، خصوصاً مع الالتزام بالنصائح المذكورة في [دليل العناية بالبشرة الحساسة مع COSRX](/cosrx-snail-96-sensitive-skin). ولتعظيم النتائج يُنصح باتباع [طريقة الاستخدام الصحيحة خطوة بخطوة](/how-to-use-cosrx-snail-96).',
      },
    ],
    faqs: [
      {
        qAr: 'متى تظهر فوائد سيروم الحلزون على نضارة البشرة؟',
        qEn: 'When do benefits of snail mucin show on skin?',
        aAr: 'يظهر مفعول الترطيب الفوري وزوال الشد في اليوم الأول، بينما تبدأ النضارة الزجاجية وتوحيد الملمس بالظهور بين 7 إلى 14 يوماً من الاستخدام المنتظم.',
        aEn: 'Immediate hydration is felt on Day 1. Glass skin glow and texture refinement appear within 7 to 14 days.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-ingredients',
      'cosrx-snail-96-for-oily-skin',
      'cosrx-snail-96-for-dry-skin',
      'cosrx-snail-96-before-after',
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
        headingAr: 'القاعدة الذهبية: التطبيق على بشرة رطبة وندية',
        level: 'h2',
        contentAr: 'السر الأكبر للحصول على أقصى استفادة من [فوائد COSRX Snail 96 للبشرة](/cosrx-snail-96-benefits) هو عدم وضعه إطلاقاً على بشرة جافة كلياً. تعمل جزيئات الهيالورونيك ورشاحة الحلزون كمغناطيس للماء، لذا يجب وضعه بعد تنظيف الوجه مباشرة وهو ما زال ندياً، أو بعد رش تونر مرطب. تعرفي على التفاصيل في [مراجعة COSRX Snail 96 الكاملة](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'ترتيب الخطوات في الروتين الصباحي والمسائي',
        level: 'h2',
        contentAr: 'اتبعي هذا الترتيب المثالي وفقاً لـ [جدول الاستخدام اليومي لـ COSRX Snail 96](/cosrx-snail-96-daily-use):',
        listAr: [
          'الخطوة 1: تنظيف الوجه بغسول لطيف متوازن الحموضة.',
          'الخطوة 2: تطبيق التونر المائي وترك البشرة رطبة قليلاً.',
          'الخطوة 3: ضخ 2 إلى 3 ضغطات من سيروم الحلزون وتوزيعها بالتربيت اللطيف.',
          'الخطوة 4: الانتظار 30 ثانية حتى يتشرب الجلد السيروم.',
          'الخطوة 5: وضع كريم مرطب لحبس الترطيب داخل خلايا البشرة.',
          'الخطوة 6 (صباحاً): تطبيق واقي الشمس لحماية الجلد من الأشعة فوق البنفسجية.',
        ],
      },
      {
        headingAr: 'الدمج مع كريم Snail 92 والمنتجات الكورية الأخرى',
        level: 'h2',
        contentAr: 'لأصحاب البشرة الجافة، يمكن مضاعفة الترطيب بدمج السيروم مع كريم الحلزون، كما شرحنا في [مقارنة COSRX Snail 96 vs Snail 92 All In One](/cosrx-snail-96-vs-snail-92). كما يمكن تنسيقه مع مستحضرات K-Beauty الأخرى المذكورة في دليل [أفضل منتجات COSRX الكورية في الإمارات](/best-cosrx-products-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'كم ضغطة تكفي للوجه والرقبة؟',
        qEn: 'How many pumps are needed for face and neck?',
        aAr: 'تكفي ضغطتان إلى 3 ضغطات لتغطية كامل الوجه والرقبة بسخاء.',
        aEn: '2 to 3 pumps are optimal to cover the entire face and neck.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-daily-use',
      'cosrx-snail-96-vs-snail-92',
      'best-cosrx-products-uae',
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
    summaryAr: 'قراءة علمية ودقيقة لمكونات خلاصة الحلزون كوسركس 96، مع إيضاح الدور الذي يلعبه كل مركب في حماية البشرة وترميم حاجز الرطوبة.',
    sections: [
      {
        headingAr: 'قائمة المكونات الكاملة (INCI List)',
        level: 'h2',
        contentAr: 'Snail Secretion Filtrate, Betaine, Butylene Glycol, 1,2-Hexanediol, Sodium Polyacrylate, Phenoxyethanol, Sodium Hyaluronate, Allantoin, Ethyl Hexanediol, Carbomer, Panthenol, Arginine. لمعرفة تأثير هذه التركيبة على البشرة تصفحي [مراجعة سيروم COSRX Snail 96](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'تحليل المكونات الفعالة الأساسية',
        level: 'h2',
        contentAr: 'تتميز تركيبة كوسركس بتركيز المواد الفعالة العالي بدون حشوات صناعية:',
        listAr: [
          'رشاحة مخاط الحلزون (96.3%): المكون الرئيسي الغني بالمواد المرممة الطبيعية والبروتينات.',
          'صوديوم هيالورونات: ملح حمض الهيالورونيك السريع الامتصاص الذي يقاوم الجفاف.',
          'بانثينول (Pro-Vitamin B5): يرمم خلايا الجلد المتضررة ويدعم مرونة الأنسجة.',
          'ألانتوين وأرجينين: أحماض ومركبات مهدئة تقلل الاحمرار وتمنع التهيج.',
        ],
      },
      {
        headingAr: 'الأمان للبشرة الحساسة ومطابقة العبوة الأصلية',
        level: 'h2',
        contentAr: 'التركيبة خالية تماماً من العطور الاصطناعية والكحول المخرش، مما يجعلها خياراً ممتازاً كما هو موضح في [دليل البشرة الحساسة وسيروم الحلزون](/cosrx-snail-96-sensitive-skin). كما يمكنك فحص قائمة المكونات المطبوعة على العبوة للتأكد من أصالتها عبر دليل [التمييز بين COSRX الأصلي والتقليد](/cosrx-snail-96-original-vs-fake).',
      },
    ],
    faqs: [
      {
        qAr: 'هل تحتوي التركيبة على أي كحول مجفف أو عطور؟',
        qEn: 'Does the formula contain drying alcohols or fragrance?',
        aAr: 'لا، التركيبة خالية 100% من العطور والبارابين والكحوليات المسببة للجفاف.',
        aEn: 'No, it is 100% free of synthetic perfumes, parabens, and drying alcohols.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-sensitive-skin',
      'cosrx-snail-96-original-vs-fake',
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
        contentAr: 'تخطئ الكثيرات بافتراض أن البشرة الدهنية لا تحتاج إلى ترطيب. عند الجلوس لساعات طويلة في التكييف داخل الإمارات، يفقد الجلد مخزونه المائي فيفرز المزيد من الدهون لتعويض النقص. توفير ترطيب مائي نقي من خلال [خلاصة الحلزون COSRX Snail 96](/cosrx-snail-96-review) يعيد التوازن الزهمي دون أي ملمس زيتي، وهو ما يختلف عن متطلبات [ترطيب البشرة الجافة بالتكييف](/cosrx-snail-96-for-dry-skin).',
      },
      {
        headingAr: 'هل يسبب سيروم الحلزون انسداد المسام (Non-Comedogenic)؟',
        level: 'h2',
        contentAr: 'تم اختبار سيروم الحلزون معملياً وهو غير مسبب لانسداد المسام نهائياً وخالٍ من الزيوت المعدنية الثقيلة. يساعد الألانتوين والزنك الطبيعي في رشاحة الحلزون على تهدئة البثور والتقليل من الاحمرار. كما يمكنك معرفة الفروق بين القوام الخفيف والكريمي عبر [مقارنة السيروم مع كريم Snail 92](/cosrx-snail-96-vs-snail-92).',
      },
      {
        headingAr: 'دمج السيروم في روتين البشرة المعرضة للحبوب',
        level: 'h2',
        contentAr: 'يمكن استخدام السيروم بأمان مع لاصقات البثور والغسول المهدئ كما هو موضح في دليل [أفضل منتجات COSRX في الإمارات لعلاج الحبوب](/best-cosrx-products-uae). طبقي السيروم بانتظام وفق [طريقة الاستخدام الصحيحة](/how-to-use-cosrx-snail-96) للوصول إلى مظهر البشرة النقية المتوهجة.',
      },
    ],
    faqs: [
      {
        qAr: 'هل يترك السيروم لمعاناً دهنياً على الوجه الدهني؟',
        qEn: 'Does it leave a greasy shine on oily skin?',
        aAr: 'لا، يمتص بالكامل خلال 20 ثانية ويترك لمسة ندية خفيفة بدون أي ملمس دهني.',
        aEn: 'No, it absorbs fully in 20 seconds leaving a weightless, non-greasy dewy finish.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-for-dry-skin',
      'cosrx-snail-96-vs-snail-92',
      'best-cosrx-products-uae',
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
    summaryAr: 'شرح شامل لكيفية علاج الجفاف الحاد والقشور الناتجة عن التكييف المستمر في الإمارات باستخدام سيروم الحلزون وتقنية حبس الترطيب.',
    sections: [
      {
        headingAr: 'إنقاذ البشرة الجافة من القشور والشد تحت هواء التكييف',
        level: 'h2',
        contentAr: 'يعتبر جفاف التكييف المستمر في دبي وأبوظبي العدو الأول لأصحاب البشرة الجافة. تعمل خلاصة الحلزون على توفير ترطيب مائي فائق بفضل احتوائها على 96.3% رشاحة حلزون نقية. تعرفي على [فوائد COSRX Snail 96 الكاملة للبشرة](/cosrx-snail-96-benefits) وكيف تعيد المرونة المفقودة، أو راجعي [المراجعة الشاملة لسيروم الحلزون 96](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'تقنية مضاعفة الترطيب للبشرة شديدة الجفاف',
        level: 'h2',
        contentAr: 'للحصول على أفضل النتائج للبشرة الجافة، يجب تطبيق السيروم على بشرة رطبة كما هو مشروح في [دليل طريقة الاستخدام خطوة بخطوة](/how-to-use-cosrx-snail-96)، ثم إتباعه بمرطب غني بالسيراميد أو كريم الحلزون. يمكنك قراءة المقارنة الكاملة بينهما في [COSRX Snail 96 Essence vs Snail 92 Cream](/cosrx-snail-96-vs-snail-92).',
      },
      {
        headingAr: 'النتائج المتوقعة مع الاستمرار',
        level: 'h2',
        contentAr: 'ستلاحظين اختفاء القشور والشعور بالشد المزعج منذ اليوم الأول، مع استعادة كاملة لمرونة حاجز البشرة خلال شهر، كما وثقنا في جدول [نتائج سيروم الحلزون قبل وبعد](/cosrx-snail-96-before-after).',
      },
    ],
    faqs: [
      {
        qAr: 'هل يكفي سيروم الحلزون وحده لعلاج البشرة الجافة؟',
        qEn: 'Is snail essence enough on its own for dry skin?',
        aAr: 'يوفر السيروم ترطيباً مائياً عميقاً، ولكن يُنصح دائماً بتثبيته بكريم مرطب لحبس الماء ومنع تبخره.',
        aEn: 'The essence provides deep water hydration, but should be sealed with a moisturizer to prevent moisture loss.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-for-oily-skin',
      'cosrx-snail-96-vs-snail-92',
      'cosrx-snail-96-before-after',
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
        headingAr: 'الجدول الزمني للنتائج وتطور النضارة (30 يوماً)',
        level: 'h2',
        contentAr: 'تختلف استجابة الجلد باختلاف نوع البشرة والالتزام بـ [طريقة استخدام COSRX Snail 96 الصحيحة](/how-to-use-cosrx-snail-96). إليكِ ملخص التطور التدريجي الملاحظ:',
        listAr: [
          'اليوم 1: راحة فورية من الشد والجفاف، وملمس مائي منعش يدوم طوال اليوم تحت التكييف.',
          'اليوم 7: اختفاء القشور بنسبة 80%، وتحسن ملحوظ في ثبات وتوزيع المكياج.',
          'اليوم 14: ظهور لمعان النضارة الزجاجية الكورية (Glass Skin Glow) وتحسن ملمس ومرونة الجلد.',
          'اليوم 30: ترميم كامل لحاجز البشرة الواقي، وتراجع واضح في التصبغات وآثار الحبوب البنية.',
        ],
      },
      {
        headingAr: 'كيف تضمنين استمرار النتائج على المدى الطويل؟',
        level: 'h2',
        contentAr: 'للمحافظة على هذا التوهج، ينصح بالالتزام بـ [الاستخدام اليومي صباحاً ومساءً](/cosrx-snail-96-daily-use) واستخدام العبوة الأصلية الموثوقة. يمكنك قراءة [مراجعة COSRX Snail 96 الشاملة](/cosrx-snail-96-review) لمعرفة المزيد، والاطلاع على دليل [أين تشتري المنتج الأصلي في الإمارات](/where-to-buy-cosrx-uae) لتجنب التقليد.',
      },
    ],
    faqs: [
      {
        qAr: 'كم من الوقت يلزم لرؤية تأثير تفتيح آثار الحبوب؟',
        qEn: 'How long until post-acne marks fade?',
        aAr: 'يبدأ تراجع التصبغات الخفيفة خلال أسبوعين إلى 4 أسابيع مع الاستخدام المنتظم صباحاً ومساءً.',
        aEn: 'Visible fading of minor dark spots typically starts within 2 to 4 weeks of consistent use.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-benefits',
      'cosrx-snail-96-daily-use',
      'where-to-buy-cosrx-uae',
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
    summaryAr: 'دليل أمان حاسم لحماية المستهلك في الإمارات من العبوات المقلدة، مع توضيح العلامات المباشرة للعلبة الأصلية وكيفية التحقق منها.',
    sections: [
      {
        headingAr: '1. فحص الخطوط والطباعة على العبوة الخارجية والزجاجة',
        level: 'h2',
        contentAr: 'تتميز العبوة الأصلية بطباعة واضحة ونقية لشعار COSRX بخط دقيق ومتناسق تماماً. في العبوات المقلدة، غالباً ما تلاحظين خطوطاً أسمك وألواناً باهتة مع أخطاء طفيفة في المسافات. راجعي [مراجعة COSRX Snail 96 الكاملة](/cosrx-snail-96-review) للاطلاع على مواصفات المنتج الدقيقة.',
      },
      {
        headingAr: '2. كود الدفعة المطبوع (Batch Code) وتاريخ الإنتاج',
        level: 'h2',
        contentAr: 'تأكدي من وجود كود دفعة ناصع ومطبوع بحفر غائر واضح في أسفل الزجاجة، يتطابق مع التاريخ والكود المدون على العلبة الكرتونية الخارجية. كما يجب أن تتطابق المكونات تماماً مع المذكور في دليل [تحليل مكونات سيروم الحلزون 96](/cosrx-snail-96-ingredients).',
      },
      {
        headingAr: '3. القوام والرائحة المميزة',
        level: 'h2',
        contentAr: 'المنتج الأصلي خالٍ تماماً من العطور وليس له أي رائحة نفاذة. قوامه هلامي لزج مطاطي شفاف كلياً، بينما قد تمتلك المنتجات المقلدة رائحة عطرية صناعية أو قواماً مائياً خفيفاً جداً.',
      },
      {
        headingAr: '4. التسعير المشبوه ومنافذ الشراء الآمنة في الإمارات',
        level: 'h2',
        contentAr: 'إذا عُرض المنتج بسعر يقل عن 25 درهم، فغالباً ما يكون مقلداً. للاطلاع على الأسعار الطبيعية الموثوقة راجعي [سعر COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae). ولضمان شراء المنتج الأصلي 100%، اتبعي إرشاداتنا في [دليل أين تشتري COSRX الأصلي في الإمارات عبر أمازون المعتمد](/where-to-buy-cosrx-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'كيف أضمن شراء العبوة الأصلية بنسبة 100% في الإمارات؟',
        qEn: 'How to guarantee 100% authentic purchase in UAE?',
        aAr: 'احرصي على الشراء عبر البائع المعتمد Direct على Amazon.ae أو المتجر الرسمي لـ COSRX لتفادي أي نسخ غير مضمونة.',
        aEn: 'Always order from verified Amazon.ae Direct sellers or the official COSRX store.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-price-uae',
      'where-to-buy-cosrx-uae',
      'cosrx-snail-96-ingredients',
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
        headingAr: '1. سيروم COSRX Advanced Snail 96 Mucin Power Essence',
        level: 'h2',
        contentAr: 'السيروم الأكثر شهرة بحجم 100 مل، يوفر ترطيباً مائياً عميقاً بتركيز 96.3% وهو المنتج الأساسي الذي نوصي به للمبتدئين. اقرئي [المراجعة التفصيلية لسيروم COSRX Snail 96](/cosrx-snail-96-review) وتعرفي على [سعر المنتج وعروضه في الإمارات](/cosrx-snail-96-price-uae).',
      },
      {
        headingAr: '2. كريم COSRX Advanced Snail 92 All In One Cream',
        level: 'h2',
        contentAr: 'كريم جل غني بتركيز 92% حلزون، يعمل كمرطب ختامي ممتاز لحبس الماء داخل خلايا الجلد. لمعرفة متى تختارين السيروم ومتى تختارين الكريم، اطلعي على [مقارنة Snail 96 vs Snail 92](/cosrx-snail-96-vs-snail-92).',
      },
      {
        headingAr: '3. كريم العين COSRX Snail Peptide Eye Cream',
        level: 'h2',
        contentAr: 'كريم مخصص لمحيط العينين يجمع بين مخاط الحلزون و5 أنواع من الببتيدات لتفتيح الهالات السوداء ومقاومة الخطوط الدقيقة والتجاعيد.',
      },
      {
        headingAr: 'أين تجدين كامل المجموعة الأصلية بأفضل سعر؟',
        level: 'h2',
        contentAr: 'تتوفر هذه المجموعة كاملة بأسعار ممتازة وتوصيل مجاني عبر أمازون الإمارات. راجعي [دليل أين تشتري COSRX في الإمارات](/where-to-buy-cosrx-uae) وتصفحي أيضاً تجميعتنا الشاملة لـ [أفضل منتجات كوسركس الكورية في الإمارات](/best-cosrx-products-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'ما هو المنتج الأكثر مبيعاً في الإمارات من هذه المجموعة؟',
        qEn: 'Which product is the #1 bestseller in UAE?',
        aAr: 'سيروم COSRX Snail 96 Essence هو المنتج الأكثر مبيعاً وتقييماً بأكثر من 14,000 تقييم موثق على أمازون الإمارات.',
        aEn: 'The COSRX Snail 96 Essence is the #1 bestseller with 14,000+ verified ratings on Amazon UAE.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-vs-snail-92',
      'best-cosrx-products-uae',
      'where-to-buy-cosrx-uae',
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
    summaryAr: 'مقارنة شاملة لمساعدة المشترية في الاختيار بين سيروم خلاصة الحلزون 96 وكريم الحلزون المتكامل 92 من كوسركس.',
    sections: [
      {
        headingAr: 'جدول الفروقات الجوهرية بين السيروم والكريم',
        level: 'h2',
        contentAr: 'يوضح الجدول التالي أهم الفروق لمساعدتك على اتخاذ القرار الأنسب لنوع بشرتك واحتياجاتها:',
        tableAr: {
          headers: ['وجه المقارنة', 'COSRX Snail 96 Essence (السيروم)', 'COSRX Snail 92 All In One (الكريم)'],
          rows: [
            ['نوع وقوام المستحضر', 'سيروم مائي هلامي خفيف جداً', 'كريم جل مرطب ومغذي غني'],
            ['نسبة رشاحة الحلزون', '96.3% تركيز مائي نقي', '92.0% تركيز مرطب'],
            ['الموقع في الروتين', 'بعد الغسول والتونر (خطوة المعالجة)', 'الخطوة الختامية كمرطب لحبس الماء'],
            ['الهدف الأساسي', 'ترطيب عميق ونضارة زجاجية Glass Skin', 'حبس الرطوبة والوقاية من الجفاف'],
            ['متوسط السعر في الإمارات', 'AED 35.00', 'AED 42.00'],
          ],
        },
      },
      {
        headingAr: 'أيهما الأنسب لنوع بشرتك؟',
        level: 'h2',
        contentAr: 'إذا كانت بشرتك دهنية أو مختلطة، فإن [سيروم COSRX Snail 96 للبشرة الدهنية](/cosrx-snail-96-for-oily-skin) هو الخيار الأفضل لخفته الفائقة. أما إذا كنتِ تعانين من قشور التكييف الشديدة، فيمكنك الاستفادة من دمجهما معاً كما وضحنا في [دليل البشرة الجافة والتكييف](/cosrx-snail-96-for-dry-skin). اقرئي أيضاً [مراجعة COSRX Snail 96 التفصيلية](/cosrx-snail-96-review) وتعرفي على [طريقة الاستخدام الصحيحة](/how-to-use-cosrx-snail-96).',
      },
    ],
    faqs: [
      {
        qAr: 'هل يمكن استخدام السيروم والكريم معاً في نفس الروتين؟',
        qEn: 'Can both products be used together in one routine?',
        aAr: 'نعم بالتأكيد! تطبق خلاصة Snail 96 أولاً على بشرة ندية، ثم يوضع كريم Snail 92 فوقها كخطوة ختامية لحبس جزيئات الترطيب.',
        aEn: 'Yes! Apply the 96 Essence first on damp skin, then seal with the 92 Cream as your final moisturizer.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'best-cosrx-snail-products-uae',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-for-dry-skin',
      'cosrx-snail-96-for-oily-skin',
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
    summaryAr: 'دليل المشتري الشامل لشراء منتجات كوسركس الكورية الأصلية في جميع إمارات الدولة (دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، العين، الفجيرة).',
    sections: [
      {
        headingAr: 'لماذا تعتبر منصة Amazon.ae الخيار الأفضل والمضمون في الإمارات؟',
        level: 'h2',
        contentAr: 'تعتبر منصة أمازون الإمارات (Amazon.ae) الوجهة الأولى لشراء مستحضرات COSRX بفضل توفر البائع المعتمد Direct والتوصيل المجاني في نفس اليوم أو اليوم التالي لأعضاء Amazon Prime. كما توفر المنصة سياسة إرجاع مرنة وسهلة وضمان الأصالة 100%. راجعي [مراجعة وتقييم سيروم COSRX Snail 96](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'مقارنة الأسعار بين أمازون والصيدليات المحلية',
        level: 'h2',
        contentAr: 'تباع العلبة الأصلية على أمازون بسعر يتراوح بين 30 إلى 38 درهم فقط، بينما قد تكلفك في الصيدليات ما يصل إلى 85 درهم إماراتي. تعرفي على تفاصيل العروض والتوفير في [دليل أسعار COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae).',
      },
      {
        headingAr: 'نصائح لتجنب العبوات المقلدة عند الشراء أونلاين',
        level: 'h2',
        contentAr: 'تأكدي دائماً من مراجعة تقييم البائع وتطابق كود الدفعة باتباع دليل [التمييز بين COSRX الأصلي والتقليد](/cosrx-snail-96-original-vs-fake). كما يمكنك استكشاف كامل تشكيلة المنتجات الكورية من خلال [أفضل منتجات كوسركس في الإمارات](/best-cosrx-products-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'هل يتوفر توصيل مجاني وسريع في دبي وأبوظبي؟',
        qEn: 'Is fast free delivery available in Dubai and Abu Dhabi?',
        aAr: 'نعم، يتمتع أعضاء أمازون برايم بشحن مجاني وسريع في نفس اليوم أو خلال 24 ساعة في كافة مدن الإمارات.',
        aEn: 'Yes, Amazon Prime members enjoy free same-day or next-day delivery across the UAE.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-price-uae',
      'cosrx-snail-96-original-vs-fake',
      'best-cosrx-products-uae',
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
    summaryAr: 'إجابة وافية معززة بالتجارب والتحليل الطبي الخفيف حول مدى سلامة وفوائد الاستخدام اليومي المنتظم مرتين صباحاً ومساءً.',
    sections: [
      {
        headingAr: 'أمان الاستخدام اليومي صباحاً ومساءً',
        level: 'h2',
        contentAr: 'نظراً لخلو السيروم تماماً من المقشرات الكيميائية القوية والعطور والمواد المخرشة، فإن استخدامه اليومي مرتين صباحاً ومساءً آمن للغاية وموصى به للحفاظ على ترطيب البشرة في مواجهة تكييف الإمارات المستمر. راجعي [مراجعة COSRX Snail 96 الكاملة](/cosrx-snail-96-review) وتعرفي على [فوائد خلاصة الحلزون المتعددة](/cosrx-snail-96-benefits).',
      },
      {
        headingAr: 'كيف تدمجينه في روتينك الصباحي والمسائي؟',
        level: 'h2',
        contentAr: 'في الصباح، يوضع السيروم كقاعدة ترطيب مائية خفيفة قبل واقي الشمس والمكياج. وفي المساء، يساعد على تجديد الخلايا وترميم الحاجز الواقي أثناء النوم. اتبعي الخطوات المشروحة في [طريقة استخدام COSRX Snail 96 بالتفصيل](/how-to-use-cosrx-snail-96)، وتعرفي على [النتائج بعد 30 يوماً من الاستخدام اليومي](/cosrx-snail-96-before-after).',
      },
      {
        headingAr: 'أمان السيروم على البشرة الحساسة يومياً',
        level: 'h2',
        contentAr: 'السيروم لطيف جداً ولا يسبب أي اعتياد سلبي للبشرة، كما نوضح في [دليل البشرة الحساسة مع سيروم الحلزون](/cosrx-snail-96-sensitive-skin).',
      },
    ],
    faqs: [
      {
        qAr: 'هل يسبب الاستخدام اليومي ضعف استجابة الجلد للسيروم؟',
        qEn: 'Does daily use cause skin to stop responding to the serum?',
        aAr: 'لا، رشاحة الحلزون مادة مغذية مرطبة مثل الماء وحمض الهيالورونيك، واستمرار استخدامها يعزز صحة ومناعة حاجز البشرة.',
        aEn: 'No, snail mucin is a gentle hydrator that supports long-term skin barrier health.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'how-to-use-cosrx-snail-96',
      'cosrx-snail-96-sensitive-skin',
      'cosrx-snail-96-before-after',
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
        headingAr: 'خلو كامل من المخرشات العطرية والمواد الكيميائية القاسية',
        level: 'h2',
        contentAr: 'أبرز ما يميز خلاصة الحلزون كوسركس هو خلوها التام من العطور والصبغات الصناعية والبارابين والكحول الجاف. كما فصلنا في [تحليل مكونات سيروم COSRX Snail 96](/cosrx-snail-96-ingredients)، تعمل مكونات مثل الألانتوين والبانثينول على تهدئة احمرار الجلد الناتج عن الحرارة وحروق الشمس الخفيفة. تصفحي [مراجعة المنتج الشاملة](/cosrx-snail-96-review).',
      },
      {
        headingAr: 'كيفية إجراء اختبار الحساسية (Patch Test)',
        level: 'h2',
        contentAr: 'على الرغم من أمانه العالي، يوصى دائماً لمن يعانون من حساسية المحار أو الرخويات بإجراء اختبار بسيط على الجزء الداخلي من الساعد قبل التطبيق على كامل الوجه. ثم يمكنك إدراجه تدريجياً باتباع [طريقة الاستخدام الصحيحة](/how-to-use-cosrx-snail-96) والتأكد من أمان [الاستخدام اليومي المنتظم](/cosrx-snail-96-daily-use).',
      },
    ],
    faqs: [
      {
        qAr: 'هل يساعد السيروم في تخفيف احمرار الوردية أو تهيج البشرة؟',
        qEn: 'Does snail mucin help with redness and rosacea?',
        aAr: 'نعم، بفضل خصائص الألانتوين ورشاحة الحلزون المهدئة، يساعد السيروم على تبريد البشرة وتخفيف الاحمرار السطحي.',
        aEn: 'Yes, natural allantoin and snail mucin provide cooling and anti-inflammatory relief for irritated skin.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'cosrx-snail-96-ingredients',
      'cosrx-snail-96-daily-use',
      'how-to-use-cosrx-snail-96',
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
        headingAr: '1. سيروم COSRX Advanced Snail 96 Mucin Power Essence',
        level: 'h2',
        contentAr: 'المنتج الكوري الأكثر مبيعاً والأعلى تقييماً، يمنح ترطيباً مائياً عميقاً ويعالج جفاف التكييف بامتياز. اقرئي [المراجعة الشاملة لسيروم COSRX Snail 96 في الإمارات](/cosrx-snail-96-review) وتعرفي على [سعر المنتج على أمازون](/cosrx-snail-96-price-uae).',
      },
      {
        headingAr: '2. غسول COSRX Low pH Good Morning Gel Cleanser',
        level: 'h2',
        contentAr: 'غسول صباحي لطيف ينظف المسام بلطف دون تجريد البشرة من زيوتها الطبيعية، ويحتوي على زيت شجرة الشاي والـ BHA الطبيعي.',
      },
      {
        headingAr: '3. لصقات الحبوب COSRX Acne Pimple Master Patch',
        level: 'h2',
        contentAr: 'لاصقات هيدروكولويد الشهيرة التي تمتص الإفرازات وتهدئ الحبوب الملتهبة بين عشية وضحاها دون ترك آثار.',
      },
      {
        headingAr: '4. مجموعة خط الحلزون الكاملة وكريم Snail 92',
        level: 'h2',
        contentAr: 'تضم المجموعة أيضاً كريم الحلزون وكريم محيط العين، ويمكنك استكشافها في دليل [أفضل منتجات COSRX Snail في الإمارات](/best-cosrx-snail-products-uae) ومراجعة [مقارنة السيروم 96 والكريم 92](/cosrx-snail-96-vs-snail-92). كما يمكنك معرفة أفضل العروض عبر [دليل أين تشتري منتجات كوسركس في الإمارات](/where-to-buy-cosrx-uae).',
      },
    ],
    faqs: [
      {
        qAr: 'أين تتوافر منتجات كوسركس الأصلية في الإمارات بأسعار مخفضة؟',
        qEn: 'Where are original COSRX products available at discount prices in UAE?',
        aAr: 'تتوافر المجموعة الأصلية كاملة على أمازون الإمارات (Amazon.ae) بأسعار تبدأ من 30 درهماً مع شحن برايم مجاني وسريع.',
        aEn: 'The full genuine line is available on Amazon.ae starting around AED 30 with free Prime delivery.',
      },
    ],
    relatedSlugs: [
      'cosrx-snail-96-review',
      'best-cosrx-snail-products-uae',
      'where-to-buy-cosrx-uae',
      'cosrx-snail-96-vs-snail-92',
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

رسالتنا هي توفير مراجعات محايدة، مبنية على التحليل الدقيق لمكونات العناية والتجارب الميدانية في المناخ المحلي (الذي يتسم بحرارة الصيف الشديدة واعتماد المباني الكامل على التكييف). يمكنك قراءة [مراجعة COSRX Snail 96 الكاملة](/cosrx-snail-96-review) للاطلاع على نتائج اختباراتنا، أو استكشاف [فوائد سيروم الحلزون للبشرة](/cosrx-snail-96-benefits).

نحن نعمل على توفير أدلة الشراء الآمن والربط المباشر مع المصادر الموثوقة مثل Amazon.ae لضمان وصول العبوات الأصلية 100% بدون أي تلاعب سعري. تعرف على [أين تشتري COSRX الأصلي في الإمارات](/where-to-buy-cosrx-uae) واطلع على دليل [التمييز بين الأصلي والتقليد](/cosrx-snail-96-original-vs-fake).`,
  },
  contact: {
    slug: 'contact',
    url: '/contact',
    titleAr: 'تواصل معنا | دليل COSRX Snail الإمارات',
    metaTitleAr: 'تواصل معنا | دليل COSRX Snail الإمارات',
    metaDescAr: 'هل لديك استفسار حول منتجات COSRX أو الشراء من الإمارات؟ تواصل معنا عبر البريد الإلكتروني.',
    h1Ar: 'تواصل معنا',
    contentAr: `يسعدنا دائماً استقبال استفساراتكم واقتراحاتكم حول مراجعات العناية بالبشرة أو المساعدة في التحقق من العروض.

يمكنكم التواصل معنا عبر البريد الإلكتروني المباشر: info@cosrx-snail-mucin.netlify.app

للحصول على إجابات سريعة وفورية، يمكنكم تصفح [الأسئلة الشائعة في مراجعة COSRX Snail 96](/cosrx-snail-96-review) أو مراجعة [سعر COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae).

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
3. الروابط الخارجية وروابط الشراكة بالعمولة: قد تحتوي صفحاتنا على روابط إحالة لمواقع تجارية مثل Amazon.ae لشراء [سيروم COSRX Snail 96 الأصلي](/where-to-buy-cosrx-uae). عند النقر على هذه الروابط، تنطبق سياسات الخصوصية الخاصة بتلك المواقع الخارجية.
4. يمكنك الرجوع دائماً إلى [الصفحة الرئيسية](/).`,
  },
  terms: {
    slug: 'terms',
    url: '/terms',
    titleAr: 'الشروط والأحكام | دليل COSRX Snail الإمارات',
    metaTitleAr: 'الشروط والأحكام | دليل COSRX Snail الإمارات',
    metaDescAr: 'الشروط والأحكام الخاصة باستكشاف وتصفح موقع مراجعات COSRX Snail في دولة الإمارات.',
    h1Ar: 'الشروط والأحكام',
    contentAr: `مرحباً بك في موقعنا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية:

1. طبيعة المحتوى: جميع المعلومات الواردة في هذا الموقع، بما في ذلك [طريقة استخدام سيروم الحلزون](/how-to-use-cosrx-snail-96) و [تحليل مكونات COSRX Snail 96](/cosrx-snail-96-ingredients)، هي لأغراض تثقيفية وإرشادية فقط، ولا تعتبر استشارة طبية أو جلدية بديلة عن زيارة الطبيب المختص.
2. حقوق الملكية الفكرية: جميع النصوص والشعارات والتنسيقات مملوكة لموقعنا ولا يجوز نسخها بدون إذن كتابي.
3. إخلاء المسؤولية عن الأسعار: الأسعار المذكورة في دليل [سعر COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae) هي أسعار تقريبية قابلة للتغير حسب عروض التوفير المتاحة في حينها على Amazon.ae.`,
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
1. تحليل المكونات الكيميائية: فحص التركيبة وقائمتها كما هو موضح في [تحليل مكونات سيروم الحلزون](/cosrx-snail-96-ingredients) للتأكد من خلوها من العطور الضارة والكحول المخرش.
2. اختبار الملاءمة المناخية: تقييم سلوك وقوام المنتج تحت تأثير التكييف والحرارة والرطوبة في دولة الإمارات ومتابعة [نتائج الاستخدام قبل وبعد](/cosrx-snail-96-before-after).
3. فحص ومراقبة الأسعار: متابعة العروض الدورية على Amazon.ae كما وثقنا في [سعر COSRX Snail 96 في الإمارات](/cosrx-snail-96-price-uae) مقارنة بالصيدليات المحلية لضمان تحقيق أعلى قيمة مقابل السعر.
4. التحقق من الأصالة: إرشاد المستهلك لكيفية فحص العلبة والـ Batch Code عبر دليل [التمييز بين الأصلي والتقليد](/cosrx-snail-96-original-vs-fake) والشراء الآمن من [منافذ الشراء المعتمدة في الإمارات](/where-to-buy-cosrx-uae).`,
  },
};
