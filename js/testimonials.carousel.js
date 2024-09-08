const carousel = document.querySelector('.testimonials-animated-carousel');
const carouselInner = carousel.querySelector('.testimonials-animated-carousel__inner');
const prevButton = carousel.querySelector('.testimonials-animated-carousel__button--prev');
const nextButton = carousel.querySelector('.testimonials-animated-carousel__button--next');
const indicators = document.querySelectorAll('.testimonials__carousel-indicator');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = 0;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 590) return 2;
    return 1;
}

function setupCarousel() {
    slides = Array.from(carouselInner.children).filter(slide => !slide.classList.contains('clone'));

    const clonesStart = createClones(8, true);
    const clonesEnd = createClones(8, false);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    updateCarousel();
    updateIndicators();
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
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === (currentIndex - slidesPerView + slides.length) % indicators.length) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
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

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const slideIndex = parseInt(indicator.getAttribute('data-slide'));
        currentIndex = slideIndex + slidesPerView;
        updateCarousel();
    });
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});