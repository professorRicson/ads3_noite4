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

document.addEventListener('DOMContentLoaded', () => {
    function atualizarContagemRegressiva() {
        const dataEvento = new Date('2024-06-02T10:00:00'); 
        const elementoDias = document.getElementById('dias');
        const elementoHoras = document.getElementById('horas');
        const elementoMinutos = document.getElementById('minutos');
        const elementoSegundos = document.getElementById('segundos');

        function atualizar() {
            const agora = new Date();
            const diferencaTempo = dataEvento - agora;

            const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

            elementoDias.textContent = dias >= 0 ? dias : 0;
            elementoHoras.textContent = horas >= 0 ? horas : 0;
            elementoMinutos.textContent = minutos >= 0 ? minutos : 0;
            elementoSegundos.textContent = segundos >= 0 ? segundos : 0;
        }

        atualizar();
        setInterval(atualizar, 1000);
    }

    atualizarContagemRegressiva();
});