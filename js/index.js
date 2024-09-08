function init() {
    import("./global.burger-menu.js");
    import("./global.cart.js");
    import("./unit-product.js");
    import("./top-choice.carousel.js");
    import("./categories.carousel.js");
    import("./top-choice.modal.js");
    import("./testimonials.carousel.js")
}


const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
