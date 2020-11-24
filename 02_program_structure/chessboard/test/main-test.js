const { expect } = require('chai');

it('returns a string', () => {
  const board = newChessboard();

  expect(typeof board).to.equal('string');
});
