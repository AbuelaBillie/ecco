import { getAPI } from "../UTILS/get-API.js";

export async function productosDelHome() {
    try {
        const datos = await getAPI("http://localhost:8080/prod/home");
        return datos;
    } catch (error) {
        return error;
    }
}
