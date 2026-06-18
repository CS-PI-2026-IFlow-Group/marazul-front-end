import { initHorizontalScroll } from './modules/scroll-gallery.js';
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initFAQ } from './modules/faq.js';
import { initModal } from './modules/modal.js';
import { initContactPage } from "./pages/contact.js";
import { initActiveNav } from './modules/activeNav.js';

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();

});

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initAboutCarousel();
  initFAQ();
  initActiveNav();
  initContactPage();
  loadFooter();
  initModal();


});

window.addEventListener('load', () => {
    initHorizontalScroll();
})