function toggleDescription() {
    const fullDescription = document.querySelector('.full-description');
    const toggleButton = document.querySelector('.toggle-description-btn');

    fullDescription.classList.toggle('mostrar');
    toggleButton.textContent = fullDescription.classList.contains('mostrar') ? '-' : '+';
}