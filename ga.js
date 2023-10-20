function nextGeneration() {
  console.log('next generation');
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    dinos[i] = pickOne();
  }
  for (let i = 0; i < TOTAL; i++) {
    savedDinos[i].dispose();
  }
  savedDinos = [];
}

function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedDinos[index].fitness;
    index++;
  }
  index--;
  let dino = savedDinos[index];
  let child = new Dino(dino.brain);
  child.mutate();
  return child;
}

function calculateFitness() {
  let sum = 0;
  for (let dino of savedDinos) {
    sum += dino.score;
  }
  for (let dino of savedDinos) {
    dino.fitness = dino.score / sum;
  }
}