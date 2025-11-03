/**
 * ArticlesSection Component
 *
 * Displays blog posts and articles with links to external platforms.
 */

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: string;
  icon: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          글
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{article.icon}</div>

              {/* Platform Badge */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                  {article.platform}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{article.description}</p>

              {/* Link Indicator */}
              <div className="mt-4 flex items-center text-sm text-teal-600 font-semibold">
                방문하기
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
