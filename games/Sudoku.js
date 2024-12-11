"use client";
import { useState } from 'react';

export default function Sudoku() {
  const initialBoard = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);

  const handleChange = (row, col, value) => {
    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (value ? parseInt(value) : null) : cell))
    );
    setBoard(newBoard);
  };

  const checkValid = () => {
    // Simplified validation logic: check rows for duplicates
    for (const row of board) {
      const nums = row.filter((n) => n !== null);
      if (new Set(nums).size !== nums.length) {
        alert('Incorrect solution!');
        return;
      }
    }
    alert('Sudoku is valid!');
  };

  return (
    <div>
      <h1>Sudoku</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 40px)', gap: '5px' }}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength="1"
              style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                fontSize: '16px',
              }}
              value={cell || ''}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            />
          ))
        )}
      </div>
      <button onClick={checkValid} style={{ marginTop: '10px', padding: '5px 10px' }}>
        Validate
      </button>
    </div>
  );
}
