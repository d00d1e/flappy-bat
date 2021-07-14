// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

// global variables
let spacePressed = false;
let hover = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

// animation loop
function animate() {
  // clear canvas between animations
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, canvas.height - 90, 60, 40);
  bat.update();
  bat.draw();
  handleParticles();

  requestAnimationFrame(animate);

  hover += 0.12;
  hue++;
}

animate();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
});
