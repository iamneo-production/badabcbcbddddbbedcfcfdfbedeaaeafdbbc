import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string; // Use lowercase "string" instead of "String"
}

const Button = ({ onClick, text }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
