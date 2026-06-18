import { initHorizontalScroll } from "./modules/scroll-gallery.js";
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initActiveNav } from "./modules/activeNav.js";
import { initFAQ } from "./modules/faq.js";
import { initI18n, initLangSwitcher } from "./modules/i18n.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();

  initAboutCarousel();
  initFAQ();
  initActiveNav();
  initLangSwitcher();
  await initI18n();
});

window.addEventListener("load", () => {
  initHorizontalScroll();
});
