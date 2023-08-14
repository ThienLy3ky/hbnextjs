(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(window).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    $(".related-carousel").owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 800,
      navSpeed: 500,
      autoplayTimeout: 10000,
      slideBy: "page",
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });

    $(".carousel-next").click(function () {
      $(".related-carousel").trigger("next.owl.carousel");
    });

    $(".carousel-prev").click(function () {
      $(".related-carousel").trigger("prev.owl.carousel");
    });
    $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $(".collapse").hasClass("collapse show");
      if (_opened === true && clickover.closest(".navbar").length === 0) {
        $(".collapse").collapse("hide");
      }
    });
    const countDount = $("#time-count");
    if (countDount.length) {
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        countDount.html(hours + ":" + minutes + ":" + seconds + "");

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          countDount.html("EXPIRED");
        }
      }, 1000);
    }

    $('[data-toggle="minimize"]').on("click", function () {
      if (
        $(".container-scroller").hasClass("sidebar-toggle-display") ||
        $(".container-scroller").hasClass("sidebar-absolute")
      ) {
        $(".container-scroller").toggleClass("sidebar-hidden");
      } else {
        $(".container-scroller").toggleClass("sidebar-icon-only");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".menu-animation").addClass("menu-show");
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".menu-animation").removeClass("menu-show");
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(document).on("click", ".back-to-top", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Related carousel

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);
