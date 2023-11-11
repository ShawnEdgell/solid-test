const Cell = ({ value, onClick }) => {
  return (
    <div 
      className="w-20 h-20 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
      onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
  