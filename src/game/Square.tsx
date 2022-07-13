import React, { useState } from 'react';
import './Game.css';


export default function Square(
  { val, onChange }: 
  { val: string, onChange: () => void}) {

  //const [valState, setValState] = useState(val)
  return (
    <button className="square" onClick={onChange}>
      {val}
    </button>
  );
}