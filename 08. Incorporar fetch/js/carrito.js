const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

function rellenarCarrito(arrayCarrito)
{
    for (let producto of arrayCarrito)
    {
        let row = document.createElement("tr");
        row.innerHTML = `<td class="px-5 py-3">${producto.nombreProductoElegido}</td><td class="px-5 py-3">$${producto.precioProductoElegido}</td><td class="px-5 py-3">${producto.cantidadProductoElegido}</td><td class="px-5 py-3">$${producto.subtotal}</td><td class="px-5 py-3"><button class="btn btn-danger eliminarProducto">Eliminar</button></td>`
        tbody.appendChild(row);
    }
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", alertEliminarProducto);
})

function alertEliminarProducto (){
    Swal.fire ({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, no quiero',
    }).then ((result) => {
        if (result.isConfirmed) {
            addEventListener("click", eliminarProducto);
            Swal.fire({
                title: 'El producto ha sido borrado con éxito',
                icon: 'success',
            });
        }
    }
    )
}

function eliminarProducto(e){

    let index = carrito.findIndex(producto => producto.id == e.target.id);

    carrito.splice(index, 1);

    e.target.parentNode.parentNode.remove();

    localStorage.setItem("carrito", JSON.stringify(carrito));

}