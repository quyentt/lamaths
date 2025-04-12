$(document).ready(function () {
  if ($(window).width() < 1024) {
    $(".header-menu-item").each(function () {
      if ($(this).children(".sub-menu").length > 0) {
        $(this).addClass("has-child");
        $(this).children(".sub-menu").addClass("collapse");

        $(this)
          .children(".menu-label")
          .click(function (e) {
            e.preventDefault();

            // Đóng tất cả sub-menu khác
            $(".header-menu-item .sub-menu")
              .not($(this).parent().find(".sub-menu"))
              .collapse("hide");

            // Gỡ rotate ở tất cả icon khác
            $(".header-menu-item .sub-menu-toggle-ico")
              .not($(this).parent().find(".sub-menu-toggle-ico"))
              .removeClass("rotate");

            // Toggle sub-menu hiện tại
            $(this).parent().find(".sub-menu").collapse("toggle");

            // Toggle icon hiện tại
            $(this).parent().find(".sub-menu-toggle-ico").toggleClass("rotate");
          });
      }
    });
  }

  $(".menu-icon").click(function () {
    $(".header-menu-wrap").addClass("show");
    $("body").addClass("has-menu-show");
  });
  $(".btn-menu-close").click(function () {
    $("body").removeClass("has-menu-show");
    $(".header-menu-wrap").removeClass("show");
  });
});
