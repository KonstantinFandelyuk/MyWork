// --------------------MODAL BURGER MENU------------------------

let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let animateModalElement = document.querySelector(".modal-background");
let closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function() {
  modalElement.classList.add("active");
  animateModalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function() {
  modalElement.classList.remove("active");
});

// --------------------MODAL CALLBACK--------------------------

let buttonCallbackElement = document.querySelector("[data-id=modal-callback]");
let modalCallbackElement = document.querySelector(".modal-callback");
let closeModalCallbackElement = document.querySelector(
  ".modal-callback__close"
);
let rew = document.querySelector("[data-id=callback-animated]");

buttonCallbackElement.addEventListener("click", function() {
  modalCallbackElement.classList.add("active");
  rew.classList.add("zoomIn");
});

closeModalCallbackElement.addEventListener("click", function() {
  modalCallbackElement.classList.remove("active");
});

//--------------------SLIDER--------------------------

let sliderServiceList = document.querySelector("#slider-service-list");
let sliderImg = sliderServiceList.querySelectorAll(".slider-img");
let curNum = 0;

sliderServiceList.addEventListener("click", function(event) {
  let btn = event.target.closest("[data-btn]"),
    countSlides = sliderImg.length;

  if (btn) {
    let direction = btn.getAttribute("data-btn");
    sliderImg[curNum].classList.remove("active");
    // console.log("remove", curNum, direction);
    if (direction == "prev") {
      curNum--;
    } else {
      curNum++;
    }

    //direction == "prev" ? curNum-- : curNum++;

    if (curNum < 0) {
      curNum = countSlides - 1;
    }
    if (curNum > countSlides - 1) {
      curNum = 0;
    }
    sliderImg[curNum].classList.add("active");
    // console.log("add", curNum, direction);
  }
  // sliderImg[curNum].classList.remove("active");
  // curNum++
  // sliderImg[curNum].classList.add("active")
});

// -------------------------------------------------

let sliderFeedbackList = document.querySelector("#slider-feedback-list");
let sliderItem = sliderFeedbackList.querySelectorAll(".slider__list-item");
let curNumItem = 0;

function myFunctionPrev() {
  // Code for Chrome, Safari, Opera
  document.getElementById("slider-feedback-list").style.WebkitTransform =
    "translate(800px";
}

function myFunctionNext() {
  document.getElementById("slider-feedback-list").style.WebkitTransform =
    "translate(-800px)";
}

document.getElementById("data-btn-prev").addEventListener("click", function() {
  myFunctionPrev();
});

document.getElementById("data-btn-next").addEventListener("click", function() {
  myFunctionNext();
});
