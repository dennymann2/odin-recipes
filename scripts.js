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

document.addEventListener('mousemove', function(e) {
    const container = document.querySelector('.container');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = mouseY / centerY * 10;
    const rotateY = mouseX / centerX * -10;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('body');
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});
