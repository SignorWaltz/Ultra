let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-image');
    const totalSlides = slides.length;

    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 3;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Mostra tre immagini per volta
    for (let i = currentIndex; i < currentIndex + 3 && i < totalSlides; i++) {
        slides[i].style.display = "block";
    }
}

function moveCarousel(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

// Inizializza il carosello
showSlide(currentIndex);
