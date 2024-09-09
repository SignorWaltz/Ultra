let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-image');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentIndex].style.display = "block";
}

function moveCarousel(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

// Inizializza il carosello
showSlide(currentIndex);
