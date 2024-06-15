const btnBar = document.querySelector(".iconMenuBar");
const showNavBar = document.getElementsByClassName("navbar")[0]; // Acceder al primer elemento de la colección

function handleClick() {
    if (showNavBar.style.display === 'flex') {
        showNavBar.style.display = "none";
    } else {
        showNavBar.style.display = "flex";
    }
}

// Media query para verificar el ancho de la ventana
const mediaQuery = window.matchMedia("(max-width: 900px)");

// Función para manejar cambios en el tamaño de la ventana
function handleMediaQueryChange(e) {
    if (e.matches) {
        // Si la ventana tiene un ancho de 900px o menos
        btnBar.addEventListener("click", handleClick);
    } else {
        // Si la ventana tiene un ancho mayor a 900px
        btnBar.removeEventListener("click", handleClick);
        showNavBar.style.display = ""; // Restablecer el estilo para pantallas más grandes
    }
}

// Escuchar cambios en la media query
mediaQuery.addListener(handleMediaQueryChange);

// Ejecutar la función una vez para configurar el estado inicial
handleMediaQueryChange(mediaQuery);
