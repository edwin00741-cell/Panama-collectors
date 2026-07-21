import { address, bankLogos, email, getServices, type Locale, officePhone, officePhoneUrl, whatsappPhone, whatsappUrl } from "@/lib/site-data";

export function HomePage({ locale = "es" }: { locale?: Locale }) {
  const isEn = locale === "en";
  const localizedServices = getServices(locale);
  const featured = localizedServices.slice(0, 4);
  const featuredLabels = isEn
    ? ["Asset recovery", "Portfolio management", "Operational investigation", "Executive reporting"]
    : ["Recuperación de activos", "Gestión de cartera", "Investigación operativa", "Informes ejecutivos"];
  const serviceBase = isEn ? "/en/services" : "/servicios";

  return (
    <main>
      <section
        className="home-reference-hero"
        data-hero-slider
        style={{ "--hero-bg": "url('/assets/images/generated/panama-collectors-hero-operacion-bancaria.webp')" } as React.CSSProperties}
      >
        <button className="hero-slider-arrow left" type="button" aria-label="Imagen anterior del hero" data-hero-prev>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
        </button>
        <button className="hero-slider-arrow right" type="button" aria-label="Siguiente imagen del hero" data-hero-next>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </button>
        <div className="hero-copy reveal">
          <p className="eyebrow">Panama Collectors S.A.</p>
          <h1><span>{isEn ? "Asset recovery and management for financial institutions." : "Recuperación y gestión de activos para entidades financieras."}</span></h1>
          <p>{isEn ? "Operational partner for banks and financial companies in vehicle recovery, field investigation, portfolio updates, executive reporting and preventive custody." : "Aliado operativo para bancos y financieras en recuperación de autos, investigación de campo, actualización de cartera, informes ejecutivos y custodia preventiva."}</p>
          <div className="hero-actions">
            <a className="btn btn-primary has-whatsapp" href={whatsappUrl}><img loading="lazy" decoding="async" src="/assets/whatsapp.png" alt="" /> {isEn ? "Contact on WhatsApp" : "Contactar por WhatsApp"}</a>
            <a className="btn btn-secondary" href="#servicios">{isEn ? "View services" : "Ver servicios"}</a>
          </div>
        </div>
      </section>

      <section className="popular-services reveal">
        <div className="popular-head">
          <div>
            <p className="eyebrow">{isEn ? "Core services" : "Servicios principales"}</p>
            <h2>{isEn ? "Operational solutions for portfolios and assets." : "Soluciones operativas para cartera y activos."}</h2>
          </div>
          <a className="text-link" href={serviceBase}>{isEn ? "View all" : "Ver todos"}</a>
        </div>
        <div className="popular-grid">
          {featured.map((service, index) => (
            <a className="popular-card" href={`${serviceBase}/${service.slug}`} key={service.slug}>
              <img loading="lazy" decoding="async" src={service.visual} alt={service.title} />
              <span>{featuredLabels[index]}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section about-reference reveal">
        <div className="about-collage">
          <img loading="lazy" decoding="async" src="/assets/images/generated/panama-collectors-equipo-corporativo.webp" alt="Equipo Panama Collectors" />
          <img loading="lazy" decoding="async" src="/assets/images/generated/cumplimiento-documental-bancario.webp" alt="Gestión documental" />
        </div>
        <div>
          <p className="eyebrow">{isEn ? "About the company" : "Sobre la empresa"}</p>
          <h2>{isEn ? "Company history of Panama Collectors S.A." : "Reseña histórica de Panama Collectors S.A."}</h2>
          <p>{isEn ? "Panamanian company specialized in collections management, recovery and adjudication of bank-owned movable assets, serving financial institutions." : "Empresa panameña especializada en gestión de cobros, recuperación y adjudicación de bienes muebles bancarios, con operación orientada a entidades financieras."}</p>
          <div className="about-metric"><strong>2009</strong><span>{isEn ? "operations began with vehicle recovery and delinquent portfolios." : "inicio de operaciones con recuperación de autos y carteras morosas."}</span></div>
          <div className="about-metric"><strong>2022</strong><span>{isEn ? "legal formalization as Panama Collectors S.A." : "formalización jurídica como Panama Collectors S.A."}</span></div>
          <a className="btn btn-secondary about-read-more" href={isEn ? "/en/company" : "/empresa"}>{isEn ? "Read full profile" : "Leer reseña completa"}</a>
        </div>
      </section>

      <section className="dark-planning section reveal">
        <div>
          <p className="eyebrow">{isEn ? "Operational solution" : "Solución operacional"}</p>
          <h2>{isEn ? "Planning, evidence and follow-up for every recovery." : "Planeación, evidencia y seguimiento para cada recuperación."}</h2>
          <div className="hero-actions"><a className="btn btn-primary" href="#contacto">{isEn ? "Request proposal" : "Solicitar propuesta"}</a></div>
        </div>
      </section>

      <section className="trust-strip reveal" aria-label="Indicadores operativos">
        <div><strong>14+</strong><span>{isEn ? "years of experience" : "años de experiencia"}</span></div>
        <div><strong>Panamá</strong><span>{isEn ? "capital city, interior and borders" : "capital, interior y fronteras"}</span></div>
        <div><strong>ISO 27001</strong><span>{isEn ? "certification process underway" : "en proceso de certificación"}</span></div>
        <div><strong>{isEn ? "Banks" : "Bancos"}</strong><span>{isEn ? "operation for financial institutions" : "operación para entidades financieras"}</span></div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="section-heading reveal">
          <p className="eyebrow">{isEn ? "Operation for financial institutions" : "Operación para entidades financieras"}</p>
          <h2>{isEn ? "Specialized services to recover assets and keep portfolios actionable." : "Servicios especializados para recuperar activos y mantener cartera accionable."}</h2>
          <p>{isEn ? "Each service line is designed to operate with traceability, clear timing and documented communication." : "Cada línea de servicio está pensada para operar con trazabilidad, tiempos claros y comunicación documentada."}</p>
        </div>
        <div className="service-stories">
          {localizedServices.slice(0, 3).map((service, index) => (
            <article className={`service-story reveal ${index === 1 ? "reverse" : ""}`} key={service.slug}>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul>{service.points.map((point) => <li key={point}>{point}.</li>)}</ul>
                <div className="service-actions">
                  <a className="btn btn-primary" href={`${serviceBase}/${service.slug}`}>{isEn ? "View service" : "Ver servicio"}</a>
                  <a className="text-link has-whatsapp" href={whatsappUrl}><img loading="lazy" decoding="async" src="/assets/whatsapp.png" alt="" /> WhatsApp</a>
                </div>
              </div>
              <div className="service-media">
                <div className={`media-track ${index === 1 ? "vertical" : "horizontal"}`}>
                  <img loading="lazy" decoding="async" src={service.visual} alt={service.title} />
                  <img loading="lazy" decoding="async" src={service.pageVisual} alt={`Detalle de ${service.title}`} />
                  <img loading="lazy" decoding="async" src={service.supportVisuals[0]} alt={`Soporte operativo para ${service.title}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-line reveal">
        <div className="section-heading"><p className="eyebrow">{isEn ? "Work process" : "Proceso de trabajo"}</p><h2>{isEn ? "From assignment to documented closure." : "De la asignación al cierre documentado."}</h2></div>
        <div className="process-steps">
          {(isEn ? ["Assignment", "Investigation", "Operation", "Report"] : ["Asignación", "Investigación", "Operación", "Reporte"]).map((step, index) => (
            <article className="process-step" key={step}><strong>{String(index + 1).padStart(2, "0")}</strong><h3>{step}</h3><p>{(isEn ? ["We receive the portfolio, rules and priorities.", "We validate data and management routes.", "We activate field work, contact or procedures.", "We deliver updates, evidence and closure."] : ["Recibimos cartera, reglas y prioridades.", "Validamos datos y rutas de gestión.", "Activamos campo, contacto o trámite.", "Entregamos avances, evidencias y cierre."])[index]}</p></article>
          ))}
        </div>
      </section>

      <section className="image-strip reveal" aria-label="Casos operativos">
        <img loading="lazy" decoding="async" src="/assets/images/generated/actualizacion-cartera-bancaria.webp" alt="Asignación de casos" />
        <img loading="lazy" decoding="async" src="/assets/images/generated/investigacion-operativa-activos.webp" alt="Investigación de casos" />
        <div className="strip-feature"><img loading="lazy" decoding="async" src="/assets/images/generated/tramites-vehiculares-bancarios.webp" alt="Operación de campo" /><span className="strip-label">Estrategia operativa <b className="icon-arrow-up-right" aria-hidden="true" /></span></div>
        <img loading="lazy" decoding="async" src="/assets/images/generated/informes-ejecutivos-bancarios.webp" alt="Reporte ejecutivo de cierre" />
      </section>

      <section className="section accordion-section reveal">
        <div className="accordion-copy">
          <p className="eyebrow">{isEn ? "Integrated operation" : "Operación integrada"}</p>
          <h2>{isEn ? "A coordinated operation for field work, data and reporting." : "Una operación coordinada para campo, datos y reportes."}</h2>
          <p>{isEn ? "We organize each case with investigation, operational management and progress evidence to support decision-making." : "Organizamos cada caso con investigación, gestión operativa y evidencia de avance para facilitar la toma de decisiones."}</p>
          <a className="btn btn-primary" href="#contacto">{isEn ? "Request proposal" : "Solicitar propuesta"}</a>
        </div>
        <div className="image-accordion" data-accordion>
          {[
            [isEn ? "Recovery" : "Recuperación", "/assets/images/generated/recuperacion-autos-bienes-bancarios.webp"],
            [isEn ? "Portfolio" : "Cartera", "/assets/images/generated/actualizacion-cartera-bancaria.webp"],
            [isEn ? "Investigation" : "Investigación", "/assets/images/generated/investigacion-operativa-activos.webp"],
            [isEn ? "Reports" : "Informes", "/assets/images/generated/informes-ejecutivos-bancarios.webp"],
            [isEn ? "Integrated management" : "Gestión integral", "/assets/images/generated/panama-collectors-equipo-corporativo.webp"],
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
            <p className="eyebrow">{isEn ? "Banking experience" : "Experiencia bancaria"}</p>
            <h2>{isEn ? "Banks we have worked with." : "Bancos con los cuales hemos trabajado."}</h2>
            <p>{isEn ? "Panama Collectors has collaborated with recognized financial institutions, providing recovery management, follow-up and operational support." : "Panama Collectors ha colaborado con entidades reconocidas del mercado financiero, aportando gestión de recuperación, seguimiento y soporte operativo."}</p>
            <img loading="lazy" decoding="async" className="banks-context-image" src="/assets/images/generated/informes-ejecutivos-bancarios.webp" alt="Experiencia bancaria Panama Collectors" />
            <div className="banks-highlights"><span>{isEn ? "Asset recovery" : "Recuperación de activos"}</span><span>{isEn ? "Portfolio management" : "Gestión de cartera"}</span><span>{isEn ? "Executive reports" : "Reportes ejecutivos"}</span></div>
          </div>
          <div className="bank-logo-carousel" data-bank-carousel aria-label="Bancos con los cuales hemos trabajado">
            {bankLogos.slice(0, 3).map(([name, src], index) => (
              <div className="bank-logo-column" data-bank-column={index} key={name}><div className="bank-logo-card"><img loading="lazy" decoding="async" src={src} alt={name} /></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section reveal">
        <div className="section-heading"><p className="eyebrow">{isEn ? "Operational applications" : "Aplicaciones operativas"}</p><h2>{isEn ? "Visible confidence across every management front." : "Confianza visible en cada frente de gestión."}</h2><p>{isEn ? "Field work, documentation, follow-up and reporting under a corporate operating standard." : "Campo, documentación, seguimiento y reportes bajo una lectura corporativa."}</p></div>
        <div className="proof-grid">
          {[
            [isEn ? "Field operation" : "Campo operativo", "/assets/images/generated/tramites-vehiculares-bancarios.webp", isEn ? "Asset recovery and management with traceability for banking institutions." : "Recuperación y gestión de activos con trazabilidad para entidades bancarias."],
            [isEn ? "Document control" : "Control documental", "/assets/images/generated/cumplimiento-documental-bancario.webp", isEn ? "Organized information for decisions, follow-up and case closure." : "Información organizada para tomar decisiones, dar seguimiento y cerrar casos."],
            [isEn ? "Integrated management" : "Gestión integral", "/assets/images/generated/centro-llamadas-cartera.webp", isEn ? "A coordinated team for portfolios, reports and client management." : "Un equipo coordinado para atender carteras, reportes y gestión de clientes."],
          ].map(([label, visual, quote]) => (
            <article className="proof-card reveal" key={label}><img loading="lazy" decoding="async" src={visual} alt={label} /><div className="proof-overlay"><span className="quote-mark" aria-hidden="true">"</span><blockquote>{quote}</blockquote><p>{label}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section location-section reveal" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">{isEn ? "Location" : "Ubicación"}</p>
          <h2>
            {isEn ? <>Office in Obarrio,<br />Panama City.</> : <>Oficina en Obarrio,<br />Ciudad de Panamá.</>}
          </h2>
          <p>{isEn ? "Panama Collectors operates from the PDC Building on Calle 56 D Este, a central location for coordination with financial institutions and operating teams." : "Panama Collectors atiende desde el Edificio PDC, en Calle 56 D Este, una zona céntrica para coordinación con entidades financieras y equipos operativos."}</p>
          <img loading="lazy" decoding="async" className="location-office-image" src="/assets/images/generated/panama-collectors-equipo-corporativo.webp" alt="Oficina Panama Collectors en Obarrio" />
          <div className="location-details">
            <span>{address}</span><span>{isEn ? "Panama, Republic of Panama" : "Panamá, República de Panamá"}</span>
            <a className="btn btn-primary" href="https://www.google.com/maps/search/?api=1&query=C.%2056%20D%20Este%2C%20Obarrio%2C%20Edificio%20PDC%2C%20Oficina%2012K%2C%20Panama" target="_blank" rel="noreferrer">{isEn ? "Open in Google Maps" : "Abrir en Google Maps"}</a>
          </div>
        </div>
        <div className="map-card" aria-label="Mapa de Panama Collectors en Obarrio">
          <iframe title="Mapa Panama Collectors - Edificio PDC, Obarrio" src="https://maps.google.com/maps?q=C.%2056%20D%20Este%2C%20Obarrio%2C%20Edificio%20PDC%2C%20Oficina%2012K%2C%20Panama&t=&z=17&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-pin-card"><strong>Panama Collectors S.A.</strong><span>Edificio PDC, Oficina 12K</span></div>
        </div>
      </section>

      <section className="contact-section reveal" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow">{isEn ? "Contact" : "Contacto"}</p><h2>{isEn ? "Let us coordinate an operational meeting." : "Coordinemos una reunión operativa."}</h2>
          <p>{isEn ? "If your institution needs support in recovery, collections, portfolio management or asset adjudication, Panama Collectors can prepare a proposal according to the required scope." : "Si su entidad necesita apoyo en recuperación, cobros, cartera o adjudicación de bienes, Panama Collectors puede preparar una propuesta según el alcance requerido."}</p>
          <div className="contact-details"><a href={`mailto:${email}`}>{email}</a><a href={officePhoneUrl}>Oficina: {officePhone}</a><a className="has-whatsapp" href={whatsappUrl}><img loading="lazy" decoding="async" src="/assets/whatsapp.png" alt="" /> WhatsApp: {whatsappPhone}</a><span>{address}</span></div>
        </div>
        <form className="contact-form" data-contact-form>
          <label>{isEn ? "Name" : "Nombre"}<input type="text" name="name" placeholder={isEn ? "Full name" : "Nombre completo"} /></label>
          <label>{isEn ? "Email" : "Correo"}<input type="email" name="email" placeholder="correo@empresa.com" /></label>
          <label>{isEn ? "Service of interest" : "Servicio de interés"}<select name="service"><option>{isEn ? "Asset and vehicle recovery" : "Recuperación de autos y bienes"}</option><option>{isEn ? "Portfolio update" : "Actualización de cartera"}</option><option>{isEn ? "Operational investigation" : "Investigación operativa"}</option><option>{isEn ? "Executive reports" : "Informes ejecutivos"}</option><option>{isEn ? "Integrated proposal" : "Propuesta integral"}</option></select></label>
          <label>{isEn ? "Message" : "Mensaje"}<textarea name="message" rows={4} placeholder={isEn ? "Briefly describe what you need" : "Cuente brevemente qué necesita"} /></label>
          <button className="btn btn-primary" type="submit">{isEn ? "Send request" : "Enviar solicitud"}</button>
        </form>
      </section>
    </main>
  );
}
