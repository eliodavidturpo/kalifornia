// ========================================
// CARRUSEL DE IMÁGENES DE LA PORTADA
// ========================================

const imagenesPortada = [
    "images/hero-roja.jpg",
    "images/hero-azul.jpg",
    "images/hero-negra.jpg"
];

let imagenActual = 0;

const hero = document.querySelector(".hero");

// Precargar todas las imágenes
const imagenesCargadas = [];

imagenesPortada.forEach((ruta) => {

    const img = new Image();

    img.src = ruta;

    imagenesCargadas.push(img);

});


// Cambiar imagen
function cambiarImagenPortada() {

    const siguiente = (imagenActual + 1) % imagenesPortada.length;

    const imagen = imagenesCargadas[siguiente];

    // Solo cambia cuando la imagen ya está cargada
    if (imagen.complete && imagen.naturalWidth > 0) {

        hero.style.backgroundImage =
            `linear-gradient(
                90deg,
                rgba(0,0,0,0.8),
                rgba(0,0,0,0.2)
            ),
            url("${imagenesPortada[siguiente]}")`;

        imagenActual = siguiente;
    }
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
