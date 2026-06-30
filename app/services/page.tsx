import Image from 'next/image';
import { PageShell } from '@/components/PageShell';
import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';

const services = [
  ['Court Hire', 'Premium Olympic-spec synthetic courts available for booking. Designed for maximum joint protection and superior grip.', '▦'],
  ['Academy Coaching', 'Structured development pathways led by national-level coaches for all age groups and skill levels.', '◌'],
  ['Private Training', 'One-on-one sessions focused on technical biomechanics, tactical awareness and match strategy.', '⌁'],
  ['Social Sessions', 'Join our thriving community for organized match-play evenings and round-robin tournaments.', '♟'],
  ['Membership', 'Exclusive access to priority booking, discounted rates and member-only lounge amenities.', '◇'],
  ['Pro Shop', 'Expert racket maintenance and premium gear selection from world-leading badminton performance brands.', '□']
];

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <Hero eyebrow="Engineering the future of badminton" title="Services & Amenities">Precision, velocity, and an unyielding commitment to athletic excellence. Experience the evolution of badminton performance in a sanctuary designed for the elite.</Hero>
        <section className="bg-white py-24 md:py-32"><div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, copy, icon]) => <Card key={title} title={title} icon={icon}>{copy}</Card>)}</div></section>
        <section className="bg-mist py-24 md:py-32"><div className="container-page grid items-center gap-14 lg:grid-cols-2"><div><p className="eyebrow mb-6">Engineered Edge</p><h2 className="section-title mb-12">Built For Velocity</h2>{['Competition Courts','Precision Lighting','Recovery Zone'].map((x,i)=><div key={x} className="mb-8 border-b border-brand/20 pb-8"><p className="mb-3 text-xs tracking-nav text-brand">0{i+1}</p><h3 className="mb-3 text-xl uppercase tracking-[0.18em]">{x}</h3><p className="body-copy">Professional-grade facilities calibrated for high-speed play, comfort and repeatable performance.</p></div>)}</div><div className="relative"><Image src="/images/racket-shuttle.jpg" alt="Shuttlecock and racket" width={1000} height={560} className="shadow-soft aspect-[4/3] w-full object-cover" /><div className="absolute -bottom-10 left-10 bg-white p-9 shadow-soft"><p className="eyebrow mb-2">Pro Performance</p><p className="text-2xl uppercase tracking-[0.22em]">Carbon Precision</p></div></div></div></section>
      </main>
    </PageShell>
  );
}
