
var arrMarcas = ["Nasa", "Ajos", "Abarrotes", "XYZ", "Distribuidora", "Nasa", "Ajos", "Nasa", "Ajos", "Nasa", "XYZ", "Abarrotes"];
var palabraFiltrar = "Nasa"

// .filter()
function filtradoModular(arr, palabra) {
    let resultado = arr.filter(e => e === palabra);
    return resultado
}

var arryFiltrado = filtradoModular(arrMarcas, palabraFiltrar);
console.log(arryFiltrado);



// Ejercicio: Usa filter() para obtener un nuevo array con los usuarios 
// que son mayores de edad (18 años o más).

const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 21 },
    { nombre: "Carla", edad: 19 },
    { nombre: "Pablo", edad: 16 },
    { nombre: "Tomás", edad: 23 }
];


function mayores18(arr) {
    let mayores = arr.filter(elem => elem.edad > 18);
    return mayores
}

var resultadoMayores = mayores18(usuarios);
console.log(resultadoMayores);


// .map()
// Tienes el siguiente array:
// 📌 Ejercicio: Usa map() para crear un nuevo array donde cada precio se convierta en un 
// string con formato de moneda (ejemplo: "$1200").

const precios = [1200, 3400, 6500, 2500, 4700];

function editarPrecios(x) {
    let resultado = "$" + x;
    return resultado
}

var nuevosPrecios = precios.map(editarPrecios);
console.log(nuevosPrecios);

// version mejorada

function transformarArray(arr) {
    let transformado = arr.map(elemento => "$" + elemento);
    return transformado
}

var arrayTransformado =  transformarArray(precios);
console.log(`Map mejorado: ${arrayTransformado}`);


// 3️⃣ reduce()
// Tienes el siguiente array:
// 📌 Ejercicio: Usa reduce() para calcular el saldo final, sumando ingresos y restando egresos.

const transacciones = [
    { tipo: "ingreso", monto: 500 },
    { tipo: "egreso", monto: 200 },
    { tipo: "ingreso", monto: 300 },
    { tipo: "egreso", monto: 150 }
];

function calcularSaldo(arr) {
    let resultado = arr.reduce((acumulador, valorActual) => {
        if (valorActual.tipo === "ingreso") {
            acumulador.push(valorActual.monto);
        } else if (valorActual.tipo === "egreso") {
            acumulador.push(-valorActual.monto);
        }
        return acumulador
    }, []);

    return resultado.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

var saldoReal = calcularSaldo(transacciones);
console.log(saldoReal);

// version mejorada
function calcularSaldoV2(arr) {
    let resultado = arr.reduce((saldo, valorActual) => {
        return valorActual.tipo === "ingreso"
            ? saldo + valorActual.monto
            : saldo - valorActual.monto;
    }, 0);

    return resultado
}

var saldoRealV2 = calcularSaldoV2(transacciones);
console.log(saldoRealV2);



// 4 .forEach()
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 300 }
];

// Usa .forEach() para recorrer el array productos y hacer lo siguiente:

// Mostrar en consola el nombre de cada producto junto con su precio en formato: 
// "Producto: Laptop - Precio: $1200".
// Sumar todos los precios y guardar el resultado en una variable llamada total.
// Mostrar el total final en consola después de recorrer todos los elementos.


function generarFactura(arr) {
    let total = 0;
    arr.forEach(element => {
        console.log(`Producto: ${element.nombre} - Precio: ${element.precio}`);
        total += element.precio;
    });

    console.log(`Total a pagar: ${total}`);
}


var factura1 = generarFactura(productos);


// 5 🔍 .some()
// ¿Hay algún usuario mayor de 30 años?

const usuariosSome = [
    { nombre: "Ana", edad: 23 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 32 }
];


function encontrarAlgun(arr) {
    let isThere = arr.some(element => element.edad > 30);
    console.log(`${isThere}`);
    return isThere
}

var mayorDe = encontrarAlgun(usuariosSome);


function encontrarAlgunV2(arr, condicion) {
    return isThere = arr.some(function (elemento) {
        return resultado = elemento.edad > condicion;
    })
}

var pruebaSomeV2 = encontrarAlgunV2(usuariosSome, 30);
console.log(pruebaSomeV2);



// 6. 🧪 .every()
// Verifica si todas las calificaciones son mayores o iguales a 80.

const calificaciones = [85, 92, 88, 90, 80];

function verificarParametro(arr, x) {
    return resultado = arr.every(element => element >= x);
}

var verificacion = verificarParametro(calificaciones, 80);
console.log(verificacion);



// 7. 🔎 .find()
// Encuentra el producto con precio exactamente igual a 40.

const productosFind = [
    { id: 1, nombre: "Monitor", precio: 250 },
    { id: 2, nombre: "Teclado", precio: 40 },
    { id: 3, nombre: "Mouse", precio: 20 }
];

function buscarExacto(arr, x) {
    let encontrado = arr.find(element => element.precio === x);
    if (encontrado) {
        return encontrado
    } else {
        encontrado = "No se encontro el elemento";
        return encontrado
    }
}

var elementoEncontrado = buscarExacto(productosFind, 250);
console.log(elementoEncontrado);


// version mejorar
function buscarExactoV2(arr, x) {
    let encontrado = arr.find(element => element.precio === x);
    return encontrado || "No se encontró el elemento"
}

var elementoEncontradoV2 = buscarExactoV2(productosFind, 20);
console.log(elementoEncontradoV2);


// 8. 🧭 .findIndex()
// Encuentra el índice de la primera tarea que no ha sido completada.

const tareas2 = [
    { descripcion: "Estudiar JS", completado: false },
    { descripcion: "Deploy proyecto", completado: false },
    { descripcion: "Actualizar CV", completado: false }
];


function buscarIndex(arr) {
    let indexEncontrado = arr.findIndex(element => !element.completado)
    return indexEncontrado === -1 ? "No se encontraron elementos" : indexEncontrado
}

var indiceEncontrado = buscarIndex(tareas2);
console.log(indiceEncontrado);


// 9. 🔢 .sort()
// Ordena las edades de menor a mayor.
// 💡 Bonus: Ordena el mismo array en orden descendente

const edades = [45, 18, 100, 32, 26, 60];

function odenarMenorMayor(arr) {
    return menorMayor = arr.sort((a, b) => a - b);
}

function ordenarMayorMenor(arr) {
    return mayorMenor = arr.sort((a, b) => b - a);
}

var menorMayor = odenarMenorMayor(edades);
console.log(menorMayor);

var mayorMenor = ordenarMayorMenor(edades);
console.log(mayorMenor);


// 10 🌐 .flatMap()
// Obtén una lista plana con todos los nombres de los miembros.

const grupos = [
    { nombre: "Equipo A", miembros: ["Ana", "Luis"] },
    { nombre: "Equipo B", miembros: ["Carlos", "Nina"] },
    { nombre: "Equipo C", miembros: ["Rafa"] }
];


function generarNuevaLista(arr) {
    let listaNomresMiembros = arr.flatMap(x => x.miembros);
    return listaNomresMiembros
}

var nombresMiembros = generarNuevaLista(grupos);
console.log(nombresMiembros);



