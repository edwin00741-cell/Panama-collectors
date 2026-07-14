import { address, email, whatsappUrl } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <>
      <div
        className="home-topline"
        style={{ background: "linear-gradient(90deg, #ea6a1c, #ff8d20)", color: "#ffffff" }}
        aria-label="Informacion de contacto"
      >
        <span className="topbar-item icon-map">{address}</span>
        <a className="topbar-item icon-mail" href={`mailto:${email}`}>{email}</a>
        <a className="topbar-item icon-whatsapp has-whatsapp" href={whatsappUrl}>WhatsApp</a>
        <span className="topbar-socials" aria-label="Canales digitales">
          <span className="mini-icon icon-network" aria-hidden="true" />
          <span className="mini-icon icon-briefcase" aria-hidden="true" />
          <span className="mini-icon icon-globe" aria-hidden="true" />
        </span>
      </div>
      <header className="pc-header" data-header>
        <nav className="pc-nav" aria-label="Navegacion principal">
          <a className="pc-brand" href="/" aria-label="Panama Collectors inicio">
            <img src="/assets/brand/panama-collectors-logo-positive.svg" alt="Panama Collectors" />
          </a>
          <button className="pc-menu" type="button" aria-label="Abrir menu" data-nav-toggle>
            <span />
            <span />
          </button>
          <div className="pc-links" data-nav-menu>
            <a href="/">Inicio</a>
            <div className="nav-dropdown">
              <button type="button" aria-expanded="false" data-dropdown-toggle>
                Empresa
              </button>
              <div className="dropdown-panel">
                <a href="/empresa">Resena historica</a>
                <a href="/cumplimiento">Cumplimiento</a>
                <a href="/clientes-bancarios">Clientes bancarios</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <button type="button" aria-expanded="false" data-dropdown-toggle>
                Servicios
              </button>
              <div className="dropdown-panel">
                <a href="/servicios">Todos los servicios</a>
                <a href="/servicios/recuperacion-autos">Recuperacion de autos</a>
                <a href="/servicios/actualizacion-cartera">Actualizacion de cartera</a>
                <a href="/servicios/investigacion-operativa">Investigacion operativa</a>
                <a href="/servicios/informes-ejecutivos">Informes ejecutivos</a>
                <a href="/servicios/tramites-vehiculares">Tramites vehiculares</a>
                <a href="/servicios/centro-llamadas">Centro de llamadas</a>
              </div>
            </div>
            <a href="/#bancos">Bancos</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/#contacto">Contacto</a>
            <a className="nav-cta" href={whatsappUrl}>
              <img src="/assets/whatsapp.png" alt="" /> WhatsApp
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
