import { notFound } from "next/navigation";
import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServiceBySlug, getServices, getSpanishServicePathFromEnglishSlug, whatsappUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return getServices("en").map((service) => ({ slug: service.slug }));
}

export default async function EnglishServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug("en", slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader locale="en" switchHref={getSpanishServicePathFromEnglishSlug(slug)} />
      <main className="article-page service-article-page">
        <article className="article-shell">
          <header className="article-header">
            <p className="article-kicker">Specialized service</p>
            <h1>{service.title}</h1>
            <div className="article-meta">
              <span>Panama Collectors S.A.</span>
              <span>Banking operation</span>
            </div>
          </header>

          <figure className="article-hero-image">
            <img loading="eager" fetchPriority="high" decoding="async" src={service.pageVisual} alt={service.title} />
          </figure>

          <section className="article-lead">
            <p>{service.short}</p>
          </section>

          <div className="article-content">
            <section className="article-section">
              <h2>Service scope</h2>
              <p>{service.short} The goal is to deliver clear information, documented follow-up and operational support according to each financial institution's rules.</p>
            </section>

            <section className="article-section">
              <h2>Operational process</h2>
              <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </section>

            <section className="article-image-grid">
              <img loading="lazy" decoding="async" src={service.visual} alt={`Operation for ${service.title}`} />
              <img loading="lazy" decoding="async" src={service.supportVisuals[0]} alt="Banking document control" />
              <img loading="lazy" decoding="async" src={service.supportVisuals[1]} alt="Executive closure report" />
            </section>
          </div>

          <aside className="article-quote">
            <p>Effective management requires field coordination, reliable documentation and reports that support fast decision-making.</p>
            <span>Panama Collectors S.A.</span>
          </aside>

          <footer className="article-cta">
            <div>
              <p className="article-kicker">Scope request</p>
              <h2>Let us validate case volume, coverage and response times.</h2>
            </div>
            <div className="article-actions">
              <a className="btn btn-primary has-whatsapp" href={whatsappUrl}><img loading="lazy" decoding="async" src="/assets/whatsapp.png" alt="" /> Consult on WhatsApp</a>
              <a className="btn btn-secondary" href="/en#contacto">Send request</a>
            </div>
          </footer>
        </article>
      </main>
      <FloatingActions />
      <SiteFooter locale="en" />
    </>
  );
}
