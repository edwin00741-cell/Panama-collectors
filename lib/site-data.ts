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
    title: "RecuperaciÃ³n de autos y bienes",
    short: "UbicaciÃ³n, coordinaciÃ³n, grÃºa y custodia temporal para bienes asignados por bancos.",
    visual: "/assets/images/generated/recuperacion-autos-bienes-bancarios.webp",
    pageVisual: "/assets/images/generated/recuperacion-autos-bienes-bancarios-detalle.webp",
    supportVisuals: ["/assets/images/generated/tramites-vehiculares-bancarios.webp", "/assets/images/generated/investigacion-operativa-activos.webp"],
    points: ["GestiÃ³n de campo documentada", "Traslado y custodia preventiva", "Reportes de estado por caso"],
  },
  {
    slug: "actualizacion-cartera",
    title: "ActualizaciÃ³n de cartera",
    short: "ValidaciÃ³n de datos, contacto y seguimiento continuo para mantener cartera accionable.",
    visual: "/assets/images/generated/actualizacion-cartera-bancaria.webp",
    pageVisual: "/assets/images/generated/actualizacion-cartera-bancaria-detalle.webp",
    supportVisuals: ["/assets/images/generated/informes-ejecutivos-bancarios.webp", "/assets/images/generated/centro-llamadas-cartera.webp"],
    points: ["Datos de contacto depurados", "BitÃ¡cora de gestiones", "PriorizaciÃ³n por antigÃ¼edad y riesgo"],
  },
  {
    slug: "investigacion-operativa",
    title: "InvestigaciÃ³n operativa",
    short: "BÃºsqueda de informaciÃ³n relevante para ubicar bienes, cuentas y escenarios de recuperaciÃ³n.",
    visual: "/assets/images/generated/investigacion-operativa-activos.webp",
    pageVisual: "/assets/images/generated/investigacion-operativa-activos-detalle.webp",
    supportVisuals: ["/assets/images/generated/panama-collectors-equipo-corporativo.webp", "/assets/images/generated/cumplimiento-documental-bancario.webp"],
    points: ["RevisiÃ³n de datos disponibles", "Rutas de gestiÃ³n por provincia", "Hallazgos listos para acciÃ³n"],
  },
  {
    slug: "informes-ejecutivos",
    title: "Informes ejecutivos",
    short: "Reportes claros para juntas, gerencias, auditorÃ­as y seguimiento interno.",
    visual: "/assets/images/generated/informes-ejecutivos-bancarios.webp",
    pageVisual: "/assets/images/generated/informes-ejecutivos-bancarios-detalle.webp",
    supportVisuals: ["/assets/images/generated/cumplimiento-documental-bancario.webp", "/assets/images/generated/panama-collectors-equipo-corporativo.webp"],
    points: ["Indicadores por cartera", "Evidencias y trazabilidad", "Lectura ejecutiva"],
  },
  {
    slug: "tramites-vehiculares",
    title: "TrÃ¡mites vehiculares",
    short: "Soporte operativo para procesos relacionados con bienes muebles y vehÃ­culos.",
    visual: "/assets/images/generated/tramites-vehiculares-bancarios.webp",
    pageVisual: "/assets/images/generated/tramites-vehiculares-bancarios-detalle.webp",
    supportVisuals: ["/assets/images/generated/recuperacion-autos-bienes-bancarios.webp", "/assets/images/generated/centro-llamadas-cartera.webp"],
    points: ["CoordinaciÃ³n documental", "Seguimiento por caso", "Cierre administrativo"],
  },
  {
    slug: "centro-llamadas",
    title: "Centro de llamadas",
    short: "Contacto, validaciÃ³n y seguimiento telefÃ³nico para cartera asignada.",
    visual: "/assets/images/generated/centro-llamadas-cartera.webp",
    pageVisual: "/assets/images/generated/centro-llamadas-cartera-detalle.webp",
    supportVisuals: ["/assets/images/generated/actualizacion-cartera-bancaria.webp", "/assets/images/generated/informes-ejecutivos-bancarios.webp"],
    points: ["GestiÃ³n de contacto", "Registro de interacciones", "PriorizaciÃ³n diaria"],
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
  ["Global Bank", "/assets/banks/global-bank-clean.png"],
];
