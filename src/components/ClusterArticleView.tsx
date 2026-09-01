import React, { useState } from 'react';
import { Language } from '../types';
import { ClusterArticle, CLUSTER_ARTICLES } from '../data/clusterArticlesData';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';
import { ASSETS } from '../assets/images';
import {
  ShoppingBag,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Share2,
  Copy,
  Check,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Star,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ClusterArticleViewProps {
  article: ClusterArticle;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const ClusterArticleView: React.FC<ClusterArticleViewProps> = ({
  article,
  lang,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="space-y-10 pb-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-amber-700 transition"
        >
          {lang === 'ar' ? 'الرئيسية' : 'Home'}
        </button>
        {lang === 'ar' ? (
          <ChevronLeft className="w-3.5 h-3.5 text-stone-400" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        )}
        <button
          onClick={() => onNavigate('/cosrx-snail-96-review')}
          className="hover:text-amber-700 transition"
        >
          {lang === 'ar' ? 'دليل COSRX Snail' : 'COSRX Snail Guide'}
        </button>
        {lang === 'ar' ? (
          <ChevronLeft className="w-3.5 h-3.5 text-stone-400" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        )}
        <span className="text-amber-800 font-bold truncate max-w-[200px] sm:max-w-xs">
          {lang === 'ar' ? article.h1Ar : article.h1En}
        </span>
      </nav>

      {/* Hero / Header Box */}
      <header className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-amber-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-bold border border-amber-500/30 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{article.primaryKeyword}</span>
            </span>
            <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{article.readTime}</span>
            </span>
            <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>آخر تحديث: {article.lastUpdated}</span>
            </span>
          </div>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 text-xs font-semibold bg-stone-800 hover:bg-stone-700 px-3 py-1.5 rounded-lg text-stone-300 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">{lang === 'ar' ? 'تم نسخ الرابط' : 'Link Copied'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'مشاركة المقال' : 'Share Article'}</span>
              </>
            )}
          </button>
        </div>

        {/* Single H1 per Page Requirement */}
        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo leading-tight text-amber-50">
          {lang === 'ar' ? article.h1Ar : article.h1En}
        </h1>

        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          {article.summaryAr}
        </p>

        {/* Action Header Button */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={CORE_PRODUCT_DATA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>
              {lang === 'ar'
                ? 'تحقق من السعر الحالي على Amazon.ae (35 درهم)'
                : 'Check Current Price on Amazon.ae (AED 35)'}
            </span>
          </a>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Article Body */}
        <div className="lg:col-span-8 space-y-8">
          {/* Article Summary Card */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-2 text-stone-900 text-xs sm:text-sm leading-relaxed">
            <span className="font-extrabold text-amber-900 font-cairo block text-base">
              💡 النقاط الرئيسية في هذا الدليل:
            </span>
            <p>{article.summaryAr}</p>
          </div>

          {/* Render Sections */}
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4 beauty-card rounded-2xl p-6 border border-stone-200/80">
              {sec.headingAr && sec.level === 'h3' ? (
                <h3 className="text-lg font-bold font-cairo text-amber-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  <span>{sec.headingAr}</span>
                </h3>
              ) : sec.headingAr ? (
                <h2 className="text-xl sm:text-2xl font-extrabold font-cairo text-stone-900 border-b border-stone-200/80 pb-2 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block" />
                  <span>{sec.headingAr}</span>
                </h2>
              ) : null}

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {sec.contentAr}
              </p>

              {sec.listAr && (
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                  {sec.listAr.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.tableAr && (
                <div className="overflow-x-auto rounded-xl border border-stone-200 my-4">
                  <table className="w-full text-start text-xs">
                    <thead className="bg-stone-900 text-white font-cairo">
                      <tr>
                        {sec.tableAr.headers.map((th, hIdx) => (
                          <th key={hIdx} className="p-3 text-start font-bold">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 bg-white">
                      {sec.tableAr.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-stone-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-stone-800 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Pros and Cons Box if available */}
          {(article.prosAr || article.consAr) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {article.prosAr && (
                <div className="bg-emerald-50/80 border border-emerald-200 p-5 rounded-2xl space-y-3">
                  <h3 className="font-extrabold text-emerald-950 text-sm font-cairo flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>المميزات الرئيسية:</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-emerald-900">
                    {article.prosAr.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {article.consAr && (
                <div className="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl space-y-3">
                  <h3 className="font-extrabold text-amber-950 text-sm font-cairo flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span>اعتبارات هامة (العيوب):</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-amber-900">
                    {article.consAr.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Internal Cross Linking Cluster Box */}
          <section className="bg-stone-900 text-white rounded-2xl p-6 border border-stone-800 space-y-4">
            <h3 className="text-base font-extrabold font-cairo text-amber-400 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>مقالات ذات صلة في الدليل الشامل:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.relatedSlugs.map((relSlug) => {
                const relArticle = CLUSTER_ARTICLES[relSlug];
                if (!relArticle) return null;
                return (
                  <button
                    key={relSlug}
                    onClick={() => onNavigate(relArticle.url)}
                    className="p-3 bg-stone-800/90 hover:bg-stone-800 rounded-xl border border-stone-700/80 text-start transition group flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-300 font-cairo line-clamp-1">
                      {relArticle.h1Ar}
                    </span>
                    {lang === 'ar' ? (
                      <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition flex-shrink-0" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Article FAQs Section */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="beauty-card rounded-2xl p-6 border border-stone-200 space-y-4">
              <h3 className="text-lg font-extrabold font-cairo text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>أسئلة شائعة حول هذا الموضوع:</span>
              </h3>

              <div className="space-y-3">
                {article.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-stone-200 rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-start p-3.5 font-bold text-xs sm:text-sm text-stone-900 flex items-center justify-between hover:bg-stone-50 font-cairo"
                      >
                        <span>{faq.qAr}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-amber-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-stone-600 text-xs leading-relaxed border-t border-stone-100 bg-amber-50/30">
                          {faq.aAr}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Mandatory Affiliate Disclosure */}
          <div className="bg-stone-100 p-4 rounded-xl text-[11px] text-stone-600 border border-stone-200 leading-relaxed">
            <strong>إفصاح روابط التسويق بالعمولة (Affiliate Disclosure):</strong>{' '}
            قد نحصل على عمولة عند إتمام عملية شراء من خلال بعض الروابط الموجودة في الموقع، دون أي تكلفة إضافية عليك. نحن ننشر تقييمات محايدة ونساعدك على توفير المال واختيار المنتجات الأصلية على Amazon.ae.
          </div>
        </div>

        {/* Sticky Sidebar (Product Card & Quick Links) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-20 space-y-6">
            {/* Amazon CTA Product Card */}
            <div className="beauty-card rounded-3xl p-5 border border-amber-400/40 shadow-xl space-y-4 bg-stone-900 text-white">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-800">
                <img
                  src={ASSETS.cosrxProduct}
                  alt={article.h1Ar}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 right-2 bg-emerald-500 text-stone-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                  متوفر على Amazon.ae
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] text-amber-400 font-bold block">
                  COSRX Advanced Snail 96 (100ml)
                </span>
                <h4 className="font-extrabold text-sm text-white font-cairo">
                  {CORE_PRODUCT_DATA.nameAr}
                </h4>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.8 / 5.0 (14,000+ تقييم)</span>
                  </div>
                  <span className="text-amber-300 font-extrabold text-sm">35.00 درهم</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ضمان العلبة الأصلية 100%</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <ShoppingBag className="w-4 h-4" />
                  <span>توصيل مجاني وسريع لأعضاء Prime</span>
                </div>
              </div>

              <a
                href={CORE_PRODUCT_DATA.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>عرض السعر والتوفر على Amazon.ae</span>
              </a>
            </div>

            {/* Quick Navigation Panel */}
            <div className="beauty-card rounded-2xl p-5 border border-stone-200/80 space-y-3 bg-white">
              <h4 className="font-extrabold text-stone-900 text-xs font-cairo uppercase tracking-wider">
                أهم مقالات الدليل
              </h4>
              <div className="space-y-1.5 text-xs">
                {Object.values(CLUSTER_ARTICLES)
                  .slice(0, 6)
                  .map((art) => (
                    <button
                      key={art.slug}
                      onClick={() => onNavigate(art.url)}
                      className={`w-full text-start p-2 rounded-lg transition font-medium line-clamp-1 ${
                        art.slug === article.slug
                          ? 'bg-amber-100 text-amber-900 font-bold'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {art.h1Ar}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};
