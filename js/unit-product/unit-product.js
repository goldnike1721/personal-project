(function () {
    let products = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    fetch('js/db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка мережевого запиту: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            products = data;
            console.log(products);
            shuffleArray(products);
            renderProducts(products);
        })
        .catch(error => {
            console.error('Сталася проблема з виконанням запиту:', error);
        });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function productInfoClick(ev) {
        const link = ev.target.closest('a');
        if (link && link.dataset.id) {
            ev.preventDefault();
            const productId = link.dataset.id;
            const product = products.find(product => product.id === productId);
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = 'product.html';
        }
    }

    function renderProducts(products) {
        const productsContainer = document.querySelector('.product-list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <div id="shop-${product.id}" class="shop">
                <div class="shop-block">
                    <div class="shop-block__product">
                        <div class="shop-product__image">
                            <a class="shop-product__image-link" href="product.html?id=${product.id}" data-id="${product.id}">
                                <img class="shop__image" width="150" src="${product.image}" alt="${product.altText}">
                            </a>
                        </div>
                        <div class="shop-product__name">
                            <a href="product.html?id=${product.id}" class="info-link" data-id="${product.id}">${product.linkText}</a>
                        </div>
                        <div class="shop-product__price">
                            <p class="shop-product__price-list">${product.price}</p>
                        </div>
                        <div class="shop-product__button-general">
                            <a href="#" class="shop__button-cart">Add to Cart ⭢</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        productsContainer.addEventListener('click', productInfoClick);
    }
})();
