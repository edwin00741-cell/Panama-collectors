import { address, email, type Locale, officePhone, officePhoneUrl, whatsappPhone, whatsappUrl } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <>
      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contactar por WhatsApp">
        <img loading="lazy" decoding="async" src="/assets/whatsapp.png" alt="" />
      </a>
      <button className="back-top" type="button" aria-label="Volver arriba" data-back-top>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4.5 15.75 12 8.25l7.5 7.5" />
        </svg>
      </button>
    </>
  );
}

export function SiteFooter({ locale = "es" }: { locale?: Locale }) {
  const isEn = locale === "en";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="footer-brand" href="/" aria-label="Panama Collectors inicio">
            <img loading="lazy" decoding="async" className="footer-logo" src="/assets/brand/panama-collectors-logo-negative.svg" alt="Panama Collectors" />
          </a>
          <p>{isEn ? "Asset recovery and management for financial institutions, with operational focus, traceability and compliance." : "Recuperación y gestión de activos para entidades financieras, con enfoque operativo, trazabilidad y cumplimiento."}</p>
          <p className="footer-license">Panama Collectors S.A.</p>
        </div>

        <div className="footer-column">
          <h2>{isEn ? "Navigation" : "Navegación"}</h2>
          <a href={isEn ? "/en#servicios" : "/#servicios"}>{isEn ? "Services" : "Servicios"}</a>
          <a href={isEn ? "/en/company" : "/empresa"}>{isEn ? "Company" : "Empresa"}</a>
          <a href={isEn ? "/en/banking-clients" : "/clientes-bancarios"}>{isEn ? "Banks" : "Bancos"}</a>
          <a href={isEn ? "/en/compliance" : "/cumplimiento"}>{isEn ? "Compliance" : "Cumplimiento"}</a>
        </div>

        <div className="footer-column">
          <h2>{isEn ? "Information" : "Información"}</h2>
          <a href={isEn ? "/en/services" : "/servicios"}>{isEn ? "All services" : "Todos los servicios"}</a>
          <a href={isEn ? "/en/privacy" : "/privacidad"}>{isEn ? "Privacy" : "Privacidad"}</a>
          <a href={isEn ? "/en#contacto" : "/#contacto"}>{isEn ? "Request quote" : "Cotizar"}</a>
          <a href={isEn ? "/en#bancos" : "/#bancos"}>{isEn ? "Banking clients" : "Clientes bancarios"}</a>
        </div>

        <div className="footer-column footer-contact">
          <h2>{isEn ? "Contact" : "Contacto"}</h2>
          <a href={whatsappUrl}>WhatsApp: {whatsappPhone}</a>
          <a href={officePhoneUrl}>Oficina: {officePhone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <span>{address}</span>
          <span>{isEn ? "Panama, Republic of Panama" : "Panamá, República de Panamá"}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{isEn ? "Final information, reports and conditions depend on evaluation and authorization by each financial institution." : "La información, reportes y condiciones finales dependen de evaluación y autorización de cada entidad financiera."}</span>
        <span>
          © 2026 Panama Collectors S.A. {isEn ? "All rights reserved." : "Todos los derechos reservados."}{" "}
          <a href="https://www.harmonyagency.lat/" target="_blank" rel="noreferrer">
            Creado por Harmony Agency
          </a>
        </span>
      </div>
    </footer>
  );
}
