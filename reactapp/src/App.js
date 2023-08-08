import React, { useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Button from "./Button";

const App = () => {
  const [questions, setQuestions] = useState([
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
    // Add more questions here
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
