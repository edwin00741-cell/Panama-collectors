import { ContentPage } from "@/components/content-page";

export default function CumplimientoPage() {
  return (
    <ContentPage
      switchHref="/en/compliance"
      eyebrow="Cumplimiento"
      title="Seguridad y debida diligencia"
      intro="Procesos orientados a confidencialidad, protección de datos y buenas prácticas del sector bancario."
      heroImage="/assets/images/generated/cumplimiento-documental-bancario.png"
      imageAlt="Control documental y cumplimiento operativo"
    >
      <section className="article-section">
        <h2>Seguridad de información</h2>
        <p>Panama Collectors mantiene un proceso encaminado hacia la certificación ISO 27001 en seguridad de la información, con enfoque en protección de datos, confidencialidad y control documental.</p>
      </section>

      <section className="article-section">
        <h2>Prácticas bancarias</h2>
        <ul>
          <li>Protección de datos y confidencialidad.</li>
          <li>Actualización corporativa anual.</li>
          <li>Validación de personal e inspecciones bancarias.</li>
          <li>Aval correspondiente ante la Superintendencia de Bancos al formalizar contratos.</li>
        </ul>
      </section>

      <section className="article-image-grid">
        <img src="/assets/images/generated/informes-ejecutivos-bancarios.png" alt="Informes ejecutivos de gestión bancaria" />
        <img src="/assets/images/generated/cumplimiento-documental-bancario.png" alt="Reporte ejecutivo de cierre de casos" />
        <img src="/assets/images/generated/investigacion-operativa-activos.png" alt="Planeación operativa y seguridad" />
      </section>
    </ContentPage>
  );
}
