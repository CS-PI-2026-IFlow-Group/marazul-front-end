import { initHorizontalScroll } from './modules/scroll-gallery.js';
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initAboutCarousel();
  loadFooter();
});

window.addEventListener('load', () => {
    initHorizontalScroll();
});