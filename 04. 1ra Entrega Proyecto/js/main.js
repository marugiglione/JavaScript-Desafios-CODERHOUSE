// Título
alert ("PEDÍ TU PRESUPUESTO");

// Opciones Menu Principal
function verMenuPrincipal() {
    let opcionMenuPrincipal = 0;
    while (opcionMenuPrincipal != 4) {
        opcionMenuPrincipal = Number (prompt (`Ingresá el número de la opción elegida: 
        1. Elegí tu producto
        2. Forma de entrega
        3. Ver presupuesto
        4. Salir`));
        switch (opcionMenuPrincipal) {
            case 1:
                {
                    agregarProductoElegido ();
                    break;
                }
            case 2:
                {
                    agregarFormaEntrega ();
                    break;
                }
            case 3:
                {
                    mostrarPresupuesto ();
                    break;
                }
            case 4:
                {
                    alert ("¡Gracias!");
                    break;
                }
            default:
                {
                    alert ("Opción inválida");
                    break;
                }
        }
    }

}

// Opciones de productos a elegir
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
    },
    {
        id: 4,
        nombre: "Budín de zanahoria",
        precio: 1300,
    }
]

// Contenedor de productos elegidos
const productosElegidos = []

class Productos{
    constructor (idProductoElegido, nombreProductoElegido, precioProductoElegido, cantidadProductoElegido) {
        this.idProductoElegido = idProductoElegido;
        this.nombreProductoElegido = nombreProductoElegido;
        this.precioProductoElegido = precioProductoElegido;
        this.cantidadProductoElegido = cantidadProductoElegido;
    }
}

// Opciones Menu Productos
function verMenuProductos() {
    return Number (prompt (`Ingresá el número de la opción elegida: 
    1. Torta Bomba Oreo
    2. Torta Cheescake
    3. Torta Lemon Pie
    4. Budín de zanahoria`));
}


function agregarProductoElegido () {
    let idProductoElegido = verMenuProductos(); 
    if (idProductoElegido < productos.length) {
        const producto = productos.find(producto => producto.id == idProductoElegido);
        let nombreProductoElegido = productos[idProductoElegido-1].nombre;
        let precioProductoElegido = productos[idProductoElegido-1].precio;
        let cantidadProductoElegido = Number ( prompt("Ingresá la cantidad necesaria del producto"));
        productoElegido = new Productos(idProductoElegido, nombreProductoElegido, precioProductoElegido, cantidadProductoElegido);
        productosElegidos.push (productoElegido);
        //console.log (productosElegidos);
    }
    else {
        alert ("Opción inválida");
    }
}

// Mostrar el presupuesto total
function mostrarPresupuesto () {
    const resumenProductos = productosElegidos.map (producto => producto.nombreProductoElegido);
    console.log (`Los productos elegidos son los siguientes:`, resumenProductos);
    const precioTotalPorProducto = productosElegidos.map (producto => {
        return producto.precioProductoElegido * producto.cantidadProductoElegido;
        
    })
    const precioTotalProductos = precioTotalPorProducto.reduce ((acumulador, elemento) => acumulador + elemento, 0);
    console.log (`EL PRESUPUESTO TOTAL ES:`,precioTotalProductos); 
}

// Opciones Menu Productos
function agregarFormaEntrega (){
    alert ("Momentáneamente servicio de entrega a domicilio suspendido. Retirar por local: Vasallo 4005, Rosario. ¡Muchas gracias!");
}

verMenuPrincipal();