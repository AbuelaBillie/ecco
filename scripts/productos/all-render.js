import { } from "../header-nav-scroll.js";
import { productosActivos, productosActivosPorCategoria } from "../DB/get-productos.js";
import { formatPrecio } from "../UTILS/format-precio.js";
import { dominio } from "../../rutas.js";
window.addEventListener("load", async function () {
    const urlParams = new URLSearchParams(window.location.search);

    let contenedor_productos = document.getElementById('contenedor-all-productos');
    contenedor_productos.innerHTML = ``
    let contenedor_filtros_aplicados = document.getElementById('contenedor-filtros-aplicados');
    contenedor_filtros_aplicados.innerHTML = ``
    let producto = ``

    if (urlParams.has('id')) {
        const id = urlParams.get('id');
        const nombre_cat = urlParams.get('cat');

        try {
            const productos = await productosActivosPorCategoria(id)
    
            productos.forEach(element => {
                producto += `
                    <a class="producto" id="all-prod-${element.id}" href="./producto.html?id=${element.id}">
                        <img class="producto-img" src="../../resc/productos/${element.imagen_principal}" alt="">
                        <span class="${element.envio_gratis == 1 ? "" : "invisible"}">Envío gratis</span>
                        <h4>${element.nombre}</h4>
                        ${element.off == 0 ? "<p class='invisible'>-</p><p class='producto-off'>" + formatPrecio(element.precio) + "</p>" : '<p>$' + formatPrecio(element.precio) + '</p><p class="producto-off">$' + formatPrecio(element.precio - (Math.floor((element.precio * element.off) / 100))) + '</p>'}
                        <button>Comprar</button>
                    </a>`
            })
    
            contenedor_productos.innerHTML += producto

            contenedor_filtros_aplicados.innerHTML = `<button type="button" id="btn-cat-${id}">${nombre_cat}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M382.1 45.2c2.9-3.4 2.5-8.4-.9-11.3s-8.4-2.5-11.3 .9L192 243.7 14.1 34.8c-2.9-3.4-7.9-3.8-11.3-.9S-1 41.8 1.9 45.2L181.5 256 1.9 466.8c-2.9 3.4-2.5 8.4 .9 11.3s8.4 2.5 11.3-.9L192 268.3 369.9 477.2c2.9 3.4 7.9 3.8 11.3 .9s3.8-7.9 .9-11.3L202.5 256 382.1 45.2z"/></svg></button>`

            let btn_filtro_categoria = document.getElementById('btn-cat-'+id);
            btn_filtro_categoria.addEventListener("click",() =>{
                window.location.href =  `${dominio}/pages/productos.html`;
            })


        } catch (error) {
            return error
        }
        
    } else {
        try {
            const productos = await productosActivos()
    
            productos.forEach(element => {
                producto += `
                    <a class="producto" id="all-prod-${element.id}" href="./producto.html?id=${element.id}">
                        <img class="producto-img" src="../../resc/productos/${element.imagen_principal}" alt="">
                        <span class="${element.envio_gratis == 1 ? "" : "invisible"}">Envío gratis</span>
                        <h4>${element.nombre}</h4>
                        ${element.off == 0 ? "<p class='invisible'>-</p><p class='producto-off'>" + formatPrecio(element.precio) + "</p>" : '<p>$' + formatPrecio(element.precio) + '</p><p class="producto-off">$' + formatPrecio(element.precio - (Math.floor((element.precio * element.off) / 100))) + '</p>'}
                        <button>Comprar</button>
                    </a>`
            })
    
            contenedor_productos.innerHTML = producto
        } catch (error) {
            return error
        }
    }

})
