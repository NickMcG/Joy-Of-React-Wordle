import React from 'react';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {
        guesses.map((guess, index) => (
          <p key={index} className="guess">
            <Guess guess={guess} answer={answer} />
          </p>
        ))
      }
    </div>
  );
}

export default GuessResults;
