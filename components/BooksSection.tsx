/**
 * BooksSection Component
 *
 * Displays published books with links to purchase or learn more.
 */

interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  cover: string;
  color: string;
}

interface BooksSectionProps {
  books: Book[];
}

export default function BooksSection({ books }: BooksSectionProps) {
  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          저서
        </h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <a
              key={book.id}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Book Cover Placeholder */}
                <div
                  className="flex-shrink-0 w-32 h-44 rounded-lg flex items-center justify-center text-6xl"
                  style={{ backgroundColor: book.color }}
                >
                  📚
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {book.title}
                  </h3>

                  {/* Subtitle */}
                  {book.subtitle && (
                    <p className="mb-3 text-sm text-gray-600 font-medium">
                      {book.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-600">{book.description}</p>

                  {/* Link Indicator */}
                  <div className="flex items-center text-sm text-teal-600 font-semibold">
                    자세히 보기
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
