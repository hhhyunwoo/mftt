/**
 * ServicesGrid Component
 *
 * Displays a responsive grid of service cards.
 * Layout adapts from single column on mobile to 3 columns on desktop.
 */

import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  titleKorean?: string;
  subtitle?: string;
  price: string;
  currency: string;
  description: string;
  illustration: string;
  color: string;
  features?: string[];
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              titleKorean={service.titleKorean}
              subtitle={service.subtitle}
              price={service.price}
              description={service.description}
              illustration={service.illustration}
              color={service.color}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
