"use client";
import { useEffect, useState } from 'react';

export default function Snake() {
  const boardSize = 10;
  const initialSnake = [[5, 5]];
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState([3, 3]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    const head = [...snake[0]];
    switch (direction) {
      case 'UP':
        head[0] -= 1;
        break;
      case 'DOWN':
        head[0] += 1;
        break;
      case 'LEFT':
        head[1] -= 1;
        break;
      case 'RIGHT':
        head[1] += 1;
        break;
    }
    if (
      head[0] < 0 ||
      head[0] >= boardSize ||
      head[1] < 0 ||
      head[1] >= boardSize ||
      snake.some((segment) => segment[0] === head[0] && segment[1] === head[1])
    ) {
      setGameOver(true);
      return;
    }
    const newSnake = [head, ...snake];
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveSnake, 300);
    return () => clearInterval(interval);
  }, [snake, direction]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <h1>Snake</h1>
      {gameOver ? <h2>Game Over!</h2> : null}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 20px)`,
          gridGap: '2px',
          margin: 'auto',
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, index) => {
          const x = Math.floor(index / boardSize);
          const y = index % boardSize;
          const isSnake = snake.some((segment) => segment[0] === x && segment[1] === y);
          const isFood = food[0] === x && food[1] === y;
          return (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: isSnake ? 'green' : isFood ? 'red' : '#ddd',
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

  