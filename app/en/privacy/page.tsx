import { ContentPage } from "@/components/content-page";

export default function EnglishPrivacyPage() {
  return (
    <ContentPage
      locale="en"
      switchHref="/privacidad"
      eyebrow="Privacy"
      title="Privacy policy"
      intro="Responsible handling of information received through digital media, forms and Panama Collectors S.A. contact channels."
      heroImage="/assets/images/generated/cumplimiento-documental-bancario.webp"
      imageAlt="Document management and information privacy"
    >
      <section className="article-section">
        <h2>Collected data</h2>
        <p>We may receive name, email, phone number, company, message and requested service through forms, email or WhatsApp.</p>
      </section>

      <section className="article-section">
        <h2>Use of information</h2>
        <p>Information is used to answer requests, prepare proposals, coordinate meetings and provide commercial or operational follow-up.</p>
      </section>

      <section className="article-section">
        <h2>Confidentiality</h2>
        <p>Panama Collectors applies confidentiality, reserve and data protection criteria aligned with the financial sector and the sensitive nature of the information it manages.</p>
      </section>
    </ContentPage>
  );
}
