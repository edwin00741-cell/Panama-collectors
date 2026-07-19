import { ArrowUpRight, ChevronDown } from "lucide-react";
import { getServices, type Locale, whatsappUrl } from "@/lib/site-data";

type NavLink = {
  label: string;
  href: string;
  description?: string;
};

function getNavigation(locale: Locale) {
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";
  const companyLinks: NavLink[] = isEn
    ? [
        { label: "Company profile", href: "/en/company", description: "History, evolution and institutional profile." },
        { label: "Compliance", href: "/en/compliance", description: "Due diligence, security and banking practices." },
        { label: "Banking clients", href: "/en/banking-clients", description: "Experience with financial institutions." },
      ]
    : [
        { label: "Reseña histórica", href: "/empresa", description: "Trayectoria, evolución y perfil institucional." },
        { label: "Cumplimiento", href: "/cumplimiento", description: "Debida diligencia, seguridad y buenas prácticas." },
        { label: "Clientes bancarios", href: "/clientes-bancarios", description: "Experiencia con entidades financieras." },
      ];

  const serviceLinks: NavLink[] = [
    {
      label: isEn ? "All services" : "Todos los servicios",
      href: isEn ? "/en/services" : "/servicios",
      description: isEn ? "Complete view of operational solutions." : "Vista completa de soluciones operativas.",
    },
    ...getServices(locale).map((service) => ({
      label: service.title,
      href: isEn ? `/en/services/${service.slug}` : `/servicios/${service.slug}`,
      description: service.short,
    })),
  ];

  const simpleLinks: NavLink[] = isEn
    ? [
        { label: "Home", href: "/en" },
        { label: "Banks", href: "/en#bancos" },
        { label: "Privacy", href: "/en/privacy" },
        { label: "Contact", href: "/en#contacto" },
      ]
    : [
        { label: "Inicio", href: "/" },
        { label: "Bancos", href: "/#bancos" },
        { label: "Privacidad", href: "/privacidad" },
        { label: "Contacto", href: "/#contacto" },
      ];

  return { companyLinks, serviceLinks, simpleLinks };
}

function DesktopDropdown({
  label,
  href,
  links,
  locale,
}: {
  label: string;
  href: string;
  links: NavLink[];
  locale: Locale;
}) {
  const isEn = locale === "en";

  return (
    <div className="group relative">
      <button
        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[#1f2328]/70 transition hover:text-[#1f2328] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea6a1c]/40"
        type="button"
      >
        {label}
        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180" strokeWidth={1.8} />
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid grid-cols-[0.8fr_1.8fr] gap-8 rounded-[28px] border border-black/5 bg-white/95 p-7 shadow-[0_32px_80px_rgba(31,35,40,0.12)] backdrop-blur-2xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ea6a1c]">{label}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1f2328]">{isEn ? "Banking operations with a clear structure." : "Gestión bancaria con estructura clara."}</h2>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1f2328]" href={href}>
              {isEn ? "View section" : "Ver sección"}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a className="group/item rounded-2xl p-4 transition hover:bg-[#f7f7f5]" href={link.href} key={link.href}>
                <span className="flex items-center justify-between gap-3 text-sm font-semibold text-[#1f2328]">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover/item:opacity-100" strokeWidth={1.8} />
                </span>
                {link.description ? <span className="mt-1 block text-xs leading-5 text-[#71706f]">{link.description}</span> : null}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ locale = "es", switchHref }: { locale?: Locale; switchHref?: string }) {
  const isEn = locale === "en";
  const { companyLinks, serviceLinks, simpleLinks } = getNavigation(locale);
  const languageHref = switchHref ?? (isEn ? "/" : "/en");
  const languageLabel = isEn ? "ES" : "EN";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Navegación principal">
        <a className="flex min-w-0 items-center" href="/" aria-label="Panama Collectors inicio">
          <img loading="lazy" decoding="async" className="h-[62px] w-[235px] object-contain object-left md:h-[68px] md:w-[310px]" src="/assets/brand/panama-collectors-logo-positive-transparent.svg" alt="Panama Collectors" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <a className="rounded-full px-4 py-2 text-sm font-medium text-[#1f2328]/70 transition hover:text-[#1f2328]" href="/">
            Inicio
          </a>
          <DesktopDropdown label={isEn ? "Company" : "Empresa"} href={isEn ? "/en/company" : "/empresa"} links={companyLinks} locale={locale} />
          <DesktopDropdown label={isEn ? "Services" : "Servicios"} href={isEn ? "/en/services" : "/servicios"} links={serviceLinks} locale={locale} />
          {simpleLinks.slice(1).map((link) => (
            <a className="rounded-full px-4 py-2 text-sm font-medium text-[#1f2328]/70 transition hover:text-[#1f2328]" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold text-[#1f2328] transition hover:border-[#ea6a1c] hover:text-[#ea6a1c]" href={languageHref}>
            {languageLabel}
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1f2328] px-5 py-2.5 text-sm font-semibold !text-white shadow-[0_18px_40px_rgba(31,35,40,0.18)] transition hover:bg-[#ea6a1c]"
            href={whatsappUrl}
          >
            WhatsApp
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>

        <details className="group/mobile md:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center marker:hidden [&::-webkit-details-marker]:hidden" aria-label="Abrir menu">
            <span className="flex w-6 flex-col gap-1.5">
              <span className="block h-px w-6 bg-[#1f2328] transition group-open/mobile:translate-y-[7px] group-open/mobile:rotate-45" />
              <span className="block h-px w-6 bg-[#1f2328] transition group-open/mobile:opacity-0" />
              <span className="block h-px w-6 bg-[#1f2328] transition group-open/mobile:-translate-y-[7px] group-open/mobile:-rotate-45" />
            </span>
          </summary>

          <div className="fixed right-0 top-20 z-40 max-h-[calc(100vh-5rem)] w-[78vw] max-w-[360px] overflow-y-auto rounded-bl-[24px] border-b border-l border-black/5 bg-white/98 px-5 pb-7 pt-3 shadow-[-18px_28px_70px_rgba(31,35,40,0.14)] backdrop-blur-2xl">
            <div className="mx-auto max-w-lg divide-y divide-black/10">
              {simpleLinks.map((link) => (
                <a className="block py-3.5 text-xl font-semibold text-[#1f2328]" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}

              <details>
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-xl font-semibold text-[#1f2328] marker:hidden [&::-webkit-details-marker]:hidden">
                  {isEn ? "Company" : "Empresa"}
                  <ChevronDown className="h-6 w-6" strokeWidth={1.7} />
                </summary>
                <div className="grid gap-1 pb-5">
                  {companyLinks.map((link) => (
                    <a className="rounded-2xl px-3 py-3 text-base font-medium text-[#1f2328]/72 transition hover:bg-[#f7f7f5] hover:text-[#1f2328]" href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>

              <details>
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-xl font-semibold text-[#1f2328] marker:hidden [&::-webkit-details-marker]:hidden">
                  {isEn ? "Services" : "Servicios"}
                  <ChevronDown className="h-6 w-6" strokeWidth={1.7} />
                </summary>
                <div className="grid gap-1 pb-5">
                  {serviceLinks.map((link) => (
                    <a className="rounded-2xl px-3 py-3 text-base font-medium text-[#1f2328]/72 transition hover:bg-[#f7f7f5] hover:text-[#1f2328]" href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>

            <a className="mx-auto mt-8 flex max-w-lg min-h-14 items-center justify-center gap-2 rounded-full bg-[#1f2328] px-6 text-base font-semibold !text-white" href={whatsappUrl}>
              {isEn ? "Contact on WhatsApp" : "Contactar por WhatsApp"}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a className="mx-auto mt-3 flex max-w-lg min-h-12 items-center justify-center rounded-full border border-black/10 px-6 text-base font-semibold text-[#1f2328]" href={languageHref}>
              {isEn ? "Ver en español" : "View in English"}
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
