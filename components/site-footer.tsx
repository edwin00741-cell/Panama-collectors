import { address, email, phone, whatsappUrl } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <>
      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Contactar por WhatsApp">
        <img src="/assets/whatsapp.png" alt="" />
      </a>
      <button className="back-top" type="button" aria-label="Volver arriba" data-back-top>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4.5 15.75 12 8.25l7.5 7.5" />
        </svg>
      </button>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="footer-brand" href="/" aria-label="Panama Collectors inicio">
            <img className="footer-logo" src="/assets/brand/panama-collectors-logo-negative.svg" alt="Panama Collectors" />
          </a>
          <p>Recuperacion y gestion de activos para entidades financieras, con enfoque operativo, trazabilidad y cumplimiento.</p>
          <p className="footer-license">Panama Collectors S.A.</p>
          <div className="footer-regulator">
            <span className="footer-badge">PC</span>
            <span>Procesos alineados a debida diligencia, confidencialidad y buenas practicas del sector bancario.</span>
          </div>
        </div>
        <div className="footer-column">
          <h2>Navegacion</h2>
          <a href="/#servicios">Servicios</a>
          <a href="/empresa">Empresa</a>
          <a href="/clientes-bancarios">Bancos</a>
          <a href="/cumplimiento">Cumplimiento</a>
        </div>
        <div className="footer-column">
          <h2>Informacion</h2>
          <a href="/servicios">Todos los servicios</a>
          <a href="/privacidad">Privacidad</a>
          <a href="/#contacto">Cotizar</a>
          <a href="/#bancos">Clientes bancarios</a>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contacto</h2>
          <a href={whatsappUrl}>WhatsApp: {phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <span>{address}</span>
          <span>Panama, Republica de Panama</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>La informacion, reportes y condiciones finales dependen de evaluacion y autorizacion de cada entidad financiera.</span>
        <span>
          © 2026 Panama Collectors S.A. Todos los derechos reservados.{" "}
          <a href="https://www.harmonyagency.lat/" target="_blank" rel="noreferrer">
            Creado por Harmony Agency
          </a>
        </span>
      </div>
    </footer>
  );
}
