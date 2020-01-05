let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let animateModalElement = document.querySelector(".modal-background");
let closeModalElement = document.querySelector(".modal__close");

console.log(buttonElement)

buttonElement.addEventListener("click", function () {
	modalElement.classList.add("show");
	animateModalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function () {
	modalElement.classList.remove("show");
});