(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    $(".menu-btn").on("click", function () {
      console.log("====================================");
      console.log();
      console.log("====================================");
      if (
        $(".container-scroller").hasClass("sidebar-toggle-display") ||
        $(".container-scroller").hasClass("sidebar-absolute")
      ) {
        $(".container-scroller").toggleClass("sidebar-hidden");
      } else {
        $(".container-scroller").toggleClass("sidebar-icon-only");
      }
    });
    $(".menu-btn").on("click", function () {
      $(".menu-btn").toggleClass("down");
    });
  });

  // Ba
})(jQuery);
