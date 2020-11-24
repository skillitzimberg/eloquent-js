/*
     char     char     char     char
 char     char     char     char    
     char     char     char     char
 char     char     char     char    
     char     char     char     char
 char     char     char     char    
     char     char     char     char
 char     char     char     char   
 
 Each line is either even or odd (line 1, line 2, line 3, etc.).
 If a line is odd it begins with a space. Otherwise it begins with a char.

 Each line is 8 characters long plus a CRNF (\n).
 
  When row is even & col is even print space
  When row is even & col is odd print char
  When row is even & col is even print space
  When row is even & col is odd print char
  When row is even & col is even print space
  When row is even & col is odd print char
  When row is even & col is even print space
  When row is even & col is odd print char
  When row is even & col is 9 print \n

  When row is odd & col is even print char
  When row is odd & col is odd print space
  When row is odd & col is even print space
  When row is odd & col is odd print space
  When row is odd & col is even print space
  When row is odd & col is odd print space
  When row is odd & col is even print space
  When row is odd & col is odd print space
  When row is odd & col is 9 print \n
*/

function printChessboard() {
  let board = '';
  let row = 0;
  let column;
  while (row < 8) {
    column = 0;
    while (column < 8) {
      row % 2 === column % 2 ? (board += ' ') : (board += '#');
      column++;
    }

    board += `\n`;
    row++;
  }
  console.log(board);
}

printChessboard();
