/**
 * ContentModal Component
 *
 * Modal popup for displaying detailed content information.
 */

'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface PriceOption {
  duration: string;
  priceUSD?: string;
  priceKRW?: string;
  note?: string;
}

interface ContentItem {
  id: string;
  type: 'service' | 'article' | 'book' | 'video' | 'column';
  title: string;
  titleKorean?: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  url?: string;
  price?: string;
  priceOptions?: PriceOption[];
  color: string;
  icon?: string;
  features?: string[];
  coverImage?: string;
  columnList?: Array<{
    title: string;
    publisher: string;
    date: string;
    url: string;
  }>;
}

interface ContentModalProps {
  item: ContentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContentModal({ item, isOpen, onClose }: ContentModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header with Title and Close Button */}
        <div className="relative border-b border-gray-200 px-8 py-6 rounded-t-3xl bg-white">
          <h2 className="text-2xl font-bold text-gray-900 text-center pr-10">
            {item.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-8 overflow-y-auto flex-1">

          {/* Pricing Options */}
          {item.priceOptions && item.priceOptions.length > 0 && (
            <div className="mb-6 bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">가격 안내</h3>
              <div className="space-y-2">
                {item.priceOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{option.duration}</span>
                      <div className="text-right">
                        {option.priceUSD && (
                          <div className="text-base font-bold text-gray-900">{option.priceUSD}</div>
                        )}
                        {option.priceKRW && (
                          <div className="text-xs text-gray-500">{option.priceKRW}</div>
                        )}
                      </div>
                    </div>
                    {option.note && (
                      <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                        {option.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.description
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
                  .replace(/\n/g, '<br />')
              }}
            />
          </div>

          {/* Features */}
          {item.features && item.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">주요 특징</h3>
              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column List (for column type) */}
          {item.type === 'column' && item.columnList && item.columnList.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">기고문 목록</h3>
              <div className="space-y-3">
                {item.columnList.map((column, index) => (
                  <a
                    key={index}
                    href={column.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 flex-1">{column.title}</h4>
                      <svg className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{column.publisher}</span>
                      <span className="mx-2">•</span>
                      <span>{column.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Fixed bottom buttons */}
        {item.type === 'service' && (
          <div className="p-6 border-t border-gray-200 bg-white rounded-b-3xl">
            {/* Booking button for services */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-center"
              onClick={(e) => {
                // Prevent navigation until Google Form is ready
                if (!item.url) {
                  e.preventDefault();
                  alert('예약 시스템 준비 중입니다. 잠시만 기다려주세요.');
                }
              }}
            >
              예약하기
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
