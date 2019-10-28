$(".menu_btn").click(function() {
  $(".mobile__menu")
    .fadeIn(300)
    .hide()
    .css("display", "flex");
});
$(".mobile__menu .close_btn").click(function() {
  $(".mobile__menu")
    .fadeOut(300)
    .hide()
    .css("display", "flex");
});
