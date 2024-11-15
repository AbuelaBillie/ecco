import { } from "../header-nav-scroll.js";
import { dominio } from "../../rutas.js";
import { productoPorID, productosDelHome } from "../DB/get-productos.js";
import { imagenesPorProducto } from "../DB/get-recursos.js";
import { rutaCategoria } from "../DB/get-categorias.js";
import { formatPrecio } from "../UTILS/format-precio.js";
window.addEventListener("load", async function () {
    //PRODUCTO EXPANDIDO
    const urlParams = new URLSearchParams(window.location.search);
    const id_producto = urlParams.get('id');
    let producto_tags = document.getElementById('producto-tags');
    let producto_title = document.getElementById('producto-title');
    let producto_precio = document.getElementById('producto-precio');
    let producto_off = document.getElementById('producto-off');
    let producto_descripcion = document.getElementById('producto-descripcion');
    try {
        const producto = await productoPorID(id_producto)
        const categorias = await rutaCategoria(producto.categoria.id)

        let tag = ""
        categorias.forEach(element => {
            tag += `<span> - <a href="./productos.html?id=${element.id}&cat=${element.nombre}">${element.nombre}</a></span>`
        });
        producto_tags.innerHTML = '<span><a href="./productos.html">Productos</a></span>' + tag

        producto_title.innerHTML = producto.nombre
        if (producto.estado == 1 && producto.off == 0) {
            producto_off.innerHTML = ""
            producto_precio.innerHTML = `$${formatPrecio(producto.precio)}`
        } else {
            producto_off.innerHTML = `$${formatPrecio(producto.precio)}`
            producto_precio.innerHTML = `$${formatPrecio(producto.precio - (Math.floor((producto.precio * producto.off) / 100)))}`
        }
        producto_descripcion.innerHTML = producto.descripcion

        try {
            let imagenes = await imagenesPorProducto(id_producto)
            const contenedorImagenes = document.getElementById("contenedor-imagenes");
            
            if (imagenes == "") {
                contenedorImagenes.innerHTML = `<img src="../resc/productos/${producto.imagen_principal}" alt="">`
            }else{
                let imagenActual = 0;

                const indicadores = document.getElementById("indicadores");
    
                function cargarCarrousel() {
                    // Limpiar el contenedor de imágenes y los indicadores
                    contenedorImagenes.innerHTML = "";
                    indicadores.innerHTML = "";
        
                    // Crear las imágenes y agregarlas al contenedor
                    imagenes.forEach((imagen, index) => {
                        const imgElement = document.createElement("img");
                        imgElement.src = `../resc/productos/${imagen.ruta}`;
                        imgElement.alt = `Imagen ${imagen.id}`;
                        imgElement.classList.add("imagen-carrousel");
        
                        // Agregar la imagen al contenedor
                        contenedorImagenes.appendChild(imgElement);
        
                        // Crear los indicadores
                        const indicador = document.createElement("div");
                        indicador.classList.add("indicador");
                        if (index === imagenActual) {
                            indicador.classList.add("activo");
                        }
        
                        // Agregar el indicador al contenedor de indicadores
                        indicadores.appendChild(indicador);
        
                        // Agregar evento para cambiar imagen al hacer clic en el indicador
                        indicador.addEventListener("click", () => cambiarImagen(index));
                    });
        
                    // Inicializar el carrousel con la imagen actual
                    actualizarImagen();
                }
        
                
                function cambiarImagen(indice) {
                    imagenActual = indice;
                    actualizarImagen();
                }
        
        
                function actualizarImagen() {
                    const imagenesCarrousel = document.querySelectorAll(".imagen-carrousel");
                    const todosLosIndicadores = document.querySelectorAll(".indicador");
        
                    // Mover las imágenes según la imagen actual
                    imagenesCarrousel.forEach((img, index) => {
                        img.style.transform = `translateX(-${imagenActual * 100}%)`;
                    });
        
                    // Actualizar los indicadores
                    todosLosIndicadores.forEach((indicador, index) => {
                        indicador.classList.remove("activo");
                        if (index === imagenActual) {
                            indicador.classList.add("activo");
                        }
                    });
                }
        
                
                function habilitarDeslizamiento() {
                    let startX;
                    contenedorImagenes.addEventListener("touchstart", (e) => {
                        startX = e.touches[0].clientX;
                    });
        
                    contenedorImagenes.addEventListener("touchend", (e) => {
                        const endX = e.changedTouches[0].clientX;
                        if (startX - endX > 50) {
                            // Deslizar a la derecha (siguiente imagen)
                            siguienteImagen();
                        } else if (endX - startX > 50) {
                            // Deslizar a la izquierda (imagen anterior)
                            imagenAnterior();
                        }
                    });
                }
        
               
                function siguienteImagen() {
                    imagenActual = (imagenActual + 1) % imagenes.length;
                    actualizarImagen();
                }
        
               
                function imagenAnterior() {
                    imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
                    actualizarImagen();
                }
    
                cargarCarrousel();
                habilitarDeslizamiento();
            }
        } catch (error) {
            console.log("Error al cargar las imágenes");
            
        }

    } catch (error) {
        window.location.href = `${dominio}/index.html`;
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
                <img class="producto-img" src="../resc/productos/${element.imagen_principal}" alt="">
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
