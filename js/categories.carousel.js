const carousel = document.querySelector('.categories-animated-carousel');
const carouselInner = carousel.querySelector('.categories-animated-carousel__inner');
const prevButton = carousel.querySelector('.categories-animated-carousel__button--prev');
const nextButton = carousel.querySelector('.categories-animated-carousel__button--next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 767) return 2;
    return 1;
}

function setupCarousel() {
    slides = Array.from(carouselInner.children).filter(slide => !slide.classList.contains('clone'));

    const clonesStart = createClones(8, true);
    const clonesEnd = createClones(8, false);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    updateCarousel();
}

function createClones(count, isStart) {
    const slidesToClone = isStart ? slides.slice(-count) : slides.slice(0, count);
    const clones = [];

    for (let i = 0; i < count; i++) {
        clones.push(...slidesToClone.map(cloneSlide));
    }

    return clones;
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

prevButton.addEventListener('click', () => {
    if (--currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        carouselInner.style.transition = 'none';
        updateCarousel();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    } else {
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    carouselInner.style.transition = '';
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        carouselInner.style.transition = 'none';
        updateCarousel();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    } else {
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});
