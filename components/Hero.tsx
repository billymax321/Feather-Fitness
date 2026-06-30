export function Hero({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-paper py-20 text-center md:py-28">
      <div className="container-page">
        <p className="eyebrow mb-7">{eyebrow}</p>
        <h1 className="display-title mx-auto max-w-6xl">{title}</h1>
        <div className="mx-auto mt-8 max-w-xl text-sm leading-7 text-ink/80">{children}</div>
      </div>
    </section>
  );
}
