import { ContentPage } from "@/components/content-page";
import { bankLogos } from "@/lib/site-data";

export default function ClientesBancariosPage() {
  return (
    <ContentPage eyebrow="Clientes bancarios" title="Bancos con los cuales hemos trabajado" intro="Experiencia operativa con entidades financieras del mercado panameño.">
      <article className="content-card"><h2>Experiencia</h2><p>Clientes activos y referencias de trabajo con BAC Panama, Multibank, Banesco, Panacredit, Banco Lafise, Davivienda, Scotiabank y FWLA.</p></article>
      <div className="bank-logo-carousel" aria-label="Logos bancarios">
        {bankLogos.map(([name, src]) => <div className="bank-logo-column" key={name}><div className="bank-logo-card"><img src={src} alt={name} /></div></div>)}
      </div>
    </ContentPage>
  );
}
