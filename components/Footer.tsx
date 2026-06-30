import Link from 'next/link';
import { footerLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-brand/20 bg-paper py-20">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="mb-6 text-2xl uppercase tracking-editorial text-brand">Feather Fitness</h2>
            <p className="body-copy max-w-sm">The definitive hub for high-performance badminton. Engineered for athletes who demand technical excellence and a premium environment.</p>
          </div>
          <div>
            <h3 className="eyebrow mb-6">The Hubs</h3>
            <ul className="space-y-4 text-sm text-ink/70">{footerLinks.hubs.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3 className="eyebrow mb-6">Academy</h3>
            <ul className="space-y-4 text-sm text-ink/70">{footerLinks.academy.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-6 border-t border-brand/15 pt-10 text-[0.62rem] uppercase tracking-[0.24em] text-ink/45 md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-8"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Careers</Link><Link href="#">Contact</Link></div>
          <p className="text-brand">Velocity in Stillness.</p>
          <p>© 2024 Feather Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
