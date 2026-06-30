export function Card({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <article className="brand-card p-10">
      <div className="mb-8 text-2xl text-brand">{icon ?? '⌁'}</div>
      <h3 className="mb-5 text-xl uppercase tracking-[0.24em]">{title}</h3>
      <p className="body-copy">{children}</p>
      <p className="mt-8 text-[0.68rem] uppercase tracking-[0.24em] text-brand">Explore →</p>
    </article>
  );
}
