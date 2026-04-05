const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');
  overlay.classList.toggle('active');
  menuToggle.classList.toggle('active'); // 🔥 ISSO FAZ VIRAR X
});

overlay.addEventListener('click', () => {
  navBar.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('active'); // volta pro hambúrguer
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-link').forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});