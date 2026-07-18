export const whatsappPhone = "+507 6996-1228";
export const whatsappUrl = "https://wa.me/50769961228";
export const officePhone = "+507 375-2442";
export const officePhoneUrl = "tel:+5073752442";
export const email = "gerencia@panamacollectors.com";
export const address = "C. 56 D Este, Obarrio, Edificio PDC, Oficina 12K";

export type Locale = "es" | "en";

export const services = [
  {
    slug: "recuperacion-autos",
    title: "Recuperación de autos y bienes",
    short: "Ubicación, coordinación, grúa y custodia temporal para bienes asignados por bancos.",
    visual: "/assets/images/generated/recuperacion-autos-bienes-bancarios.png",
    pageVisual: "/assets/images/generated/recuperacion-autos-bienes-bancarios-detalle.png",
    supportVisuals: ["/assets/images/generated/tramites-vehiculares-bancarios.png", "/assets/images/generated/investigacion-operativa-activos.png"],
    points: ["Gestión de campo documentada", "Traslado y custodia preventiva", "Reportes de estado por caso"],
  },
  {
    slug: "actualizacion-cartera",
    title: "Actualización de cartera",
    short: "Validación de datos, contacto y seguimiento continuo para mantener cartera accionable.",
    visual: "/assets/images/generated/actualizacion-cartera-bancaria.png",
    pageVisual: "/assets/images/generated/actualizacion-cartera-bancaria-detalle.png",
    supportVisuals: ["/assets/images/generated/informes-ejecutivos-bancarios.png", "/assets/images/generated/centro-llamadas-cartera.png"],
    points: ["Datos de contacto depurados", "Bitácora de gestiones", "Priorización por antigüedad y riesgo"],
  },
  {
    slug: "investigacion-operativa",
    title: "Investigación operativa",
    short: "Búsqueda de información relevante para ubicar bienes, cuentas y escenarios de recuperación.",
    visual: "/assets/images/generated/investigacion-operativa-activos.png",
    pageVisual: "/assets/images/generated/investigacion-operativa-activos-detalle.png",
    supportVisuals: ["/assets/images/generated/panama-collectors-equipo-corporativo.png", "/assets/images/generated/cumplimiento-documental-bancario.png"],
    points: ["Revisión de datos disponibles", "Rutas de gestión por provincia", "Hallazgos listos para acción"],
  },
  {
    slug: "informes-ejecutivos",
    title: "Informes ejecutivos",
    short: "Reportes claros para juntas, gerencias, auditorías y seguimiento interno.",
    visual: "/assets/images/generated/informes-ejecutivos-bancarios.png",
    pageVisual: "/assets/images/generated/informes-ejecutivos-bancarios-detalle.png",
    supportVisuals: ["/assets/images/generated/cumplimiento-documental-bancario.png", "/assets/images/generated/panama-collectors-equipo-corporativo.png"],
    points: ["Indicadores por cartera", "Evidencias y trazabilidad", "Lectura ejecutiva"],
  },
  {
    slug: "tramites-vehiculares",
    title: "Trámites vehiculares",
    short: "Soporte operativo para procesos relacionados con bienes muebles y vehículos.",
    visual: "/assets/images/generated/tramites-vehiculares-bancarios.png",
    pageVisual: "/assets/images/generated/tramites-vehiculares-bancarios-detalle.png",
    supportVisuals: ["/assets/images/generated/recuperacion-autos-bienes-bancarios.png", "/assets/images/generated/centro-llamadas-cartera.png"],
    points: ["Coordinación documental", "Seguimiento por caso", "Cierre administrativo"],
  },
  {
    slug: "centro-llamadas",
    title: "Centro de llamadas",
    short: "Contacto, validación y seguimiento telefónico para cartera asignada.",
    visual: "/assets/images/generated/centro-llamadas-cartera.png",
    pageVisual: "/assets/images/generated/centro-llamadas-cartera-detalle.png",
    supportVisuals: ["/assets/images/generated/actualizacion-cartera-bancaria.png", "/assets/images/generated/informes-ejecutivos-bancarios.png"],
    points: ["Gestión de contacto", "Registro de interacciones", "Priorización diaria"],
  },
];

export const serviceTranslations = {
  "recuperacion-autos": {
    slug: "asset-and-vehicle-recovery",
    title: "Asset and vehicle recovery",
    short: "Location, coordination, towing and temporary custody for assets assigned by financial institutions.",
    points: ["Documented field management", "Transfer and preventive custody", "Case status reports"],
  },
  "actualizacion-cartera": {
    slug: "portfolio-update",
    title: "Portfolio update",
    short: "Data validation, contact and continuous follow-up to keep assigned portfolios actionable.",
    points: ["Clean contact data", "Management activity log", "Prioritization by age and risk"],
  },
  "investigacion-operativa": {
    slug: "operational-investigation",
    title: "Operational investigation",
    short: "Relevant information search to locate assets, accounts and recovery scenarios.",
    points: ["Review of available data", "Management routes by province", "Action-ready findings"],
  },
  "informes-ejecutivos": {
    slug: "executive-reports",
    title: "Executive reports",
    short: "Clear reports for boards, management teams, audits and internal monitoring.",
    points: ["Portfolio indicators", "Evidence and traceability", "Executive-level reading"],
  },
  "tramites-vehiculares": {
    slug: "vehicle-procedures",
    title: "Vehicle procedures",
    short: "Operational support for processes related to movable assets and vehicles.",
    points: ["Document coordination", "Case follow-up", "Administrative closure"],
  },
  "centro-llamadas": {
    slug: "call-center",
    title: "Call center",
    short: "Contact, validation and phone follow-up for assigned portfolios.",
    points: ["Contact management", "Interaction records", "Daily prioritization"],
  },
} as const;

export function getServices(locale: Locale = "es") {
  if (locale === "es") return services;

  return services.map((service) => {
    const translation = serviceTranslations[service.slug as keyof typeof serviceTranslations];
    return {
      ...service,
      originalSlug: service.slug,
      slug: translation.slug,
      title: translation.title,
      short: translation.short,
      points: translation.points,
    };
  });
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServices(locale).find((service) => service.slug === slug);
}

export function getSpanishServicePathFromEnglishSlug(slug: string) {
  const pair = Object.entries(serviceTranslations).find(([, value]) => value.slug === slug);
  return pair ? `/servicios/${pair[0]}` : "/servicios";
}

export const bankLogos = [
  ["BAC Credomatic", "/assets/banks/bac.png"],
  ["Davivienda", "/assets/banks/davivienda.png"],
  ["Banesco", "/assets/banks/banesco.svg"],
  ["Banco General", "/assets/banks/banco-general.png"],
  ["Banco LAFISE", "/assets/banks/lafise-cropped.png"],
  ["Global Bank", "/assets/banks/global-bank.svg"],
];
