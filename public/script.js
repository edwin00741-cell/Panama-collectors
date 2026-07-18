const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
const backTop = document.querySelector("[data-back-top]");
const serviceTracks = document.querySelectorAll(".service-media .media-track");
const heroSlider = document.querySelector("[data-hero-slider]");
const heroPrev = document.querySelector("[data-hero-prev]");
const heroNext = document.querySelector("[data-hero-next]");
const heroImages = [
  "url('/assets/images/generated/panama-collectors-hero-operacion-bancaria.png')",
  "url('/assets/images/generated/investigacion-operativa-activos.png')",
  "url('/assets/images/generated/panama-collectors-equipo-corporativo.png')",
  "url('/assets/images/generated/informes-ejecutivos-bancarios.png')"
];
const bankLogos = [
  { name: "BAC Credomatic", src: "/assets/banks/bac.png" },
  { name: "Davivienda", src: "/assets/banks/davivienda.png" },
  { name: "Banesco", src: "/assets/banks/banesco.svg" },
  { name: "Banco General", src: "/assets/banks/banco-general.png" },
  { name: "Banco LAFISE", src: "/assets/banks/lafise-cropped.png", className: "bank-logo-card-lafise" },
  { name: "Global Bank", src: "/assets/banks/global-bank.svg", className: "is-dark" }
];
let heroIndex = 0;

const updateHeader = () => {
  const scrolled = window.scrollY > 10;
  header?.classList.toggle("is-scrolled", scrolled);
  backTop?.classList.toggle("is-visible", window.scrollY > 600);
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

let serviceScrollTicking = false;

const updateServiceTracks = () => {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  serviceTracks.forEach((track) => {
    const media = track.closest(".service-media");
    if (!media) return;

    const rect = media.getBoundingClientRect();
    const viewportCenter = viewportHeight * 0.55;
    const mediaCenter = rect.top + rect.height / 2;
    const distance = viewportCenter - mediaCenter;
    const travel = viewportHeight * 0.72 + rect.height / 2;
    const progress = clamp((distance + travel / 2) / travel, 0, 1);

    if (track.classList.contains("vertical")) {
      const overflow = Math.max(track.scrollHeight - media.clientHeight, 0);
      const maxShift = Math.min(overflow, 280);
      const y = (0.5 - progress) * maxShift;
      track.style.transform = `translate(-50%, -50%) translateY(${y}px)`;
      return;
    }

    const overflow = Math.max(track.scrollWidth - media.clientWidth, 0);
    const maxShift = Math.min(overflow, 190);
    const x = (0.5 - progress) * maxShift;
    track.style.transform = `translateY(-50%) translateX(${x}px)`;
  });
};

updateHeader();
updateServiceTracks();
const onScroll = () => {
  updateHeader();
  if (!serviceScrollTicking) {
    window.requestAnimationFrame(() => {
      updateServiceTracks();
      serviceScrollTicking = false;
    });
    serviceScrollTicking = true;
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", updateServiceTracks);

const closeMobileMenu = () => {
  header?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-label", "Abrir menu");
};

const closeDropdowns = () => {
  document.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
};

const updateHeroSlide = () => {
  if (!heroSlider) return;
  heroSlider.style.setProperty("--hero-bg", heroImages[heroIndex]);
};

let heroAutoplay;

const nextHeroSlide = () => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  updateHeroSlide();
};

const startHeroAutoplay = () => {
  if (!heroSlider || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.clearInterval(heroAutoplay);
  heroAutoplay = window.setInterval(nextHeroSlide, 5200);
};

const renderBankLogo = (column, logo) => {
  const card = document.createElement("div");
  card.className = `bank-logo-card is-entering ${logo.className || ""}`.trim();

  const image = document.createElement("img");
  image.src = logo.src;
  image.alt = logo.name;

  card.appendChild(image);
  column.replaceChildren(card);
};

const initBankCarousel = () => {
  const columns = document.querySelectorAll("[data-bank-column]");
  if (!columns.length) return;

  columns.forEach((column, columnIndex) => {
    let logoIndex = columnIndex % bankLogos.length;
    renderBankLogo(column, bankLogos[logoIndex]);

    window.setInterval(() => {
      logoIndex = (logoIndex + columns.length) % bankLogos.length;
      renderBankLogo(column, bankLogos[logoIndex]);
    }, 2000 + columnIndex * 180);
  });
};

initBankCarousel();

heroPrev?.addEventListener("click", () => {
  heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
  updateHeroSlide();
  startHeroAutoplay();
});

heroNext?.addEventListener("click", () => {
  nextHeroSlide();
  startHeroAutoplay();
});

heroSlider?.addEventListener("mouseenter", () => window.clearInterval(heroAutoplay));
heroSlider?.addEventListener("mouseleave", startHeroAutoplay);
heroSlider?.addEventListener("focusin", () => window.clearInterval(heroAutoplay));
heroSlider?.addEventListener("focusout", startHeroAutoplay);

startHeroAutoplay();

navToggle?.addEventListener("click", () => {
  if (!header) return;

  const open = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-label", open ? "Cerrar menu" : "Abrir menu");
});

navMenu?.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  closeMobileMenu();
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const wrapper = toggle.closest(".nav-dropdown");
    const wasOpen = wrapper?.classList.contains("is-open");
    closeDropdowns();
    if (!wrapper) return;

    const open = !wasOpen;
    wrapper.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (header?.classList.contains("is-open") && !target.closest(".pc-nav")) {
    closeMobileMenu();
  }

  if (!target.closest(".nav-dropdown")) {
    closeDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  closeMobileMenu();
  closeDropdowns();
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  const items = accordion.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      items.forEach((candidate) => candidate.classList.remove("is-active"));
      item.classList.add("is-active");
    });
    item.addEventListener("focus", () => {
      items.forEach((candidate) => candidate.classList.remove("is-active"));
      item.classList.add("is-active");
    });
  });
});

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (!button) return;

    button.textContent = "Solicitud preparada";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = "Enviar solicitud";
      button.disabled = false;
      form.reset();
    }, 1800);
  });
});

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


