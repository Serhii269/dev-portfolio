const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelector(".progress-bar");

let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");

  const progress = ((currentSlide + 1) / slides.length) * 100;
  progressBar.style.width = progress + "%";
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  if (e.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  updateSlides();
});

updateSlides();
