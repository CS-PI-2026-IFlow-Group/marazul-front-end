import { initHorizontalScroll } from './modules/scroll-gallery.js';
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initFAQ } from './modules/faq.js';
import { initModal } from './modules/modal.js';
import { initI18n, initLangSwitcher } from "./modules/i18n.js";
import { initContactPage } from "./pages/contact.js";
import { initActiveNav } from './modules/activeNav.js';

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  initAboutCarousel();
  initFAQ();
  initActiveNav();
  initLangSwitcher();
  await initI18n();
  initContactPage();
  initModal();

});

// document.addEventListener("DOMContentLoaded", () => {

// });

window.addEventListener("load", () => {
  initHorizontalScroll();
});