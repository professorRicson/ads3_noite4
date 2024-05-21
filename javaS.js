const carousel = document.querySelector('.posts-carousel .carousel');
    let posX1 = 0;
    let posX2 = 0;
    let posInitial;
    let posFinal;
    const threshold = 100;
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('touchend', dragEnd);
    carousel.addEventListener('mousemove', dragAction);
    carousel.addEventListener('touchmove', dragAction);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = carousel.offsetLeft;
        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;
        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        carousel.style.left = `${carousel.offsetLeft - posX2}px`;
    }

    function dragEnd() {
        posFinal = carousel.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            carousel.style.left = `${-threshold}px`;
        } else if (posFinal - posInitial > threshold) {
            carousel.style.left = `${threshold}px`;
        } else {
            carousel.style.left = '0px';
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }