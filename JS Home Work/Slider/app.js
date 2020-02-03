const nextBtn = document.getElementById("next-btn"),
  prevBtn = document.getElementById("prev-btn"),
  sliderList = document.getElementsByClassName("slider__list-item"),
  slideIndex = 1;

for (let = i; i < sliderList.length; i++) {
  sliderList.style.zIndex = sliderList.length - i;
}

nextBtn.onclick = function() {
	
}