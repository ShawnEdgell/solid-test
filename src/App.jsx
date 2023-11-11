import { createSignal } from 'solid-js';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import { checkWinner, switchPlayer } from './utils/gameLogic';
import { PLAYER_X, EMPTY_CELL } from './utils/constants';

function App() {
  const [board, setBoard] = createSignal(Array(9).fill(EMPTY_CELL));
  const [currentPlayer, setCurrentPlayer] = createSignal(PLAYER_X);
  const [winner, setWinner] = createSignal(null);

  const handleCellClick = (index) => {
    setBoard((prevBoard) => {
      if (prevBoard[index] !== EMPTY_CELL || winner()) {
        return prevBoard; // Early return if cell is not empty or game has a winner
      }

      const newBoard = [...prevBoard];
      newBoard[index] = currentPlayer();

      const currentWinner = checkWinner(newBoard);
      if (currentWinner) {
        setWinner(currentWinner);
      } else {
        setCurrentPlayer(switchPlayer(currentPlayer()));
      }

      return newBoard;
    });
  };

  const handleReset = () => {
    setBoard(Array(9).fill(EMPTY_CELL));
    setCurrentPlayer(PLAYER_X);
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <GameStatus currentPlayer={currentPlayer()} winner={winner()} />
      <Board board={board()} onCellClick={handleCellClick} />
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
