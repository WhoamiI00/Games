"use client";
import { useState } from "react";
export default function Reversi() {
  const boardSize = 8;

  const [board, setBoard] = useState(
    Array.from({ length: boardSize }, () => Array(boardSize).fill(null))
  );

  return (
    <div>
      <h1>Reversi</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 40px)`,
          gap: '5px',
        }}
      >
        {board.flat().map((cell, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: cell === null ? '#ddd' : cell === 'black' ? 'black' : 'white',
              border: '1px solid #000',
            }}
          ></div>
        ))}
      </div>
      <p>(Placeholder for Reversi gameplay logic)</p>
    </div>
  );
}
  