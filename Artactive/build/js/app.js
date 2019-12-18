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

// -- -- -- -- -Moodal - Callback- -- -- -- -- --

let buttonCallbackElement = document.querySelector("[data-id=modal-callback]");
let modalCallbackElement = document.querySelector(".modal-callback");
let closeModalCallbackElement = document.querySelector(".modal-callback__close");
let rew = document.querySelector("[data-id=callback-animated]");

buttonCallbackElement.addEventListener("click", function () {
	modalCallbackElement.classList.add("active");
	rew.classList.add("zoomIn");
});

closeModalCallbackElement.addEventListener("click", function () {
	modalCallbackElement.classList.remove("active");
});