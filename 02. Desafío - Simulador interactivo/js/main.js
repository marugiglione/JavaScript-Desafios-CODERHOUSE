//Datos
alert ("PEDÍ TU PRESUPUESTO");
let usuario = prompt("Ingresa tu nombre")
usuario = usuario.toUpperCase();
console.log ("Nombre:",usuario);

//Opciones de productos
let opcionPrincipal = 3;
let precioTotal = 0;
while (opcionPrincipal == 3) {
    opcionPrincipal = menuPrincipal();
}
while (opcionPrincipal == 1) {
    productosOpciones = menuProductos(); 
    productos(productosOpciones);
}
while (opcionPrincipal == 2) {
    opcionEntrega = menuEntrega();
    entrega(opcionEntrega);
}
if (opcionPrincipal != 1 && opcionPrincipal != 2 && opcionPrincipal != 3) {
    if (opcionPrincipal == null) {
        opcionPrincipal = null;
    }
    else {
      alert ("Opción inválida");  
    }    
}
function menuPrincipal() {
    return Number (prompt (`Ingresá el número de la opción elegida: 
    1. Elegí tu producto
    2. Ver forma de entrega
    3. Salir`));
}
function menuProductos() {
    return Number (prompt (`Ingresá el número de la opción elegida: 
    1. Torta Bomba Oreo
    2. Torta Cheescake
    3. Torta Lemon Pie
    4. Budín de zanahoria
    5. Budín de frutos secos`));
}
function productos(productosOpciones) {
    if (productosOpciones == 1 || productosOpciones == 2 || productosOpciones == 3 || productosOpciones == 4 || productosOpciones == 5) {
        cantidad = Number (prompt (`Ingresá la cantidad necesaria de ese producto`));
    }
    switch (productosOpciones) {
        case 1: {
            productoPrecio = 2000 * cantidad;
            break;
        }
        case 2: {
            productoPrecio = 2100 * cantidad;
            break;
        }
        case 3: {
            productoPrecio = 1800 * cantidad;
            break;
        }
        case 4: {
            productoPrecio = 1300 * cantidad;
            break;
        }
        case 5: {
            productoPrecio = 1450 * cantidad;
            break;
        }
        default: {
            alert ("Opción inválida");
            return opcionPrincipal = menuPrincipal()
        }
    }
    precioTotal = productoPrecio + precioTotal;
    console.log ("El precio de los productos es:",precioTotal);
    opcionPrincipal = menuPrincipal();
}
function menuEntrega () {
    if (precioTotal != 0) {
        return Number (prompt (`Ingresá el número de la forma de entrega elegida: 
        1. Envío a domicilio
        2. Retiro en local
        3. Salir`));
    }
    else {
        alert ("No seleccionaste ningún producto! No te lo pierdas, pedí tu presupuesto!");
        opcionPrincipal = menuPrincipal();
    }
}
function entrega(opcionEntrega) {
    if (opcionEntrega == 1) {
        let zona = Number (prompt (`Ingresá el número de la zona elegida: 
                1. Alberdi
                2. Fisherton
                3. Otra`));
        if (zona == 1 || zona == 2) {
            delibery = 0;
        }
        else {
            delibery = 200;
        }
        console.log ("El precio del delibery es:",delibery);
        precioTotal = precioTotal+delibery;
        console.log ("El precio total es:", precioTotal);
        alert (`El precio total es: ${precioTotal}`);
        alert ("Gracias por tu compra!");
        opcionPrincipal = null;
    }
    else if (opcionEntrega == 2) {
        delibery = 0;
        precioTotal = precioTotal+delibery;
        console.log ("El precio total es:", precioTotal);
        alert (`El precio total es: ${precioTotal}`);
        alert ("Gracias por tu compra!");
        opcionPrincipal = null;
    }
    else {
        alert ("No te lo pierdas, pedí tu presupuesto!");
        opcionPrincipal = null;
    }
}