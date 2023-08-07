
import React from 'react';


const Card = ({ question, options, onOptionSelect, selectedOption }) => {
  return (
    <div className="card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onOptionSelect(index)}
            text={option}
            disabled={selectedOption !== null} // Disable buttons if an option is selected
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
