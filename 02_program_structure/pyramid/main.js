const { buildPyramid } = require('./pyramid');

function printToSTDOUT(pyramid) {
  for (let i = 0; i < pyramid.length; i++) {
    console.log(pyramid[i]);
  }
}

function startGame() {
  const brick = prompt(
    'What character would you like to use as the bricks in your pyramid?',
  );
  const height = prompt('How heigh would you like your pyramid to be?');

  const printablePyramid = buildPyramid(brick, height);
  printToSTDOUT(printablePyramid);
}

startGame();
