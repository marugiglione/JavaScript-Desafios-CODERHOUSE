// Datos
alert ("PEDÍ TU PRESUPUESTO");

// Opciones de productos
const productos = [
    {
        id: 1,
        nombre: "Torta Bomba Oreo",
        precio: 2000,
    },
    {
        id: 2,
        nombre: "Torta Cheescake",
        precio: 2100,
    },
    {
        id: 3,
        nombre: "Torta Lemon Pie",
        precio: 1800,
    }
]

// Opciones de menu productos
function verMenuProductos() {
    return Number (prompt (`Ingresá el número de la opción elegida: 
    1. Torta Bomba Oreo
    2. Torta Cheescake
    3. Torta Lemon Pie`));
}


function elegirProducto () {
    let idProductoElegido = verMenuProductos();
    if (idProductoElegido == 1 || idProductoElegido == 2 || idProductoElegido == 3) {
        precioProductoElegido = productos[idProductoElegido-1].precio;
        cantidadProductoElegido = Number (prompt(`Ingresá la cantidad necesaria del producto`));
        precioTotal = precioProductoElegido * cantidadProductoElegido;
        console.log (precioTotal);
        alert (`El precio es: $${precioTotal}`);
    }
    else {
        alert ("Opción inválida");
    }
}

elegirProducto ();




