import type { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';

const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400', variable: '--font-tenor' });

export const metadata: Metadata = {
  title: 'Feather Fitness',
  description: 'Premium badminton performance centre website.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={tenor.variable}>{children}</body></html>;
}
