import Image from 'next/image';
import Link from 'next/link';
import { Bell, User, Calendar, Dumbbell, Users, ShoppingBag, Tag, Eye, Zap, ShieldCheck, Briefcase, Heart } from 'lucide-react';

export const navItems = [
  ['Services & Amenities', '/services'], ['Booking', '/booking'], ['Membership', '/membership'], ['Events', '/events'], ['About', '/about']
] as const;

export function Nav({ active }: { active: string }) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-4 sm:px-8">
      <Link href="/" className="flex items-center gap-2 text-primary">
        <Image src="/images/logo.png" alt="Feather Fitness logo" width={42} height={42} className="h-10 w-auto object-contain" />
        <span className="hidden text-[18px] uppercase tracking-[.30em] sm:block">Feather Fitness</span>
      </Link>
      <nav className="hidden items-center gap-8 lg:flex">
        {navItems.map(([label, href]) => <Link key={href} href={href} className={`pb-1 text-[11px] uppercase tracking-[.24em] transition ${active === label ? 'border-b border-primary text-primary' : 'text-ink/75 hover:text-primary'}`}>{label}</Link>)}
      </nav>
      <div className="flex items-center gap-4">
        <Bell className="hidden h-4 w-4 text-sage md:block"/><User className="hidden h-4 w-4 text-sage md:block"/>
        <Link href="/booking" className="bg-primary px-6 py-3 text-[10px] uppercase tracking-[.24em] text-white hover:bg-ink">Join Now</Link>
      </div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="border-t border-line bg-background py-20">
    <div className="container-page">
      <div className="grid gap-14 md:grid-cols-[1.7fr_1fr_1fr]">
        <div><h3 className="mb-7 text-2xl uppercase tracking-[.34em] text-primary">Feather Fitness</h3><p className="body-copy max-w-md">The definitive hub for high-performance badminton. Engineered for athletes who demand technical excellence and a premium environment.</p></div>
        <div><h4 className="kicker mb-7">The Hubs</h4><ul className="space-y-4 text-sm text-muted"><li>Downtown Arena</li><li>North Center</li><li>Metro Studio</li></ul></div>
        <div><h4 className="kicker mb-7">Academy</h4><ul className="space-y-4 text-sm text-muted"><li>Youth Pathway</li><li>Elite Squads</li><li>Coaching Team</li></ul></div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-10 text-[10px] uppercase tracking-[.32em] text-muted md:flex-row"><span>Privacy Policy &nbsp;&nbsp; Terms of Service &nbsp;&nbsp; Careers &nbsp;&nbsp; Contact</span><span>Velocity in Stillness.</span><span>© 2024 Feather Fitness.</span></div>
    </div>
  </footer>
}

export function Hero({kicker,title,children}:{kicker:string,title:string,children?:React.ReactNode}){return <section className="pt-[150px] pb-28 text-center"><div className="container-page"><p className="kicker mb-8">{kicker}</p><h1 className="hero-title">{title}</h1>{children&&<p className="body-copy mx-auto mt-8 max-w-lg text-ink">{children}</p>}</div></section>}

export function CTA({variant='default'}:{variant?:'default'|'logo'}){return <section className="dark-cta py-28 text-center"><div className="container-page relative z-10">{variant==='logo'&&<Image src="/images/logo.png" alt="Logo" width={82} height={82} className="mx-auto mb-8 brightness-0 invert"/>}<h2 className="section-title mx-auto max-w-5xl text-white">{variant==='logo'?'The Elite Standard Awaits Your Arrival':'Your Journey To Precision Starts With A Single Step.'}</h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/70">Join a collective dedicated to the quiet performance of the modern athlete.</p><div className="mt-10 flex justify-center gap-5"><Link className="btn bg-white text-primary" href="/booking">Book a Session</Link><Link className="btn border-white/40 text-white" href="/membership">View Memberships</Link></div></div></section>}

export function ImageBlock({className='',label='Feather Fitness',src}:{className?:string,label?:string,src?:string}){return <div className={`image-card relative overflow-hidden ${className}`}>{src&&<Image src={src} alt={label} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover"/>}<div className="absolute inset-8 border border-white/10"/><div className="absolute bottom-8 left-8 text-xs uppercase tracking-[.3em] text-white/80">{label}</div></div>}
export const PlaceholderImage = ImageBlock

export const iconMap = { court: Calendar, coaching: ShieldCheck, training: Dumbbell, social: Users, member: Tag, shop: ShoppingBag, zap: Zap, eye: Eye, service: ShieldCheck, convenience: Briefcase, heart: Heart };
