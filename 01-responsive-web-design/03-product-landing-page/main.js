$(document).ready(function () {
  calcTypeScaleFactor();
});

// tsf = type scale factor
let tsfAt320 = 1.15; // set factor for small screens
let tsfAt1200 = 1.23; // set factor for large screens
let tsfDelta = (tsfAt1200 - tsfAt320);
let tsfChangePerPX = tsfDelta / (1200 - 320);
let root = document.documentElement;

function calcTypeScaleFactor() {
  let viewport = window.innerWidth;
  let extraPX = viewport - 320;
  root.style.setProperty('--tsf', tsfAt320 + extraPX * tsfChangePerPX);
}
window.onresize = calcTypeScaleFactor;

// mobile menu-toggle
let nav = document.querySelector(".header__nav");
function toggleNavOn(e) {
  nav.style.visibility = (nav.style.visibility === "") ? "visible" : "";
  navToggle.classList.toggle("header__nav-toggle--toggled")
  e.stopPropagation();
  document.addEventListener("click", toggleNavOff)

  function toggleNavOff() {
    nav.style.visibility = (nav.style.visibility === "") ? "visible" : "";
    navToggle.classList.toggle("header__nav-toggle--toggled");
    document.removeEventListener("click", toggleNavOff);
  }
}
let navToggle = document.querySelector(".header__nav-toggle");
navToggle.addEventListener("click", toggleNavOn);

// navbar: hide/show on scroll
let header = document.querySelector(".header");
var scrollPos = 0;
window.addEventListener('scroll', function () {
  if ((document.body.getBoundingClientRect()).top > scrollPos)
    header.style.top = "0px"
  else
    header.style.top = "-100px"
  scrollPos = (document.body.getBoundingClientRect()).top;
});

// logo-link: scroll to top
let logo = document.querySelector(".header__logo-link");
logo.addEventListener("click", toTop);
function toTop() {
  window.scrollTo(0, 0);
}

// freeCodeCamp test suite: pick project to test
const projectName = 'product-landing-page';