import React, { useState } from 'react';
import { Language } from '../types';
import {
  WEBSITE_SITEMAP_STRUCTURE,
  HOMEPAGE_ARABIC_OUTLINE,
  FULL_ARABIC_REVIEW_ARTICLE,
  TEN_BLOG_POSTS,
  META_TAGS_DATA,
  CTA_EXAMPLES,
} from '../data/cosrxData';
import {
  FileCode,
  Copy,
  Check,
  Download,
  Layers,
  FileText,
  Search,
  Sparkles,
  BookOpen,
  Send,
  Code,
} from 'lucide-react';

interface BlueprintExportViewProps {
  lang: Language;
}

export const BlueprintExportView: React.FC<BlueprintExportViewProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<
    'sitemap' | 'homepage-outline' | 'review-article' | 'blog-titles' | 'meta-tags' | 'ctas'
  >('sitemap');

  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const getMarkdownForTab = (tab: string) => {
    switch (tab) {
      case 'sitemap':
        return `# Complete Website Sitemap for COSRX Snail Mucin 96 (UAE Micro-Niche)\n\nDomain: ${
          WEBSITE_SITEMAP_STRUCTURE.domain
        }\n\n${WEBSITE_SITEMAP_STRUCTURE.pages
          .map(
            (p) =>
              `- **URL:** ${p.url}\n  - Title (Ar): ${p.titleAr}\n  - Title (En): ${p.titleEn}\n  - Page Type: ${p.type}\n  - Priority: ${p.priority}`
          )
          .join('\n\n')}`;

      case 'homepage-outline':
        return `# ${HOMEPAGE_ARABIC_OUTLINE.title}\n\n${HOMEPAGE_ARABIC_OUTLINE.sections
          .map(
            (sec) =>
              `## ${sec.nameAr}\n${sec.elements.map((el) => `- ${el}`).join('\n')}`
          )
          .join('\n\n')}`;

      case 'review-article':
        return FULL_ARABIC_REVIEW_ARTICLE;

      case 'blog-titles':
        return `# 10 Supporting Blog Post Titles & Outlines for UAE Skincare Niche\n\n${TEN_BLOG_POSTS.map(
          (p) =>
            `### Post #${p.id}: ${p.titleAr}\n- **English Title:** ${p.titleEn}\n- **Keyword (Ar):** ${
              p.keywordAr
            }\n- **Search Intent:** ${p.searchIntentAr}\n- **Read Time:** ${
              p.readTime
            }\n- **Summary:** ${p.summaryAr}\n- **Outline:**\n${p.outlineAr
              .map((o) => `  * ${o}`)
              .join('\n')}`
        ).join('\n\n')}`;

      case 'meta-tags':
        return `# Suggested Meta Titles & Meta Descriptions for Main Pages\n\n${META_TAGS_DATA.map(
          (m) =>
            `### Page: ${m.pageNameAr} (${m.pageNameEn})\n- **Primary Keyword (Ar):** ${
              m.primaryKeywordAr
            }\n- **Primary Keyword (En):** ${
              m.primaryKeywordEn
            }\n- **Meta Title (Ar):** ${m.metaTitleAr}\n- **Meta Title (En):** ${
              m.metaTitleEn
            }\n- **Meta Description (Ar):** ${m.metaDescAr}\n- **Meta Description (En):** ${
              m.metaDescEn
            }`
        ).join('\n\n')}`;

      case 'ctas':
        return `# Call-to-Action (CTA) Examples in Arabic\n\n${CTA_EXAMPLES.map(
          (c) =>
            `### ${c.titleAr} (${c.type.toUpperCase()})\n- **Text (Arabic):** "${
              c.textAr
            }"\n- **Text (English):** "${c.textEn}"\n- **Context / Location:** ${
              c.contextAr
            }`
        ).join('\n\n')}`;

      default:
        return '';
    }
  };

  const copyTabMarkdown = (tab: string) => {
    const md = getMarkdownForTab(tab);
    navigator.clipboard.writeText(md);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  const downloadFullBlueprintJson = () => {
    const fullBlueprint = {
      project: 'COSRX Advanced Snail 96 Mucin Power Essence UAE Strategy & Content Blueprint',
      market: 'United Arab Emirates (UAE)',
      targetLanguage: 'Arabic (Primary) + English (Secondary)',
      monetization: 'Amazon.ae Affiliate Links',
      deliverables: {
        sitemap: WEBSITE_SITEMAP_STRUCTURE,
        homepageOutline: HOMEPAGE_ARABIC_OUTLINE,
        fullInDepthReviewArticleAr: FULL_ARABIC_REVIEW_ARTICLE,
        tenSupportingBlogPosts: TEN_BLOG_POSTS,
        metaTags: META_TAGS_DATA,
        ctaExamples: CTA_EXAMPLES,
      },
    };

    const blob = new Blob([JSON.stringify(fullBlueprint, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cosrx-snail-uae-strategy-blueprint.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Blueprint Header */}
      <section className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
            <FileCode className="w-4 h-4 text-amber-400" />
            <span>
              {lang === 'ar'
                ? 'مخطط الاستراتيجية والمخرجات الشاملة (Blueprint Hub)'
                : 'Complete Strategy Blueprint & Export Hub'}
            </span>
          </div>

          <button
            onClick={downloadFullBlueprintJson}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg transition"
          >
            <Download className="w-4 h-4" />
            <span>
              {lang === 'ar'
                ? 'تحميل الاستراتيجية بالكامل (Strategy JSON)'
                : 'Download Strategy JSON'}
            </span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'مخطط استراتيجية الموقع ومحتوى الـ 6 مخرجات المطلوبة جاهزة للتنفيذ'
            : 'Complete Micro-Niche Strategy & Content Blueprint Deliverables'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'تستعرض هذه الصفحة المخرجات الستة الكاملة المطلوبة: مخطط الموقع (Sitemap)، هيكل الصفحة الرئيسية، مقال المراجعة الشامل 1500+ كلمة، 10 عناوين مقالات مدونة، العناوين والأوصاف التعريفية (Meta Tags)، وأمثلة دعوات الشراء (CTAs).'
            : 'All 6 requested strategy deliverables pre-formatted in Arabic and English for immediate website implementation.'}
        </p>
      </section>

      {/* Deliverables Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-2">
        {[
          { id: 'sitemap', labelAr: '1. خريطة الموقع (Sitemap)', icon: Layers },
          { id: 'homepage-outline', labelAr: '2. هيكل الرئيسية', icon: FileText },
          { id: 'review-article', labelAr: '3. المقال المالي (1500+ كلمة)', icon: BookOpen },
          { id: 'blog-titles', labelAr: '4. مقالات المدونة الـ 10', icon: Sparkles },
          { id: 'meta-tags', labelAr: '5. Meta Titles & Descriptions', icon: Search },
          { id: 'ctas', labelAr: '6. أمثلة الـ CTAs بالعربية', icon: Send },
        ].map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{tab.labelAr}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Deliverable Card */}
      <div className="beauty-card rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <h3 className="font-extrabold text-stone-900 text-lg font-cairo flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-600" />
            <span>
              {activeTab === 'sitemap' && '1. خريطة هرمية كاملة للموقع (Complete Website Sitemap)'}
              {activeTab === 'homepage-outline' && '2. مخطط محتوى الصفحة الرئيسية باللغة العربية'}
              {activeTab === 'review-article' && '3. مقال المراجعة الشاملة باللغة العربية (1500+ كلمة)'}
              {activeTab === 'blog-titles' && '4. قائمة بـ 10 مقالات مدونة داعمة للكلمات المفتاحية'}
              {activeTab === 'meta-tags' && '5. العناوين والأوصاف التعريفية المقترحة (Meta Tags)'}
              {activeTab === 'ctas' && '6. نماذج وأمثلة دعوات الشراء باللغة العربية (Call To Actions)'}
            </span>
          </h3>

          <button
            onClick={() => copyTabMarkdown(activeTab)}
            className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs px-4 py-2 rounded-xl transition"
          >
            {copiedTab === activeTab ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">تم النسخ بجهوزية!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>نسخ هذا المخرج (Markdown)</span>
              </>
            )}
          </button>
        </div>

        {/* Deliverables Content Preview */}
        {activeTab === 'sitemap' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              تسلسل هرمي لجميع صفحات الموقع الموصى بها لاستهداف الكلمات المفتاحية في الإمارات ودعم تحويلات التسويق بالعمولة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {WEBSITE_SITEMAP_STRUCTURE.pages.map((p, idx) => (
                <div key={idx} className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-amber-800 font-mono">{p.url}</span>
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                      {p.type}
                    </span>
                  </div>
                  <div className="font-bold text-stone-900">{p.titleAr}</div>
                  <div className="text-[11px] text-stone-500">{p.titleEn}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'homepage-outline' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              هيكل تنفيذي مفصل مكون من 10 أقسام رئيسية للصحفة الرئيسية لتحقيق أعلى نسبة تحويل لمشتريات أمازون الإمارات.
            </p>
            <div className="space-y-3">
              {HOMEPAGE_ARABIC_OUTLINE.sections.map((sec) => (
                <div key={sec.id} className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm font-cairo">{sec.nameAr}</h4>
                  <ul className="list-disc pr-5 space-y-1 text-xs text-stone-700">
                    {sec.elements.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'review-article' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              المقال الشامل الرئيسي (Money Article) المكتوب بلغة عربية سلسة وموجهة لجمهور الإمارات بـ 1500+ كلمة.
            </p>
            <div className="bg-stone-900 text-stone-200 p-5 rounded-2xl max-h-[500px] overflow-y-auto text-xs font-mono whitespace-pre-wrap leading-relaxed border border-stone-800">
              {FULL_ARABIC_REVIEW_ARTICLE}
            </div>
          </div>
        )}

        {activeTab === 'blog-titles' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              10 عناوين مقالات مدونة داعمة ومستهدفة للكلمات المفتاحية طويلة الذيل (Long-tail Keywords) في دبي وأبوظبي.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TEN_BLOG_POSTS.map((p) => (
                <div key={p.id} className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs space-y-2">
                  <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded text-[10px]">
                    مقال #{p.id} - {p.readTime}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm font-cairo">{p.titleAr}</h4>
                  <div className="text-stone-500 italic text-[11px]">{p.titleEn}</div>
                  <div className="text-stone-600 bg-white p-2 rounded border border-stone-100">
                    <strong>الهدف البحثي:</strong> {p.searchIntentAr}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'meta-tags' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              العناوين والوصف التعريفي (Meta Titles & Descriptions) المصممة لجوجل لرفع نسبة النقر (CTR) في الإمارات.
            </p>
            <div className="space-y-3">
              {META_TAGS_DATA.map((m, idx) => (
                <div key={idx} className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-amber-800 text-sm">{m.pageNameAr} ({m.pageNameEn})</div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200 space-y-1">
                    <div className="text-emerald-700 font-bold">Meta Title (Ar): {m.metaTitleAr}</div>
                    <div className="text-stone-600">Meta Desc (Ar): {m.metaDescAr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ctas' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              نماذج دعوات الشراء (CTAs) المحفزة بالنقر والمصممة خصيصاً لسيكولوجية المشترية في الإمارات.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CTA_EXAMPLES.map((c, idx) => (
                <div key={idx} className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-2 text-xs">
                  <span className="bg-amber-200 text-amber-900 font-extrabold px-2.5 py-0.5 rounded uppercase text-[10px]">
                    {c.titleAr}
                  </span>
                  <div className="font-bold text-stone-900 text-sm font-cairo">&quot;{c.textAr}&quot;</div>
                  <div className="text-stone-500 italic text-[11px]">&quot;{c.textEn}&quot;</div>
                  <p className="text-stone-600 bg-white p-2 rounded border border-amber-100">
                    <strong>مكان الاستخدام:</strong> {c.contextAr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
