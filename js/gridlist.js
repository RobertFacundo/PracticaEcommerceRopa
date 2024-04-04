

document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.getElementById('gridButton');
    const listButton = document.getElementById('listButton');
    const productsContainer = document.querySelector('.grid2');

    // Agrega un evento de clic al botón de cambiar a vista de cuadrícula
    gridButton.addEventListener('click', function() {
        // Remueve la clase .list-view del contenedor de productos
        productsContainer.classList.remove('list-view');

        // Agrega la clase active al botón de cuadrícula y remueve la clase active del botón de lista
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });

    // Agrega un evento de clic al botón de cambiar a vista de lista
    listButton.addEventListener('click', function() {
        // Agrega la clase .list-view al contenedor de productos
        productsContainer.classList.add('list-view');

        // Agrega la clase active al botón de lista y remueve la clase active del botón de cuadrícula
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });

    // Por defecto, el botón de cuadrícula está activo
    gridButton.classList.add('active');
});