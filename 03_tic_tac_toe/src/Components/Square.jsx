export default function Square({ value, handleClickSquare }) {
  return (
    <button className="square" onClick={handleClickSquare}>
      {value}
    </button>
  );
}
