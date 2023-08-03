import React from 'react'
import { useState } from 'react';
import { Banner } from './components/UI/Banner/Banner';
import  Button from './components/UI/Button/Button';
import './quizstyle.css'

const App = () => {
    var Questionbank = [
        {
            Question: "Who is the father of your nation ?",
            Answers: [
                { Answer: "Mahatma Gandhi", isCorrect: true },
                { Answer: "Jawaharlal Nehru", isCorrect: false },
                { Answer: "Donald Trump", isCorrect: false },
                { Answer: "Barrack Obama", isCorrect: false }
            ]
        },
        {
            Question: "What color is are the leaves?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: true }
            ]
        }, {
            Question: "What color is the sky ",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
            Question: "What color is the sky ?",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
            Question: "What color is the fire ?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: true },
                { Answer: "Green", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showStart, setShowStart] = useState(false);
    const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const handleResultsButton = () => {
      if(currentQuestion === 5){
        setShowStart(true);
      }
  }  
    
   const handleQuizButton = () => {
        setShowQuiz(true);
    }

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
        setQuestionsCorrect(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}
const text = () => {
    const nextQuestion= currentQuestion+1;
    if(nextQuestion < Questionbank.length){
      return "Show Results"
    } else {                        
     return "Start Quiz"
    }
      
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            {showScore ? (
                <div className='score-section'>
                    <Banner/>
                    You have answered {score} / {Questionbank.length} Correctly
                    <>
                       <Button type="submit" onClick={resetQuiz} text = "Start Quiz"></Button>
                    </>
                </div>
            )
                : (
                    <>
                    <h1>Quizz App</h1>
                      {!showQuiz && <Button  onClick={() => handleQuizButton()} text = "Start Quiz"></Button>}
                      {showQuiz && (
                        <div>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                         <Button>{text()}
                          </Button>
                        </div>
                        
                         </div>)}
                    </>
                )
            }

        </div>
    );
}

export default App;