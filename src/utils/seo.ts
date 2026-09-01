import { CORE_PRODUCT_DATA } from '../data/cosrxData';
import { ASSETS } from '../assets/images';
import { ClusterArticle, TRUST_PAGES } from '../data/clusterArticlesData';

const BASE_URL = 'https://cosrx-snail-mucin.netlify.app';

/**
 * Helper to get or create a meta tag with specific attribute
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Updates all SEO tags (Title, Meta, Canonical, Open Graph, Twitter Cards, Schema.org)
 */
export function updateMetaAndSchema(
  path: string,
  article?: ClusterArticle,
  trustSlug?: string
) {
  // Clean path: remove query parameters and hashes, remove leading/trailing slashes
  const cleanPath = path.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '');
  const isHome = cleanPath === '' || cleanPath === 'home';
  const canonicalUrl = isHome ? `${BASE_URL}/` : `${BASE_URL}/${cleanPath}`;

  // Default Homepage SEO details
  let title = 'أفضل خلاصة الحلزون COSRX في الإمارات | السعر والفوائد وعروض أمازون';
  let description =
    'دليل وشراء سيروم خلاصة الحلزون الأصلي COSRX Advanced Snail 96 Mucin Power Essence في الإمارات. تعرف على الفوائد والمكونات وطريقة الاستخدام والسعر والعروض على أمازون الإمارات.';
  let ogType = 'website';
  let ogImage = ASSETS.cosrxProduct;

  if (article) {
    title = article.metaTitleAr;
    description = article.metaDescAr;
    ogType = 'article';
    ogImage = ASSETS.cosrxProduct;
  } else if (trustSlug && TRUST_PAGES[trustSlug]) {
    title = TRUST_PAGES[trustSlug].metaTitleAr;
    description = TRUST_PAGES[trustSlug].metaDescAr;
    ogType = 'website';
  }

  // 1. Title Tag
  document.title = title;

  // 2. Standard Meta Tags
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'robots', 'index, follow');

  // 3. Ensure Single Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // 4. Open Graph Metadata
  setMetaTag('property', 'og:site_name', 'COSRX Snail Mucin UAE');
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:locale', 'ar_AE');

  // 5. Twitter / X Card Metadata
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', ogImage);
  setMetaTag('name', 'twitter:url', canonicalUrl);

  // 6. Generate JSON-LD Structured Data
  const schemas: object[] = [
    // WebSite Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'COSRX Snail UAE',
      alternateName: 'COSRX Snail Mucin UAE Guide',
      url: `${BASE_URL}/`,
      inLanguage: 'ar-AE',
    },
    // Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'COSRX Snail Mucin UAE Guide',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/icon.png`,
      description: 'دليل مراجعة وتقييم وشراء سيروم خلاصة الحلزون كوسركس الأصلي في دولة الإمارات العربية المتحدة.',
    },
  ];

  // Product Schema (for homepage & relevant reviews)
  if (isHome || (article && article.slug.includes('snail-96'))) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: CORE_PRODUCT_DATA.nameAr,
      image: [ASSETS.cosrxProduct],
      description: CORE_PRODUCT_DATA.benefitsAr.join('، '),
      sku: 'COSRX-SNAIL-96-100ML',
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
    });
  }

  // Breadcrumb Schema
  if (isHome) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: `${BASE_URL}/`,
        },
      ],
    });
  } else if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: `${BASE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'دليل ومقالات COSRX',
          item: `${BASE_URL}/cosrx-snail-96-review`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.h1Ar,
          item: canonicalUrl,
        },
      ],
    });

    // Article Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.h1Ar,
      description: article.metaDescAr,
      image: [ASSETS.cosrxProduct],
      mainEntityOfPage: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'COSRX Snail UAE Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'COSRX Snail UAE Guide',
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/icon.png`,
        },
      },
      datePublished: '2026-08-01',
      dateModified: '2026-09-01',
    });

    // FAQPage Schema if article has FAQs
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
  } else if (trustSlug && TRUST_PAGES[trustSlug]) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: `${BASE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: TRUST_PAGES[trustSlug].titleAr,
          item: canonicalUrl,
        },
      ],
    });
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
