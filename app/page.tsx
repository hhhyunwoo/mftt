import GradientBackground from '@/components/GradientBackground';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Footer from '@/components/Footer';

// Import data files
import profileData from '@/data/profile.json';
import servicesData from '@/data/services.json';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Hero Section */}
      <Hero profile={profileData} />

      {/* Services Grid Section */}
      <ServicesGrid services={servicesData.services} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
