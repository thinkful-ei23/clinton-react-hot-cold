import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

import './game.css';

export default function Game(props) {
  return (
    <div>
      <Header />
      <div className="game">
        <GuessSection feedback="Make your guess!" />
        <GuessCount count={3} />
        <GuessList guesses={[10, 15, 25]} />
      </div>
    </div>
  );
}
