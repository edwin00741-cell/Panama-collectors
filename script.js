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
  "url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1800&q=82')",
  "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=82')",
  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=82')"
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
      const maxShift = Math.max(track.scrollHeight - media.clientHeight + 140, 220);
      const y = -progress * maxShift;
      track.style.transform = `translateX(-50%) translateY(${y}px)`;
      return;
    }

    const maxShift = Math.max(track.scrollWidth - media.clientWidth + 140, 220);
    const x = -progress * maxShift;
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

const updateHeroSlide = () => {
  if (!heroSlider) return;
  heroSlider.style.setProperty("--hero-bg", heroImages[heroIndex]);
};

heroPrev?.addEventListener("click", () => {
  heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
  updateHeroSlide();
});

heroNext?.addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  updateHeroSlide();
});

navToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-label", open ? "Cerrar menu" : "Abrir menu");
});

navMenu?.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  header?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-label", "Abrir menu");
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const wrapper = toggle.closest(".nav-dropdown");
    const open = wrapper.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-dropdown")) return;
  document.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

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
