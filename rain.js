function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.background = getRandomRainbowColor();
    document.body.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 1000); // Raindrop lasts 1 second on the screen
}

function getRandomRainbowColor() {
    const colors = ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93']; // Rainbow colors
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createRaindrop, 50); // Create a new raindrop every 50ms
