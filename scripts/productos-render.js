import { productos } from "./DB/productos-home.js";
import { formatPrecio } from "./UTILS/format-precio.js";
window.addEventListener("load", function () {
    let contenedor_productos = document.getElementById('contenedor-all');
    let contenedor_ofertas = document.getElementById('contenedor-productos');

    contenedor_productos.innerHTML = ``
    contenedor_ofertas.innerHTML = ``

    let producto = ``
    let oferta = ``

    productos.forEach(element => {
        if (element.activo == 1 && element.home == 1 && element.off == 0) {
            producto += `<a class="producto" id="all-prod-${element.id}" href="../pages/productos.html">
                <img class="producto-img" src="./resc/${element.imagenes[0]}" alt="">
                <span class="${element.envio_gratis == 1 ? "" : "invisible"}">Envío gratis</span>
                <h4>${element.nombre}</h4>
                <p>$${formatPrecio(element.precio)}</p>
                <button>Comprar</button>
              </a>`
        } else if (element.activo == 1 && element.home == 1) {
            oferta += `<a class="producto" id="off-prod-${element.id}" href="../pages/productos.html">
            <img class="producto-img" src="./resc/${element.imagenes[0]}" alt="">
            <span class="${element.envio_gratis == 1 ? "" : "invisible"}">Envío gratis</span>
            <h4>${element.nombre}</h4>
            <p>$${formatPrecio(element.precio)}</p>
            <p class="producto-off">$${formatPrecio(element.precio - (Math.floor((element.precio * element.off) / 100)))}</p>
            <button>Comprar</button>
          </a>`
        }
    })
    contenedor_ofertas.innerHTML = oferta

    contenedor_productos.innerHTML = producto
})
