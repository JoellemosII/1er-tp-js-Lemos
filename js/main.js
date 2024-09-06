alert(" Hola y bienvenido a ZapasWord");
    function solicitarNombre() {
        let nombreUsuario = prompt("Ingresa tu nombre para continuar");
        if (nombreUsuario === "" || !isNaN(nombreUsuario)) {
            alert("Este dato no es correcto, por favor ingrese de nuevo");
            solicitarNombre(); 
        } else {
            alert("Gracias por ingresar a ZapasWord " + nombreUsuario);
        }
    }   
solicitarNombre();

class Producto {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

const productos = [
  new Producto("Adidas", "Super All Star", 50000),
  new Producto("Adidas", "Ultraboost", 35000),
  new Producto("Nike", "Air Jordan", 80000),
  new Producto("Nike", "Nike Air Max", 120000),
  new Producto("Puma", "Puma Fourms", 15008),
  new Producto("Puma", "Puma RS-X", 10008)
];

let carrito = [];
const IVA = 0.21;

function mostrarProductos() {
  let mensaje = "Selecciona un producto:\n";
  productos.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - $${producto.precio}\n`;
  });
  return mensaje;
}

function agregarProductoAlCarrito() {
  let seleccion = parseInt(prompt(mostrarProductos())) - 1;
  if (seleccion >= 0 && seleccion < productos.length) {
    carrito.push(productos[seleccion]);
    alert(`Has agregado ${productos[seleccion].marca} ${productos[seleccion].modelo} al carrito.`);
  } else {
    alert("Selección inválida. Por favor, intenta de nuevo.");
    agregarProductoAlCarrito();
  }
}

function calcularTotal() {
  let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  let totalConIva = total * (1 + IVA);
  return totalConIva.toFixed(2);
}

function confirmarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de confirmar la compra.");
    return;
  }
  let totalConIva = calcularTotal();
  alert(`El total de tu compra es: $${totalConIva}`);
  alert("Gracias por comprar en ZapasWord. ¡Vuelve pronto!");
}

function iniciarCompra() {
  let continuar = true;
  while (continuar) {
    agregarProductoAlCarrito();
    continuar = confirm("¿Deseas agregar otro producto?");
  }
  confirmarCompra();
}

iniciarCompra();
