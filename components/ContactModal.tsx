/**
 * ContactModal Component
 *
 * Modal popup for displaying contact information.
 */

'use client';

import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Me
            </h2>
            <p className="text-gray-600">
              연락이 필요하시면 아래 채널을 통해 편하게 연락주세요
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:jk.park@kempkorea.net"
              className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="text-gray-900 font-medium">
                jk.park@kempkorea.net
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/중근-박-83193311b/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
              <p className="text-gray-900 font-medium">
                JK Park Profile
              </p>
            </a>

            {/* Brunch */}
            <a
              href="https://brunch.co.kr/@d423da6a54ec488"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group"
            >
              <p className="text-xs text-gray-500 mb-1">Brunch</p>
              <p className="text-gray-900 font-medium">
                박중근 KEMP KOREA의 브런치스토리
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
