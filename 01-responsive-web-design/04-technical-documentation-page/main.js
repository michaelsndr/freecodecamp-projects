
// hide mobile to-top-button at top of page
let toTopBtn = document.getElementById("to-top-btn");

var buttonScrollHide = function () {
  var scrollPos = window.scrollY;
  if (scrollPos >= 200) {
    toTopBtn.className = "to-top-btn to-top-btn__show";
  } else {
    toTopBtn.className = "to-top-btn to-top-btn__hide";
  }
};

window.addEventListener("scroll", buttonScrollHide);

// freeCodeCamp test suite: pick project to test
const projectName = 'technical-docs-page';