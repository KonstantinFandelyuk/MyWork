// Блок фильтр - CHECKBOX
let buttonFilterSumbit = document.querySelector(".button__filter--sumbit");
let buttonFilterReset = document.querySelector(".button__filter--reset");
let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
let catalog = document.querySelector(".catalog");
let res = [];
// --------------------------------------------------------------

//  Блок модальных окон и меню
let modalBuy = document.querySelector(".modal");
let animateBuy = document.querySelector(".background-modal");
// --------------------------------------------------------------

document.addEventListener("click", function (event) {
  let burgerMenu = document.querySelector(".burger-menu");
  const burgerMenuButton = event.target.closest(".burger");
  let headerRow = document.querySelector(".header__row-1");
  let animateBuy = document.querySelector(".burger-menu__background");
  if (burgerMenuButton) {
    burgerMenu.classList.toggle("active");
    headerRow.classList.toggle("active");
    animateBuy.classList.toggle("fadeInDown");
  }
});

document.addEventListener("click", function (event) {
  const buttonBuy = event.target.closest(".button");
  if (buttonBuy) {
    modalBuy.classList.add("active");
    animateBuy.classList.add("zoomIn");
  }
});

document.addEventListener("click", function (event) {
  let modalClose = event.target.closest(".modal__close");
  let modalElementBackground = event.target.closest(".background-modal");
  let modalElement = event.target.closest(".modal");
  if (modalClose || (modalElement && !modalElementBackground)) {
    modalBuy.classList.remove("active");
    modalElementBackground.classList.remove("zoomIn");
  }
});
// --------------------------------------------------------------

// Блок фильтр
let catalogBox = document.querySelector(".catalog-box");
// // --------------------------------------------------------------

catalogBox.addEventListener("click", function (event) {
  let inputElement = event.target.closest("input");
  if (inputElement) {
    let id = inputElement.dataset.name;
    //

    for (let cardItem of catalogItemProduct) {
      let squareTrue = cardItem.dataset.square == id;
      let noneTrue = cardItem.dataset.none == id;
      let lotokTrue = cardItem.dataset.lotok == id;
      let ballTrue = cardItem.dataset.ball == id;
      let clawTrue = cardItem.dataset.claw == id;
      let houseTrue = cardItem.dataset.house == id;
      //
      if (squareTrue || noneTrue || lotokTrue || ballTrue || clawTrue || houseTrue) {
        cardItem.classList.add("active");
        catalog.classList.add("active");
      } else {
        cardItem.classList.remove("hide");
      }
    }
  }
});
