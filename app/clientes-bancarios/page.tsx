import { ContentPage } from "@/components/content-page";
import { bankLogos } from "@/lib/site-data";

export default function ClientesBancariosPage() {
  return (
    <ContentPage
      switchHref="/en/banking-clients"
      eyebrow="Clientes bancarios"
      title="Bancos con los cuales hemos trabajado"
      intro="Experiencia operativa con entidades financieras del mercado panameÃ±o, aportando recuperaciÃ³n de activos, seguimiento de cartera y soporte documentado."
      heroImage="/assets/images/generated/informes-ejecutivos-bancarios.webp"
      imageAlt="ReuniÃ³n corporativa con entidades financieras"
    >
      <section className="article-section">
        <h2>Experiencia financiera</h2>
        <p>Panama Collectors ha trabajado con entidades como BAC PanamÃ¡, Multibank, Banesco, Panacredit, Banco Lafise, Davivienda, Scotiabank y FWLA.</p>
      </section>

      <section className="article-bank-logos" aria-label="Logos bancarios">
        {bankLogos.map(([name, src]) => <img loading="lazy" decoding="async" src={src} alt={name} key={name} />)}
      </section>

      <section className="article-section">
        <h2>Soporte operativo</h2>
        <p>La gestiÃ³n se enfoca en trazabilidad, reportes ejecutivos y coordinaciÃ³n de campo para que cada entidad pueda evaluar avances, evidencias y cierres de forma clara.</p>
      </section>
    </ContentPage>
  );
}
