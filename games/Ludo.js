"use client";
import { useState } from 'react';

export default function Ludo() {
  const goal = 50;
  const [position, setPosition] = useState(0);
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 6);
    const newPosition = Math.min(position + roll, goal);
    setDice(roll);
    setPosition(newPosition);
  };

  return (
    <div>
      <h1>Ludo</h1>
      <div>Current Position: {position}</div>
      <div>Last Dice Roll: {dice}</div>
      {position < goal ? (
        <button onClick={rollDice} style={{ marginTop: '10px', padding: '5px 10px' }}>
          Roll Dice
        </button>
      ) : (
        <h2>You've reached the goal!</h2>
      )}
    </div>
  );
}
  