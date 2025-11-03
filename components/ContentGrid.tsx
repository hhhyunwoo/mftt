/**
 * ContentGrid Component
 *
 * Unified grid displaying all content (services, articles, books) in a consistent card layout.
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContentModal from './ContentModal';

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
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item: ContentItem) => {
    // Only open modal for services
    if (item.type === 'service') {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  // Separate items by type
  const services = items.filter(item => item.type === 'service');
  const articlesAndBooks = items.filter(item => item.type === 'article' || item.type === 'book');

  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Services Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {services.map((item) => (
              <ContentCard key={item.id} item={item} onClick={() => handleCardClick(item)} isNarrow={true} />
            ))}
          </div>

          {/* Articles and Books Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesAndBooks.map((item) => (
              <ContentCard key={item.id} item={item} onClick={() => handleCardClick(item)} isNarrow={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal (only for services) */}
      <ContentModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

function ContentCard({ item, onClick, isNarrow }: { item: ContentItem; onClick: () => void; isNarrow: boolean }) {
  // For articles and books, use link; for services, use button
  const isService = item.type === 'service';

  if (!isService && item.url) {
    // Article/Book with external link
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl block"
      >
        <CardContent item={item} isService={false} isNarrow={isNarrow} />
      </a>
    );
  }

  // Service with modal
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-left w-full cursor-pointer"
    >
      <CardContent item={item} isService={true} isNarrow={isNarrow} />
    </button>
  );
}

function CardContent({ item, isService, isNarrow }: { item: ContentItem; isService: boolean; isNarrow: boolean }) {
  // Adjust height based on card type
  const imageHeight = isNarrow ? 'h-56' : 'h-48';

  return (
    <>
      {/* Icon/Illustration or Book Cover */}
      <div
        className={`mb-4 flex ${imageHeight} items-center justify-center rounded-lg overflow-hidden`}
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
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
        {item.title}
      </h3>

      {/* For services: show only price */}
      {isService && item.price && (
        <p className="text-2xl font-bold text-gray-900">{item.price}</p>
      )}

      {/* For articles/books: show subtitle and description */}
      {!isService && (
        <>
          {item.subtitle && (
            <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
          )}
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        </>
      )}

      {/* Click indicator */}
      <div className="mt-4 text-sm text-purple-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
        {isService ? '자세히 보기' : (item.type === 'book' ? '자세히 보기' : '방문하기')}
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
    </>
  );
}
