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
    if (this.validateGuess()) {
      this.setState({
        guesses: [...this.state.guesses, this.state.currentGuess]
      });
      this.generateFeedback();
    }
    this.setState({
      currentGuess: ''
    })
  }

  validateGuess() {
    if (this.state.currentGuess % 1 !== 0) {
      alert('Please input a number');
      return false;
    } else if (this.state.currentGuess < 0 || this.state.currentGuess > 100) {
      alert('Please choose a number between zero and 100');
      return false;
    } else if (this.state.guesses.length > 0) {
      let alreadyGuessed = true;
      this.state.guesses.forEach(guess => {
        if (Number(this.state.currentGuess) == guess) {
          alert('You guessed this number already');
          alreadyGuessed = false;
        }
      })
      return alreadyGuessed;
    }
    return true;
  }

  generateFeedback() {
    if(this.state.secretNumber === Number(this.state.currentGuess)){
      this.setState({
        feedback: 'You Won. Click new game to play again'
      });
    } else if(Math.abs(this.state.secretNumber - Number(this.state.currentGuess)) < 10){
      this.setState({
        feedback: 'Hot'
      });
    } else if(Math.abs(this.state.secretNumber - Number(this.state.currentGuess)) < 20 && Math.abs(this.state.secretNumber - Number(this.state.currentGuess)) > 9){
      this.setState({
        feedback: 'Kinda hot'
      });
    } else if(Math.abs(this.state.secretNumber - Number(this.state.currentGuess)) < 30 && Math.abs(this.state.secretNumber - Number(this.state.currentGuess)) > 19){
      this.setState({
        feedback: 'Less than warm'
      });
    } else {
      this.setState({
        feedback: 'Cold'
      });
    }
  }

  onChange(e) {
    const currentGuess = e.target.value;
    this.setState({
      currentGuess
    });
  }

  resetGame() {
    this.setState({
      guesses: [],
      currentGuess: '',
      feedback: 'Make your Guess!',
      secretNumber: generateNumber()
    })
  }

  toggleInfo() {
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
