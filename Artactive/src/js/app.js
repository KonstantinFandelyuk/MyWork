var buttonElement = document.querySelector("[data-id=modal-callback]");
var modalElement = document.querySelector(".modal");

// console.log(modalButtonElement);

buttonElement.addEventListener("click", function () {
	modalElement.classList.add("active");
});

var closeElement = document.querySelector(".modal__close");

closeElement.addEventListener("click", function () {
	modalElement.classList.remove("active");
});

var catalog__list1 = document.querySelector("#catalog__list-1");
var catalog__list2 = document.querySelector("#catalog__list-2");

var catalog__list1PosY = catalog__list1.getBoundingClientRect().top;
var catalog__list2PosY = catalog__list2.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
	var windowPosY = window.pageYOffset;

	if (windowPosY >= catalog__list1PosY - 300) {
		catalog__list1.classList.add("slideInLeft");
	}

	if (windowPosY >= catalog__list2PosY - 300) {
		catalog__list2.classList.add("slideInLeft");
	}
});

// var catalog__listPosTop = catalog__list.getBoundingClientRect();
// console.log(catalog__listPosTop);
// var scroll = function() {
//   if (window.pageYOffset >= catalog__listPosTop - 300) {
//     window.removeEventListener("scroll", scroll); // Важно
//     catalog__list.classList.add("slideInLeft");
//   }
// };
// window.addEventListener("scroll", scroll);

// ----------------------Animated social icon----------------------------------------------------------

// var socialIcon = document.querySelectorAll(".social-icon__item");

// console.log(socialIcon);

// for (let i = 0; i < socialIcon.length; i++) {
//   socialIcon[i].addEventListener("mouseover", function() {
//     socialIcon[i].classList.add("flip");
//   });
// }

// socialIcon.addEventListener("mouseover", function() {
//   socialIcon.classList.add("flip");
//   // this.addEventListener("mouseout", function () {
//   // 	socialIcon.classList.remove("flip");
//   // });

// Делегирование событий
var socialIcon = document.querySelector(".social-icon");

socialIcon.addEventListener("mouseover", function(ev) {
  if (ev.target.closest(".social-icon__item")) {
    ev.target.classList.add("flip");
  }
});

// document.addEventListener("mouseover", function(ev) {
//   if (ev.target.closest(".social-icon__item")) {
//     ev.target.classList.add("flip");
//   }
// });



// AJAX

// let search = document.querySelector("#search");
// let searchResult = document.querySelector("#search-result");


// search.addEventListener("input", function (ev) {
// 	axios.get('http://localhost:4000/data')
// 		.then(function (response) {
// 			let arr = response.data;
// 			let template = [];
// 			for (let i = 0; arr.length > i; i++) {
// 				template[i] = '<div><b>' + arr[i].id + '</b>' + arr[i].name + '</div> ';
// 			}
// 			console.log(template.join())
// 			searchResult.innerHTML = template.join();
// 		})


// 		.catch(function (error) {
// 			console.log(error);
// 		})
// })