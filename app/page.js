"use client"
import { useState } from 'react';
import TicTacToe from '@/games/TicTacToe';
import Sudoku from '@/games/Sudoku';
import Snake from '@/games/Snake';
import Ladder from '@/games/Ladder';
import Ludo from '@/games/Ludo';
import Chess from '@/games/Chess';
import Checkers from '@/games/Checkers';
import Minesweeper from '@/games/Minesweeper';
import Reversi from '@/games/Reversi';

const games = [
  { name: 'Tic Tac Toe', component: <TicTacToe /> },
  { name: 'Sudoku', component: <Sudoku /> },
  { name: 'Snake', component: <Snake /> },
  { name: 'Ladder', component: <Ladder /> },
  { name: 'Ludo', component: <Ludo /> },
  { name: 'Chess', component: <Chess /> },
  { name: 'Checkers', component: <Checkers /> },
  { name: 'Minesweeper', component: <Minesweeper /> },
  { name: 'Reversi', component: <Reversi /> },
];

export default function GameHub() {
  const [activeGame, setActiveGame] = useState(0);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        {games.map((game, index) => (
          <button
            key={index}
            style={styles.navButton}
            onClick={() => setActiveGame(index)}
          >
            {game.name}
          </button>
        ))}
      </nav>
      <div style={styles.gameContainer}>{games[activeGame].component}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    padding: '10px 0',
  },
  navButton: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#6200ea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gameContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
