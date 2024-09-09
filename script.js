// Funzione per far apparire le immagini quando vengono visualizzate
function revealImages() {
    const images = document.querySelectorAll('.vertical-image');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Punto di trigger dell'animazione

    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < windowHeight - revealPoint) {
            image.classList.add('appear');
        } else {
            image.classList.remove('appear');
        }
    });
}

// Aggiunge l'evento di scroll per far apparire le immagini
window.addEventListener('scroll', revealImages);
