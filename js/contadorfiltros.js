document.addEventListener('DOMContentLoaded', function () {
  const priceRange = document.getElementById('priceRange');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');

  // Función para actualizar el valor de los precios
  function updatePriceValues() {
      const minValue = parseInt(priceRange.min);
      const maxValue = parseInt(priceRange.max);
      const rangeValue = parseInt(priceRange.value);

      // Calcula los valores de precio mínimo y máximo
      const minPriceValue = `$${minValue}`;
      const maxPriceValue = `$${rangeValue}`;

      // Actualiza el texto de los precios
      minPrice.textContent = minPriceValue;
      maxPrice.textContent = maxPriceValue;
  }

  // Ejecutar la función cuando se cambia el valor del control deslizante
  priceRange.addEventListener('input', updatePriceValues);

  // Actualiza los valores de precio al cargar la página
  updatePriceValues();
});