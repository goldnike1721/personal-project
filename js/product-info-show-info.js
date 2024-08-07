// product-info-show-info.js
(function () {

    function showInfo() {
        const product = JSON.parse(localStorage.product || "{}");
        if (!product) return;
        document.querySelector('.products-description__title-text').innerText = product.title;
        document.querySelector('.products-carousel__image').src = product.image;
        document.querySelector('.products-additionally__image').src = product.smallimage;
        document.querySelector('.products-description__text-italic').innerText = product.number;
        document.querySelector('.products-description__price-text').innerText = product.price;
        document.querySelector('.products-description__composition-description').innerText = product.description;
        document.querySelector('.products-description__composition-usage').innerText = product.usage;
        document.querySelector('.products-description__composition-ingredients').innerText = product.ingredients;
    }

    showInfo();

})();