import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import generateNumber from '../generateNumber';
import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      currentGuess: '',
      feedback: 'Make your Guess!',
      secretNumber: generateNumber(),
      toggleModal: false
    };
  }

  handleGuess(e) {
    e.preventDefault();
    this.setState({
      guesses: [...this.state.guesses, this.state.currentGuess]
    });
    if (this.state.secretNumber === Number(this.state.currentGuess)) {
      this.setState({
        feedback: 'You Won. Click new game to play again'
      });
    } else {
      this.setState({
        feedback: 'Wrong. Guess again'
      });
    }
    this.setState({
      currentGuess: ''
    })
  }

  onChange(e) {
    const currentGuess = e.target.value;
    this.setState({
      currentGuess
    });
  }

  resetGame() {
    console.log('resetGame ran!');
    this.setState({
      guesses: [],
      currentGuess: '',
      feedback: 'Make your Guess!',
      secretNumber: generateNumber()
    })
  }

  toggleInfo() {
    console.log('toggleInfo ran!')
    this.setState({
      toggleModal: !this.state.toggleModal
    })
  }

  render () {
    return (
      <div>
        <Header resetGame={() => this.resetGame()} toggleInfo={() => this.toggleInfo()} showInfo={this.state.toggleModal} />
        <div className="game">
          <GuessSection feedback={this.state.feedback} onChange={(e) => this.onChange(e) } handleGuess={(e)=> this.handleGuess(e)} value={this.state.currentGuess} />
          <GuessCount count={this.state.guesses.length} />
          <GuessList guesses={this.state.guesses} />
        </div>
      </div>
    );
  }

}
