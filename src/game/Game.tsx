import React, { useState } from 'react'
import Board from "./Board"
import './Game.css'

const calculateWinner = (squares: string[]): any => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [squareState, setSquareState] = useState([Array(9).fill(null)]);
  const [xState, setXState] = useState(true);
  const [stepState, setStepState] = useState(0);
  //点击事件
  const onChange = (i: number) => {
    //不能直接修改squareState的值 需要slice复制一份
    const history = squareState.slice(0, stepState + 1);
    const current = history[history.length - 1].slice();

    if (calculateWinner(current) || current[i]) {
      return;
    }
   
    current[i] = xState ? "X" : "O";
    //set函数会重新执行上下文
    setXState(!xState);
    setSquareState(history.concat([current]));
    setStepState(history.length);
  }

  //跳转事件
  const jumpTo = (index: number) => {
    setStepState(index);
    setXState(index % 2 == 0);
  }

  const winner = calculateWinner(squareState[squareState.length - 1]);
  const status = winner ? "Winner: " + winner : ("Next player: " + (xState ? 'X' : 'O'));

  const moves = squareState.map((value, index) => {
    const desc = index ?
      'Go to move #' + index :
      'Go to game start';
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squareState[stepState]} onChange={onChange}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}