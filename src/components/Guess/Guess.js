import React from 'react';
import { WORD_MAX_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
  if (!guess.trim()) {
    return range(WORD_MAX_LENGTH).map((_, i) => (
      <span key={i} className="cell"></span>
    ));
  }

  return checkGuess(guess, answer).map(({ letter, status }, i) => (
    <span key={i} className={`cell ${status}`}>{letter}</span>
  ));
}

export default Guess;
