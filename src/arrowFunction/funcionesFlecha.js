// funciones flecha

// Sintaxis basica arrow function
// 1. Función de saludo:
// Crea una función de flecha llamada saludar 
// que tome un nombre como argumento y devuelva una cadena que diga "Hola, [nombre]!".
var saludar = (nombre) => "Hola " + nombre;
console.log(saludar("Juan"));


// 2. Cálculo de área:
// Define una función de flecha llamada calcularAreaRectangulo que reciba el ancho y 
// la altura de un rectángulo como parámetros y retorne su área.
var calcularAreaRectangulo = (ancho, altura) => ancho * altura;
console.log(calcularAreaRectangulo(10, 2));


// 3. Verificación de paridad:
// Implementa una función de flecha llamada esPar que acepte un número como 
// entrada y devuelva true si el número es par, y false en caso contrario.
var esPar = numero => numero % 2 === 0 ? "Es par" : "Es impar";
console.log(esPar(2))
console.log(esPar(53))


// 4. Conversión de temperatura:
// Crea una función de flecha llamada celsiusToFahrenheit 
// que convierta una temperatura en grados Celsius a Fahrenheit y la devuelva.
var celsiusToFahrenheit = celcius => (celcius * 1.8) + 32;
console.log(celsiusToFahrenheit(38));


// 5. Concatenación de cadenas:
// Define una función de flecha llamada concatenar que reciba dos cadenas 
// como argumentos y las combine en una sola, separadas por un espacio.
var concatenar = (palabra1, palabra2) => `${palabra1} ${palabra2}`
console.log(concatenar("Juan", "Torres"));


// 6. Función anónima:
// Crea una función de flecha que se asigne a una variable y 
// que, al ser llamada, simplemente imprima en consola un mensaje de tu elección.
var mensaje = palabra => `Tu palabra es: ${palabra}`;
console.log(mensaje("Xyz"));

// 7. Función con parámetros por defecto:
// Define una función de flecha llamada presentacion que tome un nombre y un apellido 
// como parámetros, con el apellido teniendo un valor por defecto de "Desconocido". 
// La función debe retornar un saludo con ambos datos.

var presentacion = (nombre, apellido) => {
    apellido = !apellido ? "Desconocido" : apellido;
    let saludo = `Hola! ${nombre} ${apellido}`
    return saludo
}

console.log(presentacion("Juan", "Torres"));
console.log(presentacion("Sebastián"));


// 8. Uso de arrow functions en métodos de objetos:
// Crea un objeto con un par de métodos, uno usando una función normal y 
// otro usando una función de flecha. Observa las diferencias en el manejo del this.

var persona = {
    nombre: "Juan",
    apellido: "torres",

    saludar: function () {
        console.log("hola");
    },

    presentar: function (nombre, apellido) {
        nombre = this.nombre;
        apellido = this.apellido;
        console.log(`Soy ${nombre} ${apellido}`);
    }
}


var persona2 = {
    nombres: "Sebastián",
    apellidos: "Torres",
    saludando: () => { "Hola" },
    presentando: function () {
        console.log(`Soy ${this.nombres} ${this.apellidos}`);
    }
}

persona.presentar();
persona2.presentando();


// 9. Retorno implícito:
// Implementa una función de flecha que calcule el cuadrado de un número, 
// pero usando la sintaxis de retorno implícito (sin usar la palabra clave return).
var cuadradoDe = (numero) => numero ** 2;
console.log(cuadradoDe(5));


// 10. Ejercicio combinado:
// Crea una función de flecha que reciba un array de números y devuelva un nuevo array 
// con cada número elevado al cuadrado, usando map y una función de flecha anónima.
var cuadradosArray = (arr) => { let cuadrados = arr.map(e => e ** 2); return cuadrados }
var numeros = [1, 2, 3, 4, 5];

console.log(cuadradosArray(numeros));

