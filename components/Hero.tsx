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

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8">
      {/* Contact Me Button - Top Left */}
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="absolute top-4 left-4 z-40 px-4 py-2 border-2 border-gray-700 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
      >
        Contact Me
      </button>
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
      <p className="text-base text-gray-600 text-center">
        {profile.subtitle} • {profile.email}
      </p>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}
