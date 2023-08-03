import React from 'react'
import  Card from "./components/UI/Card/Card.js";

const QuizComp = () => {
    var Questionbank = [
        {Card},
        {
            Question: "Who is the father of your nation ?",
            Answers: [
                { Answer: "Mahatma Gandhi", isCorrect: true },
                { Answer: "Jawaharlal Nehru", isCorrect: false },
                { Answer: "Donald Trump", isCorrect: false },
                { Answer: "Barrack Obama", isCorrect: false }
            ]
        }, {
            Question: "What color is are the leaves ?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: true }
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
            Question: "What color is the sky ?",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
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

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
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
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;