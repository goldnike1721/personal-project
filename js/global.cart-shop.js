Vue.component('products', {

    ready: function () {
        var self = this;
        document.addEventListener("keydown", function (e) {
            if (self.showModal && e.keyCode == 37) {
                self.changeProductInModal("prev");
            } else if (self.showModal && e.keyCode == 39) {
                self.changeProductInModal("next");
            } else if (self.showModal && e.keyCode == 27) {
                self.hideModal();
            }
        });
    },

    template:
        "<div class='products'>" +
        "<div class='product-container' v-for='product in productsData' track-by='$index'>" +
        "<div class='product {{ product.product | lowercase }}'>" +
        "<div class='image' @click='viewProduct(product)' @click.native='productInfoClick($event)' v-bind:style='{ backgroundImage: \"url(\" + product.image + \")\" }' style='background-size: cover; background-position: center;'></div>" +
        "<div class='name'>" +
        "<a class='name-product' v-bind:href='\"product.html?sku=\" + product.sku'>{{ product.product }}</a>" +
        "</div>" +
        "<div class='price'>{{ product.price | currency }}</div>" +
        "<div class='button-container'><button class='button-buy' @click='addToCart(product)'>Buy</button><br><br></div>" +
        "</div></div>" +
        "</div>" +

        "<div class='modalWrapper' v-show='showModal'>" +
        "<div class='prevProduct' @click='changeProductInModal(\"prev\")'><i class='fa fa-angle-left'></i></div>" +
        "<div class='nextProduct' @click='changeProductInModal(\"next\")'><i class='fa fa-angle-right'></i></div>" +
        "<div class='overlay' @click='hideModal()'></div>" +
        "<div class='modal modal-product'>" +
        "<i class='close fa fa-times close-product__modal' @click='hideModal()'></i>" +
        "<div class='imageWrapper'>" +
        "<div class='image image-modal__wrapper' v-bind:style='{ backgroundImage: \"url(\" + modalData.image + \")\" }' style='background-size: cover; background-position: center;' v-on:mouseover='imageMouseOver($event)' v-on:mousemove='imageMouseMove($event)' v-on:mouseout='imageMouseOut($event)'></div>" +
        "</div>" +
        "<div class='additionalImages' v-if='modalData.images'>" +
        "<div v-for='image in modalData.images' class='additionalImage image-modal__wrapper-additional' v-bind:style='{ backgroundImage: \"url(\" + image.image + \")\" }' style='background-size: cover; background-position: center;' @click='changeImage(image.image)'></div>" +
        "</div>" +
        "<div class='name name-product__modal'>{{ modalData.product }}</div>" +
        "<div class='description'>{{ modalData.description }}</div>" +
        "<h3 class='price price-product__modal'>{{ modalData.price | currency }}</h3>" +
        "<div class='modal-label__input'><label class='modal-label' for='modalAmount'>QTY</label>" +
        "<input id='modalAmount' value='{{ modalAmount }}' v-model='modalAmount' class='amount modal-input' @keyup.enter='modalAddToCart(modalData), hideModal()'/></div>" +
        "<button class='button-add-to-cart__modal' @click='modalAddToCart(modalData), hideModal()'>Buy</button>" +
        "</div></div>",

    props: ['productsData', 'cart', 'cartTotal'],

    data: function () {
        return {
            showModal: false,
            modalData: {},
            modalAmount: 1,
            timeout: "",
            mousestop: "",
        }
    },

    methods: {
        addToCart: function (product) {
            var found = false;

            for (var i = 0; i < vue.cart.length; i++) {

                if (vue.cart[i].sku === product.sku) {
                    var newProduct = vue.cart[i];
                    newProduct.quantity = newProduct.quantity + 1;
                    vue.cart.$set(i, newProduct);
                    found = true;
                    break;
                }
            }

            if (!found) {
                product.quantity = 1;
                vue.cart.push(product);
            }

            vue.cartSubTotal = vue.cartSubTotal + product.price;
            vue.cartTotal = vue.cartSubTotal;
            vue.checkoutBool = true;
        },

        modalAddToCart: function (modalData) {
            var self = this;

            for (var i = 0; i < self.modalAmount; i++) {
                self.addToCart(modalData);
            }

            self.modalAmount = 1;
        },

        viewProduct: function (product) {
            var self = this;
            self.modalData = (JSON.parse(JSON.stringify(product)));
            self.showModal = true;
        },

        changeProductInModal: function (direction) {
            var self = this,
                productsLength = vue.productsData.length,
                currentProduct = self.modalData.sku,
                newProductId,
                newProduct;

            if (direction === "next") {
                newProductId = currentProduct + 1;

                if (currentProduct >= productsLength) {
                    newProductId = 1;
                }

            } else if (direction === "prev") {
                newProductId = currentProduct - 1;

                if (newProductId === 0) {
                    newProductId = productsLength;
                }
            }

            for (var i = 0; i < productsLength; i++) {
                if (vue.productsData[i].sku === newProductId) {
                    self.viewProduct(vue.productsData[i]);
                }
            }
        },

        hideModal: function () {
            var self = this;
            self.modalData = {};
            self.showModal = false;
        },

        changeImage: function (image) {
            var self = this;
            self.modalData.image = image;
        },

        imageMouseOver: function (event) {
            event.target.style.transform = "scale(2)";
        },

        imageMouseMove: function (event) {
            var self = this;

            event.target.style.transform = "scale(2)";

            self.timeout = setTimeout(function () {
                event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
            }, 50);

            self.mouseStop = setTimeout(function () {
                event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 100 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 100 + "%";
            }, 100);
        },

        imageMouseOut: function (event) {
            event.target.style.transform = "scale(1)";
        },
        getProductUrl(sku) {
            return `product.html?sku=${sku}`;
        }
    }
});

Vue.component('cart', {
    template: '<div class="cart">' +
        '<div v-if="cartSize > 0" class="cart-animation">' +
        '<div class="shopping-cart">' +
        '<svg width="30" height="45" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="shopping-cart__icon-svg" @click="showCart = !showCart">' +
        '<path d="M1 10C1 8.89543 1.89543 8 3 8H21C22.1046 8 23 8.89543 23 10V25C23 27.2091 21.2091 29 19 29H5C2.79086 29 1 27.2091 1 25V10Z" stroke="#333333" stroke-width="3"></path>' +
        '<path d="M17 12V6C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6V12" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '</svg>' +
        '</div>' +
        '<span class="cart-size" @click="showCart = !showCart"> {{ formattedCartSize }} </span>' +
        '</div>' +
        '<div class="cart-items" v-if="cartSize > 0" v-show="showCart">' +
        '<table class="cartTable">' +
        '<tbody>' +
        '<tr class="product" v-for="product in cart">' +
        '<td class="align-left"><div class="cartImage" @click="removeProduct(product)" v-bind:style="{ backgroundImage: \'url(\' + product.image + \')\' }" style="background-size: cover; background-position: center;"><i class="close fa fa-times"></i></div></td>' +
        '<td class="align-center name-center">{{ cart[$index] | customPluralize }}</td>' +
        '<td class="align-center"><button class="cart__button-plus" @click="quantityChange(product, \'decriment\')"><i class="close fa fa-minus"></i></button></td>' +
        '<td class="align-center">{{ cart[$index].quantity }}</td>' +
        '<td class="align-center cart-plus"><button class="cart__button-minus" @click="quantityChange(product, \'incriment\')"><i class="close fa fa-plus"></i></button></td>' +
        '<td class="cart-total">{{ product.price | currency }}</td>' +
        '</tbody>' +
        '<table>' +
        '</div>' +
        '<div v-if="cartSize > 0" class="cart-total"><h1 class="cart-total-text"> Total: {{ cartTotal | currency }}</h1></div>' +
        '<button class="clearCart" v-show="checkoutBool" @click="clearCart()"> Clear Cart </button>' +
        '<button class="checkoutCart" v-show="checkoutBool" @click="propagateCheckout()"> Checkout </button>',
    props: ['checkoutBool', 'cart', 'cartSize', 'cartTotal'],

    data: function () {
        return {
            showCart: false
        }
    },

    filters: {
        customPluralize: function (cart) {
            var newName;
            if (cart.quantity > 1) {
                if (cart.product === "Peach") {
                    newName = cart.product + "es";
                } else if (cart.product === "Puppy") {
                    newName = cart.product + "ies";
                    newName = newName.replace("y", "");
                } else {
                    newName = cart.product + "s";
                }
                return newName;
            }
            return cart.product;
        }
    },

    computed: {
        formattedCartSize() {
            const size = this.cartSize;
            return size > 9 ? '9+' : size;
        },

        cartSize() {
            let cartSize = 0;
            for (const item of this.cart) {
                cartSize += item.quantity;
            }
            return cartSize;
        }
    },

    methods: {
        removeProduct: function (product) {
            vue.cart.$remove(product);
            vue.cartSubTotal = vue.cartSubTotal - (product.price * product.quantity);
            vue.cartTotal = vue.cartSubTotal;
            if (vue.cart.length <= 0) {
                vue.checkoutBool = false;
            }
        },

        clearCart: function () {
            vue.cart = [];
            vue.cartSubTotal = 0;
            vue.cartTotal = 0;
            vue.checkoutBool = false;
            this.showCart = false;
        },

        quantityChange: function (product, direction) {
            for (var i = 0; i < vue.cart.length; i++) {
                if (vue.cart[i].sku === product.sku) {
                    var newProduct = vue.cart[i];
                    if (direction === "incriment") {
                        newProduct.quantity += 1;
                        vue.cart.$set(i, newProduct);
                    } else {
                        newProduct.quantity -= 1;
                        if (newProduct.quantity == 0) {
                            vue.cart.$remove(newProduct);
                        } else {
                            vue.cart.$set(i, newProduct);
                        }
                    }
                }
            }

            if (direction === "incriment") {
                vue.cartSubTotal += product.price;
            } else {
                vue.cartSubTotal -= product.price;
            }
            vue.cartTotal = vue.cartSubTotal;

            if (vue.cart.length <= 0) {
                vue.checkoutBool = false;
            }
        },

        propagateCheckout: function () {
            vue.$dispatch("checkoutRequest");
        }
    }
});

Vue.component('checkout-area', {
    template:
        "<div class='checkout-area'>" +
        "<table>" +
        "</table>" +
        "<div class='modalWrapper' v-show='showModal'>" +
        "<div class='overlay' @click='hideModal()'></div>" +
        "<div class='modal cart-checkout'>" +
        "<div class='checkout-close__item'><i class='close fa fa-times' @click='hideModal()'></i></div>" +
        "<h1 class='checkout-total__text'>Total: {{ cartTotal | currency }}</h1>" +
        "<div>" +
        "<p class='checkout-text__pay'>We accept:</p>" +
        "<div class='checkout-items__pay'>" +
        "<a href='https://stripe.com/' class='checkout-item__link'><i class='fa-brands fa-cc-stripe'></i></a>" +
        "<a href='https://www.visa.com/' class='checkout-item__link'><i class='fa-brands fa-cc-visa'></i></a>" +
        "<a href='https://www.mastercard.com/' class='checkout-item__link'><i class='fa-brands fa-cc-mastercard'></i></a>" +
        "<a href='https://www.americanexpress.com/' class='checkout-item__link'><i class='fa-brands fa-cc-amex'></i></a>" +
        "<a href='https://www.discover.com/' class='checkout-item__link'><i class='fa-brands fa-cc-discover'></i></a>" +
        "</div>" +
        "</div>" +
        "<h1 class='checkout-title'>Checkout</h1>" +
        "<div class='personal-order__form-container'>" +
        "<form action='https://formspree.io/f/xeojgylz' method='post'>" +
        "<input class='input-form' type='text' name='name' placeholder='Enter your full name*' required><br>" +
        "<input class='input-form' type='email' name='email' placeholder='Enter your e-mail*' required><br>" +
        "<input class='input-form' type='text' name='number' placeholder='Enter your phone number*' required><br>" +
        "<textarea placeholder='Type your message' rows='5'></textarea><br>" +
        "<div class='button-container'><input class='input-form__button' type='submit' value='Order Now'></div>" +
        "</form>" +
        "</div>" +
        "<br>" +
        "</div>" +
        "</div>" +
        "</div>"
    ,
    props: ['cart', 'cartSize', 'cartTotal'],

    data: function () {
        return {
            showModal: false
        }
    },

    filters: {
        customPluralize: function (cart) {
            var newName;

            if (cart.quantity > 1) {
                newName = cart.product + "s";
                return newName;
            }

            return cart.product;
        },

        cartSize: function (cart) {
            var cartSize = 0;

            for (var i = 0; i < cart.length; i++) {
                cartSize += cart[i].quantity;
            }

            return cartSize;
        }
    },

    methods: {
        removeProduct: function (product) {
            vue.cart.$remove(product);
            if (vue.cart.length <= 0) {
                vue.checkoutBool = false;
            }
        },

        checkoutModal: function () {
            var self = this;
            self.showModal = true;

            console.log("CHECKOUT", self.cartTotal);

        },

        hideModal: function () {
            var self = this;
            self.showModal = false;
        }
    },

    events: {
        "checkoutRequest": function () {
            var self = this;
            self.checkoutModal();
        }
    }
});

Vue.config.debug = false;
var vue = new Vue({
    el: "#vue",

    data: {
        productsData: [],
        cart: [],
        cartSubTotal: 0,
        cartTotal: 0,
        checkoutBool: false
    },

    created: function () {
        var self = this;
        fetch('./api/products.json')
            .then(response => response.json())
            .then(data => {
                self.productsData = data;
            })
            .catch(error => console.error('Error loading products data:', error));
    },

    events: {
        "checkoutRequest": function () {
            vue.$broadcast("checkoutRequest");
        }
    }
});