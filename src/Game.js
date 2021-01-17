import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        const valuesArray = this.makeNewQuestion();
        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            propsedAnswer: valuesArray[3]
        }
    }

    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const propsedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, propsedAnswer];
    }

    handleAnswer = event => {
        const newValuesArray = this.makeNewQuestion();
        this.updateState(newValuesArray);
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
    }

    updateState = newValuesArray => {
        this.setState(currState => ({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            propsedAnswer: newValuesArray[3]
        }))
    }

    evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, propsedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;

        return(
            (corrAnswer === propsedAnswer && givenAnswer === 'true') || (corrAnswer !== propsedAnswer && givenAnswer === 'false')
        );
    }

    render() {
        const { value1, value2, value3, propsedAnswer } = this.state;
        return(
            <div>
                <div className='equation'>
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${propsedAnswer}`}</p>
                </div>
                <button onClick={this.handleAnswer} name='true'>
                    True
                </button>
                <button onClick={this.handleAnswer} name='false'>
                    False
                </button>
            </div>
        )
    }
}

export default Game;