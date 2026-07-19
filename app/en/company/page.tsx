import { ContentPage } from "@/components/content-page";

export default function EnglishCompanyPage() {
  return (
    <ContentPage
      locale="en"
      switchHref="/empresa"
      eyebrow="Company history"
      title="Panama Collectors S.A."
      intro="Panamanian company specialized in collections management, recovery and adjudication of bank-owned movable assets, focused on efficient, responsible solutions aligned with financial sector standards."
      heroImage="/assets/images/generated/panama-collectors-equipo-corporativo.webp"
      imageAlt="Panama Collectors corporate team in an operational meeting"
    >
      <section className="article-section">
        <h2>Company profile</h2>
        <p>Panama Collectors S.A. provides operational support for financial institutions that need to recover assets, keep portfolios actionable and document every progress milestone clearly.</p>
      </section>

      <section className="article-section">
        <h2>Track record and evolution</h2>
        <p>The company began operations in 2009 serving vehicle recovery and delinquent portfolios. As demand grew, it progressively strengthened its administrative and operating team.</p>
        <ul>
          <li>Operations began in 2009.</li>
          <li>Initial focus on vehicle recovery and delinquent portfolios.</li>
          <li>Team expansion and consolidation of a more agile operating structure.</li>
        </ul>
      </section>

      <section className="article-section">
        <h2>Institutional formalization</h2>
        <p>In 2022, the company formalized its legal structure under Panama Collectors S.A., strengthening internal processes, administrative management and contractual capacity with banking institutions.</p>
      </section>

      <section className="article-image-grid">
        <img loading="lazy" decoding="async" src="/assets/images/generated/cumplimiento-documental-bancario.webp" alt="Banking document management" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/actualizacion-cartera-bancaria.webp" alt="Portfolio document control" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/panama-collectors-equipo-corporativo.webp" alt="Panama Collectors banking experience" />
      </section>

      <section className="article-section">
        <h2>Value proposition</h2>
        <p>With sustained growth, Panama Collectors S.A. is positioned as a strategic ally for financial institutions, backed by operational experience, response capacity, regulatory alignment and a team committed to service excellence.</p>
      </section>
    </ContentPage>
  );
}
