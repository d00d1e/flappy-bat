const batSprite = new Image();
batSprite.src = "./assets/img/bat.png";

class Bat {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.originalWidth = 454;
    this.originalHeight = 463;
    this.width = this.originalWidth / 10;
    this.height = this.originalHeight / 10;
    this.weight = 1;
    this.frameX = 0;
  }

  // gravity
  update() {
    let curve = Math.sin(hover) * 10;

    if (this.y > canvas.height - this.height + curve) {
      this.y = canvas.height - this.height + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.85;
      this.y += this.vy;
    }

    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }

    if (spacePressed && this.y > this.height + 3) this.flap();
  }

  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);

    // animate sprite
    ctx.drawImage(
      batSprite,
      this.frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 30,
      this.y - 35,
      this.width * 2.4,
      this.height * 2.4
    );
  }

  flap() {
    this.vy -= 2.8;

    if (this.frameX >= 4) this.frameX = 0;
    else if (frame % 4 === 0) this.frameX++;
  }
}

const bat = new Bat();
