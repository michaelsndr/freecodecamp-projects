
// mobile menu toggle
var navbar = document.getElementById("navbar");
var toggle = document.getElementById("toggle");
var links = document.getElementById("navbar-links");

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbar.classList.toggle("navbar--expanded");
  links.classList.toggle("navbar__links--hidden");

  // close when link clicked
  window.onclick = function (event) {
    if (event.target && event.target.nodeName === "A") {
      this.toggleMenu();
    }
  }
}

// freeCodeCamp test suite: pick project to test
const projectName = 'portfolio';