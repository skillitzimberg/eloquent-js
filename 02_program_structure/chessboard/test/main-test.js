const { expect } = require('chai');

const { newChessboard } = require('../main');

describe('newChessboard()', () => {
  let board;
  let boardSize;

  it('returns a string', () => {
    board = newChessboard();
    expect(typeof board).to.equal('string');
  });

  it('returns a string with a space and CRLF', () => {
    boardSize = 1;
    board = newChessboard(boardSize);

    expect(board).to.include(' ');
    expect(board).to.include('\n');
  });

  it('returns a string with a space, an octothorpe, and CRLF', () => {
    boardSize = 2;
    board = newChessboard(boardSize);

    expect(board).to.include(' ');
    expect(board).to.include('#');
    expect(board).to.include('\n');
  });

  it('returns a the expected pattern for the given board size', () => {
    boardSize = 3;
    board = newChessboard(boardSize);

    expect(board).to.equal(' # \n# #\n # \n');
  });
});
