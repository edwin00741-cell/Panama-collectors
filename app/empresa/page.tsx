import { ContentPage } from "@/components/content-page";

export default function EmpresaPage() {
  return (
    <ContentPage
      eyebrow="Resena historica"
      title="Panama Collectors S.A."
      intro="Empresa panameña especializada en gestion de cobros, recuperacion y adjudicacion de bienes muebles bancarios."
    >
      <article className="content-card"><h2>Perfil empresarial</h2><p>Panama Collectors S.A. brinda soluciones eficientes, responsables y alineadas con los estandares del sector financiero.</p></article>
      <article className="content-card"><h2>Trayectoria y evolucion</h2><ul><li>Inicio de operaciones en el año 2009.</li><li>Atencion inicial de recuperacion de autos y carteras morosas.</li><li>Fortalecimiento administrativo y operativo ante mayor demanda.</li></ul></article>
      <article className="content-card"><h2>Formalizacion institucional</h2><p>En 2022 formalizo su estructura juridica bajo la razon social Panama Collectors S.A., fortaleciendo procesos internos y capacidad contractual frente a entidades bancarias.</p></article>
      <article className="content-card"><h2>Propuesta de valor</h2><p>Aliado estrategico para entidades financieras, respaldado por experiencia operativa, capacidad de respuesta, cumplimiento normativo y equipo comprometido con excelencia.</p></article>
    </ContentPage>
  );
}
