export function initHorizontalScroll() {
    if (window.innerWidth < 1024) return;

    const stickySection = document.querySelector('.horizontal-scroll-section');
    const scrollContainer = document.querySelector('.photos-container');

    if (!stickySection || !scrollContainer) return;
    console.log('initHorizontalScroll chamado');
    console.log('stickySection:', stickySection);
    console.log('scrollContainer:', scrollContainer);
    console.log('scrollWidth:', scrollContainer?.scrollWidth);
    console.log('innerWidth:', window.innerWidth);
    const handleScroll = () => {
        const offsetTop = stickySection.offsetTop;
        const scrollY = window.scrollY;
        const sectionHeight = stickySection.offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollY >= offsetTop && scrollY <= (offsetTop + sectionHeight - windowHeight)) {
            const progress = (scrollY - offsetTop) / (sectionHeight - windowHeight);
            const maxMove = scrollContainer.scrollWidth - window.innerWidth;
            scrollContainer.style.transform = `translateX(-${progress * maxMove}px)`;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
}