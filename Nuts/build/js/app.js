$(document).ready(function() {
  $(".feedback-clients").slick({
    arrows: true,
    dots: false,
    autoplay: true,
  });
  $(".faq_item_title_inner").on("click", function() {
    $(this)
      .parents(".faq_item")
      .find(".faq_item_body")
      .slideToggle(300);
    $(this).toggleClass("open");
    if ($(this).hasClass("show_all")) {
      if ($(this).hasClass("open")) {
      }
    }
  });
});
