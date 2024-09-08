document.querySelectorAll('.top-choice__block-image').forEach(image => {
    image.addEventListener('click', function (event) {
        event.preventDefault();

        const dataId = this.querySelector('img').getAttribute('data-id');
        openModalWithDataId(dataId);
    });
});

function openModalWithDataId(dataId) {
    const modal = document.getElementById('exampleModal');
    const carouselInner = modal.querySelector('.carousel-inner');

    carouselInner.innerHTML = '';

    const images = [
        'img/top-choice/high-quality.svg',
        'img/top-choice/best-soap.svg',
        'img/top-choice/top-natural.svg',
        'img/top-choice/best-choice.svg',
        'img/top-choice/organic-soap.svg'
    ];

    const altTexts = [
        'The picture shows the 2020 annual award',
        'The picture shows the 2018 annual award',
        'The picture shows the 2017 annual award',
        'The picture shows the 2020 annual award',
        'The picture shows the 2018 annual award'
    ];

    images.forEach((src, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        if (dataId == (index + 1)) {
            carouselItem.classList.add('active');
        }

        carouselItem.innerHTML = `
            <img class="top-choice__modal-image d-block w-100" src="${src}" alt="${altTexts[index]}">
        `;

        carouselInner.appendChild(carouselItem);
    });

    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}
