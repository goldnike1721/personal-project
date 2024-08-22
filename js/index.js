function init() {
    import("./unit-product/carousel-product.js");
    import("modal-window.top-choice.js");
}
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');

    // Додаємо клас, щоб запобігти прокрутці
    modal.addEventListener('show.bs.modal', () => {
        document.body.classList.add('modal-open');
    });

    // Видаляємо клас, щоб відновити прокрутку
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.classList.remove('modal-open');
    });
});