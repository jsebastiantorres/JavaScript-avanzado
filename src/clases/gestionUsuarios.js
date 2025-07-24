
// Clase usuario
class Usuario {
    constructor (nombreUsuario, email, alias, password, fechaRegistro){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.alias = alias;
        this.password = password;
        this.fechaRegistro = fechaRegistro;
    }

    iniciarSesion(){
        console.log(`el usuario ${this.alias} inicio sesion`);
    }

    cerrarSesion(){
        console.log(`hasta pronto ${this.alias}`);
    }
}

var fechaRegistro1 = new Date();
var usuario1 = new Usuario("Juan Torres", "jtorres@mail.com", "jtorres", "xxx123", fechaRegistro1);
console.log(usuario1);

usuario1.iniciarSesion();
usuario1.cerrarSesion();
