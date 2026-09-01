export type Language = 'ar' | 'en';

export type PageView =
  | 'home'
  | 'review'
  | 'uae-climate'
  | 'how-to-use'
  | 'ingredients'
  | 'quiz'
  | 'comparisons'
  | 'where-to-buy'
  | 'blog'
  | 'blueprint-export';

export interface ProductData {
  name: string;
  nameAr: string;
  size: string;
  keyIngredient: string;
  keyIngredientAr: string;
  priceRange: string;
  averagePrice: string;
  amazonRating: number;
  amazonReviewsCount: number;
  amazonUrl: string;
  benefitsAr: string[];
  benefitsEn: string[];
  prosAr: string[];
  consAr: string[];
}

export interface IngredientInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  percentage?: string;
  simpleDescAr: string;
  simpleDescEn: string;
  scientificDescAr: string;
  scientificDescEn: string;
  benefitTagAr: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  keywordAr: string;
  keywordEn: string;
  searchIntentAr: string;
  readTime: string;
  summaryAr: string;
  summaryEn: string;
  outlineAr: string[];
}

export interface MetaTagInfo {
  pageId: string;
  pageNameAr: string;
  pageNameEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  primaryKeywordAr: string;
  primaryKeywordEn: string;
}

export interface CtaExample {
  type: 'primary' | 'secondary' | 'urgency' | 'sticky' | 'badge';
  titleAr: string;
  textAr: string;
  titleEn: string;
  textEn: string;
  contextAr: string;
}

export interface ComparisonItem {
  id: string;
  name: string;
  brand: string;
  texture: string;
  textureAr: string;
  bestForAr: string;
  priceAed: string;
  hydrationScore: number;
  absorbScore: number;
  keyStrengthAr: string;
}
