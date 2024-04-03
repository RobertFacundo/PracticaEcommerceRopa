document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos los elementos HTML correspondientes a Mujer, Hombre y el menú ddmm
    const mujer = document.getElementById("m");
    const hombre = document.getElementById("h");
    const ddmm = document.getElementById("ddmm");

    // Función para mostrar el menú ddmm cuando se hace hover en Mujer o Hombre
    function showDDMM() {
        ddmm.classList.add("visible"); // Agregamos la clase "visible" al menú ddmm
    }

    // Función para ocultar el menú ddmm cuando el mouse sale del contenedor
    function hideDDMM(event) {
        // Obtenemos las coordenadas del contenedor ddmm
        const rect = ddmm.getBoundingClientRect();
        // Verificamos si el mouse está dentro del contenedor ddmm utilizando las coordenadas del mouse
        const isInDDMM = (
            rect.left <= event.clientX && // El mouse está a la izquierda del contenedor
            rect.right >= event.clientX && // El mouse está a la derecha del contenedor
            rect.top <= event.clientY && // El mouse está arriba del contenedor
            rect.bottom >= event.clientY // El mouse está abajo del contenedor
        );

        // Si el mouse está fuera del contenedor ddmm, removemos la clase "visible" para ocultar el menú
        if (!isInDDMM) {
            ddmm.classList.remove("visible");
        }
    }

    // Agregamos un listener para el evento "mouseover" en los elementos Mujer y Hombre
    mujer.addEventListener("mouseover", showDDMM);
    hombre.addEventListener("mouseover", showDDMM);

    // Agregamos un listener para el evento "mouseleave" en el menú ddmm
    ddmm.addEventListener("mouseleave", hideDDMM);

    // Agregamos un listener para el evento "click" en cualquier parte del documento
    document.addEventListener("click", hideDDMMOnClick);

      // Función para ocultar el menú ddmm cuando se hace clic en cualquier otra parte del documento
      function hideDDMMOnClick(event) {
        // Verificamos si el clic ocurrió dentro del menú ddmm
        const isInDDMM = ddmm.contains(event.target);

        // Si el clic ocurrió fuera del menú ddmm, removemos la clase "visible" para ocultar el menú
        if (!isInDDMM) {
            ddmm.classList.remove("visible");
        }
    }
});