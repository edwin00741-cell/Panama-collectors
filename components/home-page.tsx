import { address, bankLogos, email, services, whatsappUrl } from "@/lib/site-data";

export function HomePage() {
  const featured = services.slice(0, 4);
  return (
    <main>
      <section className="home-reference-hero" data-hero-slider>
        <button className="hero-slider-arrow left" type="button" aria-label="Anterior" data-hero-prev>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
        </button>
        <button className="hero-slider-arrow right" type="button" aria-label="Siguiente" data-hero-next>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </button>
        <div className="hero-copy reveal">
          <p className="eyebrow">Bienvenido a Panama Collectors</p>
          <h1><span>Recuperacion bancaria con control operativo.</span></h1>
          <p>Panama Collectors apoya a entidades financieras con recuperacion de autos, investigacion operativa, actualizacion de cartera, informes y custodia preventiva.</p>
          <div className="hero-actions">
            <a className="btn btn-primary has-whatsapp" href={whatsappUrl}><img src="/assets/whatsapp.png" alt="" /> Contactar por WhatsApp</a>
            <a className="btn btn-secondary" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </section>

      <section className="popular-services reveal">
        <div className="popular-head">
          <div>
            <p className="eyebrow">Soluciones populares</p>
            <h2>Servicios principales</h2>
          </div>
          <a className="text-link" href="/servicios">Ver todos</a>
        </div>
        <div className="popular-grid">
          {featured.map((service) => (
            <a className="popular-card" href={`/servicios/${service.slug}`} key={service.slug}>
              <img src={service.visual} alt={service.title} />
              <span>{service.title.split(" ")[0]}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section about-reference reveal">
        <div className="about-collage">
          <img src="/assets/visuals/visual-team.svg" alt="Equipo Panama Collectors" />
          <img src="/assets/visuals/visual-documents.svg" alt="Gestion documental" />
        </div>
        <div>
          <p className="eyebrow">Sobre la empresa</p>
          <h2>Resena historica de Panama Collectors S.A.</h2>
          <p>Empresa panamena especializada en gestion de cobros, recuperacion y adjudicacion de bienes muebles bancarios, con operacion orientada a entidades financieras.</p>
          <div className="about-metric"><strong>2009</strong><span>inicio de operaciones con recuperacion de autos y carteras morosas.</span></div>
          <div className="about-metric"><strong>2022</strong><span>formalizacion juridica como Panama Collectors S.A.</span></div>
          <a className="btn btn-secondary" href="/empresa">Leer resena completa</a>
        </div>
      </section>

      <section className="dark-planning section reveal">
        <div>
          <p className="eyebrow">Solucion operacional</p>
          <h2>Planeacion clara para asegurar cada recuperacion.</h2>
          <div className="hero-actions"><a className="btn btn-primary" href="#contacto">Solicitar propuesta</a></div>
        </div>
        <span className="play-badge">PC</span>
      </section>

      <section className="trust-strip reveal" aria-label="Indicadores operativos">
        <div><strong>14+</strong><span>anos de experiencia</span></div>
        <div><strong>Panama</strong><span>capital, interior y fronteras</span></div>
        <div><strong>ISO 27001</strong><span>en proceso de certificacion</span></div>
        <div><strong>Bancos</strong><span>operacion para entidades financieras</span></div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="section-heading reveal">
          <p className="eyebrow">Que podemos hacer por tu entidad</p>
          <h2>Servicios especializados para recuperar activos y ordenar cartera.</h2>
          <p>Cada servicio tiene su propia pagina con alcance, proceso y CTA directo a WhatsApp o formulario.</p>
        </div>
        <div className="service-stories">
          {services.slice(0, 3).map((service, index) => (
            <article className={`service-story reveal ${index === 1 ? "reverse" : ""}`} key={service.slug}>
              <div className="service-text">
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul>{service.points.map((point) => <li key={point}>{point}.</li>)}</ul>
                <div className="service-actions">
                  <a className="btn btn-primary" href={`/servicios/${service.slug}`}>Ver servicio</a>
                  <a className="text-link has-whatsapp" href={whatsappUrl}><img src="/assets/whatsapp.png" alt="" /> WhatsApp</a>
                </div>
              </div>
              <div className="service-media">
                <div className={`media-track ${index === 1 ? "vertical" : "horizontal"}`}>
                  <img src={service.visual} alt={service.title} />
                  <img src="/assets/visuals/visual-operations.svg" alt="Operacion Panama Collectors" />
                  <img src="/assets/visuals/visual-team.svg" alt="Equipo Panama Collectors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-line reveal">
        <div className="section-heading"><p className="eyebrow">Proceso de trabajo</p><h2>Proceso operativo</h2></div>
        <div className="process-steps">
          {["Asignacion", "Investigacion", "Operacion", "Reporte"].map((step, index) => (
            <article className="process-step" key={step}><strong>{String(index + 1).padStart(2, "0")}</strong><h3>{step}</h3><p>{["Recibimos cartera, reglas y prioridades.", "Validamos datos y rutas de gestion.", "Activamos campo, contacto o tramite.", "Entregamos avances, evidencias y cierre."][index]}</p></article>
          ))}
        </div>
      </section>

      <section className="image-strip reveal" aria-label="Casos operativos">
        <img src="/assets/visuals/visual-documents.svg" alt="Gestion de cuenta" />
        <img src="/assets/visuals/visual-auto.svg" alt="Auto recuperado" />
        <div className="strip-feature"><img src="/assets/visuals/visual-operations.svg" alt="Equipo operativo" /><span className="strip-label">Estrategia operativa <b className="icon-arrow-up-right" aria-hidden="true" /></span></div>
        <img src="/assets/visuals/visual-team.svg" alt="Equipo en reunion" />
      </section>

      <section className="section accordion-section reveal">
        <div className="accordion-copy">
          <p className="eyebrow">Operacion integrada</p>
          <h2>Una vista visual de cada frente de trabajo.</h2>
          <p>Al pasar sobre cada panel, el frente activo se expande.</p>
          <a className="btn btn-primary" href="#contacto">Solicitar propuesta</a>
        </div>
        <div className="image-accordion" data-accordion>
          {[
            ["Recuperacion", "/assets/visuals/visual-auto.svg"],
            ["Cartera", "/assets/visuals/visual-documents.svg"],
            ["Investigacion", "/assets/visuals/visual-investigation.svg"],
            ["Informes", "/assets/visuals/visual-reports.svg"],
            ["Cobertura", "/assets/visuals/visual-team.svg"],
          ].map(([label, visual], index) => (
            <button className={`accordion-item ${index === 2 ? "is-active" : ""}`} style={{ "--bg": `url('${visual}')` } as React.CSSProperties} aria-label={label} key={label}>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section banks-section reveal" id="bancos">
        <div className="banks-showcase">
          <div className="banks-copy">
            <p className="eyebrow">Experiencia bancaria</p>
            <h2>Bancos con los cuales hemos trabajado.</h2>
            <p>Panama Collectors ha colaborado con entidades reconocidas del mercado financiero, aportando gestion de recuperacion, seguimiento y soporte operativo.</p>
            <div className="banks-highlights"><span>Recuperacion de activos</span><span>Gestion de cartera</span><span>Reportes ejecutivos</span></div>
          </div>
          <div className="bank-logo-carousel" data-bank-carousel aria-label="Bancos con los cuales hemos trabajado">
            {bankLogos.slice(0, 3).map(([name, src], index) => (
              <div className="bank-logo-column" data-bank-column={index} key={name}><div className="bank-logo-card"><img src={src} alt={name} /></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section reveal">
        <div className="section-heading"><p className="eyebrow">Aplicaciones operativas</p><h2>Confianza visible en cada frente de gestion.</h2><p>Operacion con lectura corporativa: campo, documentacion, seguimiento y reportes.</p></div>
        <div className="proof-grid">
          {[
            ["Campo operativo", "/assets/visuals/visual-auto.svg", "Recuperacion y gestion de activos con trazabilidad para entidades bancarias."],
            ["Control documental", "/assets/visuals/visual-documents.svg", "Informacion organizada para tomar decisiones, dar seguimiento y cerrar casos."],
            ["Gestion integral", "/assets/visuals/visual-team.svg", "Un equipo coordinado para atender carteras, reportes y gestion de clientes."],
          ].map(([label, visual, quote]) => (
            <article className="proof-card reveal" key={label}><img src={visual} alt={label} /><div className="proof-overlay"><span className="quote-mark" aria-hidden="true">"</span><blockquote>{quote}</blockquote><p>{label}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section location-section reveal" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">Ubicacion</p>
          <h2>Oficina en Obarrio, Ciudad de Panama.</h2>
          <p>Panama Collectors atiende desde el Edificio PDC, en Calle 56 D Este, una zona centrica para coordinacion con entidades financieras y equipos operativos.</p>
          <div className="location-details">
            <span>{address}</span><span>Panama, Republica de Panama</span>
            <a className="btn btn-primary" href="https://www.google.com/maps/search/?api=1&query=C.%2056%20D%20Este%2C%20Obarrio%2C%20Edificio%20PDC%2C%20Oficina%2012K%2C%20Panama" target="_blank" rel="noreferrer">Abrir en Google Maps</a>
          </div>
        </div>
        <div className="map-card" aria-label="Mapa de Panama Collectors en Obarrio">
          <iframe title="Mapa Panama Collectors - Edificio PDC, Obarrio" src="https://maps.google.com/maps?q=C.%2056%20D%20Este%2C%20Obarrio%2C%20Edificio%20PDC%2C%20Oficina%2012K%2C%20Panama&t=&z=17&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-pin-card"><strong>Panama Collectors S.A.</strong><span>Edificio PDC, Oficina 12K</span></div>
        </div>
      </section>

      <section className="contact-section reveal" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p><h2>Coordinemos una entrevista personal.</h2>
          <p>Si su entidad necesita informacion sobre servicios de recuperacion, cobros o adjudicacion, el equipo de Panama Collectors puede preparar una propuesta operativa.</p>
          <div className="contact-details"><a href={`mailto:${email}`}>{email}</a><a href="tel:+5073752442">(507) 375-2442</a><a className="has-whatsapp" href={whatsappUrl}><img src="/assets/whatsapp.png" alt="" /> WhatsApp directo</a><span>{address}</span></div>
        </div>
        <form className="contact-form" data-contact-form>
          <label>Nombre<input type="text" name="name" placeholder="Nombre completo" /></label>
          <label>Correo<input type="email" name="email" placeholder="correo@empresa.com" /></label>
          <label>Servicio de interes<select name="service"><option>Recuperacion de autos</option><option>Gestion de cartera</option><option>Adjudicacion de bienes</option><option>Propuesta integral</option></select></label>
          <label>Mensaje<textarea name="message" rows={4} placeholder="Cuente brevemente que necesita" /></label>
          <button className="btn btn-primary" type="submit">Enviar solicitud</button>
        </form>
      </section>
    </main>
  );
}
