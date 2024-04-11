document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mhamb = document.querySelector('.mhamb');
    const closeIcon = document.querySelector('.close-icon');

    menuIcon.addEventListener('click', function() {
        mhamb.classList.toggle('visible');
    });

    closeIcon.addEventListener('click', function() {
        mhamb.classList.remove('visible');
    });
});