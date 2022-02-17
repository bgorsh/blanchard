const slider = document.querySelector('.events__container');

let eventsSlider = new Swiper(slider, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  grabCursor: true,
  slideClass: 'events__slide',
  wrapperClass: 'events__wrapper',
  spaceBetween: 50,
  autoplay: stop,
  effect: 'slide',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
})



