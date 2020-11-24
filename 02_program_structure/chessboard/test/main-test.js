const { expect } = require('chai');

const { newChessboard } = require('../main');

it('returns a string', () => {
  const board = newChessboard();

  expect(typeof board).to.equal('string');
});
