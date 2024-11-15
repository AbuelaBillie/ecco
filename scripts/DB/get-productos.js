import { api } from "../../rutas.js";
import { getAPI } from "../UTILS/get-API.js";

export async function productosDelHome() {
    try {
        const datos = await getAPI(`${api}/prod/home`);
        return datos;
    } catch (error) {
        return error;
    }
}

export async function productosActivos() {
    try {
        const datos = await getAPI(`${api}/prod/all-active`);
        return datos;
    } catch (error) {
        return error;
    }
}

export async function ofertasActivas() {
    try {
        const datos = await getAPI(`${api}/prod/all-off-active`);
        return datos;
    } catch (error) {
        return error;
    }
}

export async function productoPorID(id) {
    try {
        const datos = await getAPI(`${api}/prod/id?id=${id}`);
        return datos;
    } catch (error) {
        return error;
    }
}

export async function productosActivosPorCategoria(id) {
    try {
        const datos = await getAPI(`${api}/prod/cat?id=${id}`);
        return datos;
    } catch (error) {
        return error;
    }
}