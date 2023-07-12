//Toggle Button for showing content
function toggleContent() {
    var content = this.nextElementSibling; //Select element after "collapse-heading"
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  window.addEventListener("load", function() { //Event Listener
    var headingElements = document.getElementsByClassName("collapse-heading"); //Select elements with class name "collapse-heading"
    for (var i = 0; i < headingElements.length; i++) {
      headingElements[i].addEventListener("click", toggleContent); //When user clicks on heading, toggleContent() is triggered and content is shown
    }
  });