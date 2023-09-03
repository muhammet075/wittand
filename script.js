AOS.init();

const swiper1 = new Swiper('.tandencarousel1', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
    0: {
      slidesPerView: 2,
         spaceBetween: 0,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1215: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
    },
    centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 2000,
  },
});


const swiper2 = new Swiper('.reviewcarousel1', {

  loop: true,

  pagination: {
      el: '.swiper-pagination',
  },
  breakpoints: {
  0: {
    slidesPerView: 1,
       spaceBetween: 0,
  },
  870: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  },
  centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  autoplay: {
  delay: 4000,
},
});