import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { type Locale, whatsappUrl } from "@/lib/site-data";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
  imageAlt?: string;
  locale?: Locale;
  switchHref?: string;
  children: React.ReactNode;
};

export function ContentPage({
  eyebrow,
  title,
  intro,
  heroImage = "/assets/images/generated/panama-collectors-hero-operacion-bancaria.png",
  imageAlt = "Operación corporativa Panama Collectors",
  locale = "es",
  switchHref,
  children,
}: ContentPageProps) {
  const isEn = locale === "en";

  return (
    <>
      <SiteHeader locale={locale} switchHref={switchHref} />
      <main className="article-page">
        <article className="article-shell">
          <header className="article-header">
            <p className="article-kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <div className="article-meta">
              <span>Panama Collectors S.A.</span>
              <span>{isEn ? "Asset management" : "Gestión de activos"}</span>
            </div>
          </header>

          <figure className="article-hero-image">
            <img src={heroImage} alt={imageAlt} />
          </figure>

          <section className="article-lead">
            <p>{intro}</p>
          </section>

          <div className="article-content">{children}</div>

          <aside className="article-quote">
            <p>
              {isEn
                ? "We operate with traceability, confidentiality and documented communication so each financial institution can make decisions with clear information."
                : "Operamos con trazabilidad, confidencialidad y comunicación documentada para que cada entidad financiera pueda tomar decisiones con información clara."}
            </p>
            <span>Panama Collectors S.A.</span>
          </aside>

          <footer className="article-cta">
            <div>
              <p className="article-kicker">{isEn ? "Operational contact" : "Contacto operativo"}</p>
              <h2>{isEn ? "Let us discuss the scope your institution needs." : "Conversemos sobre el alcance que necesita su entidad."}</h2>
            </div>
            <div className="article-actions">
              <a className="btn btn-primary has-whatsapp" href={whatsappUrl}>
                <img src="/assets/whatsapp.png" alt="" /> {isEn ? "Contact on WhatsApp" : "Contactar por WhatsApp"}
              </a>
              <a className="btn btn-secondary" href={isEn ? "/en#contacto" : "/#contacto"}>{isEn ? "Send form" : "Enviar formulario"}</a>
            </div>
          </footer>
        </article>
      </main>
      <FloatingActions />
      <SiteFooter locale={locale} />
    </>
  );
}
