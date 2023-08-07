
// Card.js
import React from 'react';

const Card = ({
  question,
  correctAnswerMarkUpdate,
  attempt,
  options,
  answer,
}) => {
  const handleOptionClick = (selectedOption) => {
    attempt();
    if (selectedOption === answer) {
      correctAnswerMarkUpdate();
    }
  };

  return (
    <div className="card">
      <h4>{question}</h4>
      <div className="options">
        {Object.values(options).map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
