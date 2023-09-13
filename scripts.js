const dino = document.getElementById('dino');

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(function () {
    dino.classList.remove('jump');
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

  // get current cactus X position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  // detect collision
  if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert('Game Over!');
  }

}, 10);

document.addEventListener('keydown', function (event) {
  jump();
});