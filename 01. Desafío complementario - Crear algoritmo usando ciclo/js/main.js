//Datos
alert ("PEDÍ TU PRESUPUESTO");
let usuario = prompt("Ingresa tu nombre")
usuario = usuario.toUpperCase();
console.log ("Nombre:",usuario);

//Opciones de productos
let producto = Number (prompt (`Ingresá el número de la opción elegida: 
            1. Torta Bomba Oreo
            2. Torta Cheescake
            3. Torta Lemon Pie
            4. Budín de zanahoria
            5. Budín de frutos secos
            6. Ver forma de entrega
            7. Salir`));
let precioTotal = 0;
while (producto != 6 && producto != 7) {
    let cantidad = Number (prompt (`Ingresá la cantidad necesaria de ese producto`));
    if (producto == 1) {
        productoPrecio = 2000 * cantidad;
    }
    else if (producto == 2) {
        productoPrecio = 2100 * cantidad;
    }
    else if (producto == 3) {
        productoPrecio = 1800 * cantidad;
    }
    else if (producto == 4) {
        productoPrecio = 1300 * cantidad;
    }
    else {
        productoPrecio = 1450 * cantidad;
    }
    precioTotal = productoPrecio+precioTotal;
    console.log ("El precio de los productos es:",precioTotal);
    producto = Number (prompt (`Ingresá el número de la opción elegida: 
            1. Torta Bomba Oreo
            2. Torta Cheescake
            3. Torta Lemon Pie
            4. Budín de zanahoria
            5. Budín de frutos secos
            6. Ver forma de entrega
            7. Salir`)); 
}
if (producto==6) {
    if (precioTotal != 0) {
        let entrega = Number (prompt (`Ingresá el número de la forma de entrega elegida: 
        1. Envío a domicilio
        2. Retiro en local
        3. Salir`));
        if (entrega == 1) {
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
            alert ("El precio total es:");
            alert (precioTotal);
        }
        else if (entrega == 2) {
            delibery = 0;
            precioTotal = precioTotal+delibery;
            console.log ("El precio total es:", precioTotal);
            alert ("El precio total es:");
            alert (precioTotal);
        }
        else {
            alert ("No te lo pierdas, pedí tu presupuesto!");
        }
    }
    else {
        alert ("No seleccionaste ningún producto! No te lo pierdas, pedí tu presupuesto!");
    }
}
else {
    alert ("No te lo pierdas, pedí tu presupuesto!");
}