import { fleet } from "../data/fleet.js";

const LANG_FOLDER = { pt: "ptbr", es: "es" };

async function loadFleetTranslations() {
  const lang = localStorage.getItem("marazul-lang") || "pt";
  const folder = LANG_FOLDER[lang] ?? lang;

  try {
    const response = await fetch(`/json/i18n/${folder}/fleet.json`);
    if (!response.ok) return {};
    return await response.json();
  } catch {
    return {};
  }
}

function applyModalTranslations(modal, translations) {
  modal.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!(key in translations)) return;

    if (element.id === "modal-description") {
      renderDescription(element, translations[key]);
      return;
    }

    element.textContent = translations[key];
  });

  modal.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key in translations) element.alt = translations[key];
  });

  modal.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key in translations) element.setAttribute("aria-label", translations[key]);
  });
}

function parseDescription(description) {
  return description
    .split(/[.,]/)
    .flatMap((part) => {
      const item = part.trim();
      if (!item) return [];

      const isSeatCombination = /\d.*\s(?:e|y)\s\d/i.test(item);
      return isSeatCombination ? [item] : item.split(/\s+(?:e|y)\s+/i);
    })
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderDescription(container, description) {
  const items = parseDescription(description);
  const list = document.createElement("ul");

  list.className = "modal-description-list mb-0";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  container.replaceChildren(list);
}

export function initModal() {
  const modal = document.getElementById("busModal");
  if (!modal) return;

  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-description");

  loadFleetTranslations().then((translations) => {
    applyModalTranslations(modal, translations);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".lang-btn[data-lang]")) return;

    loadFleetTranslations().then((translations) => {
      applyModalTranslations(modal, translations);
    });
  });

  modal.addEventListener("show.bs.modal", async (event) => {
    const button = event.relatedTarget;

    if (!button) return;

    const busId = button.dataset.bus;
    const bus = fleet[busId];

    if (!bus) return;

    titleEl.dataset.i18n = bus.title.i18n;
    descEl.dataset.i18n = bus.description.i18n;
    titleEl.textContent = bus.title.fallback;
    renderDescription(descEl, bus.description.fallback);

    updateCarousel(bus.images);

    const translations = await loadFleetTranslations();
    applyModalTranslations(modal, translations);
  });

}


function updateCarousel(images) {
  const carousel = document.getElementById("aboutCarousel");
  const inner = carousel.querySelector(".carousel-inner");
  const indicators = carousel.querySelector(".carousel-indicators");
  const carouselInstance = window.bootstrap?.Carousel.getInstance(carousel);
  const isSpanish = localStorage.getItem("marazul-lang") === "es";

  carouselInstance?.dispose();
  inner.replaceChildren();
  indicators.replaceChildren();

  images.forEach((img, index) => {
    const item = document.createElement("div");
    const indicator = document.createElement("button");

    item.classList.add("carousel-item");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#aboutCarousel";
    indicator.dataset.bsSlideTo = index;
    indicator.setAttribute(
      "aria-label",
      `${isSpanish ? "Ir a la foto" : "Ir para a foto"} ${index + 1}`,
    );

    if (index === 0) {
      item.classList.add("active");
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }

    item.innerHTML = `
      <picture>
        <source
          srcset="${img.webp}"
          type="image/webp"
        />
        <img
          src="${img.fallback}"
          class="d-block w-100 object-fit-cover carousel-photo"
          alt=""
        />
      </picture>
    `;

    const image = item.querySelector("img");
    image.dataset.i18nAlt = "fleet.modal.vehicle-image";
    image.alt = "Imagem do veículo selecionado";

    inner.appendChild(item);
    indicators.appendChild(indicator);
  });

  if (window.bootstrap?.Carousel) {
    const updatedCarousel = new window.bootstrap.Carousel(carousel, {
      interval: 4000,
      touch: true,
      pause: "hover",
      ride: "carousel",
    });

    updatedCarousel.cycle();
  }
}
