import {  } from "../header-nav-scroll.js";
import { ofertasActivas } from "../DB/get-productos.js";
import { formatPrecio } from "../UTILS/format-precio.js";
window.addEventListener("load", async function () {
    let contenedor_productos = document.getElementById('contenedor-all-productos');
    
    contenedor_productos.innerHTML = ``

    let producto = ``

    try {
        const productos = await ofertasActivas()
        
        productos.forEach(element => {
                producto += `
                <a class="producto" id="all-prod-${element.id}" href="./producto.html?id=${element.id}">
                    <img class="producto-img" src="../../resc/${element.imagen_principal}" alt="">
                    <span class="${element.envio_gratis == 1 ? "" : "invisible"}">Envío gratis</span>
                    <h4>${element.nombre}</h4>
                    <p>${formatPrecio(element.precio)}</p>
                    <p class="producto-off">${formatPrecio(element.precio - (Math.floor((element.precio * element.off) / 100)))}</p>
                    <button>Comprar</button>
                </a>`
        })
    
        contenedor_productos.innerHTML = producto
    } catch (error) {
        return error
    }
    
})
