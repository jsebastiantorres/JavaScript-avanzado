//Ejercicio 1: Callback básico
// Objetivo: Crear una función que reciba un número y un callback para procesarlo.
// Llama aplicarOperacion pasando 5 y una función que imprima el cuadrado del número.

function aplicarOperacion(num, operacion) {
    let resultado = operacion(num);
    return resultado
}

function cuadrado(num) {
    return num ** 2;
}

function multiplicar(num) {
    return num * 2;
}

var pruebaCallback = aplicarOperacion(5, cuadrado);
var pruebaCallback2 = aplicarOperacion(5, multiplicar);

console.log(pruenaCallback);
console.log(pruenaCallback2);


//Ejercicio 2: Callback con Array
// Objetivo: Usar un callback para transformar los elementos de un array.
// Llama a transformarArray con un callback que multiplique cada número por 10.

function transformar(arr, operacion) {
    return operacion(arr)
}

function transformarArray(arr) {
    return arr.map(e => e * 10)
}

const numeros = [1, 2, 3, 4, 5];

var pruebaTransformar = transformar(numeros, transformarArray);
console.log(pruenaTransformar);


// Ejercicio 3: Simulación asincrónica
// Objetivo: Ejecutar un callback después de una espera simulada.
// Simula espera con setTimeout y luego ejecuta el callback con el mensaje recibido
// Saluda y despidete 5 segundos despues

function saludar(nombre, despedir) {
    let mensaje = "Hola " + nombre;
    console.log(mensaje);
    setTimeout(despedir, 5000, nombre);
}

function despedir(nombre) {
    let mensaje = "Adios " + nombre;
    console.log(mensaje);
    return mensaje
}

var nombres = "Juan Sebastián"
var saludo = saludar(nombres, despedir)
console.log(saludo);





