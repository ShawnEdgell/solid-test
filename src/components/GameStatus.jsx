const GameStatus = ({ currentPlayer, winner }) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-lg font-semibold">
        {winner ? `${winner} wins!` : `Current Player: ${currentPlayer}`}
      </h2>
    </div>
  );
};

export default GameStatus;
