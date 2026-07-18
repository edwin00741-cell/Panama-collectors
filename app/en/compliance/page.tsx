import { ContentPage } from "@/components/content-page";

export default function EnglishCompliancePage() {
  return (
    <ContentPage
      locale="en"
      switchHref="/cumplimiento"
      eyebrow="Compliance"
      title="Security and due diligence"
      intro="Processes focused on confidentiality, data protection and good practices for the banking sector."
      heroImage="/assets/images/generated/cumplimiento-documental-bancario.png"
      imageAlt="Document control and operational compliance"
    >
      <section className="article-section">
        <h2>Information security</h2>
        <p>Panama Collectors is moving toward ISO 27001 certification in information security, with emphasis on data protection, confidentiality and document control.</p>
      </section>

      <section className="article-section">
        <h2>Banking practices</h2>
        <ul>
          <li>Data protection and confidentiality.</li>
          <li>Annual corporate updates.</li>
          <li>Personnel validation and banking inspections.</li>
          <li>Required endorsement before the Superintendency of Banks when formalizing new contracts.</li>
        </ul>
      </section>

      <section className="article-image-grid">
        <img src="/assets/images/generated/informes-ejecutivos-bancarios.png" alt="Executive banking management reports" />
        <img src="/assets/images/generated/cumplimiento-documental-bancario.png" alt="Executive case closure report" />
        <img src="/assets/images/generated/investigacion-operativa-activos.png" alt="Operational planning and security" />
      </section>
    </ContentPage>
  );
}
