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

// Defina a data de destino para a próxima parada
const dataDestino = new Date('2025-12-31T23:59:59').getTime();

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = dataDestino - agora;

    if (distancia < 0) {
        document.getElementById('dias').innerText = '00';
        document.getElementById('horas').innerText = '00';
        document.getElementById('minutos').innerText = '00';
        document.getElementById('segundos').innerText = '00';
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = formatarTempo(dias);
    document.getElementById('horas').innerText = formatarTempo(horas);
    document.getElementById('minutos').innerText = formatarTempo(minutos);
    document.getElementById('segundos').innerText = formatarTempo(segundos);
}

// Função para formatar o tempo com dois dígitos
function formatarTempo(tempo) {
    return tempo < 10 ? '0' + tempo : tempo;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);
