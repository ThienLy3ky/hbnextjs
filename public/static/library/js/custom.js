jQuery(document).ready(function ($) {
  "use strict";

  $(".carousel-text").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      460: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 2,
        margin: 30,
      },
    },
  });
});
