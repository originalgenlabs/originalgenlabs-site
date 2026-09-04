import type { ReactNode } from "react";

type Section = { title: string; content: ReactNode };

export function LegalPage({ eyebrow, title, intro, effectiveDate = "September 4, 2026", sections }: { eyebrow: string; title: string; intro: string; effectiveDate?: string | null; sections: Section[] }) {
  return (
    <main className="legal-main">
      <header className="shell legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {effectiveDate ? <span>Effective {effectiveDate}</span> : null}
      </header>
      <article className="shell legal-content">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div>{section.content}</div>
          </section>
        ))}
      </article>
    </main>
  );
}
