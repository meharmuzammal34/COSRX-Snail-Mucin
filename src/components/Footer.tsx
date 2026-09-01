import React from 'react';
import { Language } from '../types';
import { Droplets, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface FooterProps {
  onNavigate: (path: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (anchorId: string) => {
    onNavigate('/');
    setTimeout(() => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 border-t border-stone-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white font-cairo">COSRX Snail UAE</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              {lang === 'ar'
                ? 'الدليل المعتمد لخلاصة الحلزون المتقدمة 96 كوسركس في دولة الإمارات العربية المتحدة. مراجعة شامله، نصائح حماية البشرة من جفاف التكييف، وعروض الشراء المباشر على أمازون الإمارات.'
                : 'Official product landing guide for COSRX Advanced Snail 96 Essence in the UAE. Tested reviews, AC hydration tips, and verified deals on Amazon.ae.'}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'منتج كوري أصلي 100%' : '100% Authentic K-Beauty'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {lang === 'ar' ? 'أقسام الصفحة' : 'Page Sections'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('hero')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'الصفحة الرئيسية' : 'Top / Hero'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('review')}
                  className="hover:text-amber-400 transition text-amber-300 font-semibold text-start"
                >
                  {lang === 'ar' ? 'المراجعة الشاملة والمواصفات' : 'Full Review & Specs'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('climate')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'حل جفاف التكييف' : 'AC Climate Solution'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('how-to-use')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'طريقة الاستخدام الصحيحة' : 'Step-by-Step Routine'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('ingredients')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'تحليل المكونات' : 'Ingredients Breakdown'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Topical Cluster Pages */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {lang === 'ar' ? 'دليل الموضوعات المتخصصة' : 'Topical Content Cluster'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/cosrx-snail-96-review')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'مراجعة COSRX Snail 96' : 'COSRX Snail 96 Review'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cosrx-snail-96-price-uae')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'سعر COSRX Snail 96 في الإمارات' : 'Price in UAE'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cosrx-snail-96-benefits')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'فوائد خلاصة الحلزون' : 'Benefits for Skin'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cosrx-snail-96-original-vs-fake')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'التمييز بين الأصلي والتقليد' : 'Original vs Fake'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/where-to-buy-cosrx-uae')}
                  className="hover:text-amber-400 transition text-start"
                >
                  {lang === 'ar' ? 'أين تشتري الأصلي بجدة وسعر رخيص؟' : 'Where to Buy Guide'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Transparency Pages */}
          <div className="space-y-3 bg-stone-800/60 p-4 rounded-2xl border border-stone-800 text-xs">
            <h4 className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'الصفحات الموثوقة والسياسات' : 'Trust Pages'}</span>
            </h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-stone-300 pt-1">
              <button
                onClick={() => onNavigate('/about')}
                className="hover:text-amber-300 underline"
              >
                {lang === 'ar' ? 'عن الموقع' : 'About'}
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="hover:text-amber-300 underline"
              >
                {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
              </button>
              <button
                onClick={() => onNavigate('/privacy')}
                className="hover:text-amber-300 underline"
              >
                {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy'}
              </button>
              <button
                onClick={() => onNavigate('/terms')}
                className="hover:text-amber-300 underline"
              >
                {lang === 'ar' ? 'الشروط والأحكام' : 'Terms'}
              </button>
              <button
                onClick={() => onNavigate('/methodology')}
                className="hover:text-amber-300 underline"
              >
                {lang === 'ar' ? 'منهجية التقييم' : 'Methodology'}
              </button>
            </div>

            <div className="pt-2">
              <a
                href={CORE_PRODUCT_DATA.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs transition"
              >
                <span>{lang === 'ar' ? 'صفحة المنتج على أمازون الإمارات' : 'Amazon.ae Product Page'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} COSRX Snail Mucin UAE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition flex items-center gap-1 font-semibold"
              title="Back to top"
            >
              <span>{lang === 'ar' ? 'أعلى الصفحة' : 'Back to Top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
