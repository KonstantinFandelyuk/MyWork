$(document).ready(function() {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });
});

$(document).ready(function() {
  $(".slider-feedback").slick({
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});
