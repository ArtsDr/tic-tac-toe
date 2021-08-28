class TicTacToe {

  currentPlayer = 'x'

  gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  turnCounter = 0

  constructor() {

  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex] != null) {
      return
    }
    this.gameField[rowIndex][columnIndex] = this.currentPlayer
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o'
    } else {
      this.currentPlayer = 'x'
    }
    this.turnCounter++
  }

  isFinished() {
    if (this.noMoreTurns() === true || this.getWinner() != null) {
      return true
    }
    return false
  }

  getWinner() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.gameField[0][j] != null && this.gameField[0][j] === this.gameField[1][j] && this.gameField[0][j] === this.gameField[2][j]) {
          return this.gameField[0][j]
        }

      }
      if (this.gameField[i][0] != null && this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) {
        return this.gameField[i][0]
      }
    }

    if (this.gameField[0][0] != null && this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]) {
      return this.gameField[0][0]
    }

    if (this.gameField[0][2] != null && this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]) {
      return this.gameField[0][2]
    }

    return null
  }

  noMoreTurns() {
    if (this.turnCounter === 9) {
      return true
    }
    return false
  }

  isDraw() {
    if (this.isFinished() === false || this.getWinner() != null) {
      return false
    }
    return true
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
