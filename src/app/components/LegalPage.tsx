type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <main>
      <section className="legal-hero">
        <div className="site-shell legal-hero__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <section className="site-shell legal-layout">
        <article className="legal-document">{children}</article>
      </section>
    </main>
  );
}
