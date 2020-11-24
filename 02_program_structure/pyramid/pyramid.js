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
