import React, { useState } from "react";
import Banner from "./components/UI/Banner/Banner";
import Card from "./components/UI/Card/Card";
import Button from "./components/UI/Button/Button";
import './Quiz.css';

const App = () => {
  const [questions] = useState([
    {
      questionId: 1,
      question: "What is the capital of France?",
      options: {
        option1: "Paris",
        option2: "Berlin",
        option3: "Madrid",
        option4: "Rome",
      },
      answer: "Paris",
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctOption: 2,
      selectedOption: null,
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correctOption: 1,
      selectedOption: null,
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      correctOption: 0,
      selectedOption: null,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
      correctOption: 1,
      selectedOption: null,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAttempt = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === questions.length - 1) {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setShowResults(false);
    setScore(0);
  };

  return (
    <div>
      <Banner />
      {showResults ? (
        <div>
          <h2>Your Score: {score}</h2>
          <Button onClick={handleRestart}>Start Quiz</Button>
        </div>
      ) : (
        <div>
          <Card
            question={questions[currentIndex].question}
            options={questions[currentIndex].options}
            answer={questions[currentIndex].answer}
            correctAnswerMarkUpdate={handleAttempt}
            attempt={handleAttempt}
          />
          <Button
            onClick={() => setShowResults(true)}
            disabled={currentIndex < questions.length - 1}
          >
            Show Results
          </Button>
        </div>
      )}
    </div>
  );
};

export default App;
