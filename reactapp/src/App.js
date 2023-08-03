import React, { useState } from 'react';
import { Banner } from './components/UI/Banner/Banner';
import Button from './components/UI/Button/Button';
import './components/UI/Card/Card';
import './components/UI/Quizstyle.css';

const App = () => {
  const Questionbank = [
    // Your array of questions and answers
  ];

  // useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleQuizButton = () => {
    setShowQuiz(true);
  };

  const text = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      return "Show Results";
    } else {
      return "Start Quiz";
    }
  };

  return (
    <div className='app'>
      <Banner />
      <h1>Quizz App</h1>
      {!showQuiz && <Button onClick={handleQuizButton} text="Start Quiz" />}
      {showQuiz && !showScore && (
        <div>
          <div className='question-section'>
            <div className='question-count'>
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>
            <div className='question-text'>
              {Questionbank[currentQuestion].Question}
            </div>
          </div>
          <div className='answer-section'>
            {Questionbank[currentQuestion].Answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerResponse(answer.isCorrect)}
              >
                {answer.Answer}
              </button>
            ))}
            <Button onClick={resetQuiz} text={text()} />
          </div>
        </div>
      )}
      {showScore && (
        <div className='score-section'>
          <Banner />
          You have answered {score} / {Questionbank.length} correctly
          <Button onClick={resetQuiz} text='Start Quiz' />
        </div>
      )}
    </div>
  );
};

export default App;
