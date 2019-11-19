// $("#button-callback").on("click", function () {
// 	$("#modal-callback").addClass("active")
// })
var buttonCallback = document.querySelector("#button-callback");
var modalCallback = document.querySelector("#modal-callback");

buttonCallback.addEventListener("click", function () {
	modalCallback.classList.add("active")
})

modalCallback.addEventListener("click", function (ev) {
	console.log(ev)
	if (ev.target.closest(".modal__close") || ev.target.classList.contains("modal")) {
		modalCallback.classList.remove("active")
	}
})