// Contenedor de productos elegidos
let carrito = [];

class ProductoElegido{
    constructor (idProductoElegido, imgProductoElegito, nombreProductoElegido, precioProductoElegido, subtotal) {
        this.idProductoElegido = idProductoElegido;
        this.imgProductoElegito = imgProductoElegito;
        this.nombreProductoElegido = nombreProductoElegido;
        this.precioProductoElegido = precioProductoElegido;
        this.cantidadProductoElegido = 1;
        this.subtotal = precioProductoElegido;
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
    console.log (index);

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
}

function carritoNav(arrayCarrito){

    let textoCarrito = document.getElementById("cantidadPedidos");

    let totalProductos = 0;

    for(let producto of arrayCarrito){
        totalProductos += producto.cantidadProductoElegido;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>Carrito (${totalProductos})</p>`
}
