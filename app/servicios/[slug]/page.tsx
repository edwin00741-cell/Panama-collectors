import { notFound } from "next/navigation";
import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, whatsappUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-hero">
          <div>
            <p className="eyebrow">Servicio especializado</p>
            <h1>{service.title}</h1>
            <p>{service.short}</p>
            <div className="hero-actions">
              <a className="btn btn-primary has-whatsapp" href={whatsappUrl}><img src="/assets/whatsapp.png" alt="" /> WhatsApp</a>
              <a className="btn btn-secondary" href="/#contacto">Formulario</a>
            </div>
          </div>
          <div className="service-page-media"><img src={service.visual} alt={service.title} /></div>
        </section>
        <section className="section">
          <div className="detail-grid">
            <article className="content-card"><h2>Alcance</h2><p>{service.short}</p></article>
            <article className="content-card"><h2>Proceso</h2><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul></article>
            <article className="content-card"><h2>Contacto</h2><p>Conversemos por WhatsApp o formulario para validar alcance, cartera, cobertura y tiempos.</p><a className="btn btn-primary" href={whatsappUrl}>Solicitar informacion</a></article>
          </div>
        </section>
      </main>
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
