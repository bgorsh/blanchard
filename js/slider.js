let gallerySlider = new Swiper(".swiper-right--content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },

    1561: {
      grid: {
        rows: 2,
      },
      spaceBetween: 30
    }
  },
});
