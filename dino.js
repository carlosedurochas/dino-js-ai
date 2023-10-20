class Dino {
  constructor(brain) {
    this.y = height - 50;
    this.x = 64;
    
    this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;

    this.score = 0;
    this.fitness = 0;

    if (brain) {
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(4, 8, 2);
    }
  }

  dispose() {
    this.brain.dispose();
  }

  show() {
    fill(255, 100);
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, 25, 50);
  }

  up() {
    if (this.y == height - 50) {
      this.velocity += this.lift;
    }
  }

  mutate() {
    this.brain.mutate(0.1);
  }

  think(cactus) {
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < cactus.length; i++) {
      let d = cactus[i].x - this.x;
      if (d < closestD && d > 0) {
        closest = cactus[i];
        closestD = d;
      }
    }

    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = closest.x / width;
    inputs[2] = closest.top / height;
    inputs[3] = this.velocity / 10;

    let output = this.brain.predict(inputs);
    if (output[0] > output[1]) {
      this.up();
    }
  }

  offScreen() {
    return (this.y > height || this.y < 0);
  }

  update() {
    this.score++;
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}