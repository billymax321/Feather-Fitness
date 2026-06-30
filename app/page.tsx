import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="py-28 text-center md:py-40">
          <p className="eyebrow mb-8">Fly Light. Smash Hard.</p>
          <h1 className="display-title">Feather Fitness</h1>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-ink/75">A high-performance badminton destination for elite training, refined community and precision court experiences.</p>
          <div className="mt-10 flex justify-center gap-5"><Link className="brand-btn primary" href="/booking">Book a Session</Link><Link className="brand-btn" href="/services">Explore Services</Link></div>
        </section>
        <CTA title="Experience the Standard" />
      </main>
    </PageShell>
  );
}
