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

// document.addEventListener("DOMContentLoaded", function() {
//   let _selector = document.querySelector("input[name=square-input]");
//   let buttonFilterSumbit = document.querySelector(".button-filter--sumbit");
//   _selector.addEventListener("change", function() {
//     if (_selector.checked) {
//       buttonFilterSumbit.style.display = "block";
//     } else {
//       buttonFilterSumbit.style.display = "none";
//     }
//   });
// });

// let _selector = Array.from(document.querySelectorAll("input[name=square-input]"));
// let buttonFilterSumbit = document.querySelector(".button-filter--sumbit");
// console.log(_selector);

// _selector.forEach((val,indx) {
//   _selector.addEventListener("change", function() {
//     if (_selector.checked) {
//       buttonFilterSumbit.style.display = "block";
//     }
// }