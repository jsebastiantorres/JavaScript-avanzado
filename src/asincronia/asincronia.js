
var saludo = (nombre) => "Hola " + nombre;

var bienvenida = "Es un gusto ";

var despido = "Adios..."

function probandoAsincronia(saludo, bienvenida, despido) {
    console.log(saludo("Juan"));
    setTimeout(() => console.log(bienvenida), 2000);
    console.log(despido);
}

probandoAsincronia(saludo, bienvenida, despido);

