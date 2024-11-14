import { api } from "../../rutas.js";
import { getAPI } from "../UTILS/get-API.js";

export async function rutaCategoria(id) {
    try {
        const datos = await getAPI(`${api}/cat/ruta?id=${id}`);
        return datos;
    } catch (error) {
        return error;
    }
}