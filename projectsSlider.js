const sliderTwo = document.querySelector('.projects__slider-container');

let projectsSlider = new Swiper(sliderTwo, {
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slideClass: 'projects__slider-slide',
  wrapperClass: 'projects__slider-wrapper',
  spaceBetween: 50,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  speed: 1000,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween:34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
});
