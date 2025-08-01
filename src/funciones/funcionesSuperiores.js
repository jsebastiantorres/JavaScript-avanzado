//Funciones de orden superior

// Ejercicios
// filtrar pares
// filtrar impares
// filtrar de menor a mayor
// filtrar de mayor a menor
// ordenar mayor a menor
// ordenar menor a mayor
// filtrar mayores a 5
// filtrar menores que 5


// funcion de filtrado principal (funcion de orden superior)
function filtroPrincipal(arr, filtro) {
    let arrayFiltrado = [];
    for (let i = 0; i < arr.length; i++) {
        filtro(arr[i]) ? arrayFiltrado.push(arr[i]) : null
    }

    return arrayFiltrado;
}


// filtrar pares
function pares(x) {
    return x % 2 === 0;
}


// filtrar impares
function impares(x) {
    return x % 2 !== 0;
}

// array de prueba
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// llamando a pares
var arrayFinalPares = filtroPrincipal(arrayNumeros, pares);
console.log(arrayFinalPares);

// llamando a impares
var arrayFinalImpares = filtroPrincipal(arrayNumeros, impares);
console.log(arrayFinalImpares);


// funcion de ordenamiento principal (funcion de orden superior)
function ordenamientoPrincipal(arr, filtroOrden) {
    let arrayOrdenado = filtroOrden(arr);
    return arrayOrdenado;
}

// ordenando de mayor a menor
function mayorMenor(arr) {
    let arrayOrdenado = arr.sort((a, b) => b - a);
    return arrayOrdenado
}

// ordenando de menor a mayor
function menorMayor(arr) {
    let arrayOrdenado = arr.sort((a, b) => a - b);
    return arrayOrdenado
}



// array de prueba numeros
var numerosDesorden = [1, 2, 3, 6, 7, 8, 9, 0, 4, 8, 5, 1];



// array mayores
var elementosMayorMenor = ordenamientoPrincipal(numerosDesorden, mayorMenor);
console.log(`numeros de mayor a menor: ${elementosMayorMenor}`);

// array menores
var elementosMenorMayor = ordenamientoPrincipal(numerosDesorden, menorMayor);
console.log(`numeros de menor a mayor: ${elementosMayorMenor}`);



// Ordenamiento alfabetico
function ordenandoLetras(arr, orden) {
    let letrasOrdenadas = orden(arr);
    return letrasOrdenadas
}

// Z - A
function descendente(arr) {
    let arrDescendente = arr.sort().reverse();
    return arrDescendente
}

// A - Z
function ascendente(arr) {
    let arrAscendente = arr.sort();
    return arrAscendente
}

// array de prueba letras
var letras = ["c", "a", "b", "fi", "h", "d", "fa", "g"];

// arra letras Z-A
var letrasAscendente = ordenandoLetras(letras, descendente);
console.log(letrasAscendente);

// arra letras A-Z
var letrasAscendente = ordenandoLetras(letras, ascendente);
console.log(letrasAscendente);


// filtrado palabra especifica
function filtrarPalabra(arr, criterio, palabra) {
    var criterioFiltrado = [];
    for (let i = 0; i < arr.length; i++) {
        criterio(arr[i], palabra) ? criterioFiltrado.push(arr[i]) : null;
    }

    console.log(criterioFiltrado);
    return criterioFiltrado
}


function criterioFiltrardo(x, palabra) {
    return palabra === x;
}


var arrMarcas = ["Nasa", "Ajos", "Abarrotes", "XYZ", "Distribuidora", "Nasa", "Ajos", "Nasa", "Ajos", "Nasa", "XYZ", "Abarrotes"];
var palabraFiltrar = "Nasa";

// var arrayMarcas = filtrarPalabra(arrMarcas, criterioFiltrardo, palabraFiltrar);
// console.log(arrayMarcas);
