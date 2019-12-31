let burgerElement = document.querySelector(".burger-menu"),
	menuDesktopElement = document.querySelector("[data-id=desktop__menu]");


// console.log(burgerElement);

burgerElement.addEventListener("click", function () {
	menuDesktopElement.classList.add("active");
});