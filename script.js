let ultimaPosicion = window.scrollY;

window.addEventListener("scroll", () => {

    const menu = document.getElementById("menu");
    const posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicion) {
        menu.classList.add("oculto");
    } else {
        menu.classList.remove("oculto");
    }

    if (posicionActual > 50) {
        menu.classList.add("menu-scroll");
    } else {
        menu.classList.remove("menu-scroll");
    }

    ultimaPosicion = posicionActual;

});

document.addEventListener("mousemove", (e) => {

    const menu = document.getElementById("menu");

    if (e.clientY < 80) {
        menu.classList.remove("oculto");
    }

});
const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("seccion-animada", "visible");
        }

    });

}, {
    threshold: 0.15
});

secciones.forEach((seccion) => {
    seccion.classList.add("seccion-animada");
    observador.observe(seccion);
});