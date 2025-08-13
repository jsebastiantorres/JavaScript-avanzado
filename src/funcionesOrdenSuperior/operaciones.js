function ejecutarOperacion(a, b, operacion) {
    return operacion(a, b)
}

function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

console.log(ejecutarOperacion(5, 3, suma));
console.log(ejecutarOperacion(5, 3, resta));

