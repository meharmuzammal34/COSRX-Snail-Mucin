import React, { useState } from 'react';
import { Language } from '../types';
import { BrandIcon, BrandLogo } from './BrandLogo';
import { X, Download, Copy, Check, Sparkles, Layers, Palette, Type } from 'lucide-react';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const colors = [
    { name: 'Warm Amber (Primary Accent)', hex: '#D97706', rgb: '217, 119, 6', bg: 'bg-amber-600', text: 'text-white' },
    { name: 'Golden Honey (Highlight)', hex: '#F59E0B', rgb: '245, 158, 11', bg: 'bg-amber-500', text: 'text-stone-900' },
    { name: 'Ivory / Dew Light', hex: '#FFFBEB', rgb: '255, 251, 235', bg: 'bg-amber-50', text: 'text-stone-900 border border-stone-300' },
    { name: 'Warm Charcoal / Espresso', hex: '#1C1917', rgb: '28, 25, 23', bg: 'bg-stone-900', text: 'text-white' },
    { name: 'Muted Taupe / Neutral', hex: '#78716C', rgb: '120, 113, 108', bg: 'bg-stone-500', text: 'text-white' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-stone-900 border border-amber-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-stone-100 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-cairo text-white">
                {lang === 'ar' ? 'هوية الشعار والأيقونة (Brand Identity & Kit)' : 'Brand Logo & Favicon Kit'}
              </h2>
              <p className="text-xs text-stone-400 font-cairo">
                {lang === 'ar'
                  ? 'الهوية البصرية الأصلية المخصصة لموقع دليل COSRX في الإمارات'
                  : 'Official visual identity & vector assets for COSRX UAE Guide'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Full Horizontal Website Logo */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-cairo">
              <Layers className="w-4 h-4" />
              <span>{lang === 'ar' ? '1. الشعار الأفقي الكامل (Horizontal Logo)' : '1. Full Horizontal Website Logo'}</span>
            </h3>
            <a
              href="/logo.svg"
              download="cosrx-guide-logo.svg"
              className="inline-flex items-center gap-1 text-xs bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-lg transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SVG</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Dark Mode Background */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4">
              <span className="text-[10px] text-stone-500 font-mono">Dark Header Mode</span>
              <div className="py-2 flex items-center justify-center">
                <BrandLogo lang="ar" variant="dark" size="lg" />
              </div>
              <span className="text-[10px] text-stone-400 text-center font-cairo">
                العنوان الأساسي: «دليل COSRX» + «دليل العناية بالبشرة»
              </span>
            </div>

            {/* Light Mode Background */}
            <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-900 flex flex-col justify-between space-y-4">
              <span className="text-[10px] text-stone-500 font-mono">Light Canvas Mode</span>
              <div className="py-2 flex items-center justify-center">
                <BrandLogo lang="ar" variant="light" size="lg" />
              </div>
              <span className="text-[10px] text-stone-500 text-center font-cairo">
                خلفية عاجية / بيضاء ناصعة
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Favicon & Standalone Vector Symbol */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-cairo">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? '2. أيقونة المفضلة والرمز المربع (Favicon & Symbol)' : '2. Favicon & Standalone Symbol'}</span>
            </h3>
            <a
              href="/favicon.svg"
              download="favicon.svg"
              className="inline-flex items-center gap-1 text-xs bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-lg transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>favicon.svg</span>
            </a>
          </div>

          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-4">
            <div className="flex flex-wrap items-center justify-around gap-6 py-2">
              {/* 16px Browser Tab Simulation */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-7 h-7 bg-stone-900 rounded border border-stone-700 flex items-center justify-center">
                  <BrandIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-stone-400 font-mono">16×16 px (Tab)</span>
              </div>

              {/* 32px Standard Favicon */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-stone-900 rounded-lg border border-stone-700 flex items-center justify-center">
                  <BrandIcon className="w-8 h-8" />
                </div>
                <span className="text-[10px] text-stone-400 font-mono">32×32 px</span>
              </div>

              {/* 64px App / PWA Icon */}
              <div className="flex flex-col items-center gap-2">
                <BrandIcon className="w-14 h-14" />
                <span className="text-[10px] text-stone-400 font-mono">64×64 px</span>
              </div>

              {/* 128px Display Vector */}
              <div className="flex flex-col items-center gap-2">
                <BrandIcon className="w-20 h-20" />
                <span className="text-[10px] text-stone-400 font-mono">128×128 px (High-Res)</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 text-center font-cairo leading-relaxed">
              💡 الرمز يجمع بشكل عضوي مبتكر بين: <strong>قطرة الترطيب المائي</strong> + <strong>منحنى حلزون إفرازات Mucin العضوي (Fibonacci Spiral)</strong> + <strong>نواة التوهج اللؤلؤي</strong>.
            </p>
          </div>
        </div>

        {/* Section 3: Palette & Color Codes */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-cairo">
            <Palette className="w-4 h-4" />
            <span>{lang === 'ar' ? '3. لوحة الألوان المعتمدة (Color Palette)' : '3. Brand Color Palette'}</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {colors.map((c, idx) => (
              <div
                key={idx}
                onClick={() => handleCopy(c.hex, `color-${idx}`)}
                className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 transition cursor-pointer flex items-center gap-2.5 group"
              >
                <div className={`w-8 h-8 rounded-lg ${c.bg} flex-shrink-0 flex items-center justify-center`}>
                  {copiedCode === `color-${idx}` ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono font-bold text-white group-hover:text-amber-400 transition">
                    {c.hex}
                  </p>
                  <p className="text-[10px] text-stone-400 truncate">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Typography Guide */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-cairo">
            <Type className="w-4 h-4" />
            <span>{lang === 'ar' ? '4. الخطوط وتوافق الطباعة (Typography)' : '4. Typography & Pairing'}</span>
          </h3>

          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-cairo">
            <div>
              <span className="text-stone-400 block text-[10px] font-mono mb-1">الخط العربي الأساسي:</span>
              <p className="font-bold text-stone-200 text-sm">Cairo & Tajawal</p>
              <p className="text-stone-400 text-[11px]">خطوط هندسية عربية عصرية وواضحة جداً على الشاشات ومحركات البحث.</p>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] font-mono mb-1">الخط اللاتيني للعلامة:</span>
              <p className="font-bold text-amber-400 text-sm font-sans">Plus Jakarta Sans / COSRX</p>
              <p className="text-stone-400 text-[11px]">حروف عريضة وفاخرة تتكامل بانسيابية تامة مع النص العربي.</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
          <p className="text-[11px] text-stone-500 font-cairo">
            تصميم مخصص 100% بدون أي انتهاك لحقوق أو علامات COSRX التجارية الرسمية.
          </p>
          <button
            onClick={onClose}
            className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs px-4 py-2 rounded-xl transition"
          >
            {lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
