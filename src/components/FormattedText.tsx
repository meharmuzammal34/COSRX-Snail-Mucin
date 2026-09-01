import React from 'react';

interface FormattedTextProps {
  text: string;
  onNavigate?: (path: string) => void;
  className?: string;
}

/**
 * Parses text containing markdown-style links [Anchor Text](/target-url)
 * and renders accessible HTML <a href="..."> tags with smooth client navigation.
 */
export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  onNavigate,
  className = '',
}) => {
  if (!text) return null;

  // Match markdown links: [label](url)
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchIndex = match.index;

    // Push preceding plain text
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // Determine if it's an internal link
    const isInternal = linkUrl.startsWith('/') || linkUrl.startsWith('#');

    parts.push(
      <a
        key={`${linkUrl}-${matchIndex}`}
        href={linkUrl}
        onClick={(e) => {
          if (isInternal && onNavigate) {
            e.preventDefault();
            onNavigate(linkUrl);
          }
        }}
        target={isInternal ? undefined : '_blank'}
        rel={isInternal ? undefined : 'noopener noreferrer'}
        className="text-amber-800 hover:text-amber-950 font-bold underline decoration-amber-400 hover:decoration-amber-700 underline-offset-4 transition inline"
      >
        {linkText}
      </a>
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  // Push trailing text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <span className={className}>{parts}</span>;
};
