// export interface CardProps {
//     key : Number,
//     question : String,
//       option1 : String,
//       option2 : String,
//       option3 : String,
//       option4 : String,
//       answer : String,

import React from "react";

    
// }

const CardData = () => 
{
    const cardTest =  
        {
            Question: "What Color is are the leaves",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: true }
            ]
        };
    return <>
    {cardTest}
    </>;
};


class Card extends React.Component{
    render(){
        return <>
        <h4>What color is are the leaves ?</h4>
        <button>Blue</button>
        <button>Red</button>
        <button>Yellow</button>
        <button>Green</button>
        </>;
    }
}

export default Card;