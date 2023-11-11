import { PLAYER_X, PLAYER_O, EMPTY_CELL, WINNING_COMBINATIONS } from './constants';

export function checkWinner(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export function isBoardFull(board) {
  return board.every(cell => cell !== EMPTY_CELL);
}

export function switchPlayer(currentPlayer) {
  return currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}
