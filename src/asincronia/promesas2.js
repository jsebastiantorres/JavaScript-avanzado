// 🧪 Ejercicio: Simulación de Registro y Activación de Cuenta
// Contexto:
// Estás desarrollando un sistema que simula el proceso de registro de un usuario. 
// El flujo incluye tres pasos, cada uno representado por una promesa:
// 1. 	Registrar usuario
// 2. 	Enviar correo de activación
// 3. 	Activar 

function registrarUsuario(user, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Usuario ${user} se ha registrado correctamente`)
        }, 1000)
    })
}

function enviarCorreoActivacion(user) {

    let exito = Math.floor(Math.random() * 10) + 1;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito > 2) {
                resolve(`Correo de activación enviado a ${user}`)
            } else {
                reject(`Ocurrio un erro en el envio del correo a ${user}`)
            }
        }, 1500)
    })
}

function activar(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Se ha activado la cuenta del usuario ${user}`)
        }, 1000)
    })
}


var user = "jstorresa";
var pass = "123"


//implementando cosole.time para medir la duracion total del proceso
console.time("Proceso de registro");

registrarUsuario(user, pass)
    .then(res => {
        console.log(res)
        return enviarCorreoActivacion(user);
    })
    .then(res => {
        console.log(res)
        return activar(user)
    })
    .then(res => {
        console.log(res)
        console.timeEnd("Proceso de registro")
    })
    .catch(err => {
        console.log(err)
        console.timeEnd("Proceso de registro")
    });
