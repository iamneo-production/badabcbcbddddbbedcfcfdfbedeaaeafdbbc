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
    // ... (other questions)
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAttempt = (selectedOptionIndex) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctOption;
  
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
  
    if (isCorrect) {
      setScore(score + 1);
    }
  
    if (currentIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  

    const updatedQuestions = [...questions];
    updatedQuestions[currentIndex].selectedOption = selectedOptionIndex;
    setQuestions(updatedQuestions);

    if (currentIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRestart = () => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => ({
        ...question,
        selectedOption: null,
      }))
    );
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
