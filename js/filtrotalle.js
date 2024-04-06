// function filtrarPorTalle(talle) {
//     let productos = document.querySelectorAll('.producto');

//     productos.forEach(function(producto) {
//         let productoTalle = producto.getAttribute('data-talle');

//         if (productoTalle === talle || talle === 'Todos') {
//             producto.style.display = 'block';
//         } else {
//             producto.style.display = 'none';
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     let botonesTalle = document.querySelectorAll('.bt');

//     botonesTalle.forEach(function(boton) {
//         boton.addEventListener('click', function() {
//             let talleSeleccionado = this.textContent;
//             filtrarPorTalle(talleSeleccionado);
//         });
//     });
// });