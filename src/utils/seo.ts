import { CORE_PRODUCT_DATA } from '../data/cosrxData';
import { ASSETS } from '../assets/images';
import { ClusterArticle, TRUST_PAGES } from '../data/clusterArticlesData';

export function updateMetaAndSchema(
  path: string,
  article?: ClusterArticle,
  trustSlug?: string
) {
  const baseUrl = 'https://cosrxsnailuae.com';
  const fullUrl = `${baseUrl}${path}`;

  let title = 'أفضل خلاصة الحلزون COSRX في الإمارات | السعر والفوائد وعروض أمازون';
  let description = 'دليل وشراء سيروم خلاصة الحلزون الأصلي COSRX Advanced Snail 96 Mucin Power Essence في الإمارات. حل جفاف التكييف، المكونات، طريقة الاستخدام، والسعر على أمازون الإمارات.';

  if (article) {
    title = article.metaTitleAr;
    description = article.metaDescAr;
  } else if (trustSlug && TRUST_PAGES[trustSlug]) {
    title = TRUST_PAGES[trustSlug].metaTitleAr;
    description = TRUST_PAGES[trustSlug].metaDescAr;
  }

  // Update title
  document.title = title;

  // Update or create Meta Description
  let metaDescEl = document.querySelector('meta[name="description"]');
  if (!metaDescEl) {
    metaDescEl = document.createElement('meta');
    metaDescEl.setAttribute('name', 'description');
    document.head.appendChild(metaDescEl);
  }
  metaDescEl.setAttribute('content', description);

  // Update or create OpenGraph Title
  let ogTitleEl = document.querySelector('meta[property="og:title"]');
  if (!ogTitleEl) {
    ogTitleEl = document.createElement('meta');
    ogTitleEl.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleEl);
  }
  ogTitleEl.setAttribute('content', title);

  // Update or create OpenGraph Description
  let ogDescEl = document.querySelector('meta[property="og:description"]');
  if (!ogDescEl) {
    ogDescEl = document.createElement('meta');
    ogDescEl.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescEl);
  }
  ogDescEl.setAttribute('content', description);

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullUrl);

  // Generate Schemas
  const schemas: object[] = [
    // 1. Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'COSRX Snail Mucin UAE Guide',
      url: baseUrl,
      logo: `${baseUrl}/icon.png`,
      description: 'دليل مراجعة وتقييم وشراء سيروم خلاصة الحلزون كوسركس الأصلي في الإمارات العربية المتحدة.',
    },
    // 2. WebSite Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'COSRX Snail UAE',
      url: baseUrl,
      inLanguage: 'ar-AE',
    },
    // 3. Product Schema for COSRX Snail 96
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: CORE_PRODUCT_DATA.nameAr,
      image: [ASSETS.cosrxProduct],
      description: CORE_PRODUCT_DATA.benefitsAr.join('، '),
      brand: {
        '@type': 'Brand',
        name: 'COSRX',
      },
      offers: {
        '@type': 'Offer',
        url: CORE_PRODUCT_DATA.amazonUrl,
        priceCurrency: 'AED',
        price: '35.00',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Amazon.ae',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '14250',
      },
    },
  ];

  // 4. Breadcrumb Schema
  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'مقالات COSRX Snail',
          item: `${baseUrl}/cosrx-snail-96-review`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.h1Ar,
          item: fullUrl,
        },
      ],
    });

    // 5. Article Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.h1Ar,
      description: article.metaDescAr,
      mainEntityOfPage: fullUrl,
      author: {
        '@type': 'Organization',
        name: 'COSRX Snail UAE Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'COSRX Snail UAE Guide',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/icon.png`,
        },
      },
      datePublished: '2026-08-01',
      dateModified: '2026-08-13',
    });

    // 6. FAQPage Schema if article has FAQs
    if (article.faqs && article.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.qAr,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.aAr,
          },
        })),
      });
    }
  }

  // Inject Schemas into <head>
  let scriptEl = document.querySelector('#ld-json-schemas');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'ld-json-schemas';
    scriptEl.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(schemas, null, 2);
}
