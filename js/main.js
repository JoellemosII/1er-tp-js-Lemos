const menuPrincipal= "Elija una opcion:\n 1: Comprar Zapas.\n 2: Finalizar Compra.\n 3: Terminar ";
const menuSecundary = "Elija una opción:\n 1: Finalizar Compra.\n 2: Ver Precios.\n 3: Volver a elegir";
let calzado = "1: Zapas Adiddas. \n 2: Zapas Nike. \n 3: Zapas Puma.\n 4: Zapas Lady Stork Man."
alert(" Hola y bienvenido a ZapasWord");
function solicitarNombre(){
    let nombreUsuario = prompt("Ingresa tu nombre para continuar");
    alert("Gracias Por ingresar a ZapasWord " + (nombreUsuario));
}
solicitarNombre();
function mostrarMenuPrincipal(){
    let opcion = Number(prompt(menuPrincipal));
    while(opcion !==3){
        if (opcion === 1) {
            alert("Exelente decision , Te espero en la tienda.");
        comprarZapas();
        } if (opcion === 2) {
            alert("Solo te queda pagar y listo");
        finalizarCompra();
        } if (opcion === 3) {
            alert("Gracias por visitar ZapasWord!");
    } opcion = 3
}} 
mostrarMenuPrincipal();
function menuSecond() {
    let opcion;
    do {
        opcion = Number(prompt(menuSecundary));
        if (opcion === 1) {
            finalizarCompra();
        } else if (opcion === 2) {
            preciosZapas();
        } else if (opcion === 3) {
            mostrarMenuPrincipal();
        } else {
            alert("Opción no válida, por favor elija una opción válida.");
        }
    } while(opcion !== 3);
}
function comprarZapas() {
    let calzado = Number(prompt("Selecciona las zapas con más onda para vos \n 1: Zapas Adidas. \n 2: Zapas Nike. \n 3: Zapas Puma. \n 4: Zapas Lady Stork Man."));
    while (calzado > 4 || calzado < 1) {
        alert("Dato ingresado no es válido, por favor ingrese un dato válido para continuar. ¡Muchas Gracias! Atte: ZapasWord");
        calzado = Number(prompt("Selecciona las zapas con más onda para vos \n 1: Zapas Adidas. \n 2: Zapas Nike. \n 3: Zapas Puma. \n 4: Zapas Lady Stork Man."));
    }
    if (calzado === 1) {
        alert("Excelente decisión, elegiste Adidas");
    } else if (calzado === 2) {
        alert("Elegiste Nike, yo hubiera elegido las mismas");
    } else if (calzado === 3) {
        alert("Elegiste Puma, ¡sos todo un atleta!");
    } else if (calzado === 4) {
        alert("Tienes mucha clase, elegiste Lady Stork Man");
    }
    preciosZapas();
}
function finalizarCompra() {
    let direccion = prompt("Ingrese su dirección de entrega:");
    alert("Gracias por confiar en nosotros, Te esperamos de nuevo \n Atte: ZapasWord");
    alert("El producto va a llegar en 48 hs a " + (direccion) + " " + "Muchas Gracias");
}
function preciosZapas() {
    let adidasZapas = 178594;
    let nikeZapas = 194587;
    let pumaZapas = 189420;
    let storkZapas = 210500;
    let iva = 1.25;
    let totalAdidas = (adidasZapas * iva);
    let totalNike = (nikeZapas * iva);
    let totalPuma = (pumaZapas * iva);
    let totalStork = (storkZapas * iva);
    let calzado;
    do {
        calzado = Number(prompt("Selecciona el precio de las zapas\n 1: Zapas Adidas. \n 2: Zapas Nike. \n 3: Zapas Puma. \n 4: Zapas Lady Stork Man."));
        if (calzado === 1) {
            alert("Tus zapas valen $" + totalAdidas);
        } else if (calzado === 2) {
            alert("Tus zapas valen $" + totalNike);
        } else if (calzado === 3) {
            alert("Tus zapas valen $" + totalPuma);
        } else if (calzado === 4) {
            alert("Tus zapas valen $" + totalStork);
        } else {
            alert("Opción no válida, por favor elija una opción válida.");
        }
    } while (calzado < 1 || calzado > 4);
}




