const DENTAL_CARE_CONTACT = Object.freeze({
  whatsappNumber: "5491125079714",
  whatsappMessage: "Hola, quisiera consultar por un turno en Dental Care."
});

document.addEventListener("DOMContentLoaded", () => {
  const whatsappUrl = new URL(`https://wa.me/${DENTAL_CARE_CONTACT.whatsappNumber}`);
  whatsappUrl.searchParams.set("text", DENTAL_CARE_CONTACT.whatsappMessage);

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl.toString();
  });

  const floatingWhatsApp = document.querySelector(".whatsapp-float");
  const siteFooter = document.querySelector(".site-footer");

  if (floatingWhatsApp && siteFooter && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(([entry]) => {
      floatingWhatsApp.hidden = entry.isIntersecting;
    });
    footerObserver.observe(siteFooter);
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");

  if (menuToggle && primaryNav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      primaryNav.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      primaryNav.classList.toggle("is-open", isOpen);
    });

    primaryNav.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        menuToggle.getAttribute("aria-expanded") === "true" &&
        event.target instanceof Node &&
        !primaryNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
  }

  const currentYear = document.querySelector("#current-year");
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
});
