/**
 * Footer Component
 *
 * Simple footer with branding and copyright information.
 */

export default function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} JK Park Mentoring. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
