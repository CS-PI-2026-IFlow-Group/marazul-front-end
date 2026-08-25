export function initAboutCarousel() {
  const carouselElement = document.querySelector("#aboutCarousel");

  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      touch: true,
      pause: "hover",
      ride: "carousel",
    });
    carousel.cycle();
  }
}
