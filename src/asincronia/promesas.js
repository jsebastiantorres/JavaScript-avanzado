// Promesas
const promesa = new Promise((resolve, reject) => {
    let exito = false;

    if (exito) {
        resolve("Operación exitosa")
    } else {
        reject("Hubo un error")
    }
});

promesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error));



// Objetivo: Simular una verificación de usuario con una promesa.

// 🔧 Instrucciones
// Crea una función verificarUsuario(nombre) que devuelva una promesa.

// La promesa debe:

// Resolverse si el nombre es "Sebastián" con el mensaje: "Usuario verificado: Sebastián".

// Rechazarse si el nombre es diferente, con el mensaje: "Usuario no reconocido".

// Usa .then() y .catch() para manejar el resultado y mostrarlo en consola.


const usuarios = ["Sebas", "Sebastian", "Juan"];

const nombre = "juan";

function verificarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        if (usuarios.find(e => e === nombre)) {
            resolve(`Bienvenido ${nombre}`)
        } else {
            reject(`Acceso denegado para el usuario ${nombre}`)
        }
    });
}

// verificarUsuario(nombre)
//     .then((resultado) => console.log(resultado))
//     .catch((error) => console.log("Se ha producido un problema: ", error));




// 🧪 Kit de Ejercicios: Promesas en JavaScript
// Ejercicio 1: Promesa Básica
// Objetivo: Crear una promesa que se resuelva después de 2 segundos con un mensaje personalizado.
// 🔧 Instrucciones:
// - Crea una función esperarMensaje() que devuelva una promesa.
// - La promesa debe resolverse después de 2 segundos con el mensaje "¡Promesa resuelta!".
// - Muestra el resultado en consola usando .then().


function esperarMensaje() {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve("¡Promesa resuelta!");
        }, 2000));
}

esperarMensaje()
    .then((res) => console.log(res));


// Ejercicio 2: Promesa con Condición
// Objetivo: Simular una validación que puede resolverse o rechazarse según una condición.
// 🔧 Instrucciones:
// - Crea una función validarEdad(edad) que devuelva una promesa.
// - Si la edad es mayor o igual a 18, resuelve con "Acceso permitido".
// - Si es menor, rechaza con "Acceso denegado".
// - Usa .then() y .catch() para mostrar el resultado.

const edad = 18

function validadEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve(`Acceso permitido`)
            } else {
                reject(`Acceso denegado`)
            }
        }, 2000);
    });
}

validadEdad(edad)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));


//Ejercicio 3: Encadenamiento de Promesas
// Objetivo: Encadenar varias promesas para simular pasos de un proceso.
// 🔧 Instrucciones:
// - Crea tres funciones que devuelvan promesas:
// - iniciarSesion(): resuelve con "Sesión iniciada".
// - cargarDatos(): resuelve con "Datos cargados".
// - mostrarDashboard(): resuelve con "Dashboard mostrado".
// - Encadena las tres funciones usando .then() para simular el flujo completo


function iniciarSesion() {
    return new Promise((resolve, reject) => resolve("Sesión iniciada"))
}

function cargarDatos() {
    return new Promise((resolve, reject) => resolve("Datos cargados"))
}

function mostrarDashboard() {
    return new Promise((resolve, reject) => resolve("Dashboard mostrado"))
}


iniciarSesion()
    .then(res => {
        console.log(res);
        return cargarDatos();
    })
    .then(res => {
        console.log(res);
        return mostrarDashboard();
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));


// 🧠 Tips clave
// - Cada.then() puede retornar un valor o una promesa.
// - Si retorna una promesa, el siguiente.then() espera a que se resuelva.
// - Usa.catch() al final para manejar cualquier error en la cadena.


// Ejercicio 4: Manejo de Errores en Cadena
// Objetivo: Practicar cómo manejar errores en una cadena de promesas.
// 🔧 Instrucciones:
// - Reutiliza las funciones del ejercicio 3.
// - Modifica cargarDatos() para que a veces falle (por ejemplo, usando Math.random()).
// - Asegúrate de capturar el error con .catch() y mostrar "Error al cargar datos" sin romper la cadena.




function iniciarSesion() {
    return new Promise((resolve, reject) => resolve("Sesión iniciada"))
}

function cargarDatos() {

    let exito = Math.floor(Math.random() * 10) + 1;

    return new Promise((resolve, reject) => {
        if (exito > 5) {
            resolve("Datos cargados")
        } else {
            reject("No fue exitoso el cargue de datos")
        }
    });
}

function mostrarDashboard() {
    return new Promise((resolve, reject) => resolve("Dashboard mostrado"))
}

iniciarSesion()
    .then(res => {
        console.log(res);
        return cargarDatos();
    })
    .then(res => {
        console.log(res);
        return mostrarDashboard();
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));









// //  Ejercicio Avanzado: Validación de Múltiples Usuarios
// // Objetivo:
// // Simular la validación de varios usuarios en secuencia, usando promesas encadenadas.
// // 🔧 Instrucciones
// // - Reutiliza tu función verificarUsuario(nombre) (puedes mejorarla si quieres).
// // - Crea una función que reciba un array de nombres y los verifique uno por uno, en orden.
// // - Cada verificación debe esperar a que la anterior termine (encadenamiento).
// // - Muestra en consola el resultado de cada verificación.
// // 🧩 Extra (opcional)
// // - Si algún usuario falla, muestra el error pero continúa con los siguientes.
// // - Al final, muestra un resumen: cuántos usuarios fueron verificados exitosamente y cuántos fallaron.

// function vericarUsuarios(arr) {
//     let verificado = "";
//     arr.forEach(e => { verificado = e })
//     let promesaCadena = Promise,ser
// }

// const usuariosPrueba = ["Juan", "Sebas", "Sebastian"];

// vericarUsuarios(usuariosPrueba)
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error));
