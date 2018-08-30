import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      currentGuess: '',
      feedback: 'Make your Guess!',
    };
  }

  handleGuess(e) {
    e.preventDefault();
    this.setState({
      guesses: [...this.state.guesses, this.state.currentGuess]
    });
    if (this.props.secretNumber === this.state.currentGuess) {
      this.setState({
        feedback: 'You Won. Click new game to play again'
      });
    } else {
      this.setState({
        feedback: 'Wrong. Guess again'
      });
    }
  }

  onChange(e) {
    const currentGuess = e.target.value;
    this.setState({
      currentGuess
    });
  }

  render () {
    return (
      <div>
        <Header />
        <div className="game">
          <GuessSection feedback={this.state.feedback} />
          <GuessCount count={this.state.guesses.length} />
          <GuessList guesses={this.state.guesses} />
        </div>
      </div>
    );
  }

}
