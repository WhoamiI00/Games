"use client";
export default function Checkers() {
  const boardSize = 8;
  const board = Array.from({ length: boardSize }, (_, i) =>
    Array.from({ length: boardSize }, (_, j) => (i + j) % 2 === 0 ? 'white' : 'black')
  );

  return (
    <div>
      <h1>Checkers</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 50px)`,
          gridGap: '0',
          margin: 'auto',
        }}
      >
        {board.flat().map((color, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
      <p>(Placeholder for functional checkers logic)</p>
    </div>
  );
}
  