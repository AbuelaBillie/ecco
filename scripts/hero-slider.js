import {entradas} from "./hero-entradas.js"

window.addEventListener("load", function () {
    let container = document.getElementById('noticias');
    
    container.innerHTML = ``
    let entrada = ``
    entradas.forEach(element =>{
        entrada += `<div class="noticia">
        <img src="${element.image}" alt="${element["desc-img"]}">
    </div>`
    })

    container.innerHTML = entrada

    hero_slider()
})

function hero_slider() {
    let indiceNoticia = 0;
    let noticias = document.getElementById('noticias');
    let indicadoresContainer = document.getElementById('indicadores');
    let intervalo;

    function cambiarNoticia(index) {
        noticias.style.transform = 'translateX(' + (-index * 100) + '%)';
        actualizarIndicadores(index);
    }

    function actualizarIndicadores(index) {
        let indicadores = document.querySelectorAll('.indicador');
        indicadores.forEach(function (indicador, i) {
            indicador.classList.remove('activo');
            if (i === index) {
                indicador.classList.add('activo');
            }
        });
    }

    function iniciarCarrusel() {
        intervalo = setInterval(function () {
            indiceNoticia = (indiceNoticia + 1) % noticias.children.length;
            cambiarNoticia(indiceNoticia);
        }, 4000);
    }

    function detenerCarrusel() {
        clearInterval(intervalo);
    }

    function clicIndicador(index) {
        detenerCarrusel();
        indiceNoticia = index;
        cambiarNoticia(indiceNoticia);
        iniciarCarrusel();
    }

    // Crear indicadores
    for (let i = 0; i < noticias.children.length; i++) {
        let indicador = document.createElement('div');
        indicador.classList.add('indicador');
        indicador.addEventListener('click', clicIndicador.bind(null, i));
        indicadoresContainer.appendChild(indicador);
    }

    iniciarCarrusel();
}
