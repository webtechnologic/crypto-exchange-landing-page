
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    //nextEl: ".swiper-button-next",
    //prevEl: ".swiper-button-prev",
    nextEl: "#left-arrow-technology",
    prevEl: "#right-arrow-technology",
  },

  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
  
});



var swiperPricing = new Swiper(".mySwiperPricing", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-pricing",
    clickable: true,
  },
  navigation: {
    nextEl: "#left-arrow-pricing",
    prevEl: "#right-arrow-pricing",
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    605: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    925: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});



var swiperContent = new Swiper(".mySwiperContent", {
  
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination-content",
    type: "progressbar",
  },
  navigation: {
    nextEl: "#right-arrow-content",
    prevEl: "#left-arrow-content",
  },
});
