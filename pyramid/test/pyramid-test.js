/* 
  Write a loop that makes seven calls to `console.log` to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

const { expect } = require('chai');

const { printLayer, buildPyramid } = require('../pyramid');

describe('build pyramid', () => {
  describe('printLayers()', () => {
    it('returns a string representing one layer.', () => {
      // Arrange
      const brick = '#';

      // Act
      const layer = printLayer(brick, 2);

      // Assert
      expect(layer.length).to.equal(2);
      expect(layer).to.equal('##');
    });
  });

  describe('buildPyramid()', () => {
    it('returns an iterable structure with layers as values.', () => {
      // Arrange
      const brick = '#';

      // Act
      const pyramid = buildPyramid('#', 8);
      // Assert
      expect(Array.isArray(pyramid)).to.equal(true);
      expect(pyramid.length).to.equal(8);
      expect(pyramid[7].length).to.equal(8);
    });
  });
});
