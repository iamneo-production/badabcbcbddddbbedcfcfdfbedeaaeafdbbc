import React, { useState } from "react";
import Button from "./Button";

const Card = ({ question, options, answer, attempt }) => {
  const [disabledOptions, setDisabledOptions] = useState([]);

  const handleOptionClick = (option) => {
    setDisabledOptions([...disabledOptions, option]);
    attempt(option === answer);
  };

  return (
    <div className="card">
      <h4>{question}</h4>
      {Object.entries(options).map(([key, option]) => (
        <Button
          key={key}
          onClick={() => handleOptionClick(option)}
          disabled={disabledOptions.includes(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Card;
