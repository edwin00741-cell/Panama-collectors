import { FloatingActions, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappUrl } from "@/lib/site-data";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function ContentPage({ eyebrow, title, intro, children }: ContentPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="content-hero">
          <div className="content-hero-inner">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="corporate-links">
              <a className="btn btn-primary has-whatsapp" href={whatsappUrl}>
                <img src="/assets/whatsapp.png" alt="" /> Contactar por WhatsApp
              </a>
              <a className="btn btn-secondary" href="/#contacto">Formulario</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="corporate-grid">
            <aside className="corporate-aside">
              <strong>PC</strong>
              <p>Recuperacion y gestion de activos con enfoque operativo, trazabilidad y cumplimiento.</p>
              <a className="text-link" href="/servicios">Ver servicios</a>
            </aside>
            <div className="content-stack">{children}</div>
          </div>
        </section>
      </main>
      <FloatingActions />
      <SiteFooter />
    </>
  );
}
