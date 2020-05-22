// Блок фильтр - CHECKBOX
let buttonFilterSumbit = document.querySelector(".button__filter--sumbit");
let buttonFilterReset = document.querySelector(".button__filter--reset");
let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
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
  //
  let buttonElement = event.target.closest(".button__filter--sumbit");
  let inputElement = event.target.closest("input");

  if (inputElement) {
    //
    let squareID = inputElement.dataset.name;
    let roomID = inputElement.dataset.room;
    //
    let cardSquare = `[data-square="${squareID}"]`;
    let cardNoneRoom = `[data-none="${roomID}"]`;
    let cardLotokRoom = `[data-lotok="${roomID}"]`;
    let cardBallRoom = `[data-ball="${roomID}"]`;
    let cardClawRoom = `[data-claw="${roomID}"]`;
    let cardHouseRoom = `[data-house="${roomID}"]`;

    //
    let cardSquareItem = document.querySelector(cardSquare);
    let cardNoneRoomItem = document.querySelector(cardNoneRoom);
    let cardLotokRoomItem = document.querySelector(cardLotokRoom);
    let cardBallRoomItem = document.querySelector(cardBallRoom);
    let cardClawRoomItem = document.querySelector(cardClawRoom);
    let cardHouseRoomItem = document.querySelector(cardHouseRoom);

    if (cardLotokRoomItem.dataset.lotok === roomID) {
      cardLotokRoomItem.style.display = "block";
    } else {
      cardLotokRoomItem.style.display = "none";
    }
  }
  //
  // let squareTrue = cardSquareItem.dataset.square == squareID;
  // let noneTrue = cardNoneRoomItem.dataset.none == roomID;
  // let lotokTrue = cardLotokRoomItem.dataset.lotok == roomID;
  // let ballTrue = cardBallRoomItem.dataset.ball == roomID;
  // let clawTrue = cardClawRoomItem.dataset.claw == roomID;
  // let houseTrue = cardHouseRoomItem.dataset.house == roomID;
  //
  //   if (squareTrue) {
  //     cardSquareItem.style.display = "none";
  //   }

  //   cardSquareItem.style.display = "block";
  // }
});