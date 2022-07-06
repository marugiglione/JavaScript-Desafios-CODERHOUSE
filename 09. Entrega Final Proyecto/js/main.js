// Contenedor de productos elegidos
let carrito = [];

class ProductoElegido{
    constructor (idProductoElegido, imgProductoElegito, nombreProductoElegido, precioProductoElegido, subtotal) {
        this.idProductoElegido = idProductoElegido;
        this.imgProductoElegito = imgProductoElegito;
        this.nombreProductoElegido = nombreProductoElegido;
        this.precioProductoElegido = precioProductoElegido;
        this.cantidadProductoElegido = 1;
        this.subtotal = Number(precioProductoElegido);
    }
}


let divContainer = document.getElementById("tortas");


function crearTarjetasProductos (arrayProductos) {
    for (let producto of arrayProductos) {
        let div = document.createElement("div");
        div.classList = "col-4 mt-3"
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="${producto.id}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ <strong>${producto.precio}</strong></p>
                    <button class="btn btn-primary elegirProducto">Elegir Producto</button>
                </div>
            </div>
        `;
        divContainer.appendChild(div);
    }
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if(carritoLocalStorage) {
        carritoNav(carritoLocalStorage);
    }
}
crearTarjetasProductos (productos);

let botonesElegirProducto = document.querySelectorAll (".elegirProducto");
botonesElegirProducto.forEach (elemento => {
    elemento.addEventListener("click", agregarProductoElegido);
});

function agregarProductoElegido (e) {
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLocalStorage){
        carrito = carritoLocalStorage;
    }

    let index = carrito.findIndex(producto => producto.idProductoElegido == e.target.parentNode.parentNode.children[0].alt);
    
    let nombreProductoElegido = e.target.parentNode.children[0].textContent;
    let precioProductoElegido = e.target.parentNode.children[1].children[0].textContent;
    let imgProductoElegito = e.target.parentNode.parentNode.children[0].src;
    let idProductoElegido = e.target.parentNode.parentNode.children[0].alt;

    if (index == -1){
        const producto = new ProductoElegido(idProductoElegido, imgProductoElegito, nombreProductoElegido, precioProductoElegido);
        carrito.push(producto);
    } else{
        carrito[index].cantidadProductoElegido++;
        carrito[index].subtotal = carrito[index].precioProductoElegido * carrito[index].cantidadProductoElegido;
    }
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    sumarTotalPrecioProductos(carrito);
    carritoNav(carrito)
   
    Swal.fire ({
        title: `El producto fue cargado correctamente`,
        text: `Elige otro producto o accede a los productos elegidos en la opción "Carrito"`,
        icon: `success`,
        showConfirmButton: false,
        timer: 2000,
    });
    
}

function carritoNav(arrayCarrito){

    let textoCarrito = document.getElementById("cantidadPedidos");

    let totalProductos = 0;

    for(let producto of arrayCarrito){
        totalProductos += producto.cantidadProductoElegido;
    }
    const precioTotalNav = localStorage.getItem("precioAcumulado");
    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>Carrito (${totalProductos})</p></br>
                            <p>Precio Acumulado: $${precioTotalNav}</p>`
}

function sumarTotalPrecioProductos (carrito){
    let precioTotal = 0;
    carrito.forEach(producto => {
        precioTotal = precioTotal+producto.subtotal;
    })
    localStorage.setItem("precioAcumulado", precioTotal);
    console.log(precioTotal)
}