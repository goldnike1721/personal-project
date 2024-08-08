(function () {
    const products = [
        {
            id: "lemon-start",
            title: "Lemon Start",
            image: "img/shop/lemon-start.png",
            smallimage: "img/shop/lemon-start.png",
            number: "Product code 34",
            price: "$3,00",
            description: "Start your day with fresh and seductive flavors! With the combination of uplifting rose geranium oil, intriguing ylang ylang oil, and fresh lemongrass oil, Fresh Touch is a soap for your perfect morning.",
            usage: "Wet your skin, lather the lemon start soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Yalang-Ylang Essential Oil (Cananga odorata), Rose Geranium Essential Oil (Pelargonium graveolens), Lemongrass Essential Oil (Cymbopogon citratus), Olive Oil (Olea europaea), Cocoa Butter (Theobroma cacao), Coconut Oil (Cocos nucifera), Rice Bran oil (oryza sativa).",
            linkText: "Lemon Start",
            altText: "The picture shows handmade soap Lemon Start",
        },
        {
            id: "fresh-touch",
            title: "Fresh Touch",
            image: "img/shop/fresh-touch.png",
            smallimage: "img/shop/fresh-touch.png",
            number: "Product code 35",
            price: "$2,00",
            description: "It's so refreshing and makes you feel so moisturized afterward! This soap is definitely for those who like fresh aromas. Lemon Start soap smells like sweet lemon. It is hydrating and has a slight exfoliating feel.",
            usage: "Wet your skin, lather the fresh touch soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Rosewood Oil, Cocoa Butter, Coconut Oil, Sicilian Lemon Oil, Fresh Lemon Peel, Almond Oil.",
            linkText: "Fresh Touch",
            altText: "The picture shows handmade soap Fresh Touch",
        },
        {
            id: "tender-lavender",
            title: "Tender Lavender",
            image: "img/shop/tender-lavender.png",
            smallimage: "img/shop/tender-lavender.png",
            number: "Product code 32",
            price: "$4,00",
            description: "This Tender Lavender soap is full of natural ingredients handcrafted to cleanse and soothe your skin. It's made with pure and tranquilizing lavender, as well as some other great ingredients. It's perfect for any occasion but definitely best before going to bed!",
            usage: "Wet your skin, lather the tender lavender soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Rosewood Oil, Cocoa Butter, Coconut Oil, Sicilian Lemon Oil, Fresh Lemon Peel, Almond Oil.",
            linkText: "Tender Lavender",
            altText: "The picture shows handmade soap Tender Lavender",
        },
        {
            id: "lemon-vanilla",
            title: "Lemon & Vanilla",
            image: "img/shop/lemon-&-vanilla.png",
            smallimage: "img/shop/lemon-&-vanilla.png",
            number: "Product code 33",
            price: "$3,00",
            description: "Fresh but sweet? We can do that! Meet our Lemon & Vanilla soap reminding of a lemon cheesecake. It lathers nicely and leaves your skin feeling nice, totally clean, and soft.",
            usage: "Wet your skin, lather the Lemon & Vanilla soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Coconut Oil Water (Aqua), Rapeseed Oil, Lemon Oil, Sodium Hydroxide, Vanilla extract.",
            linkText: "Lemon & Vanilla",
            altText: "The picture shows handmade soap Lemon & Vanilla",
        },
        {
            id: "matcha-tea",
            title: "Matcha Tea",
            image: "img/shop/matcha-tea.png",
            smallimage: "img/shop/matcha-tea.png",
            number: "Product code 18",
            price: "$2,00",
            description: "This 100% natural matcha soap is made with organic shea butter, liquid honey, matcha powder, and lemon fragrances. Matcha is anti-bacterial and features incredibly high levels of epigallocatechin gallate (EGCG) which reduces inflammation and even skin tone. Matcha can also reduce acne, so it's a perfect choice for those who have problem skin.",
            usage: "Wet your skin, lather the matcha soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Matcha Green Tea, Shea Butter, Coconut Oil, Peach Extract.",
            linkText: "Matcha Tea",
            altText: "The picture shows handmade soap Matcha Tea",
        },
        {
            id: "cinnamon-delight",
            title: "Cinnamon Delight",
            image: "img/shop/cinnamon-delight.png",
            smallimage: "img/shop/cinnamon-delight.png",
            number: "Product code 31",
            price: "$4,00",
            description: "This cinnamon soap bar contains rich shea butter and organic coconut milk that moistures and cares about your skin. We also add a bit of honey that helps soothe and retain moisture to the skin. Cinnamon leaves give this soap a warm, toasty, and autumn scent.",
            usage: "Wet your skin, lather the cinnamon soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Olive oil, coconut oil, shea butter, organic coconut milk, cinnamon leaf essential oil, local honey.",
            linkText: "Cinnamon Delight",
            altText: "The picture shows handmade soap Cinnamon Delight",
        },
        {
            id: "caramel-dream",
            title: "Caramel Dream",
            image: "img/shop/caramel-dream.png",
            smallimage: "img/shop/caramel-dream.png",
            number: "Product code 29",
            price: "$4,00",
            description: "It's a perfect soap for those who have very sensitive skin. This bar works wonders and doesn't dry your skin out or irritate it. It also features a velvety lather and honey smell. This bar will definitely be your favorite one!",
            usage: "Wet your skin, lather the caramel dream soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Coconut Oil, Rapeseed Oil, Sweet Wild Orange Oil, Bergamot Oil, Local Honey, Aloe Vera Extract, Gardenia Extract.",
            linkText: "Caramel Dream",
            altText: "The picture shows handmade soap Caramel Dream",
        },
        {
            id: "orange-boost",
            title: "Orange Boost",
            image: "img/shop/orange-boost.png",
            smallimage: "img/shop/orange-boost.png",
            number: "Product code 30",
            price: "$3,00",
            description: "This orange hand soap is handcrafted from an organic Shea and glycerin soap blend. The tangerine aroma is derived from dried orange slices and oils to make your skin smelling fresh and clean.",
            usage: "Wet your skin, lather the orange boost soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Orange essential oil, dried oranges and tangerines, glycerin, shea soap.",
            linkText: "Orange Boost",
            altText: "The picture shows handmade soap Orange Boost",
        },
    ];

    function productInfoClick(ev) {
        ev.preventDefault(); // Зупиняємо стандартну поведінку посилання
        const productId = ev.target.dataset.id;
        const product = products.find(product => product.id === productId);
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'product.html'; // Перенаправлення на сторінку з продуктом
    }

    function renderProducts(products) {
        const productsContainer = document.querySelector('.product-list');
        for (const product of products) {
            productsContainer.innerHTML += `
            <section id="shop" class="shop">
                    <div class="shop-block">
                        <div id="lemon-start-1" class="shop-block__product">
                            <div class="shop-product__image">
                                <a class="shop-product__image-link" href="product.html?id=${product.id}" data-id="${product.id}">
                                    <img class="shop__image" width="150" src="${product.image}"
                                        alt="${product.altText}">
                                </a>
                            </div>
                            <div class="shop-product__name">
                                <a href="product.html?id=${product.id}" class="info-link" data-id="${product.id}">${product.linkText}</a>
                            </div>
                            <div class="shop-product__price">
                                <p class="shop-product__price-list">${product.price}</p>
                            </div>
                            <div class="shop-product__button">
                                <a href="#" class="shop__button-cart">Add to Cart ⭢</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            `;
        }
        document.querySelectorAll('.info-link')
            .forEach(link => link.addEventListener('click', productInfoClick));
    }

    renderProducts(products);
})();