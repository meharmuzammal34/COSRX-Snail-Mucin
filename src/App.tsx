import React, { useState, useEffect } from 'react';
import { Language, PageView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AmazonStickyBar } from './components/AmazonStickyBar';
import { HomepageView } from './components/HomepageView';
import { ClusterArticleView } from './components/ClusterArticleView';
import { TrustPageView } from './components/TrustPageView';
import { BrandKitModal } from './components/BrandKitModal';
import { CLUSTER_ARTICLES } from './data/clusterArticlesData';
import { TRUST_PAGES } from './data/clusterArticlesData';
import { updateMetaAndSchema } from './utils/seo';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [lang, setLang] = useState<Language>('ar');
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [brandKitOpen, setBrandKitOpen] = useState(false);

  // Handle client-side navigation
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Normalize slug from path
  const normalizedSlug = currentPath.replace(/^\//, '');

  const article = CLUSTER_ARTICLES[normalizedSlug];
  const trustPage = TRUST_PAGES[normalizedSlug];

  // Update HTML lang, dir, and Meta/Schema Tags
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateMetaAndSchema(currentPath, article, trustPage ? normalizedSlug : undefined);
  }, [currentPath, lang, article, trustPage, normalizedSlug]);

  return (
    <div
      className={`min-h-screen bg-stone-50 text-stone-900 font-sans ${
        lang === 'ar' ? 'font-tajawal' : 'font-sans-en'
      }`}
    >
      {/* Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        lang={lang}
        setLang={setLang}
        onNavigate={handleNavigate}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        {article ? (
          <ClusterArticleView
            article={article}
            lang={lang}
            onNavigate={handleNavigate}
          />
        ) : trustPage ? (
          <TrustPageView
            page={trustPage}
            lang={lang}
            onNavigate={handleNavigate}
          />
        ) : (
          <HomepageView
            setActivePage={setActivePage}
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Persistent Amazon.ae Bottom Sticky CTA Bar */}
      <AmazonStickyBar lang={lang} />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenBrandKit={() => setBrandKitOpen(true)}
      />

      {/* Brand Identity & Logo Kit Modal */}
      <BrandKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
        lang={lang}
      />
    </div>
  );
}
