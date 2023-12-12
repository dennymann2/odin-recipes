document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    document.querySelector('.menu-icon').addEventListener('click', function() {
        var nav = document.querySelector('.main-nav');
        nav.classList.toggle('is-active'); // Toggles the 'is-active' class on the '.main-nav'
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