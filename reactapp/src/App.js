// App.js
import React, { useState } from 'react';
import Banner from './components/UI/Banner/Banner';
import Card from './components/UI/Card/Card';
import Button from './components/UI/Button/Button';

const App = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'London'],
      correctOption: 0,
      selectedOption: null,
    },
    
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (selectedOptionIndex) => {
    const selectedQuestion = questions[currentQuestionIndex];
    if (selectedQuestion.selectedOption === null) {
      selectedQuestion.selectedOption = selectedOptionIndex;
      setQuestions([...questions]);
    }
  };

  const handleShowResults = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.correctOption) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleShowResults();
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(
      questions.map((question) => ({ ...question, selectedOption: null }))
    );
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="app">
      <Banner />
      {!showResults ? (
        <Card
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onOptionSelect={handleOptionSelect}
          selectedOption={questions[currentQuestionIndex].selectedOption}
        />
      ) : (
        <div className="results">
          <p>Your Score: {score} out of {questions.length}</p>
        </div>
      )}
      {!showResults && (
        <Button text="Next Question" onClick={handleNextQuestion} />
      )}
      {showResults && (
        <Button text="Restart Quiz" onClick={handleRestartQuiz} />
      )}
    </div>
  );
};

export default App;
