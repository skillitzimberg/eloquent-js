(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./pyramid":2}],2:[function(require,module,exports){
function printLayer(char, numberOfCharsRequested) {
  let layer = '';

  for (; numberOfCharsRequested > 0; numberOfCharsRequested--) {
    layer += char;
  }
  return layer;
}
exports.printLayer = printLayer;

function buildPyramid(char, numberOfLayers) {
  let layers = [];

  for (let i = 1; i <= numberOfLayers; i++) {
    layers.push(printLayer(char, i));
  }
  return layers;
}
exports.buildPyramid = buildPyramid;

},{}]},{},[1]);
