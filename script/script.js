function desvia() {
    let btn = document.querySelector(".nao");
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(0, 100);
    btn.style.left = geraPosicao(0, 100);
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "%";
}