document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu?.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple progress bar animation
    document.querySelectorAll('.progress').forEach(bar => {
        setTimeout(() => {
            bar.style.transition = 'width 1s';
            bar.style.width = bar.getAttribute('style').match(/\d+/)[0] + '%';
        }, 200);
    });
});
