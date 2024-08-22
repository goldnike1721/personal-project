(function () {
    let products = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    fetch('js/db.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            console.log(products);
            shuffleArray(products);
            renderProducts(products);
        });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function productInfoClick(ev) {
        ev.preventDefault();
        const link = ev.target.closest('a');
        if (link && link.dataset.id) {
            const productId = link.dataset.id;
            const product = products.find(product => product.id === productId);
            if (product) {
                localStorage.setItem('selectedProduct', JSON.stringify(product));
                window.location.href = 'product.html';
            }
        }
    }

    function renderProducts(products) {
        const productsContainer = document.querySelector('.general-product-list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <div id="store-homepage" class="store-homepage-block">
                <div class="store-homepage-block__product">
                    <div class="store-homepage-product__image">
                        <a class="store-homepage-product__image-link" href="product.html?id=${product.id}" data-id="${product.id}">
                            <img class="store-homepage__image" src="${product.image}" alt="${product.altText}">
                        </a>
                    </div>
                    <div class="store-homepage-product__name">
                        <a href="product.html?id=${product.id}" class="store-homepage-product__name-text" data-id="${product.id}">${product.linkText}</a>
                    </div>
                    <div class="store-homepage-product__price">
                        <p class="store-homepage-product__price-list">${product.price}</p>
                    </div>
                    <div class="store-homepage-product__button">
                        <a href="#" class="store-homepage__button-cart" data-id="#">Buy</a>
                    </div>
                </div>
            </div>
            `;
        }
        productsContainer.addEventListener('click', productInfoClick);
    }
})();