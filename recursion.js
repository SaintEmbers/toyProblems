
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


// Write a function that counts how many different ways you can make change for an amount of money,
// given an array of coin denominations.
// For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2...
var countChange = function(money, coins) {
  // your implementation here
  var counter = 0;
  coins.sort(function(a,b){return a-b});
  (function count(index, remainder){
    var coin = coins[index]
    console.log(index, remainder)
    if(index === 0 && remainder % coin === 0){
      counter++
      return
    }
    if(index === 0 && remainder % coin !==0){
      return
    }
    while(remainder >= 0){
      count(index-1, remainder)
      remainder -= coin
    }
  })(coins.length -1, money)
  return counter
}


var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}






