import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, whatsappUrl } from "@/lib/site-data";

export default function ServiciosPage() {
  return (
    <>
      <SiteHeader switchHref="/en/services" />
      <main className="service-directory">
        <section className="service-directory-hero">
          <p className="article-kicker">Servicios especializados</p>
          <h1>Soluciones para recuperación, cartera y soporte bancario.</h1>
          <p>
            Panama Collectors acompaña a entidades financieras con operación de campo, actualización de cartera,
            investigación, informes ejecutivos y soporte administrativo para bienes muebles.
          </p>
          <div className="service-directory-meta">
            <span>6 líneas de servicio</span>
            <span>Atención para entidades financieras</span>
            <span>Contacto directo por WhatsApp</span>
          </div>
        </section>

        <figure className="service-directory-image">
          <img src="/assets/images/gestion-integral-recuperacion-y-cobros.webp" alt="Gestión integral de recuperación y cobros" />
        </figure>

        <section className="service-directory-grid" aria-label="Listado de servicios Panama Collectors">
          {services.map((service, index) => (
            <a className="service-directory-card" href={`/servicios/${service.slug}`} key={service.slug}>
              <div className="service-directory-card-media">
                <img src={service.pageVisual} alt={service.title} />
              </div>
              <div className="service-directory-card-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.title}</h2>
                <p>{service.short}</p>
                <ul>
                  {service.points.slice(0, 2).map((point) => <li key={point}>{point}</li>)}
                </ul>
                <strong>Revisar alcance</strong>
              </div>
            </a>
          ))}
        </section>

        <section className="service-directory-cta">
          <div>
            <p className="article-kicker">Propuesta operativa</p>
            <h2>¿Necesita combinar varios servicios en una misma cartera?</h2>
            <p>Podemos revisar volumen de casos, cobertura, tiempos esperados y formato de reportes para preparar un alcance según la operación de su entidad.</p>
          </div>
          <a className="btn btn-primary has-whatsapp" href={whatsappUrl}>
            <img src="/assets/whatsapp.png" alt="" /> Coordinar por WhatsApp
          </a>
        </section>
      </main>
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
