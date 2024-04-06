// Mostrar la primera diapositiva al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    showSlides(1);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

let thumbnailSlideIndex = 1;
showThumbnailSlides(thumbnailSlideIndex);

function plusSlidesThumbnails(n) {
    showThumbnailSlides(thumbnailSlideIndex += n);
}

function currentThumbnailSlide(n) {
    showThumbnailSlides(thumbnailSlideIndex = n);
}

function showThumbnailSlides(n) {
    let i;
    let slides = document.getElementsByClassName("column");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {thumbnailSlideIndex = 1}
    if (n < 1) {thumbnailSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[thumbnailSlideIndex-1].style.display = "block";
}

