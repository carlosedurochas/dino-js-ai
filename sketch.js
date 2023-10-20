const TOTAL = 100;
let dinos = [];
let savedDinos = [];
let cactus = [];
let counter = 0;
let slider;

function setup() {
  createCanvas(600, 250);
  tf.setBackend('cpu');
  slider = createSlider(1, 10, 1);
  for (let i = 0; i < TOTAL; i++) {
    dinos[i] = new Dino();
  }
}

function draw() {
  background(0);

  for (let n = 0; n < slider.value(); n++) {
    if (counter % 75 == 0) {
      cactus.push(new Cactus());
    }
    counter++;

    for (let i = cactus.length - 1; i >= 0; i--) {
      cactus[i].update();

      for (let j = dinos.length - 1; j >= 0; j--) {
        if (cactus[i].hits(dinos[j])) {
          savedDinos.push(dinos.splice(j, 1)[0]);
        }
      }

      if (cactus[i].offscreen()) {
        cactus.splice(i, 1);
      }
    }

    for (let i = dinos.length - 1; i >= 0; i--) {
      if (dinos[i].offScreen()) {
        savedDinos.push(dinos.splice(i, 1)[0]);
      }
    }

    for (let dino of dinos) {
      dino.think(cactus);
      dino.update();
    }

    if (dinos.length === 0) {
      counter = 0;
      nextGeneration();
      cactus = [];
    }
  }

  for (let dino of dinos) {
    dino.show();
  }

  for (let cactu of cactus) {
    cactu.show();
  }
}