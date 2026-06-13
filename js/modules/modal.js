import { fleet } from "../data/fleet.js";

export function initModal() {
    console.log("AAAAAAAA")
  const modal = document.getElementById("busModal");

  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-description");

  modal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;

    if (!button) return;

    const busId = button.dataset.bus;
    console.log(busId)
    const bus = fleet[busId];

    if (!bus) return;

    titleEl.textContent = bus.title.fallback;
    descEl.textContent = bus.description.fallback;

    updateCarousel(bus.images);
  });

  const closeBtn = document.getElementById("close-modal-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
}


function updateCarousel(images) {
  const inner = document.querySelector(".carousel-inner");

  inner.innerHTML = "";

  images.forEach((img, index) => {
    const item = document.createElement("div");

    item.classList.add("carousel-item");

    if (index === 0) {
      item.classList.add("active");
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

    inner.appendChild(item);
  });
}