// Navigation hamburger icon //
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle-icon');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

// Image effects //
var isZoomed = false;
var interval;

function startZoom(img) {
  if (!isZoomed && window.innerWidth >= 768) {
    var width = img.offsetWidth;
    var height = img.offsetHeight;

    var targetWidth = width * 1.20;
    var targetHeight = height * 1.20;

    var stepWidth = (targetWidth - width) / 10;
    var stepHeight = (targetHeight - height) / 10;

    interval = window.setInterval(function() {
      width += stepWidth;
      height += stepHeight;
      img.style.width = width + "px";
      img.style.height = height + "px";

      if (width >= targetWidth && height >= targetHeight) {
        window.clearInterval(interval);
        isZoomed = true;
      }
    }, 20);
  }
}

function stopZoom(img) {
  if (isZoomed && window.innerWidth >= 768) {
    var width = img.offsetWidth;
    var height = img.offsetHeight;

    var targetWidth = width / 1.20;
    var targetHeight = height / 1.20;

    var stepWidth = (targetWidth - width) / 10;
    var stepHeight = (targetHeight - height) / 10;

    interval = window.setInterval(function() {
      width += stepWidth;
      height += stepHeight;
      img.style.width = width + "px";
      img.style.height = height + "px";

      if (width <= targetWidth && height <= targetHeight) {
        window.clearInterval(interval);
        isZoomed = false;
      }
    }, 20);
  }
}
