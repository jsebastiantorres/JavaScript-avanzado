// Clase Protucto
class Producto {
    constructor(nombre, precio, descripcion, stock, imagenURL) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
        this.imagenURL = imagenURL;
    }

    agregarCarrito(){
        console.log(`se ha agregado al carrito el producto: ${this.nombre}`);
    }

    actualizarStock(){
        console.log(`se ha actualizado el stock del producto: ${this.nombre}`);
    }

    mostrarDetalles(){
        console.log(`Detalles del procuto: \n ${this.nombre} \n ${this.precio} \n ${this.descripcion}`);
    }
}


var producto1 = new Producto("Camiseta", 35000, "Color Rojo", 100, "image");
console.log(producto1);

producto1.agregarCarrito();
producto1.actualizarStock();
producto1.mostrarDetalles();
