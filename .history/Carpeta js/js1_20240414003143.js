function redirigirIndex() {
    window.location.href = '../index.html';
}
function redirigirTerminos() {
    window.location.href = '../terminos.html';
}

const slider = document.querySelector("#slider"); // Ensure element exists
const sliderSections = document.querySelectorAll(".slider-section");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let currentSlide = 0; // Track current slide index

function moveSlide(direction) {
  const maxSlide = sliderSections.length - 1; // Calculate last slide index

  if (direction === "left" && currentSlide > 0) {
    currentSlide--;
  } else if (direction === "right" && currentSlide < maxSlide) {
    currentSlide++;
  }

  // Use transform based on slide count and current index
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Disable buttons at edge cases (optional)
  btnLeft.disabled = currentSlide === 0;
  btnRight.disabled = currentSlide === maxSlide;
}

// Attach event listeners using event delegation on the parent container
slider.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-left")) {
    moveSlide("left");
  } else if (event.target.classList.contains("btn-right")) {
    moveSlide("right");
  }
});
