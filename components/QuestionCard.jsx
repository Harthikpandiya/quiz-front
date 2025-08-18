import React from "react";


const QuestionCard = ({ questionData, onAnswer }) => {
  return (
    <div className="card quest" >
        <div className="card2" >
                    <p>{questionData.question}</p>
      <img src={questionData.image} alt="Question" width={300}  />
      <div className="options" >
        {questionData.options.map((opt, idx) => (
          <button key={idx} onClick={() => onAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>

        </div>
      
    </div>
  );
};

export default QuestionCard;
