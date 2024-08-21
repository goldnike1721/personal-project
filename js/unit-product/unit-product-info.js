(function () {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = `
        <section class="products">
            <div class="products-container">
                <div class="product-general-container">
                    <div class="products-container__top">
                        <div class="products__top-title">
                            <a class="products-top__title-link" href="shop.html">
                                <h2 class="products-top__title-text">Store homepage</h2>
                            </a>
                        </div>
                    </div>
                    <div class="products-container__contents">
                        <div class="products-contents__carousel">
                            <div class="products-contents__carousel-image">
                                <img class="products-carousel__image" src="${product.image}" alt="${product.altText}">
                            </div>
                        </div>
                        <div class="products-contents__bottom-image">
                            <div class="products-bottom__image">
                                <img class="products-additionally__image" src="${product.smallimage}" alt="${product.altText}">
                            </div>
                            <div class="products-bottom__image">
                                <img class="products-additionally__image" src="${product.smallimage}" alt="${product.altText}">
                            </div>
                            <div class="products-bottom__image">
                                <img class="products-additionally__image" src="${product.smallimage}" alt="${product.altText}">
                            </div>
                            <div class="products-bottom__image">
                                <img class="products-additionally__image" src="${product.smallimage}" alt="${product.altText}">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="products-description">
                    <div class="products-description__top">
                        <div class="products-description__stock">
                            <p class="products-description__stock-text">In stock</p>
                        </div>
                        <div class="products-description__title">
                            <h1 class="products-description__title-text">${product.title}</h1>
                        </div>
                        <div class="products-description__content">
                            <p class="products-description__text-italic">${product.number}</p>
                        </div>
                        <div class="products-description__price">
                            <p class="products-description__price-text">${product.price}</p>
                        </div>
                        <hr class="products-description__line-title">
                        <div class="products-description__quantity-button">
                            <div class="products-description__quantity">
                                <form action="/add-to-cart" method="post">
                                    <input type="number" id="quantity" name="quantity" min="1" value="1">
                                </form>
                            </div>
                            <div class="products-description__button-cart">
                                <button class="products-description__cart" onclick="addToCart('${product.id}')">Add to
                                    Cart</button>
                            </div>
                        </div>
                    </div>
                   <div class="products-description__tab-container">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio1">DESCRIPTION</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">USAGE</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio3">INGREDIENTS</label>
                        </div>

                        <div id="products-description__description" class="products-description__tab products-description__tab-active">
                            <div class="products-description__composition">
                                <p class="products-description__composition-text">${product.description}</p>
                            </div>
                        </div>
                        <div id="products-description__usage" class="products-description__tab-1">
                            <div class="products-description__composition">
                                <p class="products-description__composition-text">${product.usage}</p>
                            </div>
                        </div>
                        <div id="products-description__ingredients" class="products-description__tab-1">
                            <div class="products-description__composition">
                                <p class="products-description__composition-text">${product.ingredients}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    } else {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = '<p>Product not found.</p>';
    }
})();