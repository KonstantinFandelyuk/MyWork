// ------CHECBOX --------
let allCheckbox = Array.from(document.querySelectorAll("input[type=checkbox]"));

let squareInput = Array.from(document.querySelectorAll("input[name=square-input]"));

//-----------------------------
// ------- Button ---------
let buttonFilterSumbit = document.querySelector(".button__filter--sumbit");
let buttonFilterReset = document.querySelector(".button__filter--reset");
// -------------------------

let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
let squareListItem = Array.from(document.querySelectorAll(".square"));
let res = []; // - Массив данных  выбраных чекбоксов

// --- Проходит по всем чекбоксам и активирует кнопку ---------

allCheckbox.forEach(function(item, i) {
  item.addEventListener("change", function() {
    if (item.checked) {
      buttonFilterSumbit.classList.add("active");
    }
  });
});

// --------------------------------------------

allCheckbox.forEach(function(item, i) {
  item.addEventListener("change", function() {
    if (item.checked) {
      catalogItemProduct.forEach(function(vl, index) {
        if (i == index) {
          // res.push(item);
          console.log(item);
        }
      });
    }
  });
});

// function ClickMe() {
//   res.forEach(function(item, i) {
//     item.addEventListener("change", function() {
//       if (item.checked) {
//         catalogItemProduct.forEach(function(vl, indx) {
//           if (i == indx) {
//             catalog.classList.add("active");
//             vl.style.display = "active";
//           } else {
//             vl.style.display = "none";
//           }
//         });
//       }
//     });
//   });
// }
