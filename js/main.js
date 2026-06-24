import { initHorizontalScroll } from "./modules/scroll-gallery.js";
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initActiveNav } from "./modules/activeNav.js";
import { initFAQ } from "./modules/faq.js";
import { initContactPage } from "./pages/contact.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();

  initAboutCarousel();
  initFAQ();
  loadFooter();
  initActiveNav();
  initContactPage();
});

window.addEventListener("load", () => {
  initHorizontalScroll();
});
