const imageSlide = document.querySelectorAll('carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    imageSlide[currentSlide].classList.remove('active-slide');
    imageSlide[index].classList.add('active-slide');
    currentSlide = index;
}
  
  // Change slide every 5 seconds (adjust as needed)
setInterval(() => {
    const nextSlide = (currentSlide + 1) % imageSlide.length;
    showSlide(nextSlide);
}, 5000);