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

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.7", "#fff");
gradient.addColorStop("0.9", "#000");

// animation loop
function animate() {
  // clear canvas between animations
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //score display
  ctx.fillStyle = gradient;
  ctx.font = "70px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);

  bat.update();
  bat.draw();

  handleObstacles();
  handleParticles();
  if (handleCollisions()) return;

  requestAnimationFrame(animate);

  hover += 0.12;
  hue++;
  frame++;
}

animate();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
});

// collision
const collision = new Image();
collision.src = "./assets/img/bang.png";

function handleCollisions() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      bat.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      bat.x + bat.width > obstaclesArray[i].x &&
      ((bat.y < 0 + obstaclesArray[i].top && bat.y + bat.height > 0) ||
        (bat.y > canvas.height - obstaclesArray[i].bottom &&
          bat.y + bat.height < canvas.height))
    ) {
      //collision detected
      ctx.drawImage(collision, bat.x, bat.y, 50, 50);
      ctx.font = "25px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        `Game Over, your score is ${score}`,
        160,
        canvas.height / 2 - 10
      );
      return true;
    }
  }
}
