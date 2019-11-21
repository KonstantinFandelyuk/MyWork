let arrDataId = document.querySelectorAll("[data-id]");
// Повесить обратчики событий на все елементы
for (let i = 0; i < arrDataId.length; i++) {
	arrDataId[i].addEventListener("click", function () {
		let id = arrDataId[i].getAttribute("data-id");
		let element = document.getElementById(id);
		element.classList.add("active")
	});
}
// Закрыть модалку
// modalCallback.addEventListener("click", function (ev) {
// 	if (ev.target.closest(".modal__close") || ev.target.classList.contains("modal")) {
// 		modalCallback.classList.remove("active")
// 	}
// })