document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    document.querySelector('.menu-icon').addEventListener('click', function() {
        var nav = document.querySelector('.main-nav');
        if (nav.style.transform === 'translateX(0%)') {
            nav.style.transform = 'translateX(100%)';
            nav.style.opacity = '0';
        } else {
            nav.style.transform = 'translateX(0%)';
            nav.style.opacity = '1';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});