var options = {
    selector: '#particles',
    maxParticles: 100,
    sizeVariations: 4,
    speed: 0.8,
    color: '#20a2ff',
    minDistance: 80,
    connectParticles: true
};

window.onload = function () {
    Particles.init(options);
};

function handleForm() {
    document.getElementsByClassName('form')[0].style.display = 'none';
    document.getElementsByClassName('result')[0].style.display = 'block';
}