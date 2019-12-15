let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let animateModalElement = document.querySelector(".modal-background");
let closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function () {
	modalElement.classList.add("active");
	animateModalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function () {
	modalElement.classList.remove("active");
});
// -- -- -- -- -- -- -- -- -- --

// // let buttonElement = document.querySelector("[data-id=modal-button]");
// // let modalElement = document.querySelector(".modal");

// // buttonElement.addEventListener("click", function () {
// // 	modalElement.classList.add("active");
// // });