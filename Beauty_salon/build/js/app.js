var buttonElement = document.querySelector("[data-id=modal-callback]");
var modalElement = document.querySelector(".modal");

// console.log(modalButtonElement);

buttonElement.addEventListener("click", function () {
	modalElement.classList.add("active");
})

var closeElement = document.querySelector(".modal__close");

closeElement.addEventListener("click", function () {
	modalElement.classList.remove("active");
})


var catalog__list = document.querySelector(".catalog__list");

var catalog__listPosTop = catalog__list.getBoundingClientRect().top;

var scroll = function () {
	if (window.pageYOffset >= catalog__listPosTop - 300) {
		window.removeEventListener("scroll", scroll) // Важно
		catalog__list.classList.add("slideInLeft")
	}
}
window.addEventListener("scroll", scroll)

// ----------------------Animated social icon----------------------------------------------------------

var socialIcon = document.querySelector(".social-icon__item");

socialIcon.addEventListener("mouseover", function () {
	socialIcon.classList.add("flip");
	this.addEventListener("mouseout", function () {
		socialIcon.classList.remove("flip");
	});
});