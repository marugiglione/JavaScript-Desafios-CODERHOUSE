function crearTituloPrincipal()
{
    const tituloPrincipal = document.createElement("h1");
    tituloPrincipal.innerHTML = "¡Pedí tu presupuesto!";
    document.body.appendChild(tituloPrincipal);
}

function crearMenuPrincipal () {
    let botonesMenuPrincipal = ["Productos", "Forma de entrega", "Presupuesto"];
    botonesMenuPrincipal.forEach ((botonMenuPrincipal) => {
        const boton = document.createElement ("button");
        boton.innerHTML=botonMenuPrincipal;
        if (botonMenuPrincipal === "Productos") {
            boton.addEventListener ("click", () => {
                agregarProductoElegido ();
            })
        }
        else if (botonMenuPrincipal === "Forma de entrega") {
            boton.addEventListener ("click", () => {
                agregarFormaEntrega ();
            })
        }
        else if (botonMenuPrincipal === "Presupuesto") {
            boton.addEventListener ("click", () => {
                mostrarPresupuesto ();
            })
        }
        
        document.body.appendChild (boton);
    });
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
        let indexProductoElegido = productos.findIndex(producto => producto.id == idProductoElegido);
        let nombreProductoElegido = productos[indexProductoElegido].nombre;
        let precioProductoElegido = productos[indexProductoElegido].precio;
        
        let cantidadProductoElegido = Number ( prompt("Ingresá la cantidad necesaria del producto"));
        productoElegido = new Productos(idProductoElegido, nombreProductoElegido, precioProductoElegido, cantidadProductoElegido);
        productosElegidos.push (productoElegido);
    }
    else {
        alert ("Opción inválida");
    }
}

// Mostrar el presupuesto total
function mostrarPresupuesto () {
    const precioTotalPorProducto = productosElegidos.map (producto => {
        return producto.precioProductoElegido * producto.cantidadProductoElegido;
    })
    
    let presupuestoTotal = document.querySelector ("#presupuesto");
    if (!presupuestoTotal) {
        presupuestoTotal = document.createElement("h4");
        presupuestoTotal.setAttribute("id", "presupuesto");

        const tituloProductosElegidos = document.createElement("h3");
        tituloProductosElegidos.innerHTML = "Resumen de productos elegidos:";
        document.body.appendChild(tituloProductosElegidos);  
        
        const OLProductosElegidos = document.createElement ("ol");
        for (let i=0; i<productosElegidos.length; i++) {
            let LIProductosElegidos = document.createElement ("li");
            LIProductosElegidos.innerHTML = ` <h4> ${productosElegidos[i].nombreProductoElegido} - Cant. ${productosElegidos[i].cantidadProductoElegido} unidad</h4>`;
            OLProductosElegidos.appendChild (LIProductosElegidos);
        }
        document.body.appendChild (OLProductosElegidos);
        
        const precioTotalProductos = document.createElement("h3");
        precioTotalProductos.innerHTML = `PRESUPUESTO TOTAL: $ ${precioTotalPorProducto.reduce ((acumulador, elemento) => acumulador + elemento, 0)}`;
        document.body.appendChild(precioTotalProductos);
        
        presupuestoTotal.innerHTML = "Gracias por confiar en nosotros!";
        document.body.appendChild(presupuestoTotal);
        
    }
    presupuestoTotal.innerHTML = "";
    
}

// Opciones Menu Productos
function agregarFormaEntrega (){
    alert ("Momentáneamente servicio de entrega a domicilio suspendido. Retirar por local: Vasallo 4005, Rosario. ¡Muchas gracias!");
}

function inicializarFuncionesPresupuesto () {
    crearTituloPrincipal();
    crearMenuPrincipal();
}

inicializarFuncionesPresupuesto();