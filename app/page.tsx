import GradientBackground from '@/components/GradientBackground';
import Hero from '@/components/Hero';
import ContentGrid from '@/components/ContentGrid';
import Footer from '@/components/Footer';

// Import data files
import profileData from '@/data/profile.json';
import servicesData from '@/data/services.json';
import articlesData from '@/data/articles.json';
import booksData from '@/data/books.json';
import mediaData from '@/data/media.json';
import columnsData from '@/data/columns.json';

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
      detailedDescription: service.detailedDescription,
      price: service.price,
      priceOptions: service.priceOptions,
      color: service.color,
      icon: '📚',
      features: service.features,
      coverImage: service.cover,
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
      coverImage: article.cover,
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
    // Media (YouTube)
    ...mediaData.media.map((media: any) => ({
      id: media.id,
      type: 'video' as const,
      title: media.title,
      titleKorean: media.titleKorean,
      description: media.description,
      url: media.url,
      color: media.color,
      icon: media.icon,
      coverImage: media.cover,
    })),
    // Columns
    ...columnsData.columns.map((column: any) => ({
      id: column.id,
      type: 'column' as const,
      title: column.title,
      titleKorean: column.titleKorean,
      description: column.description,
      detailedDescription: column.detailedDescription,
      color: column.color,
      icon: column.icon,
      coverImage: column.cover,
      columnList: column.columnList,
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
