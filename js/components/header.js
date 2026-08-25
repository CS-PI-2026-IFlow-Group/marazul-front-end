export async function loadHeader() {
  try {
    const path = "/components/header.html";

    const response = await fetch(path);
    const data = await response.text();

    document.getElementById("header").innerHTML = data;

    initHeader();
  } catch (error) {
    console.error("Erro ao carregar header:", error);
  }
}
function initHeader() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}