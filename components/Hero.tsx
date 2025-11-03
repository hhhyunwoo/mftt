/**
 * Hero Component
 *
 * The main hero section featuring the mentor's profile photo, name, title,
 * and contact information. This is the first section visitors see.
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';
import AboutModal from './AboutModal';

interface HeroProps {
  profile: {
    name: string;
    nameKorean: string;
    title: string;
    tagline: string;
    subtitle: string;
    email: string;
    profileImage: string;
  };
}

export default function Hero({ profile }: HeroProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8">
      {/* Navigation Buttons - Top Right */}
      <div className="absolute top-4 right-4 z-40 flex items-center gap-4">
        <button
          onClick={() => setIsAboutModalOpen(true)}
          className="px-3 py-2 text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="px-3 py-2 text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors"
        >
          Contact Me
        </button>
      </div>
      {/* Profile Photo */}
      <div className="mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg">
          <Image
            src={profile.profileImage}
            alt={profile.name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
        {profile.name}{' '}
        <span className="text-3xl text-gray-700">({profile.nameKorean})</span>
      </h1>

      {/* Title/Specialization */}
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-2">
        {profile.title}
      </p>

      {/* Tagline */}
      <p className="text-base md:text-lg font-semibold text-gray-800 mb-4">
        {profile.tagline}
      </p>

      {/* Subtitle and Contact */}
      <div className="text-base text-gray-600 text-center">
        {profile.subtitle} •{' '}
        <span className="inline-flex items-center gap-2">
          <span className="text-gray-600">{profile.email}</span>
          <button
            onClick={handleEmailClick}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Copy email"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </span>
      </div>

      {/* Toast notification */}
      {emailCopied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Email copied to clipboard!</span>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </section>
  );
}
