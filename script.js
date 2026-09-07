// ========================================
// CARRUSEL DE IMÁGENES
// ========================================

const imagenesPortada = [
    "images/hero-roja.jpg",
    "images/hero-azul.jpg",
    "images/hero-negra.jpg"
];

let imagenActual = 0;

const heroImage = document.getElementById("hero-image");


// ========================================
// CARGAR Y CAMBIAR IMAGEN
// ========================================

function cambiarImagenPortada() {

    const siguiente =
        (imagenActual + 1) % imagenesPortada.length;

    const nuevaImagen = new Image();

    nuevaImagen.onload = function () {

        // Cambiamos directamente la imagen
        heroImage.src = imagenesPortada[siguiente];

        imagenActual = siguiente;

    };

    nuevaImagen.onerror = function () {

        console.error(
            "ERROR: No se pudo cargar:",
            imagenesPortada[siguiente]
        );

    };

    nuevaImagen.src = imagenesPortada[siguiente];
}


// Cambiar cada 10 segundos
setInterval(cambiarImagenPortada, 10000);


// ========================================
// CARRITO
// ========================================

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
