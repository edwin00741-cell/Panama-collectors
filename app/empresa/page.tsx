import { ContentPage } from "@/components/content-page";

export default function EmpresaPage() {
  return (
    <ContentPage
      switchHref="/en/company"
      eyebrow="ReseÃ±a histÃ³rica"
      title="Panama Collectors S.A."
      intro="Empresa panameÃ±a especializada en gestiÃ³n de cobros, recuperaciÃ³n y adjudicaciÃ³n de bienes muebles bancarios, orientada a brindar soluciones eficientes, responsables y alineadas con los estÃ¡ndares del sector financiero."
      heroImage="/assets/images/generated/panama-collectors-equipo-corporativo.webp"
      imageAlt="Equipo corporativo de Panama Collectors en reuniÃ³n operativa"
    >
      <section className="article-section">
        <h2>Perfil empresarial</h2>
        <p>Panama Collectors S.A. brinda soporte operativo a entidades financieras que necesitan recuperar activos, mantener cartera accionable y documentar cada avance con claridad.</p>
      </section>

      <section className="article-section">
        <h2>Trayectoria y evoluciÃ³n</h2>
        <p>La empresa iniciÃ³ operaciones en 2009 atendiendo recuperaciÃ³n de autos y carteras morosas. Con el crecimiento de la demanda, fortaleciÃ³ progresivamente su equipo administrativo y operativo.</p>
        <ul>
          <li>Inicio de operaciones en el aÃ±o 2009.</li>
          <li>AtenciÃ³n inicial de recuperaciÃ³n de autos y carteras morosas.</li>
          <li>ExpansiÃ³n del personal y consolidaciÃ³n de una estructura mÃ¡s Ã¡gil.</li>
        </ul>
      </section>

      <section className="article-section">
        <h2>FormalizaciÃ³n institucional</h2>
        <p>En 2022 formalizÃ³ su estructura jurÃ­dica bajo la razÃ³n social Panama Collectors S.A., fortaleciendo procesos internos, gestiÃ³n administrativa y capacidad contractual frente a entidades bancarias.</p>
      </section>

      <section className="article-image-grid">
        <img loading="lazy" decoding="async" src="/assets/images/generated/cumplimiento-documental-bancario.webp" alt="GestiÃ³n documental bancaria" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/actualizacion-cartera-bancaria.webp" alt="Control documental de cartera" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/panama-collectors-equipo-corporativo.webp" alt="Experiencia bancaria Panama Collectors" />
      </section>

      <section className="article-section">
        <h2>Propuesta de valor</h2>
        <p>Con una trayectoria de crecimiento sostenido, Panama Collectors S.A. se posiciona como aliado estratÃ©gico para entidades financieras, respaldado por experiencia operativa, capacidad de respuesta, cumplimiento normativo y un equipo comprometido con la excelencia en el servicio.</p>
      </section>
    </ContentPage>
  );
}
