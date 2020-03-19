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

modalElement.addEventListener("active", function (event) {
	if (!event.currnt.target.closet(".modalElement")) {
		modalElement.classList.remove("active");
	}
})

var catalog__list = document.querySelector(".catalog__list");

var catalog__listPosTop = catalog__list.getBoundingClientRect().top;

var scroll = function () {
	if (window.pageYOffset >= catalog__listPosTop - 300) {
		window.removeEventListener("scroll", scroll) // Важно
		catalog__list.classList.add("bounceInDown")
	}
}
window.addEventListener("scroll", scroll)

// ----------------------Animated social icon----------------------------------------------------------

// var socialIcon = document.querySelector(".social-icon__item");

// socialIcon.addEventListener("mouseover", function () {
// 	socialIcon.classList.add("flip");
// 	this.addEventListener("mouseout", function () {
// 		socialIcon.classList.remove("flip");
// 	});
// });


document.addEventListener("mouseover", function (event) {
	let socialIconItem = event.target.closest(".social-icon__item");
	console.log(socialIconItem)
	if (socialIconItem != null) {
		socialIconItem.classList.add("flip");
	}
})