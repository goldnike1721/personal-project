// index-product-list.js
(function () {
    const products = [
        {
            id: "lemon-start-1",
            title: "Lemon Start",
            image: "img/shop/lemon-start.png",
            smallimage: "img/shop/lemon-start.png",
            number: "Product code 34",
            price: "$3,00",
            description: "Start your day with fresh and seductive flavors! With the combination of uplifting rose geranium oil, intriguing ylang ylang oil, and fresh lemongrass oil, Fresh Touch is a soap for your perfect morning.",
            usage: "Wet your skin, lather the lemon start soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Yalang-Ylang Essential Oil (Cananga odorata), Rose Geranium Essential Oil (Pelargonium graveolens), Lemongrass Essential Oil (Cymbopogon citratus), Olive Oil (Olea europaea), Cocoa Butter (Theobroma cacao), Coconut Oil (Cocos nucifera), Rice Bran oil (oryza sativa).",

        },
        {
            id: "fresh-touch-2",
            title: "Fresh Touch",
            image: "img/shop/fresh-touch.png",
            smallimage: "img/shop/fresh-touch.png",
            number: "Product code 35",
            price: "$2,00",
            description: "It's so refreshing and makes you feel so moisturized afterward! This soap is definitely for those who like fresh aromas. Lemon Start soap smells like sweet lemon. It is hydrating and has a slight exfoliating feel.",
            usage: "Wet your skin, lather the fresh touch soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Rosewood Oil, Cocoa Butter, Coconut Oil, Sicilian Lemon Oil, Fresh Lemon Peel, Almond Oil.",

        },
        {
            id: "tender-lavender-3",
            title: "Tender Lavender",
            image: "img/shop/tender-lavender.png",
            smallimage: "img/shop/tender-lavender.png",
            number: "Product code 32",
            price: "$4,00",
            description: "This Tender Lavender soap is full of natural ingredients handcrafted to cleanse and soothe your skin. It's made with pure and tranquilizing lavender, as well as some other great ingredients. It's perfect for any occasion but definitely best before going to bed!",
            usage: "Wet your skin, lather the tender lavender soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Rosewood Oil, Cocoa Butter, Coconut Oil, Sicilian Lemon Oil, Fresh Lemon Peel, Almond Oil.",

        },
        {
            id: "lemon-vanilla-4",
            title: "Lemon & Vanilla",
            image: "img/shop/lemon-&-vanilla.png",
            smallimage: "img/shop/lemon-&-vanilla.png",
            number: "Product code 33",
            price: "$3,00",
            description: "Fresh but sweet? We can do that! Meet our Lemon & Vanilla soap reminding of a lemon cheesecake. It lathers nicely and leaves your skin feeling nice, totally clean, and soft.",
            usage: "Wet your skin, lather the Lemon & Vanilla soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Coconut Oil Water (Aqua), Rapeseed Oil, Lemon Oil, Sodium Hydroxide, Vanilla extract.",

        },
        {
            id: "matcha-tea-5",
            title: "Matcha Tea",
            image: "img/shop/matcha-tea.png",
            smallimage: "img/shop/matcha-tea.png",
            number: "Product code 18",
            price: "$2,00",
            description: "This 100% natural matcha soap is made with organic shea butter, liquid honey, matcha powder, and lemon fragrances. Matcha is anti-bacterial and features incredibly high levels of epigallocatechin gallate (EGCG) which reduces inflammation and even skin tone. Matcha can also reduce acne, so it's a perfect choice for those who have problem skin.",
            usage: "Wet your skin, lather the matcha soap, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Matcha Green Tea, Shea Butter, Coconut Oil, Peach Extract.",

        },
        {
            id: "cinnamon-delight-6",
            title: "Cinnamon Delight",
            image: "img/shop/cinnamon-delight.png",
            smallimage: "img/shop/cinnamon-delight.png",
            number: "Product code 31",
            price: "$4,00",
            description: "This cinnamon soap bar contains rich shea butter and organic coconut milk that moistures and cares about your skin. We also add a bit of honey that helps soothe and retain moisture to the skin. Cinnamon leaves give this soap a warm, toasty, and autumn scent.",
            usage: "Wet your skin, lather the cinnamon soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Olive oil, coconut oil, shea butter, organic coconut milk, cinnamon leaf essential oil, local honey.",

        },
        {
            id: "caramel-dream-7",
            title: "Caramel Dream",
            image: "img/shop/caramel-dream.png",
            smallimage: "img/shop/caramel-dream.png",
            number: "Product code 29",
            price: "$4,00",
            description: "It's a perfect soap for those who have very sensitive skin. This bar works wonders and doesn't dry your skin out or irritate it. It also features a velvety lather and honey smell. This bar will definitely be your favorite one!",
            usage: "Wet your skin, lather the caramel dream soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Coconut Oil, Rapeseed Oil, Sweet Wild Orange Oil, Bergamot Oil, Local Honey, Aloe Vera Extract, Gardenia Extract.",

        },
        {
            id: "orange-boost-8",
            title: "Orange Boost",
            image: "img/shop/orange-boost.png",
            smallimage: "img/shop/orange-boost.png",
            number: "Product code 30",
            price: "$3,00",
            description: "This orange hand soap is handcrafted from an organic Shea and glycerin soap blend. The tangerine aroma is derived from dried orange slices and oils to make your skin smelling fresh and clean.",
            usage: "Wet your skin, lather the orange boost soap bar, and massage gently. Rinse thoroughly. Suitable for daily use. Avoid contact with eyes. For external use only.",
            ingredients: "Orange essential oil, dried oranges and tangerines, glycerin, shea soap.",

        },
    ];

    function productInfoClick(ev) {
        const productId = ev.target.dataset.id;
        const product = products.filter(product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }

    function renderProducts(products) {
        const productsContainer = document.querySelector('.product-list');
        for (const product of products) {
            productsContainer.innerHTML += `
        <article>
           <h3>${product.title}</h3>
           <a class="info-link" href="product-info.html" data-id=${product.id}>Info</a>
        </article>
      `;
        }
        document.querySelectorAll('.info-link')
            .forEach(link => link.addEventListener('click', productInfoClick));
    }
    renderProducts(products);
})();