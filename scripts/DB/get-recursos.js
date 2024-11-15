import { api } from "../../rutas.js";
import { getAPI } from "../UTILS/get-API.js";

export async function imagenesPorProducto(id) {
    try {
        const datos = await getAPI(`${api}/img?prod=${id}`);
        return datos;
    } catch (error) {
        return error;
    }
}