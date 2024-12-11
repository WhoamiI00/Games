"use client";   
import { useState } from 'react';

export default function Minesweeper() {
  const boardSize = 5;
  const mineCount = 3;

  const [board, setBoard] = useState(
    Array.from({ length: boardSize }, () =>
      Array.from({ length: boardSize }, () => ({ revealed: false, mine: Math.random() < mineCount / (boardSize * boardSize) }))
    )
  );

  const revealCell = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col].revealed = true;
    setBoard(newBoard);
  };

  return (
    <div>
      <h1>Minesweeper</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 40px)`,
          gap: '5px',
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: cell.revealed ? (cell.mine ? 'red' : 'green') : 'gray',
              }}
              onClick={() => revealCell(rowIndex, colIndex)}
            >
              {cell.revealed && (cell.mine ? '💣' : '')}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
  