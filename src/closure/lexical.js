"use strict"
const myGlobal = 0;

function myFuntion() {
    var numero = 1;
    console.log(myGlobal);

    function padre() {
        var numero2 = 2;
        console.log(numero, myGlobal);

        function hijo() {
            console.log(numero2, numero, myGlobal);
        };

        return hijo();

    };

    return padre();
}

myFuntion();



function sumWithClosure(firstNum) {
    var contador = firstNum;

    return function sumar(secondNum) {
        contador += secondNum;
        console.log(contador);
        return contador
    };
}


var sumando = sumWithClosure(10)(10);
console.log(sumando);

sumWithClosure(9);



// EJERCICIOS
// 🧪 Ejercicio 1: Contador con estado privado
// Crea una función crearContador que retorne otra función capaz de incrementar un contador 
// interno cada vez que se llama, sin que el contador sea accesible desde fuera.

function crearContador() {
    let contador = 0;

    function sumar(incremento) {
        contador += incremento;
        console.log(contador);
    }

    return sumar;
}

const ahorro1 = crearContador();
ahorro1(10);
ahorro1(15);
ahorro1(20);
ahorro1(25);

const ahorr2 = crearContador();
ahorr2(20);
ahorr2(25);
ahorr2(30);
ahorr2(35);

ahorro1(30);



// 🧠 Ejercicio 2: Generador de saludos personalizados
// Haz una función crearSaludo que reciba un saludo (como "Hola" o "Buenos días") y devuelva 
// una nueva función que reciba un nombre y devuelva el saludo personalizado.

function crearSaludo(saludo) {
    return function saludoFull(nombre) {
        console.log(`${saludo} ${nombre}`);
    };
}
const saludo = crearSaludo("Hola")("Sebastián");


// 🎯 Ejercicio 3: Restricción de intentos
// Crea una función bloquearDespuesDe que reciba un número máximo de intentos y retorne otra función. 
// Esta función interna debe permitir que se ejecute una acción mientras no se hayan 
// superado los intentos. Después del límite, debe devolver un mensaje diciendo que está bloqueado.

function bloquearDespuesde() {
    let intentosPermitidos = 3;
    let codigoAcceso = 123;
    let intentosRealizados = 0;

    function respuesta(clave) {
        intentosRealizados++
        if (clave === codigoAcceso) {
            console.log(`Acceso correcto, intentos: ${intentosRealizados}/${intentosPermitidos}`);
        } else {
            console.log(`Acceso denegado, intentos: ${intentosRealizados}/${intentosPermitidos}`);
        }
    }

    return respuesta;
}


const intento = bloquearDespuesde();
intento(321);
intento(222);
intento(123);


// En este desafío tendrás que crear un closure que nos permita almacenar datos de 
// mascotas en cualquier momento.

// Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. 
// En el primer llamado a la función nos servirá para crear nuestra lista en un inicio 
// mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

// Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos 
// devolverá el array con los datos de todos las mascotas introducidas.


function createPetList() {
    var listaPets = []

    function agregarPet(mascota) {
        if (mascota === undefined) {
            console.log(listaPets);
            return listaPets;
        } else {
            listaPets.push(mascota);
        }
    }

    return agregarPet;
}

const myPetList = createPetList();
myPetList("Kandú")
myPetList("Ramirito")
myPetList()


