import React from 'react';
import { Language, PageView } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  ShoppingBag,
  Globe,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { CORE_PRODUCT_DATA } from '../data/cosrxData';

interface HeaderProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  lang,
  setLang,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: PageView; labelAr: string; labelEn: string; anchorId: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home', anchorId: 'hero' },
    { id: 'review', labelAr: 'المراجعة الشاملة', labelEn: 'Full Review', anchorId: 'review' },
    { id: 'uae-climate', labelAr: 'حل جفاف التكييف', labelEn: 'AC Climate Solution', anchorId: 'climate' },
    { id: 'how-to-use', labelAr: 'طريقة الاستخدام', labelEn: 'How to Use', anchorId: 'how-to-use' },
    { id: 'ingredients', labelAr: 'المكونات', labelEn: 'Ingredients', anchorId: 'ingredients' },
    { id: 'quiz', labelAr: 'اختبار البشرة', labelEn: 'Skin Quiz', anchorId: 'quiz' },
    { id: 'comparisons', labelAr: 'المقارنات', labelEn: 'Comparisons', anchorId: 'comparisons' },
    { id: 'where-to-buy', labelAr: 'أين تشتري؟', labelEn: 'Where to Buy', anchorId: 'where-to-buy' },
  ];

  const handleNavClick = (item: { id: PageView; anchorId: string }) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('/');
    }
    setActivePage('home');
    setTimeout(() => {
      const element = document.getElementById(item.anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-amber-500/20 shadow-lg">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-amber-50 text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2 font-medium">
        <span>
          {lang === 'ar'
            ? 'خلاصة الحلزون كوسركس الأصلية (100ml) على أمازون الإمارات – 35 درهم وتوصيل برايم مجاني'
            : 'Authentic COSRX Snail Mucin (100ml) on Amazon.ae – AED 35.00 with Free Prime Delivery'}
        </span>
        <a
          href={CORE_PRODUCT_DATA.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full hover:bg-white transition flex items-center gap-1"
        >
          {lang === 'ar' ? 'عرض أمازون' : 'Amazon Deal'}
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => handleNavClick({ id: 'home', anchorId: 'hero' })}
            className="cursor-pointer group py-1"
          >
            <BrandLogo lang={lang} variant="dark" size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-stone-300 hover:text-white hover:bg-stone-800"
              >
                <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
              </button>
            ))}
          </nav>

          {/* Right Actions: Lang Switcher + Buy Button */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
              title="Toggle Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Quick Amazon Buy Button Header */}
            <a
              href={CORE_PRODUCT_DATA.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs px-3.5 py-2 rounded-xl shadow-md hover:shadow-amber-500/20 transition"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{lang === 'ar' ? 'أمازون الإمارات' : 'Amazon.ae'}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="w-full text-start px-3 py-2.5 rounded-lg text-sm font-medium transition text-stone-300 hover:bg-stone-800"
            >
              <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-stone-800">
            <a
              href={CORE_PRODUCT_DATA.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-stone-950 font-bold py-2.5 rounded-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>
                {lang === 'ar' ? 'اشتري الآن من أمازون الإمارات' : 'Buy Now on Amazon.ae'}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
