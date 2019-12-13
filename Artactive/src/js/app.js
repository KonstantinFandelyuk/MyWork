let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function () {
	modalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function () {
	modalElement.classList.remove("slideInRight");
});

// -- -- -- -- -- -- -- -- -- --

// // let buttonElement = document.querySelector("[data-id=modal-button]");
// // let modalElement = document.querySelector(".modal");

// // buttonElement.addEventListener("click", function () {
// // 	modalElement.classList.add("active");
// // });