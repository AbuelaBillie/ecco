import {  } from "../header-nav-scroll.js";
import { productosDelHome } from "../DB/get-productos.js";
import { formatPrecio } from "../UTILS/format-precio.js";
window.addEventListener("load", async function () {
    let contenedor_ofertas = document.getElementById('contenedor-productos');
    contenedor_ofertas.innerHTML = ``
    let oferta = ``

    try {
        const productos = await productosDelHome()

        productos.forEach(element => {
            if (element.estado == 1 && element.home == 1 && element.off != 0) {
                oferta += `<a class="producto" id="off-prod-${element.id}" href="./pages/producto.html">
                <img class="producto-img" src="../resc/${element.imagen_principal}" alt="">
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
    } catch (error) {
        return error
    }
    
})
