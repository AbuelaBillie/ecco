let cantidad = 200
console.log("unidades_totales:", cantidad);

let precio = 200 
console.log("precio_basico:", precio);

console.log("----------------------------");


if (cantidad > 100) {
    unidades_super_mayoristas = cantidad - 100
    console.log("unidades_super_mayoristas:", unidades_super_mayoristas);
    precio_super_mayorista = precio - ((precio * 25) / 100)
    console.log("precio_super_mayorista:", precio_super_mayorista);
    total_compra_super_mayorista = unidades_super_mayoristas * precio_super_mayorista
    console.log("total_compra_super_mayorista:", total_compra_super_mayorista);
    console.log("----------------------------");
    unidades_mayorista = 88
    console.log("unidades_mayorista:", unidades_mayorista);
    precio_mayorista = precio - ((precio * 10) / 100)
    console.log("precio_mayorista:", precio_mayorista);
    total_compra_mayorista = unidades_mayorista * precio_mayorista
    console.log("total_compra_mayorista:", total_compra_mayorista);
    console.log("----------------------------");
    unidades_simples = 12
    console.log("unidades_simples:", unidades_simples);
    precio_simple = precio
    console.log("precio_simple:", precio_simple);
    total_compra_simple = unidades_simples * precio
    console.log("total_compra_simple:", total_compra_simple);
    console.log("----------------------------");
    total_compra = total_compra_super_mayorista + total_compra_mayorista + total_compra_simple
    console.log("total_compra:", total_compra);
} else if (cantidad >= 13 && cantidad <= 100) {
    unidades_mayorista = cantidad - 12
    console.log("unidades_mayorista:", unidades_mayorista);
    precio_mayorista = precio - ((precio * 10) / 100)
    console.log("precio_mayorista:", precio_mayorista);
    total_compra_mayorista = unidades_mayorista * precio_mayorista
    console.log("total_compra_mayorista:", total_compra_mayorista);
    console.log("----------------------------");
    unidades_simples = 12
    console.log("unidades_simples:", unidades_simples);
    precio_simple = precio
    console.log("precio_simple:", precio_simple);
    total_compra_simple = unidades_simples * precio
    console.log("total_compra_simple:", total_compra_simple);
    console.log("----------------------------");
    total_compra = total_compra_mayorista + total_compra_simple
    console.log("total_compra:", total_compra);
}else{
    unidades_simples = cantidad
    console.log("unidades_simples:", unidades_simples);
    precio_simple = precio
    console.log("precio_simple:", precio_simple);
    total_compra_simple = unidades_simples * precio
    console.log("total_compra_simple:", total_compra_simple);
    console.log("----------------------------");
    total_compra = total_compra_simple
    console.log("total_compra:", total_compra);
}