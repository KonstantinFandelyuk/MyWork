let allCheckbox = Array.from(document.querySelectorAll("input[type=checkbox]"));
let buttonFilterSumbit = document.querySelector(".button__filter--sumbit");
let buttonFilterReset = document.querySelector(".button__filter--reset");
let catalogItemProduct = Array.from(document.querySelectorAll(".catalog__list-item"));
let res = [];

allCheckbox.forEach(function(item, i) {
  item.addEventListener("change", function() {
    if (item.checked) {
      buttonFilterSumbit.classList.add("active");
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
    let catalog = document.querySelector(".catalog");
    res.forEach(function(val, index) {
      if (val) {
        catalog.classList.add("active");
        val.style.display = "block";
      }
      if (vl != val) {
        vl.style.display = "none";
      }
    });
  });
}

function ClickReset() {
  allCheckbox.forEach(function(vl, indx) {
    if (vl.checked) {
      vl.checked = false;
    }
  });
}
