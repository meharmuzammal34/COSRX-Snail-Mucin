import React from 'react';
import { Language } from '../types';

interface BrandIconProps {
  className?: string;
  size?: number;
}

/**
 * Original vector icon uniting:
 * 1. Skincare hydration droplet contour
 * 2. Subtle organic snail mucin Fibonacci spiral curve
 * 3. Luminous dewy core & specular light curve
 */
export const BrandIcon: React.FC<BrandIconProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* Warm luxury charcoal background */}
        <linearGradient id="brandIconBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2420" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>

        {/* Golden Amber Gradient */}
        <linearGradient id="brandIconGold" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Dew Highlight */}
        <linearGradient id="brandIconGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer Squircle Container */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="16"
        fill="url(#brandIconBgGrad)"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      {/* Main Hydration Droplet Silhouette */}
      <path
        d="M32 10 C32 10, 47 25, 47 37 C47 45.28 40.28 52 32 52 C23.72 52 17 45.28 17 37 C17 25, 32 10, 32 10 Z"
        fill="url(#brandIconGold)"
      />

      {/* Snail Mucin Spiral / Shell curve */}
      <path
        d="M32 20 C26 27, 21.5 32, 21.5 37 C21.5 42.79 26.21 47.5 32 47.5 C37.79 47.5 42.5 42.79 42.5 37 C42.5 31.8 38.6 28 34.5 28 C30.8 28 28 30.8 28 34.5 C28 37.3 30.2 39.5 33 39.5 C34.5 39.5 35.8 38.5 35.8 37 C35.8 35.5 34.5 34.5 33 34.5"
        stroke="#181513"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Glowing Core Dew Droplet */}
      <circle cx="33" cy="37" r="2.2" fill="url(#brandIconGlow)" />

      {/* Pure Ivory Light Reflection on Top Curve */}
      <path
        d="M32 14 C35 18, 43 28, 42 36"
        stroke="#FFFBEB"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.8"
        fill="none"
      />
    </svg>
  );
};

interface BrandLogoProps {
  lang?: Language;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

/**
 * Full horizontal website logo for Desktop/Mobile headers & footers
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  lang = 'ar',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Icon */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <BrandIcon className={iconSizes[size]} />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-2">
          {/* Main Title: "دليل COSRX" */}
          <span
            className={`font-extrabold font-cairo tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-stone-900' : 'text-stone-100'
            }`}
          >
            {lang === 'ar' ? (
              <>
                دليل{' '}
                <span className="font-sans font-bold tracking-normal text-amber-500">
                  COSRX
                </span>
              </>
            ) : (
              <>
                <span className="font-sans font-bold tracking-normal text-amber-500">
                  COSRX
                </span>{' '}
                Guide
              </>
            )}
          </span>

          {/* UAE Regional / Authority Badge */}
          <span className="bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded font-cairo whitespace-nowrap">
            {lang === 'ar' ? 'الإمارات' : 'UAE'}
          </span>
        </div>

        {/* Subtitle: "دليل العناية بالبشرة" */}
        {showSubtitle && (
          <p
            className={`text-[11px] font-medium font-cairo mt-0.5 ${
              isLight ? 'text-stone-500' : 'text-stone-400'
            }`}
          >
            {lang === 'ar'
              ? 'دليل العناية بالبشرة والجمال الكوري'
              : 'Korean Skincare & Snail Mucin Guide'}
          </p>
        )}
      </div>
    </div>
  );
};
