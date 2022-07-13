import Square from "./Square"
import './Game.css';

export default function Board(
  { squares, onChange }: 
  { squares: string[], onChange: (i: number) => void}) {
  

  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   squares[i] = 'X';
  //   this.setState({squares: squares});
  // }

  const renderSquare = (i: number) => {
    return <Square 
      val={squares[i]}
      onChange={() => onChange(i)}
    />;
  }
  
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {/* <Square val={squareState["8"]}/> */}
      </div>
    </div>
  );
}