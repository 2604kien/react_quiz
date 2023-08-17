import React from "react";
import Answer from "./Answer";

export default function Quiz(props){
    let allAnswer=props.question.incorrect_answers;
  

    allAnswer.push(props.correctAnswer);
    console.log(allAnswer);
    function generateRandomAnswer(){

        for(let i=allAnswer.length-1; i>0; i--){
            let j=Math.floor(Math.random()*(i+1));
            [allAnswer[i], allAnswer[j]]=[allAnswer[j], allAnswer[i]];
        }
        return allAnswer;
    }
    allAnswer=generateRandomAnswer()
    const answerElement=allAnswer.map((answer, index)=><Answer key={index} answer={answer}/>)
    return (
        <div>
        <div className="quiz">
            <h2 className="quizz--question">Question: {props.question.question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}</h2>
            <h4 className="quiz--answer">Answer:</h4>
            <div>
            {answerElement}
            </div>
        </div>
        <hr></hr>
        </div>
    );
}