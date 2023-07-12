import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GameOverBanner({ correctGuess, numberOfGuesses, answer }) {
  if (correctGuess) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numberOfGuesses} guesses`}</strong>.
        </p>
      </div>
    );
  }

  if (numberOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }

  return undefined;
}

export default GameOverBanner;
