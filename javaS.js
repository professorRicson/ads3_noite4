let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carrossel-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }
l
    slides[currentSlideIndex].style.display = 'block';

    const indicators = document.getElementsByClassName('ponto-carrossel');
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(' active', '');
    }
    indicators[currentSlideIndex].className += ' active';
}

function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlide(n - 1);
}

showSlide(currentSlideIndex);