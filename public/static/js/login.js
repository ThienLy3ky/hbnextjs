(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    $(document).on("click", "#signUp", () => {
      $(".container-login").addClass("right-panel-active");
    });
    $(document).on("click", "#signIn", () => {
      $(".container-login").removeClass("right-panel-active");
    });
    $(document).on("click", ".forgot", () => {
      $(".forgot-password").toggleClass("active");
    });
  });

  // Ba
})(jQuery);
