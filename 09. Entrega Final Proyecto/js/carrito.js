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

botonesEliminar.forEach((elemento, idx) => {
    elemento.addEventListener("click", () => alertEliminarProducto(idx));
})

function alertEliminarProducto (idx){
    const productoAEliminar = carrito[idx]
    Swal.fire ({
        title: `Está seguro de eliminar el producto ${productoAEliminar.nombreProductoElegido}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, no quiero',
    }).then ((result) => {
        if (result.isConfirmed) {
            addEventListener("click", (e) => eliminarProducto(e, idx));
            Swal.fire({
                title: 'El producto ha sido borrado con éxito',
                icon: 'success',
            });
        }
    }
    )
}

function eliminarProducto(e, idx){
    const newCarrito = [...carrito]
    newCarrito.splice(idx, 1);
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
}
mostrarTotalPrecioCarrito ();
function mostrarTotalPrecioCarrito () {
    const precioTotalCarrito = localStorage.getItem("precioAcumulado");
    let rowPrecioCarrito = document.createElement("div");
        rowPrecioCarrito.innerHTML = `<div class="border-top border-4 bg-opacity-5 py-3 px-5">PRECIO TOTAL ACUMULADO:<br>$${precioTotalCarrito}</div>`;
        tbody.appendChild(rowPrecioCarrito);
}
