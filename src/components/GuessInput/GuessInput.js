import React from 'react';
import { WORD_MAX_LENGTH } from '../../constants';

function GuessInput({ submitGuess, gameOver }) {
  const [input, setInput] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    submitGuess(input);
    setInput('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input" type="text" value={input} pattern={`[A-Z]{${WORD_MAX_LENGTH}}`} disabled={gameOver}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
