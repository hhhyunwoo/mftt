/**
 * ContentGrid Component
 *
 * Unified grid displaying all content (services, articles, books) in a consistent card layout.
 */

import Image from 'next/image';

interface ContentItem {
  id: string;
  type: 'service' | 'article' | 'book';
  title: string;
  titleKorean?: string;
  subtitle?: string;
  description: string;
  url?: string;
  price?: string;
  color: string;
  icon?: string;
  features?: string[];
  coverImage?: string;
}

interface ContentGridProps {
  items: ContentItem[];
}

export default function ContentGrid({ items }: ContentGridProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentCard({ item }: { item: ContentItem }) {
  const CardWrapper = item.url ? 'a' : 'div';
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Icon/Illustration or Book Cover */}
      <div
        className="mb-4 flex h-40 items-center justify-center rounded-lg overflow-hidden"
        style={{ backgroundColor: item.coverImage ? 'transparent' : item.color }}
      >
        {item.coverImage ? (
          <Image
            src={item.coverImage}
            alt={item.title}
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-6xl">{item.icon || '📚'}</div>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
        {item.title}
        {item.titleKorean && (
          <span className="block text-base font-normal text-gray-600 mt-1">
            {item.titleKorean}
          </span>
        )}
      </h3>

      {/* Subtitle */}
      {item.subtitle && (
        <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
      )}

      {/* Price (for services) */}
      {item.price && (
        <p className="mb-3 text-2xl font-bold text-gray-900">{item.price}</p>
      )}

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{item.description}</p>

      {/* Features (for services) */}
      {item.features && item.features.length > 0 && (
        <ul className="space-y-1 mb-3">
          {item.features.map((feature, index) => (
            <li key={index} className="text-xs text-gray-500 flex items-center">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link Indicator (for external links) */}
      {item.url && (
        <div className="flex items-center text-sm text-teal-600 font-semibold">
          {item.type === 'book' ? '자세히 보기' : '방문하기'}
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </CardWrapper>
  );
}
