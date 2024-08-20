(function () {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = `
        <section class="products">
            <div class="products-container">
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
                            <img class="products-carousel__image" width="150" src="${product.image}"
                                alt="${product.altText}">
                        </div>
                    </div>
                    <div class="products-contents__bottom-image">
                        <div class="products-bottom__image">
                            <img class="products-additionally__image" width="50" src="${product.smallimage}"
                                alt="${product.altText}">
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
                            <div class="products-description__button">
                                <button class="products-description__button-cart" onclick="addToCart('${product.id}')">Add to
                                    Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="products-description__bottom">
                        <div class="products-description__bottom">
                            <div class="products-description__bottom-content">
                                <div class="products-description__button">
                                    <span class="products-description__tab-button active"
                                        onclick="openTab(event, 'products-description__description')">DESCRIPTION</span>
                                </div>
                                <div class="products-description__button">
                                    <span class="products-description__tab-button"
                                        onclick="openTab(event, 'products-description__usage')">USAGE</span>
                                </div>
                                <div class="products-description__button">
                                    <span class="products-description__tab-button"
                                        onclick="openTab(event, 'products-description__ingredients')">INGREDIENTS</span>
                                </div>
                            </div>
                            <div class="products-description__tab-container">
                                <div id="products-description__description"
                                    class="products-description__tab products-description__tab-active">
                                    <div class="products-description__title">
                                        <p class="products-description__title-description">DESCRIPTION</p>
                                    </div>
                                    <div class="products-description__composition">
                                        <p class="products-description__composition-description">${product.description}</p>
                                    </div>
                                </div>
                                <div id="products-description__usage" class="products-description__tab">
                                    <div class="products-description__title">
                                        <p class="products-description__title-usage">USAGE</p>
                                    </div>
                                    <div class="products-description__composition">
                                        <p class="products-description__composition-usage">${product.usage}</p>
                                    </div>
                                </div>
                                <div id="products-description__ingredients" class="products-description__tab">
                                    <div class="products-description__title">
                                        <p class="products-description__title-ingredients">INGREDIENTS</p>
                                    </div>
                                    <div class="products-description__composition">
                                        <p class="products-description__composition-ingredients">${product.ingredients}</p>
                                    </div>
                                </div>
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