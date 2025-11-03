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
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:jk.park@kempkorea.net"
              className="flex items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <p className="text-gray-900 font-semibold group-hover:text-purple-600 transition-colors">
                  jk.park@kempkorea.net
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/중근-박-83193311b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                  JK Park Profile
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Brunch */}
            <a
              href="https://brunch.co.kr/@d423da6a54ec488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                <span className="text-2xl">📝</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Brunch</p>
                <p className="text-gray-900 font-semibold group-hover:text-amber-600 transition-colors">
                  박중근 KEMP KOREA의 브런치스토리
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
