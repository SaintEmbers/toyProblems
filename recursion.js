
// Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid.
// Discs fall to the bottom of the grid, occupying the next available space.
// A player wins by connecting four of their discs horizontally, vertically or diagonally.
// Given a multidimensional array representing a Connect Four board,
//your task is to create a function which can determine who won the game.
function connectFour(board) {
  var winner = null;
  var openSpaces = false;
  function checkColumn(count, currentPlay, row, column){
    count++
    if(count === 4){
      winner = currentPlay
      return
    } else if(row > 5 || column > 6){
      return
    } else if(board[row][column] !== currentPlay){
      return
    } else if(board[row][column] === currentPlay){
      checkColumn(count, currentPlay, row, column+1)
    }
  }

  function checkRow(count, currentPlay, row, column){
    count++
    if(count === 4){
      winner = currentPlay
      return
    } else if(row > 5 || column > 6){
      return
    }  else if(board[row][column] !== currentPlay){
      return
    }else if(board[row][column] === currentPlay){
      checkRow(count, currentPlay, row+1, column)
    }
  }

  function checkDiagonalRight(count, currentPlay, row, column){
    count++
    if(count === 4){
      winner = currentPlay
      return
    } else if(row > 5 || column > 6){
      return
    }else if(board[row][column] !== currentPlay){
      return
    }else if(board[row][column] === currentPlay){
      checkDiagonalRight(count, currentPlay, row+1, column+1)
    }
  }
  function checkDiagonalLeft(count, currentPlay, row, column){
    count++
    if(count === 4){
      winner = currentPlay
      return
    } else if(row > 5 || column > 6){
      return
    }else if(board[row][column] !== currentPlay){
      return
    }else if(board[row][column] === currentPlay){
      checkDiagonalLeft(count, currentPlay, row+1, column-1)
    }
  }
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[i].length; j++){
      if(winner){break}
      if(board[i][j] === '-'){openSpaces = true}
      if(board[i][j] !== '-'){
        checkColumn(0, board[i][j], i, j+1)
        if(winner){
          break
        }
        checkRow(0, board[i][j], i+1, j)
        if(winner){break}
        checkDiagonalRight(0, board[i][j], i+1, j+1)
        if(winner){break}
        checkDiagonalLeft(0, board[i][j], i+1, j-1)
      }
    }
  }
  if(winner){
   return winner
  }
  return openSpaces ? 'in progress' : 'draw'
}
