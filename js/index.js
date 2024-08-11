document.addEventListener('click', function (event) {
    const menu = document.querySelector('.header__navbar-menu');
    const checkbox = document.querySelector('.checkbox');

    if (!menu.contains(event.target) && !checkbox.contains(event.target)) {
        checkbox.checked = false;
    }
});