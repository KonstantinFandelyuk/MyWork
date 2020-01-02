let burgerElement = document.querySelector(".burger-menu"),
	menuDesktopElement = document.querySelector("[data-id=desktop__menu]");


// console.log(burgerElement);

burgerElement.addEventListener("change", function () {
	menuDesktopElement.classList.add("slideInLeft"),
		menuDesktopElement.classList.toggle("active");
});