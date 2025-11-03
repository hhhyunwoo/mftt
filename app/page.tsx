import GradientBackground from '@/components/GradientBackground';
import Hero from '@/components/Hero';
import ContentGrid from '@/components/ContentGrid';
import Footer from '@/components/Footer';

// Import data files
import profileData from '@/data/profile.json';
import servicesData from '@/data/services.json';
import articlesData from '@/data/articles.json';
import booksData from '@/data/books.json';

export default function Home() {
  // Combine all content items into a unified array
  const contentItems = [
    // Services
    ...servicesData.services.map((service: any) => ({
      id: service.id,
      type: 'service' as const,
      title: service.title,
      titleKorean: service.titleKorean,
      subtitle: service.subtitle,
      description: service.description,
      price: service.price,
      color: service.color,
      icon: '📚',
      features: service.features,
    })),
    // Articles
    ...articlesData.articles.map((article: any) => ({
      id: article.id,
      type: 'article' as const,
      title: article.title,
      description: article.description,
      url: article.url,
      color: '#E0F2FE',
      icon: article.icon,
    })),
    // Books
    ...booksData.books.map((book: any) => ({
      id: book.id,
      type: 'book' as const,
      title: book.title,
      subtitle: book.subtitle,
      description: book.description,
      url: book.url,
      color: book.color,
      icon: '📖',
      coverImage: book.cover,
    })),
  ];

  return (
    <main className="relative min-h-screen">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Hero Section */}
      <Hero profile={profileData} />

      {/* Unified Content Grid */}
      <ContentGrid items={contentItems} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
