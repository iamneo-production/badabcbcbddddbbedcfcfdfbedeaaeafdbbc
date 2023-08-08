import React, { useState } from "react";
import Button from "../Button/Button";

const Card = ({
  question,
  options,
  answer,
  correctAnswerMarkUpdate,
  attempt,
}) => {
  const [disabledOptions, setDisabledOptions] = useState([]);

  const handleOptionClick = (option) => {
    setDisabledOptions([...disabledOptions, option]);
    attempt(option === answer);
  };

  return (
    <div>
      <h4>{question}</h4>
      {Object.values(options).map((option, index) => (
        <Button
          key={index}
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
