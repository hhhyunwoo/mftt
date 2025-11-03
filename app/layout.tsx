import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JK Park Mentoring - Mentoring for Twenties and Thirties',
  description: 'Career Development, Start-up, Leadership, and Digital Transformation mentoring services for young professionals in their 20s and 30s.',
  keywords: ['mentoring', 'career development', 'leadership', 'coaching', 'twenties', 'thirties'],
  authors: [{ name: 'JK Park' }],
  openGraph: {
    title: 'JK Park Mentoring - Mentoring for Twenties and Thirties',
    description: 'Career Development, Start-up, Leadership, and Digital Transformation mentoring services',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
