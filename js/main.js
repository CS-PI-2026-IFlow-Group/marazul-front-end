const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');
const overlay = document.querySelector('#overlay');

function toggleMenu() {
    navBar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    document.body.style.overflow = navBar.classList.contains('active') ? 'hidden' : 'initial';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'initial';
    });
});