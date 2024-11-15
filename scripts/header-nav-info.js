import { categoriasDelHome } from "./DB/get-categorias.js";
import { dominio } from "../rutas.js";

export async function listarMenu() {
    const submenu = document.getElementById("header-nav-bar-submenu");

    submenu.innerHTML = ``
    
    let categoria = ``
    
    try {
        const categorias = await categoriasDelHome()
    
        categorias.forEach(element => {
            categoria += `<li><a href="${dominio}/pages/productos.html?id=${element.id}&cat=${element.nombre}">${element.nombre}</a></li>`
        })
    
        submenu.innerHTML = `<li><a href="${dominio}/index.html">Inicio</a></li><li><a href="${dominio}/pages/contacto.html">Contacto</a></li><li><a href="${dominio}/pages/productos.html">Productos</a></li><li><a href="${dominio}/pages/ofertas.html">Ofertas</a></li>` + categoria
    } catch (error) {
        return error
    }
}



