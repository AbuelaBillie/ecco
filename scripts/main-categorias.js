import { categoriasDelHome } from "./DB/get-categorias.js";
import { dominio } from "../rutas.js";


const contenedor_categorias = document.getElementById("contenedor-categorias");

contenedor_categorias.innerHTML = ``

let categoria = ``

try {
    const categorias = await categoriasDelHome()

    categorias.forEach(element => {
        categoria += `
            <a href="${dominio}/pages/productos.html?id=${element.id}&cat=${element.nombre}" class="categoria">
                <h3>${element.nombre}</h3>
                <img class="categoria-img" src="./resc/categorias/${element.imagen}" alt="${element.nombre}">
            </a>`
    })

    contenedor_categorias.innerHTML = categoria
} catch (error) {
    console.log(error);
    
}
