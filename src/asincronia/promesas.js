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
            reject(`Acceso denegado`)
        }
    });
}

verificarUsuario("Seba")
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log("Se ha producido un problema: ", error));


