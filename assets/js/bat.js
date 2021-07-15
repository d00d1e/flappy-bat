const batSprite = new Image();
batSprite.src = "./assets/img/bat.png";

class Bat {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.originalWidth = 941;
    this.originalHeight = 680;
    this.width = this.originalWidth / 20;
    this.height = this.originalHeight / 20;
    this.weight = 1;
  }

  // gravity
  update() {
    let curve = Math.sin(hover) * 10;

    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
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
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // animate sprite
    ctx.drawImage(
      batSprite,
      0,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  flap() {
    this.vy -= 2;
  }
}

const bat = new Bat();
