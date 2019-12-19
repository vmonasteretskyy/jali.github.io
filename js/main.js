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
$("input[type='tel']").mask("+380(00)000-00-00");
