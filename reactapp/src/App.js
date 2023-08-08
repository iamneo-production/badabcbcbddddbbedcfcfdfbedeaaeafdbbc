import React, { useState } from "react";
import Banner from "./components/UI/Banner/Banner";
import Card from "./components/UI/Card/Card";
import Button from "./components/UI/Button/Button";
import './Quiz.css';

const App = () => {
  const [questions, setQuestions] = useState([
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
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Au', 'Gd', 'Gl'],
      correctOption: 1,
      selectedOption: null,
    },
    // Add more questions as needed
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAttempt = (selectedOptionIndex) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctOption;

    if (isCorrect) {
      setScore(score + 1);
    }

    const updatedQuestions = questions.map((question, index) => {
      if (index === currentIndex) {
        return {
          ...question,
          selectedOption: selectedOptionIndex,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);

    if (currentIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRestart = () => {
    setQuestions(questions.map(question => ({
      ...question,
      selectedOption: null,
    })));
    setCurrentIndex(0);
    setShowResults(false);
    setScore(0);
  };

  return (
    <div>
      <Banner />
      {showResults ? (
        <div className="results">
          <h2>Your Score: {score}</h2>
          <Button onClick={handleRestart}>Restart Quiz</Button>
        </div>
      ) : (
        <div>
          <Card
            question={questions[currentIndex].question}
            options={questions[currentIndex].options}
            selectedOption={questions[currentIndex].selectedOption}
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
