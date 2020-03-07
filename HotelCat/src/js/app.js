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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
