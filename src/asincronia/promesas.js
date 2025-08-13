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



// Contexto: Estás desarrollando una función que simula la descarga de archivos desde un servidor. 
// Cada archivo puede tardar un tiempo aleatorio en descargarse y puede fallar con cierta probabilidad.

// Tu reto: Implementa una función descargarArchivo(nombreArchivo) que devuelva una promesa.Esta promesa debe:

// Resolverse después de un tiempo aleatorio(entre 1 y 3 segundos) con el mensaje: 
// "Archivo [nombreArchivo] descargado exitosamente."

// Rechazarse con el mensaje: "Error al descargar el archivo [nombreArchivo].
// " con una probabilidad del 30 %.

// Luego, crea una función que intente descargar tres archivos en secuencia 
// usando.then() y.catch(), mostrando los mensajes correspondientes en consola.