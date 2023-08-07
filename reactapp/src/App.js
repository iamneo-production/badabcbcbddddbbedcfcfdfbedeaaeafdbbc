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
        <Button
          text={currentQuestionIndex === questions.length - 1 ? 'Show Results' : 'Next Question'}
          onClick={
            currentQuestionIndex === questions.length - 1
              ? handleShowResults
              : () => setCurrentQuestionIndex(currentQuestionIndex + 1)
          }
        />
      )}
      {showResults && (
        <Button text="Restart Quiz" onClick={handleRestartQuiz} />
      )}
    </div>
  );
};

export default App;
