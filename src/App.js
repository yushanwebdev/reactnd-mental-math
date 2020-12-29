import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const generator = (val = 100) => (Math.floor(Math.random() * val));

class App extends Component {
  state = {
    value1: generator(),
    value2: generator(),
    value3: generator(),
    proposedAnswer: function() {return generator(3) + this.value1 + this.value2 + this.value3},
  	numQuestions: 0,
    numCorrect: 0
  }

  checkAnswer = (userAns) => {
  	this.setState((currentState) => ({
    	numQuestions: ++currentState.numQuestions,
      	numCorrect: ((currentState.value1 + currentState.value2 + currentState.value3 == currentState.proposedAnswer()) == userAns) ? ++currentState.numCorrect : currentState.numCorrect
    }));
  }
  
  render() {
    const {value1, value2, value3, numCorrect, numQuestions} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${this.state.proposedAnswer()}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
