let carrito = 0;

function agregarCarrito() {

    carrito++;

    document.getElementById("contador-carrito").textContent = carrito;

    alert("Producto agregado al carrito 🛒");
}

function mostrarCarrito() {

    if (carrito === 0) {

        alert("Tu carrito está vacío.");

    } else {

        alert(
            "Tienes " +
            carrito +
            " producto(s) en tu carrito."
        );
    }
}