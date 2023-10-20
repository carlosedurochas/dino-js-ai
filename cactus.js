class Cactus {
  constructor() {
    this.top = 210;
    this.bottom = 0;
    this.x = width;
    this.w = 20;
    this.speed = 5;
  }

  hits(dino) {
    if (dino.y < this.top || dino.y > height - this.bottom) {
      if (dino.x > this.x && dino.x < this.x + this.w) {
        return true;
        console.log("hit");
      }
    }
    return false;
  }

  show() {
    fill(255);
    rectMode(CORNER);
    rect(this.x, 210, this.w, this.top);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
}