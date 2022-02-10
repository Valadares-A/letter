//get all the imgs in the "slide" div and change to an array of img objects
const slide = document.getElementById("slide");
var arr = Array.prototype.slice.call(slide.children);

//initialize css
arr.forEach(function (imgObj) {
  imgObj.classList.add("slide-img");
});

//showing the first slide
arr[0].classList.add("show");

//initializing values
var currentSlide = 1;
var slideLength = slide.children.length;
var prevSlide = 0;

//interval function
setInterval(function () {
  if (currentSlide >= slideLength) currentSlide = 0;

  arr[prevSlide].classList.remove("show");
  arr[currentSlide].classList.add("show");

  prevSlide = currentSlide;
  currentSlide++;
}, 7000);
