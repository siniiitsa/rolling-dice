import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css';

class RollDice extends Component {
  state = {
    isRolling: false,
    diceValues: [6, 6],
  }

  getRandonDie = () => Math.floor(Math.random() * 6) + 1;

  setDice = () => this.setState({
    isRolling: false,
    diceValues: [
      this.getRandonDie(),
      this.getRandonDie(),
    ],
  });

  roll = () => {
    this.setState({ isRolling: true });
    setTimeout(this.setDice, 810);
  };

  render() {
    const { diceValues, isRolling } = this.state;

    const dice = diceValues.map(
      num => <Die num={num} isRolling={isRolling} />
    );

    const btnText = isRolling ? 'Rolling...' : 'Roll Dice!';

    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <div className="RollDice-dice-wrapper">
            {dice}
          </div>
          <button className="RollDice-btn" disabled={isRolling} onClick={this.roll}>{btnText}</button>
        </div>
      </div>
    );
  };
}

export default RollDice;