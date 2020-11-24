function newChessboard(gridSize) {
  let board = '';
  let row = 0;
  let column;
  while (row < gridSize) {
    column = 0;
    while (column < gridSize) {
      board += row % 2 === column % 2 ? ' ' : '#';
      column++;
    }
    row++;
    board += '\n';
  }
  return board;
}
exports.newChessboard = newChessboard;

console.log(newChessboard(8));
