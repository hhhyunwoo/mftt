/**
 * ServiceCard Component
 *
 * Displays individual service offerings with illustration, title, price, and description.
 * Features hover effects for interactivity.
 */

interface ServiceCardProps {
  title: string;
  titleKorean?: string;
  subtitle?: string;
  price: string;
  description: string;
  illustration: string;
  color: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  titleKorean,
  subtitle,
  price,
  description,
  illustration,
  color,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Illustration Container */}
      <div
        className="mb-4 flex h-40 items-center justify-center rounded-lg"
        style={{ backgroundColor: color }}
      >
        {/* Placeholder for illustration - you can replace with actual images */}
        <div className="text-6xl">📚</div>
      </div>

      {/* Service Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {title}
        {titleKorean && (
          <span className="block text-base font-normal text-gray-600 mt-1">
            {titleKorean}
          </span>
        )}
      </h3>

      {/* Subtitle (if exists) */}
      {subtitle && (
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      )}

      {/* Price */}
      <p className="mb-4 text-3xl font-bold text-gray-900">{price}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Features (if exists) */}
      {features && features.length > 0 && (
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-xs text-gray-500 flex items-center">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
