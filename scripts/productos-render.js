import { productos } from "./DB/productos.js";
import { formatPrecio } from "./UTILS/format-precio.js";
window.addEventListener("load", function () {
    let contenedor_productos = document.getElementById('contenedor-all');
    
    contenedor_productos.innerHTML = ``
    let producto = ``
    productos.forEach(element =>{
        producto += `<a class="producto" id="all-prod-${element.id}" href="">
            <img class="producto-img" src="/../resc/${element.imagenes[0]}" alt="">
            <span class="${element.envio_gratis == 1?"":"invisible"}">Envío gratis</span>
            <h4>${element.nombre}</h4>
            <p>$${formatPrecio(element.precio)}</p>
            <button>Comprar</button>
          </a>`
    })

    contenedor_productos.innerHTML = producto


})