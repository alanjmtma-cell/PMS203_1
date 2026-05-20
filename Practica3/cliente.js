const cliente = {
  nombre: "Cliente",

  ordenar(producto) {
    console.log(this.nombre + " ordenó: " + producto.nombre);
    return producto;
  }
};