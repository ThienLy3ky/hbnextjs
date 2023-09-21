jQuery(document).ready(function ($) {
  "use strict";

  $(".carousel-text").owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    margin: 30,
    autoplay: true,
    smartSpeed: 1200,
    autoplayTimeout: 12000,
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: true,
    smartSpeed: 700,
    autoplayTimeout: 6000,
  });
});
