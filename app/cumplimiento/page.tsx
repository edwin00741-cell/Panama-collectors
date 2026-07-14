import { ContentPage } from "@/components/content-page";

export default function CumplimientoPage() {
  return (
    <ContentPage eyebrow="Cumplimiento" title="Seguridad y debida diligencia" intro="Procesos orientados a confidencialidad, proteccion de datos y buenas practicas del sector bancario.">
      <article className="content-card"><h2>Seguridad de informacion</h2><p>Proceso encaminado hacia certificacion ISO 27001 en seguridad de la informacion.</p></article>
      <article className="content-card"><h2>Practicas bancarias</h2><ul><li>Proteccion de datos y confidencialidad.</li><li>Actualizacion corporativa anual.</li><li>Validacion de personal e inspecciones bancarias.</li><li>Aval correspondiente ante la Superintendencia de Bancos al formalizar contratos.</li></ul></article>
    </ContentPage>
  );
}
