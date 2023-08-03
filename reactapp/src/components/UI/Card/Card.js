import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        {this.props.answers.map((answer, index) => (
          <button key={index} onClick={() => this.props.handleAnswerResponse(answer.isCorrect)}>
            {answer.Answer}
          </button>
        ))}
      </div>
    );
  }
}

export default Card;
