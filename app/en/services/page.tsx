import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServices, whatsappUrl } from "@/lib/site-data";

export default function EnglishServicesPage() {
  const services = getServices("en");

  return (
    <>
      <SiteHeader locale="en" switchHref="/servicios" />
      <main className="service-directory">
        <section className="service-directory-hero">
          <p className="article-kicker">Specialized services</p>
          <h1>Solutions for recovery, portfolios and banking support.</h1>
          <p>
            Panama Collectors supports financial institutions with field operations, portfolio updates, investigation,
            executive reports and administrative support for movable assets.
          </p>
          <div className="service-directory-meta">
            <span>6 service lines</span>
            <span>Support for financial institutions</span>
            <span>Direct WhatsApp contact</span>
          </div>
        </section>

        <figure className="service-directory-image">
          <img src="/assets/images/gestion-integral-recuperacion-y-cobros.webp" alt="Integrated recovery and collections management" />
        </figure>

        <section className="service-directory-grid" aria-label="Panama Collectors service list">
          {services.map((service, index) => (
            <a className="service-directory-card" href={`/en/services/${service.slug}`} key={service.slug}>
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
                <strong>Review scope</strong>
              </div>
            </a>
          ))}
        </section>

        <section className="service-directory-cta">
          <div>
            <p className="article-kicker">Operational proposal</p>
            <h2>Do you need to combine multiple services within one portfolio?</h2>
            <p>We can review case volume, coverage, expected timing and report format to prepare a scope according to your institution's operation.</p>
          </div>
          <a className="btn btn-primary has-whatsapp" href={whatsappUrl}>
            <img src="/assets/whatsapp.png" alt="" /> Coordinate on WhatsApp
          </a>
        </section>
      </main>
      <FloatingActions />
      <SiteFooter locale="en" />
    </>
  );
}
