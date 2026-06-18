import { initHorizontalScroll } from "./modules/scroll-gallery.js";
import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";
import { loadFooter } from "./components/footer.js";
import { initActiveNav } from "./modules/activeNav.js";
import { initFAQ } from "./modules/faq.js";
import { initContactPage } from "./pages/contact.js";
import { initFeedbackCarousel } from "./index/testimonials-carousel.js"

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();

  initAboutCarousel();
  initFAQ();
  loadFooter();
  initActiveNav();
  initContactPage();
  initFeedbackCarousel();
});

window.addEventListener("load", () => {
  initHorizontalScroll();
});
