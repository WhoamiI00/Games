"use client";

import { useState } from 'react';

export default function Ladder() {
  const [position, setPosition] = useState(1);
  const [dice, setDice] = useState(1);
  const ladders = { 3: 22, 5: 8, 11: 26, 20: 29 }; // Ladders on the board
  const maxPosition = 30;

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 6);
    let newPosition = position + roll;
    if (newPosition > maxPosition) newPosition = maxPosition;
    if (ladders[newPosition]) newPosition = ladders[newPosition];
    setDice(roll);
    setPosition(newPosition);
  };

  return (
    <div>
      <h1>Ladder Game</h1>
      <div>Current Position: {position}</div>
      <div>Last Dice Roll: {dice}</div>
      {position < maxPosition ? (
        <button onClick={rollDice} style={{ marginTop: '10px', padding: '5px 10px' }}>
          Roll Dice
        </button>
      ) : (
        <h2>You've won the game!</h2>
      )}
    </div>
  );
}
  