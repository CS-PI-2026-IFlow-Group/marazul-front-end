import { initHorizontalScroll } from './modules/scroll-gallery.js';
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import {initActiveNav} from "./modules/activeNav.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initAboutCarousel();
  loadFooter();

  setTimeout(() => {
    initActiveNav();
  }, 50);
});

window.addEventListener('load', () => {
    initHorizontalScroll();
});
