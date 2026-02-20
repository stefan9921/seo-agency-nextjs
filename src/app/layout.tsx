import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SEO Agency Dublin - SEO Services in Dublin',
  description: 'Boost your business with the best SEO agency Dublin offers! Expert SEO services in Dublin to drive traffic, improve rankings, and generate revenue.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
