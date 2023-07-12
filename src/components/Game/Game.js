import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range, sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function checkGameOver(guess, guessCount) {
  return guess === answer || guessCount >= NUM_OF_GUESSES_ALLOWED;
}

function Game() {
  const [guesses, setGuesses] = React.useState(() => range(NUM_OF_GUESSES_ALLOWED).map(() => ''));
  const [guessCount, setCurrentGuess] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  function handleGuess(guess) {
    if (guessCount <= NUM_OF_GUESSES_ALLOWED) {
      const newGuesses = [...guesses];
      newGuesses[guessCount] = guess;
      setGuesses(newGuesses);
      setCurrentGuess(guessCount + 1);
    }

    setGameOver(checkGameOver(guess, guessCount + 1));
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuess={handleGuess} gameOver={gameOver} />
      {
        gameOver && <GameOverBanner correctGuess={guessCount < NUM_OF_GUESSES_ALLOWED} numberOfGuesses={guessCount} answer={answer} />
      }
    </>
  );
}

export default Game;
