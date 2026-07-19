import { ContentPage } from "@/components/content-page";

export default function EmpresaPage() {
  return (
    <ContentPage
      switchHref="/en/company"
      eyebrow="Reseña histórica"
      title="Panama Collectors S.A."
      intro="Empresa panameña especializada en gestión de cobros, recuperación y adjudicación de bienes muebles bancarios, orientada a brindar soluciones eficientes, responsables y alineadas con los estándares del sector financiero."
      heroImage="/assets/images/generated/panama-collectors-equipo-corporativo.webp"
      imageAlt="Equipo corporativo de Panama Collectors en reunión operativa"
    >
      <section className="article-section">
        <h2>Perfil empresarial</h2>
        <p>Panama Collectors S.A. brinda soporte operativo a entidades financieras que necesitan recuperar activos, mantener cartera accionable y documentar cada avance con claridad.</p>
      </section>

      <section className="article-section">
        <h2>Trayectoria y evolución</h2>
        <p>La empresa inició operaciones en 2009 atendiendo recuperación de autos y carteras morosas. Con el crecimiento de la demanda, fortaleció progresivamente su equipo administrativo y operativo.</p>
        <ul>
          <li>Inicio de operaciones en el año 2009.</li>
          <li>Atención inicial de recuperación de autos y carteras morosas.</li>
          <li>Expansión del personal y consolidación de una estructura más ágil.</li>
        </ul>
      </section>

      <section className="article-section">
        <h2>Formalización institucional</h2>
        <p>En 2022 formalizó su estructura jurídica bajo la razón social Panama Collectors S.A., fortaleciendo procesos internos, gestión administrativa y capacidad contractual frente a entidades bancarias.</p>
      </section>

      <section className="article-image-grid">
        <img loading="lazy" decoding="async" src="/assets/images/generated/cumplimiento-documental-bancario.webp" alt="Gestión documental bancaria" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/actualizacion-cartera-bancaria.webp" alt="Control documental de cartera" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/panama-collectors-equipo-corporativo.webp" alt="Experiencia bancaria Panama Collectors" />
      </section>

      <section className="article-section">
        <h2>Propuesta de valor</h2>
        <p>Con una trayectoria de crecimiento sostenido, Panama Collectors S.A. se posiciona como aliado estratégico para entidades financieras, respaldado por experiencia operativa, capacidad de respuesta, cumplimiento normativo y un equipo comprometido con la excelencia en el servicio.</p>
      </section>
    </ContentPage>
  );
}
