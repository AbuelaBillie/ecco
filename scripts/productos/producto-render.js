import {  } from "../header-nav-scroll.js";
import { dominio } from "../../rutas.js";
import { productoPorID, productosDelHome } from "../DB/get-productos.js";
import { formatPrecio } from "../UTILS/format-precio.js";
window.addEventListener("load", async function () {
    //PRODUCTO EXPANDIDO
    const urlParams = new URLSearchParams(window.location.search);
    const id_producto = urlParams.get('id');
    let contenedor_imagenes = document.getElementById('contenedor-imagenes');
    let producto_title = document.getElementById('producto-title');
    let producto_precio = document.getElementById('producto-precio');
    let producto_off = document.getElementById('producto-off');
    let producto_descripcion = document.getElementById('producto-descripcion');
    try {
        const producto = await productoPorID(id_producto)
        contenedor_imagenes.innerHTML = `<img src="../resc/${producto.imagen_principal}" alt="">`
        producto_title.innerHTML = producto.nombre
        if (producto.estado == 1 && producto.off == 0) {
            producto_off.innerHTML = ""
            producto_precio.innerHTML = `$${formatPrecio(producto.precio)}`
        }else{
            producto_off.innerHTML = `$${formatPrecio(producto.precio)}`
            producto_precio.innerHTML = `$${formatPrecio(producto.precio - (Math.floor((producto.precio * producto.off) / 100)))}`
        }
        producto_descripcion.innerHTML = producto.descripcion
    } catch (error) {
        console.log(error);
        // window.location.href =  `${dominio}/index.html`;
    }


    //OFERTAS
    let contenedor_ofertas = document.getElementById('contenedor-productos');
    contenedor_ofertas.innerHTML = ``
    let oferta = ``

    try {
        const productos = await productosDelHome()

        productos.forEach(element => {
            if (element.estado == 1 && element.home == 1 && element.off != 0) {
                oferta += `<a class="producto" id="off-prod-${element.id}" href="./producto.html?id=${element.id}">
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
    } catch (error) {
        return error
    }
    
})
