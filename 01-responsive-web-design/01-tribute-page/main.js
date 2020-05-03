// ANIMATIONS
// Pomodoro
let pomTimings = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22",
  "23", "24", "25"];
let pomCounter = 0;
var setPomTime = setInterval(newPomTime, 1000);

function newPomTime() {
  $("#pomodoro").text(pomTimings[pomCounter]);
  pomCounter++;
  if (pomCounter === 25) {
    pomCounter = 0;
  }
}

// Astronaut
var animationMug = bodymovin.loadAnimation({
  container: document.getElementById('bm-astronaut'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://www.michaelschneider.io/misc/fcc/rwd/01-tribute-page/bm-astronaut.json'
})

// Mug
var animationMug = bodymovin.loadAnimation({
  container: document.getElementById('bm-mug'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://www.michaelschneider.io/misc/fcc/rwd/01-tribute-page/bm-mug.json'
})

// Peacock
var animationPeacock = bodymovin.loadAnimation({
  container: document.getElementById('bm-peacock'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://www.michaelschneider.io/misc/fcc/rwd/01-tribute-page/bm-peacock.json'
})

// Hat
var animationHat = bodymovin.loadAnimation({
  container: document.getElementById('bm-hat'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://www.michaelschneider.io/misc/fcc/rwd/01-tribute-page/bm-hat.json'
})


// freeCodeCamp test suite: pick project to test
const projectName = 'tribute-page';