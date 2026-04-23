import { loadHeader } from "./components/header.js";
import { initAboutCarousel } from "./index/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initAboutCarousel();
});
