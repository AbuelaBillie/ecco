export function formatPrecio(precio) {
    if (precio === null || precio === undefined || precio === '') {
        return '-';
    }
    if (precio.toString().length == 1) {
        return `0,0${precio}`;
    }
    if (precio.toString().length == 2) {
        return `0,${precio}`;
    }
    if (precio.toString().length > 2) {
        let entero = precio.toString().slice(0, -2)
        let decimal = precio.toString().slice(-2)

        let cant = 0
        let entero_reverse = ""
        Array.from(entero).reverse().forEach(element => {
            cant += 1
            entero_reverse += element
            if (cant == 3) {
                entero_reverse += "."
                cant = 0
            }
        });
        let format_entero = Array.from(entero_reverse).reverse().join("")
        let format_precio = ""
        if (decimal == "00") {
            format_precio = format_entero
        } else {
            format_precio = format_entero + "," + decimal
        }

        if (format_precio.startsWith('.')) {
            format_precio = format_precio.slice(1);
        }

        return format_precio
    }
}