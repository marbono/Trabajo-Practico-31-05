// Escribe una clase Producto para crear objetos.
// ----------------------------------------------------
// Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por
//pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  comprar() {
    console.log(
      `Codigo del producto: ${this.codigo}, Nombre del producto: ${this.nombre}, Precio del producto: ${this.precio}`
    );
  }

}

let producto1 = new Producto(1, "Leche", 80);
let producto2 = new Producto(2, "Dulce de leche", 120);
let producto3 = new Producto(3, "Carne", 750);
let listadoProductos=[producto1, producto2, producto3]


for (let i = 0; i < listadoProductos.length; i++) {
    const element = listadoProductos[i];

    element.comprar()
}












// let listadoProductos= [new Producto(1, "Leche", 80), new Producto(2, "Dulce de leche", 120),new Producto(3, "Carne", 750)]


// for (let i = 0; i < listadoProductos.length; i++) {
//     const element = listadoProductos[i];
//     debugger
//     element.comprar()
// }






// debugger
// let producto4 = producto1

// debugger;
// producto1.comprar()
// producto2.comprar()
// debugger
// producto3.duplicarPrecio()
