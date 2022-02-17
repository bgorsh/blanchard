const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,

  loop: true,

  loopedSlides: 3,

  effect: 'fade',

  fadeEffect: {
    crossfade: true
  },

  spacebetween: 30,

  autoplay: {
    delay: 2000,
  },

  speed: 700,

  breakpoints: {
    // when window width is >= 320px
    320: {
      width: 768
    },
    // when window width is >= 768px
    768: {
      width: 1024
    },
    // when window width is >= 1024px
    1024: {
      width: 1920
    },
    // when window width is >= 1920px
    1920: {
      width: 1920
    }
  }
});
