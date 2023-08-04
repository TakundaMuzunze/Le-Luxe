const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active-slide');
  slides[index].classList.add('active-slide');
  currentSlide = index;
}

function nextSlide() {
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  showSlide(nextSlideIndex);
}

setInterval(nextSlide, 3500);