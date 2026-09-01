import React, { useState } from 'react';
import { Language, BlogPost } from '../types';
import { TEN_BLOG_POSTS, CORE_PRODUCT_DATA } from '../data/cosrxData';
import { Clock, BookOpen, X, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogViewProps {
  lang: Language;
}

export const BlogView: React.FC<BlogViewProps> = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="space-y-10 pb-16">
      <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? '10 مقالات مدونة متخصصة' : '10 Micro-Niche Supporting Blog Articles'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo text-white leading-tight">
          {lang === 'ar'
            ? 'مدونة خلاصة الحلزون والعناية الكورية بالبشرة في الإمارات'
            : 'COSRX Snail Mucin & UAE K-Beauty Skincare Blog'}
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'مجموعة المقالات الداعمة المغطية لجميع جوانب العناية بالجفاف، التمييز بين الأصلي والمقلد، الروتين الصيفي، والنتائج الواقعية في دبي وأبوظبي.'
            : '10 SEO-optimized blog posts designed to capture long-tail search intent across the UAE.'}
        </p>
      </section>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEN_BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="beauty-card rounded-3xl p-6 border border-stone-200 hover:border-amber-400 cursor-pointer transition space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded">
                  {post.readTime}
                </span>
                <span className="text-stone-400 font-medium text-[11px]">#{post.id}</span>
              </div>

              <h3 className="font-extrabold text-stone-900 text-base font-cairo leading-snug">
                {lang === 'ar' ? post.titleAr : post.titleEn}
              </h3>

              <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                {lang === 'ar' ? post.summaryAr : post.summaryEn}
              </p>

              <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 text-[11px] text-amber-900">
                <strong>الكلمة المفتاحية:</strong> {lang === 'ar' ? post.keywordAr : post.keywordEn}
              </div>
            </div>

            <button className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1 hover:underline">
              <span>{lang === 'ar' ? 'اقرئي ملخص وتفاصيل المقال' : 'Read Outline & Summary'}</span>
              {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="beauty-card rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-5 bg-white text-stone-900 relative border border-stone-200 shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                مقال رقم #{selectedPost.id}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-cairo text-stone-900 pt-2">
                {lang === 'ar' ? selectedPost.titleAr : selectedPost.titleEn}
              </h2>
            </div>

            <div className="space-y-3 border-t border-stone-200 pt-3 text-xs sm:text-sm">
              <p className="text-stone-700 leading-relaxed font-medium">
                {lang === 'ar' ? selectedPost.summaryAr : selectedPost.summaryEn}
              </p>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 font-cairo text-sm">
                  عناصر المقال والرؤوس الرئيسية (Outline):
                </h4>
                <ul className="space-y-1.5 text-stone-700 text-xs">
                  {selectedPost.outlineAr.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={CORE_PRODUCT_DATA.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs px-5 py-3 rounded-xl shadow transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{lang === 'ar' ? 'شراء سيروم الحلزون بـ 35 درهم على أمازون' : 'Buy Now on Amazon.ae'}</span>
              </a>

              <button
                onClick={() => setSelectedPost(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
