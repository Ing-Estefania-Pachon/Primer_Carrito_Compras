let precioProductos = {
    "NoMeOlvides": 15000,
    "Amaryllis": 35000,
    "Tulipan": 45000,
}

let cantidadProductos = {
    "NoMeOlvides": 0,
    "Amaryllis": 0,
    "Tulipan": 0,
}

let totalPrecio = 0
let envio = false;

function agregarAlCarrito(producto){

    cantidadProductos[producto] ++;

    alert(producto + " fue agregado al carrito 🛒");

    totalPrecio += precioProductos[producto];

    let totalFinal;
    if (totalPrecio >= 50000 && !envio) {
        envio = true;
        alert("¡Envío gratis aplicado!");
        totalFinal = totalPrecio;
    } else if (!envio) {
        alert("Costo de envío $15.000 COP");
        totalFinal = totalPrecio + 15000;
    } else {
        totalFinal = totalPrecio;
    }

    document.getElementById("totalFinal").innerText = totalFinal;
    
    let totalUnidades = 0;
    for (let producto in cantidadProductos) {
        totalUnidades += cantidadProductos[producto];
    }
    document.getElementById("totalUnidades").innerText = totalUnidades;

    if (envio) {
        document.getElementById("envioMensaje").innerText = "¡Envío gratis aplicado!";
    } else {
        document.getElementById("envioMensaje").innerText = "Costo de envío: $15.000 COP";
    }

}

function vaciarCarrito() {
    
    for (let producto in cantidadProductos) {
        cantidadProductos[producto] = 0;
        // Actualizar en pantalla cantidad y subtotal
        document.getElementById("cantidad-" + producto).innerText = "0";
        document.getElementById("precio-" + producto).innerText = "0";
    }

    totalPrecio = 0;
    envio = false;

    document.getElementById("totalUnidades").innerText = "0";
    document.getElementById("totalFinal").innerText = "0";
    document.getElementById("envioMensaje").innerText = "";

    alert("Carrito vaciado exitosamente 🗑️");
}


