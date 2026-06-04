import { initHorizontalScroll } from "./modules/scroll-gallery.js";
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initActiveNav } from "./modules/activeNav.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader(); 

  initAboutCarousel();
  loadFooter();
  initActiveNav(); 
});

window.addEventListener("load", () => {
  initHorizontalScroll();
});
