import { initHorizontalScroll } from './modules/scroll-gallery.js';
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initFAQ } from './modules/faq.js';
import { initModal } from './modules/modal.js';


document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initAboutCarousel();
  initFAQ();
  initModal();
  loadFooter();
});

window.addEventListener('load', () => {
    initHorizontalScroll();
});