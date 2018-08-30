import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  let mainDisplay = (
    <GuessForm onChange={props.onChange}
      handleGuess={props.handleGuess} value={props.value} />
  );
  if(props.feedback === 'You Won. Click new game to play again') {
    mainDisplay = (<p style={{fontSize: '4em'}}>Game Over.</p>);
  }
  return (
    <section className="guess-section">
      <h2 id="feedback">{props.feedback}</h2>
      {mainDisplay}
    </section>
  );
}
