document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 2s ease-in-out';
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('.main-nav');
    if (nav.style.right === '0px') {
        nav.style.right = '-250px';
        nav.style.opacity = '0';
    } else {
        nav.style.right = '0px';
        nav.style.opacity = '1';
    }
});
