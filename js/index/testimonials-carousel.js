export function initFeedbackCarousel() {
  const track = document.querySelector(".testimonial-track");

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!track || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  });
}