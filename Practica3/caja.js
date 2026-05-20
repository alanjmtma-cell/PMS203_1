const pedidos = [];

function crearPedido(idProducto) {
  const productoEncontrado = catalogo.find(producto => producto.id === idProducto);

  if (productoEncontrado) {
    const pedido = cliente.ordenar(productoEncontrado);
    pedidos.push(pedido);
  }
}

function mostrarPedidos() {
  console.log("PEDIDOS:");

  pedidos.forEach(pedido => {
    console.log(pedido.nombre + " - $" + pedido.precio);
  });
}

function calcularTotal() {
  const subtotal = pedidos.reduce((suma, pedido) => {
    return suma + pedido.precio;
  }, 0);

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  console.log("SUBTOTAL: $" + subtotal.toFixed(2));
  console.log("IVA: $" + iva.toFixed(2));
  console.log("TOTAL: $" + total.toFixed(2));
}

crearPedido(1);
crearPedido(4);

mostrarPedidos();
calcularTotal();