export function initActiveNav() {
  const links = document.querySelectorAll(
    ".nav-links a, .mobile-menu a"
  );

  const currentPath = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();

    let isActive = false;

    // CASO 1: mesma página
    if (linkPath === currentPath) {
      isActive = true;
    }

    // CASO 2: HOME (index ou vazio)
    const isHomePage =
      currentPath === "" || currentPath === "index.html";

    const isHomeLink =
      linkPath === "" || linkPath === "index.html";

    if (isHomePage && isHomeLink) {
      isActive = true;
    }

    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}