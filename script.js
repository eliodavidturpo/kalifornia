// ===============================
// CARRUSEL DE IMÁGENES DE PORTADA
// ===============================

const imagenesPortada = [
    "images/zapatilla roja.jpg",
    "images/zapatilla azul.jpg",
    "images/zapatilla negra.jpg"
];

let imagenActual = 0;

function cambiarImagenPortada() {

    imagenActual++;

    if (imagenActual >= imagenesPortada.length) {
        imagenActual = 0;
    }

    const hero = document.querySelector(".hero");

    hero.style.backgroundImage =
        `linear-gradient(
            90deg,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.2)
        ),
        url("${imagenesPortada[imagenActual]}")`;
}

// Cambiar cada 10 segundos
setInterval(cambiarImagenPortada, 10000);


// ===============================
// CARRITO
// ===============================

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
