/**
 * Hero Component
 *
 * The main hero section featuring the mentor's profile photo, name, title,
 * and contact information. This is the first section visitors see.
 */

import Image from 'next/image';

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
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-8">
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
    </section>
  );
}
