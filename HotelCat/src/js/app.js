let squareCheckbox = Array.from(document.querySelectorAll("input[name=square-input]"));
let buttonFilterSumbit = document.querySelector(".button-filter--sumbit");
let squareItem = document.querySelectorAll(".square");
let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
let catalog = document.querySelector(".catalog");
let res = [];

squareCheckbox.forEach(function(item, i) {
  item.addEventListener("change", function() {
    if (item.checked) {
      buttonFilterSumbit.style.display = "block";
      catalogItemProduct.forEach(function(vl, indx) {
        if (i == indx) {
          res.push(vl);
        }
      });
    }
  });
});

function ClickMe() {
  catalogItemProduct.forEach(function(vl, indx) {
    res.forEach(function(val, index) {
      if (val) {
        console.log(val);
        catalog.style.width = "100%";
        val.style.display = "block";
      }
      if (vl) {
        vl.style.display = "none";
      }
    });
  });
}
