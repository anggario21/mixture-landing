let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let index = 0;
slides[index].classList.add("active");

function moveRight() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function moveLeft() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

prevBtn.addEventListener("click", moveLeft);
nextBtn.addEventListener("click", moveRight);

// Get the slider container and navigation buttons
const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

// Get the slider wrapper and individual slides
const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderSlides = document.querySelectorAll(".slider-slide");

// Set the initial slide to 0
let currentSlideIndex = 0;

// Add the active class to the initial slide
sliderSlides[currentSlideIndex].classList.add("active");

// Set the width of the slider wrapper to fit all slides
sliderWrapper.style.width = `${sliderSlides.length * 100}%`;
sliderSlides.forEach((sliderSlide) => {
  sliderSlide.style.width = `${100 / sliderSlides.length}%`;
});

// Add event listeners to the navigation buttons
prevButton.addEventListener("click", () => {
  sliderSlides[currentSlideIndex].classList.remove("active");
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = sliderSlides.length - 1;
  }
  sliderSlides[currentSlideIndex].classList.add("active");
});

nextButton.addEventListener("click", () => {
  sliderSlides[currentSlideIndex].classList.remove("active");
  currentSlideIndex++;
  if (currentSlideIndex > sliderSlides.length - 1) {
    currentSlideIndex = 0;
  }
  sliderSlides[currentSlideIndex].classList.add("active");
});
