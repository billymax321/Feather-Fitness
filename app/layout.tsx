import type { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';

const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400', variable: '--font-tenor' });

export const metadata: Metadata = {
  title: 'Feather Fitness',
  description: 'High-performance badminton centre with premium courts, coaching, membership, events and booking.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={tenor.variable}>
      <body>{children}</body>
    </html>
  );
}
