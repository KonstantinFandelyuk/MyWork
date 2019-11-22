let arrDataId = document.querySelectorAll("[data-id]");
for (let i = 0; i < arrDataId.length; i++) {
  arrDataId[i].addEventListener("click", function() {
    let id = arrDataId[i].getAttribute("data-id");
    let element = document.getElementById(id);
    element.classList.add("active");
  });
}
modalCallback.addEventListener("click", function(ev) {
  if ( eval.target.closest(".modal__close") ||
    ev.target.classList.contains("modal")
  ) {
    modalCallback.classList.remove("active");
  }
});
