export function initHorizontalScroll() {
    const stickySection = document.querySelector('.horizontal-scroll-section');
    const scrollContainer = document.querySelector('.photos-container');

    if (!stickySection || !scrollContainer) return;

    const resetMobileLayout = () => {
        stickySection.style.height = '';
        scrollContainer.style.transform = '';
    };

    const setDesktopHeight = () => {
        const totalScroll = scrollContainer.scrollWidth - window.innerWidth + window.innerWidth * 0.10;
        const desiredHeight = window.innerHeight + totalScroll;
        stickySection.style.height = `${desiredHeight}px`;
    };

    const syncLayout = () => {
        if (window.innerWidth < 1024) {
            resetMobileLayout();
            return;
        }

        setDesktopHeight();
        handleScroll();
    };

    function handleScroll() {
        if (window.innerWidth < 1024) {
            resetMobileLayout();
            return;
        }

        const offsetTop = stickySection.offsetTop;
        const scrollY = window.scrollY;
        const sectionHeight = stickySection.offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollY >= offsetTop && scrollY <= (offsetTop + sectionHeight - windowHeight)) {
            const progress = (scrollY - offsetTop) / (sectionHeight - windowHeight);
            const paddingLeft = window.innerWidth * 0.10;
            const maxMove = scrollContainer.scrollWidth - window.innerWidth + paddingLeft;
            scrollContainer.style.transform = `translateX(-${progress * maxMove}px)`;
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncLayout);

    syncLayout();
}
