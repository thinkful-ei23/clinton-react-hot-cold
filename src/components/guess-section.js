import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  if(props.feedback === 'You Won. Click new game to play again') {
    return (
      <section>
        <h2 id="feedback">{props.feedback}</h2>
        <p>Game Over.</p>
      </section>
    );
  }
  return (
    <section>
      <h2 id="feedback">{props.feedback}</h2>
      <GuessForm onChange={props.onChange} handleGuess={props.handleGuess} value={props.value} />
    </section>
  );
}
