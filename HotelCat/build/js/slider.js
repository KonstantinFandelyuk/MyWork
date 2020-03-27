$(document).ready(function() {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: false,
    adaptiveHeight: true,
  });
});

$(document).ready(function() {
  $(".slider-feedback").slick({
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
