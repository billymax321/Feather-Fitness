'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Menu, UserRound } from 'lucide-react';
import { navItems } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-brand/25 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Feather Fitness home">
          <Image src="/images/logo.png" alt="Feather Fitness logo" width={34} height={40} className="h-10 w-auto object-contain" priority />
          <span className="hidden text-[1.05rem] uppercase tracking-[0.28em] text-brand sm:inline">Feather Fitness</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`border-b pb-1 text-[0.68rem] uppercase tracking-nav transition ${active ? 'border-brand text-ink' : 'border-transparent text-ink/70 hover:border-brand/50 hover:text-ink'}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Bell size={17} className="hidden text-brand md:block" />
          <UserRound size={17} className="hidden text-brand md:block" />
          <Link href="/membership" className="brand-btn primary hidden min-h-[38px] px-6 md:inline-flex">Join Now</Link>
          <button className="lg:hidden" aria-label="Open menu"><Menu className="text-brand" /></button>
        </div>
      </div>
    </header>
  );
}
