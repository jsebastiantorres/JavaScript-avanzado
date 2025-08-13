
function aplicarDescuentos(a, calcularDescuento) {
    return calcularDescuento(a)
}


function calcularDescuento(a) {
    let porcentaje = 10;
    let totalPagar = 0;
    if (a.length >= 3) {
        porcentaje = 30;
        totalPagar = a.map(precio => (precio * porcentaje) / 100);
    } else if (a.length == 2) {
        porcentaje = 20;
        totalPagar = a.map(precio => (precio * porcentaje) / 100);
    } else {
        porcentaje = 10;
        totalPagar = a.map(precio => (precio * porcentaje) / 100);
    }

    totalPrecio = totalPagar.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return totalPrecio
}


var valores = [100, 100, 100]

var factura = calcularDescuento(valores);
console.log(factura);
