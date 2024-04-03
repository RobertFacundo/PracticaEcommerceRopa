window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const navOffset = nav.offsetTop;

    if (window.pageYOffset >= navOffset) {
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }
});