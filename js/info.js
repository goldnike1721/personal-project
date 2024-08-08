(function () {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = `
        <header class="header__navbar">
            <div class="header__navbar-menu">
                <div class="header__top-menu">
                    <div class="header__top-title">
                        <p class="header__title-text">20% OFF ON ORGANIC SOAPS | FREE SHIPPING OVER $40</p>
                    </div>
                    <div class="header__top-title">
                        <a class="header__title-link" href="#shop">
                            <p class="header__title-text">TRY OUR AROMATIC SOAPS</p>
                        </a>
                    </div>
                </div>
                <div class="header__bottom-menu">
                    <div class="header__logo">
                        <a href="index.html" class="header__logo-link">
                            <img class="header__logo-image" src="img/header/logo-image.svg" alt="Logo image" />
                        </a>
                    </div>
                    <div class="header__bottom-menu menu">
                        <ul class="header__menu-items menu-list">
                            <li class="menu-list__item">
                                <a href="#about-us" class="menu__element-about">About Us</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="#categories" class="menu__element-categories">Categories</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="#shop" class="menu__element-shop">Shop</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="#testimonials" class="menu__element-testimonials">Testimonials</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="#contact-us" class="menu__element-contact">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__social-container">
                        <ul class="header__social social-list">
                            <li class="social-list__item">
                                <a class="header-social__link-facebook" href="https://www.facebook.com/" alt="Facebook logo">
                                    <!-- <img class="header__logo-facebook" src="img/header/facebook-logo.svg"
                                            alt="Facebook logo" /> -->
                                    <svg width="30"
                                        class="si66b21c4f81520484c2393cdc26d527e9f6db4a3ab4622ccbee7f74e91722948689935 svgIcon_1J7"
                                        viewBox="0 0 32 32">
                                        <path class="logo_2gS"
                                            d="M13.6383 25H16.9133V16.0044H19.3702L19.8561 13.1936H16.9133V11.1568C16.9133 10.5002 17.3379 9.8108 17.9447 9.8108H19.6171V7H17.5674V7.0126C14.3604 7.129 13.7014 8.9864 13.6443 10.9374H13.6383V13.1936H12V16.0044H13.6383V25Z">
                                        </path>
                                    </svg> </a>
                            </li>
                            <li class="social-list__item">
                                <a class="header-social__link-instagram" href="https://www.instagram.com/">
                                    <!-- <img class="header__logo-instagram" src="img/header/instagram-logo.svg"
                                            alt="Instagram logo" /> -->
                                    <svg width="30"
                                        class="si66b21c4f81520484c2393cdc26d527e9f6db4a3ab4622ccbee7f74e91722948689935 svgIcon_1J7"
                                        viewBox="0 0 32 32">
                                        <g>
                                            <path class="logo_2gS"
                                                d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                            </path>
                                            <path class="insta-mask-logo-hover_19f"
                                                style="fill:url(#si66b21c4f81520484c2393cdc26d527e9f6db4a3ab4622ccbee7f74e91722948689935instagramhover)"
                                                d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                            </path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li class="social-list__item">
                                <a class="header-social__link-youtube" href="https://www.youtube.com/">
                                    <!-- <img class="header__logo-youtube" src="img/header/youtube-logo.svg"
                                            alt="Youtube logo" /> -->
                                    <svg width="30"
                                        class="si66b21c4f81520484c2393cdc26d527e9f6db4a3ab4622ccbee7f74e91722948689935 svgIcon_1J7"
                                        viewBox="0 0 32 32">
                                        <path class="logo_2gS"
                                            d="M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
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
                                alt="The picture shows handmade soap ${product.title}">
                        </div>
                    </div>
                    <div class="products-contents__bottom-image">
                        <div class="products-bottom__image">
                            <img class="products-additionally__image" width="50" src="${product.smallimage}"
                                alt="The picture shows handmade soap ${product.title}">
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
        <div class="footer">
            <div class="footer-container">
                <div class="footer-container__general">
                    <div class="footer-general__information">
                        <div class="footer-information__logo">
                            <a href="index.html" class="footer__logo-link">
                                <img class="footer__logo-image" src="img/footer/logo-image.svg" alt="Logo image site">
                            </a>
                        </div>
                        <div class="footer-information__description">
                            <p class="footer-information__description-text">We produce handmade soap from cold-pressed olive
                                oil, coconut oil, and cocoa butter. Each of our soap bars is an
                                extensive source of vitamin E and antioxidants. Turn your routine washing-up into a pleasant
                                ritual.</p>
                        </div>
                        <div class="footer__social-container">
                            <ul class="footer__social social-list">
                                <li class="social-list__item">
                                    <a class="footer-social__link-facebook" href="https://www.facebook.com/"
                                        alt="Facebook logo">
                                        <!-- <img class="footer__logo-facebook" src="img/footer/facebook-logo.svg"
                                                        alt="Facebook logo" /> -->
                                        <svg width="30"
                                            class="si66b21c4f81520484c2393cdb7ee9b6250d9e4cb393dcb21983a92aa81722948691385 svgIcon_1J7 filled_Qbi"
                                            viewBox="0 0 32 32">
                                            <path class="outer_bDW"
                                                d="M32 0H0V32H32V0ZM16.9133 25H13.6383V16.0044H12V13.1936H13.6383V10.9374H13.6443C13.7014 8.9864 14.3604 7.129 17.5674 7.0126V7H19.6171V9.8108H17.9447C17.3379 9.8108 16.9133 10.5002 16.9133 11.1568V13.1936H19.8561L19.3702 16.0044H16.9133V25Z"
                                                fill-rule="evenodd"></path>
                                            <path d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                                                class="border_2yy"></path>
                                            <path class="logo_2gS"
                                                d="M13.6383 25H16.9133V16.0044H19.3702L19.8561 13.1936H16.9133V11.1568C16.9133 10.5002 17.3379 9.8108 17.9447 9.8108H19.6171V7H17.5674V7.0126C14.3604 7.129 13.7014 8.9864 13.6443 10.9374H13.6383V13.1936H12V16.0044H13.6383V25Z"
                                                style="color:#fbf0e5;fill:#fbf0e5"></path>
                                        </svg> </a>
                                </li>
                                <li class="social-list__item">
                                    <a class="footer-social__link-instagram" href="https://www.instagram.com/">
                                        <!-- <img class="footer__logo-instagram" src="img/footer/instagram-logo.svg"
                                                        alt="Instagram logo" /> -->
                                        <svg width="30"
                                            class="si66b21c4f81520484c2393cdb7ee9b6250d9e4cb393dcb21983a92aa81722948691385 svgIcon_1J7 filled_Qbi"
                                            viewBox="0 0 32 32">
                                            <g>
                                                <path class="outer_bDW"
                                                    d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                                </path>
                                                <path class="insta-mask-hover_2Yt"
                                                    style="fill:url(#si66b21c4f81520484c2393cdb7ee9b6250d9e4cb393dcb21983a92aa81722948691385instagramhover)"
                                                    d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                                </path>
                                            </g>
                                            <path d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                                                class="border_2yy"></path>
                                            <g>
                                                <path class="logo_2gS" style="fill:#fbf0e5;color:#fbf0e5"
                                                    d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                                </path>
                                                <path class="insta-mask-logo-hover_19f" style="fill:#fbf0e5;color:#fbf0e5"
                                                    d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li class="social-list__item">
                                    <a class="footer-social__link-youtube" href="https://www.youtube.com/">
                                        <!-- <img class="footer__logo-youtube" src="img/footer/youtube-logo.svg"
                                                        alt="Youtube logo" /> -->
                                        <svg width="30"
                                            class="si66b21c4f81520484c2393cdb7ee9b6250d9e4cb393dcb21983a92aa81722948691385 svgIcon_1J7 filled_Qbi"
                                            viewBox="0 0 32 32">
                                            <path class="outer_bDW"
                                                d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z"
                                                fill-rule="evenodd"></path>
                                            <path d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                                                class="border_2yy"></path>
                                            <path class="logo_2gS"
                                                d="M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z"
                                                style="color:#fbf0e5;fill:#fbf0e5"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__navigation">
                        <div class="footer-navigation__name">
                            <h2 class="footer-navigation__name-title">Navigation<span style=color:#ebbaa9>.</span></h2>
                        </div>
                        <div class="footer-navigation__lists">
                            <ul class="footer-navigation__lists-item">
                                <li class="footer__list-item">
                                    <a class="footer-item__about-us" href="#about-us">About Us</a>
                                </li>
                                <li class="footer__list-item">
                                    <a class="footer-item__categorise" href="#categories">Categories</a>
                                </li>
                                <li class="footer__list-item">
                                    <a class="footer-item__shop" href="#shop">Shop</a>
                                </li>
                                <li class="footer__list-item">
                                    <a class="footer-item__testimonials" href="#testimonials">Testimonials</a>
                                </li>
                                <li class="footer__list-item">
                                    <a class="footer-item__contact-us" href="#">Cantact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__contacts">
                        <div class="footer-contacts__name">
                            <h2 class="footer-contacts__name-title">Contacts<span style=color:#ebbaa9>.</span></h2>
                        </div>
                        <div class="footer-contacts__lists">
                            <ul class="footer-contacts__lists-email">
                                <li class="footer__list-email">
                                    <div class="footer-item__email">
                                        <p class="footer-email-text">E-mail</p>
                                    </div>
                                </li>
                                <li class="footer__list-email">
                                    <a class="footer-item__email-link" href="mailto:example@example.com">purity@email.com</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-contacts__lists">
                            <ul class="footer-contacts__lists-phone">
                                <li class="footer__list-phone">
                                    <div class="footer-item__phone">
                                        <p class="footer-phone-text">Phone</p>
                                    </div>
                                </li>
                                <li class="footer__list-phone">
                                    <a class="footer-item__phone-link" href="tel:+1234567890">+1 (234) 567 89 00</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-contacts__lists">
                            <ul class="footer-contacts__lists-adress">
                                <li class="footer__list-adress">
                                    <div class="footer-item__adress">
                                        <p class="footer-adress-text">Adress</p>
                                    </div>
                                </li>
                                <li class="footer__list-adress">
                                    <a class="footer-item__adress-link"
                                        href="https://www.google.com/maps/place/889+Lexington+Ave,+New+York,+NY+10065,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/data=!4m2!3m1!1s0x89c258e944d631f1:0xa21cdabec996db6d?sa=X&ved=1t:242&ictx=111">889
                                        Lexington Ave, New York</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__subscribe">
                        <div class="footer-subscribe__title">
                            <h2 class="footer-subscribe__title-text">Subscribe to receive our special offers<span
                                    style=color:#ebbaa9>.</span></h2>
                        </div>
                        <div class="footer-subscribe__form">
                            <form action="https://formspree.io/f/xyzgjzde" method="post">
                                <input type="email" name="email" placeholder="Email" required><br>
                                <input type="submit" value="Subscribe ⭢">
                            </form>
                        </div>
                    </div>
                    <hr class="footer__line-title">
                </div>
                <div class="footer-container__bottom">
                    <div class="footer-container__bottom-text">
                        <p class="footer-bottom__text-paragraph">© Created by</p>
                    </div>
                    <div class="footer-container__bottom-text">
                        <p class="footer-bottom__text-paragraph">All rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    } else {
        const productContainer = document.querySelector('.product-details');
        productContainer.innerHTML = '<p>Product not found.</p>';
    }
})();