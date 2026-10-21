export async function loadFooter() {
  try {
    const path = "/components/footer.html";

    const response = await fetch(path);
    const data = await response.text();

    document.getElementById("footer").innerHTML = data;

    initFooter();
  } catch (error) {
    console.error("Erro ao carregar footer:", error);
  }
}

function initFooter() {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}