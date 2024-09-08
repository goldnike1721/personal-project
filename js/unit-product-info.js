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
                    <div class="container">
                        <div id="myCarousel" class="carousel slide" data-interval="false">
                            <div class="carousel-inner products-container__contents" role="listbox">
                                <div class="item active">
                                    <div class="products-contents__carousel">
                                        <div class="products-contents__carousel-image">
                                            <img class="products-carousel__image"
                                                src="${product.image}" alt="${product.altText}">
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="products-contents__carousel">
                                        <div class="products-contents__carousel-image">
                                            <img class="products-carousel__image"
                                                src="${product.image2}" alt="${product.altText}">
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="products-contents__carousel">
                                        <div class="products-contents__carousel-image">
                                            <img class="products-carousel__image"
                                                src="${product.image3}" alt="${product.altText}">
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="products-contents__carousel">
                                        <div class="products-contents__carousel-image">
                                            <img class="products-carousel__image"
                                                src="${product.image4}" alt="${product.altText}">
                                        </div>
                                    </div>
                                </div>
                                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <div id="thumbCarousel" class="products-contents__bottom-image">
                                <div data-target="#myCarousel" data-slide-to="0"
                                    class="thumb active products-bottom__image">
                                    <img class="products-additionally__image"
                                        src="${product.image}" alt="${product.altText}">
                                </div>
                                <div data-target="#myCarousel" data-slide-to="1" class="thumb products-bottom__image">
                                    <img class="products-additionally__image"
                                        src="${product.image2}" alt="${product.altText}">
                                </div>
                                <div data-target="#myCarousel" data-slide-to="2" class="thumb products-bottom__image">
                                    <img class="products-additionally__image"
                                        src="${product.image3}" alt="${product.altText}">
                                </div>
                                <div data-target="#myCarousel" data-slide-to="3" class="thumb products-bottom__image">
                                    <img class="products-additionally__image"
                                        src="${product.image4}" alt="${product.altText}">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="products-description">
                    <div class="products-description__top">
                        <div class="products-description__stock">
                            <p class="products-description__stock-text">${product.stock}</p>
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
                                <button class="products-description__cart" @click="addToCart(product)" onclick="addToCart('${product.id}')">Add to
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
                        <div id="description" class="description">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        const descriptionDiv = document.getElementById('description');
        const radios = document.querySelectorAll('.btn-check');

        const descriptions = {
            btnradio1: product.description,
            btnradio2: product.usage,
            btnradio3: product.ingredients
        };

        function updateDescription() {
            const selectedId = document.querySelector('.btn-check:checked').id;
            descriptionDiv.textContent = descriptions[selectedId] || 'Опис недоступний.';
        }

        radios.forEach(radio => {
            radio.addEventListener('change', updateDescription);
        });

        updateDescription();

    } else {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = '<p>Product not found.</p>';
    }
})();