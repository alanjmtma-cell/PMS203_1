const catalogo = [
  { id: 1, nombre: "Café", precio: 30, categoria: "Bebida" },
  { id: 2, nombre: "Té", precio: 25, categoria: "Bebida" },
  { id: 3, nombre: "Pan", precio: 20, categoria: "Comida" },
  { id: 4, nombre: "Pastel", precio: 45, categoria: "Comida" }
];

console.log("CATÁLOGO COMPLETO");

catalogo.forEach(producto => {
  console.log(producto.nombre + " - $" + producto.precio + " - " + producto.categoria);
});

const bebidas = catalogo.filter(producto => producto.categoria === "Bebida");
console.log("BEBIDAS:");
console.log(bebidas);

const comidas = catalogo.filter(producto => producto.categoria === "Comida");
console.log("COMIDA:");
console.log(comidas);

const nombresProductos = catalogo.map(producto => producto.nombre);
console.log("NOMBRES DE PRODUCTOS:");
console.log(nombresProductos);