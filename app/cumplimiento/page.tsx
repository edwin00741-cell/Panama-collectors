import { ContentPage } from "@/components/content-page";

export default function CumplimientoPage() {
  return (
    <ContentPage
      switchHref="/en/compliance"
      eyebrow="Cumplimiento"
      title="Seguridad y debida diligencia"
      intro="Procesos orientados a confidencialidad, protecciÃ³n de datos y buenas prÃ¡cticas del sector bancario."
      heroImage="/assets/images/generated/cumplimiento-documental-bancario.webp"
      imageAlt="Control documental y cumplimiento operativo"
    >
      <section className="article-section">
        <h2>Seguridad de informaciÃ³n</h2>
        <p>Panama Collectors mantiene un proceso encaminado hacia la certificaciÃ³n ISO 27001 en seguridad de la informaciÃ³n, con enfoque en protecciÃ³n de datos, confidencialidad y control documental.</p>
      </section>

      <section className="article-section">
        <h2>PrÃ¡cticas bancarias</h2>
        <ul>
          <li>ProtecciÃ³n de datos y confidencialidad.</li>
          <li>ActualizaciÃ³n corporativa anual.</li>
          <li>ValidaciÃ³n de personal e inspecciones bancarias.</li>
          <li>Aval correspondiente ante la Superintendencia de Bancos al formalizar contratos.</li>
        </ul>
      </section>

      <section className="article-image-grid">
        <img loading="lazy" decoding="async" src="/assets/images/generated/informes-ejecutivos-bancarios.webp" alt="Informes ejecutivos de gestiÃ³n bancaria" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/cumplimiento-documental-bancario.webp" alt="Reporte ejecutivo de cierre de casos" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/investigacion-operativa-activos.webp" alt="PlaneaciÃ³n operativa y seguridad" />
      </section>
    </ContentPage>
  );
}
