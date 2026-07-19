import { ContentPage } from "@/components/content-page";
import { bankLogos } from "@/lib/site-data";

export default function EnglishBankingClientsPage() {
  return (
    <ContentPage
      locale="en"
      switchHref="/clientes-bancarios"
      eyebrow="Banking clients"
      title="Banks we have worked with"
      intro="Operational experience with financial institutions in the Panamanian market, providing asset recovery, portfolio follow-up and documented support."
      heroImage="/assets/images/generated/informes-ejecutivos-bancarios.webp"
      imageAlt="Corporate meeting with financial institutions"
    >
      <section className="article-section">
        <h2>Financial experience</h2>
        <p>Panama Collectors has worked with institutions such as BAC Panama, Multibank, Banesco, Panacredit, Banco Lafise, Davivienda, Scotiabank and FWLA.</p>
      </section>

      <section className="article-bank-logos" aria-label="Bank logos">
        {bankLogos.map(([name, src]) => <img loading="lazy" decoding="async" src={src} alt={name} key={name} />)}
      </section>

      <section className="article-section">
        <h2>Operational support</h2>
        <p>The management approach focuses on traceability, executive reports and field coordination so each institution can evaluate progress, evidence and closure clearly.</p>
      </section>
    </ContentPage>
  );
}
