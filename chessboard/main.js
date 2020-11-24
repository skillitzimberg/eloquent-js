function printChessboard(gridSize) {
  let board = '';
  let row = 0;
  let column;
  while (row < gridSize) {
    column = 0;
    while (column < gridSize) {
      row % 2 === column % 2 ? (board += ' ') : (board += '#');
      column++;
    }

    board += `\n`;
    row++;
  }
  console.log(board);
}

printChessboard(10);
