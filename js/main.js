const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');
const overlay = document.querySelector('#overlay');

// Função para abrir/fechar
function toggleMenu() {
    navBar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Opcional: trava o scroll do corpo quando o menu abre
    document.body.style.overflow = navBar.classList.contains('active') ? 'hidden' : 'initial';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em um link (bom para UX)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'initial';
    });
});