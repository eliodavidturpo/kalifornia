// ========================================
// CARRUSEL DE IMÁGENES DE LA PORTADA
// ========================================

const imagenesPortada = [
    "images/hero-roja.jpg",
    "images/hero-azul.jpg",
    "images/hero-negra.jpg"
];

let imagenActual = 0;

const heroImage = document.getElementById("hero-image");


// ========================================
// PRECARGAR LAS IMÁGENES
// ========================================

const imagenesCargadas = [];

imagenesPortada.forEach((ruta) => {

    const imagen = new Image();

    imagen.src = ruta;

    imagenesCargadas.push(imagen);

});


// ========================================
// CAMBIAR IMAGEN
// ========================================

function cambiarImagenPortada() {

    const siguiente =
        (imagenActual + 1) % imagenesPortada.length;

    const nuevaImagen = imagenesCargadas[siguiente];


    // Comprobar que la imagen está realmente cargada
    if (
        nuevaImagen.complete &&
        nuevaImagen.naturalWidth > 0
    ) {

        // Ocultar suavemente
        heroImage.style.opacity = "0";


        setTimeout(() => {

            // Cambiar la imagen
            heroImage.src = imagenesPortada[siguiente];

            imagenActual = siguiente;


            // Mostrar la nueva imagen
            heroImage.style.opacity = "1";

        }, 600);

    }

}


// ========================================
// CAMBIAR CADA 10 SEGUNDOS
// ========================================

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
