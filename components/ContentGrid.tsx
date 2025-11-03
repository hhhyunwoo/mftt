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
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ContentCard key={item.id} item={item} onClick={() => handleCardClick(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ContentModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

function ContentCard({ item, onClick }: { item: ContentItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-left w-full cursor-pointer"
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

      {/* Title (English only) */}
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
        {item.title}
      </h3>

      {/* Price (for services) */}
      {item.price && (
        <p className="text-2xl font-bold text-gray-900">{item.price}</p>
      )}

      {/* Click indicator */}
      <div className="mt-4 text-sm text-purple-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
        자세히 보기
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
    </button>
  );
}
