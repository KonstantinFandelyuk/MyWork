// ------CHECBOX --------
let allCheckbox = Array.from(document.querySelectorAll("input[type=checkbox]"));

let squareInput = Array.from(document.querySelectorAll("input[name=square-input]"));

//-----------------------------
// ------- Button ---------
let buttonFilterSumbit = document.querySelector(".button__filter--sumbit");
let buttonFilterReset = document.querySelector(".button__filter--reset");
// -------------------------

let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
let catalogText = Array.from(document.querySelectorAll(".catalog-text "));

// let squareListItem = Array.from(document.querySelectorAll(".square"));
let res = []; // - Массив данных  выбраных чекбоксов

// --- Проходит по всем чекбоксам и активирует кнопку ---------

// allCheckbox.map((value) => {
//   value.onclick = function() {
//     if (value) {
//       buttonFilterSumbit.classList.add("active");
//     }
//   };
// });

// // --------------------------------------------

allCheckbox.forEach((item, index) => {
  item.addEventListener("change", (e) => {
    catalogText.forEach((value, i) => {
      let catalogTextAtr = value.getAttributeNames()[1];
      let inputAtr = item.getAttributeNames()[1];
      console.log(inputAtr);
      // if (inputAtr === catalogTextAtr && catalogTextAtr[i] == i) {
      //   console.log("res");
      //   // res.push(element);
      // }
    });
  });
});
