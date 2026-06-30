import Image from 'next/image';
import Link from 'next/link';

export function CTA({ title = 'The Elite Standard Awaits Your Arrival' }: { title?: string }) {
  return (
    <section className="cta-bg py-24 text-center text-white md:py-32">
      <Image src="/images/logo.png" alt="Feather Fitness" width={70} height={80} className="mx-auto mb-5 h-20 w-auto brightness-0 invert" />
      <h2 className="mx-auto max-w-4xl text-4xl uppercase leading-tight tracking-[0.22em] md:text-6xl">{title}</h2>
      <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-white/70">Your journey to precision starts with a single step.</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link className="brand-btn bg-white text-deep" href="/booking">Book a Session</Link>
        <Link className="brand-btn border-white/50 text-white" href="/membership">View Memberships</Link>
      </div>
    </section>
  );
}
