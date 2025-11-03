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
  // Services: h-96, Books: h-[500px], Articles: h-80
  let imageHeight = 'h-80';
  if (isNarrow) {
    imageHeight = 'h-96'; // Services - taller for better visual impact
  } else if (item.type === 'book') {
    imageHeight = 'h-[500px]'; // Books - very tall to show full cover image without cropping
  } else if (item.type === 'article') {
    imageHeight = 'h-80'; // Articles - tall enough to show background image without cropping
  }

  // For services: use background image with overlay text
  if (isService) {
    return (
      <>
        {/* Background Image with Overlay */}
        <div className={`relative ${imageHeight} -m-6 mb-0 overflow-hidden rounded-2xl`}>
          {/* Background Image */}
          {item.coverImage ? (
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: item.color }}
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

          {/* Title and Price at Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-center">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-1">
              {item.title}
            </h3>
            {item.price && (
              <p className="text-sm text-white/90 font-medium">{item.price}</p>
            )}
          </div>
        </div>
      </>
    );
  }

  // For articles/books: use background image with overlay text (similar to services)
  return (
    <>
      {/* Background Image with Overlay */}
      <div className={`relative ${imageHeight} -m-6 mb-0 overflow-hidden rounded-2xl`}>
        {/* Background Image */}
        {item.coverImage ? (
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            className={item.type === 'book' ? 'object-contain' : 'object-cover'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: item.color }}
          >
            <div className="text-6xl">{item.icon || '📚'}</div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Title, Subtitle and Description at Bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-center">
          <h3 className="text-xl font-bold text-white drop-shadow-lg mb-1">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-xs text-white/80 font-medium mb-1">{item.subtitle}</p>
          )}
          <p className="text-xs text-white/70 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </>
  );
}
