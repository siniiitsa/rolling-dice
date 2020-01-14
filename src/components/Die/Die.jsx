import React from 'react';
import './Die.css';

const Die = ({ num, isRolling }) => {
  const dieClasses =
    ['one', 'two', 'three', 'four', 'five', 'six'][num - 1];

  const animationClasses = isRolling ? 'animated wobble fast' : '';

  return (
    <i className={`Die ${animationClasses} fas fa-dice-${dieClasses}`}></i>
  );
}

export default Die;