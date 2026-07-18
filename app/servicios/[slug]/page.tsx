import { notFound } from "next/navigation";
import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceTranslations, services, whatsappUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader switchHref={`/en/services/${serviceTranslations[service.slug as keyof typeof serviceTranslations].slug}`} />
      <main className="article-page">
        <article className="article-shell">
          <header className="article-header">
            <p className="article-kicker">Servicio especializado</p>
            <h1>{service.title}</h1>
            <div className="article-meta">
              <span>Panama Collectors S.A.</span>
              <span>Operación bancaria</span>
            </div>
          </header>

          <figure className="article-hero-image">
            <img src={service.pageVisual} alt={service.title} />
          </figure>

          <section className="article-lead">
            <p>{service.short}</p>
          </section>

          <div className="article-content">
            <section className="article-section">
              <h2>Alcance del servicio</h2>
              <p>{service.short} El objetivo es entregar información clara, seguimiento documentado y soporte operativo según las reglas de cada entidad financiera.</p>
            </section>

            <section className="article-section">
              <h2>Proceso operativo</h2>
              <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </section>

            <section className="article-image-grid">
              <img src={service.visual} alt={`Operación de ${service.title}`} />
              <img src="/assets/images/generated/cumplimiento-documental-bancario.png" alt="Control documental bancario" />
              <img src="/assets/images/generated/informes-ejecutivos-bancarios.png" alt="Reporte ejecutivo de cierre" />
            </section>
          </div>

          <aside className="article-quote">
            <p>Una gestión efectiva requiere coordinación de campo, documentación confiable y reportes que permitan tomar decisiones con rapidez.</p>
            <span>Panama Collectors S.A.</span>
          </aside>

          <footer className="article-cta">
            <div>
              <p className="article-kicker">Solicitud de alcance</p>
              <h2>Validemos volumen de casos, cobertura y tiempos de respuesta.</h2>
            </div>
            <div className="article-actions">
              <a className="btn btn-primary has-whatsapp" href={whatsappUrl}><img src="/assets/whatsapp.png" alt="" /> Consultar por WhatsApp</a>
              <a className="btn btn-secondary" href="/#contacto">Enviar solicitud</a>
            </div>
          </footer>
        </article>
      </main>
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
