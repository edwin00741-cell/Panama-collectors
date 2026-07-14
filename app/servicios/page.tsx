import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/lib/site-data";

export default function ServiciosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="overview-hero">
          <div className="overview-title"><p className="eyebrow">Servicios</p><h1>Nuestros servicios</h1></div>
          <div className="overview-image"><img src="/assets/visuals/visual-operations.svg" alt="Servicios Panama Collectors" /></div>
        </section>
        <section className="section">
          <div className="service-overview-grid">
            {services.map((service) => (
              <a className="service-overview-card" href={`/servicios/${service.slug}`} key={service.slug}>
                <span className="service-card-icon icon-bank" aria-hidden="true" />
                <h2>{service.title}</h2>
                <p>{service.short}</p>
                <span className="text-link">Ver servicio</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
