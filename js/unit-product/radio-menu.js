document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.products-description__tab');
    const radios = document.querySelectorAll('.btn-check');

    function showTab(tabId) {
        tabs.forEach(tab => {
            tab.classList.toggle('products-description__tab-active', tab.id === tabId);
        });
    }

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                showTab(this.id.replace('btnradio', 'products-description__'));
            }
        });
    });

    showTab(document.querySelector('.btn-check:checked').id.replace('btnradio', 'products-description__'));
});
