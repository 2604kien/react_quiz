import React from "react";

export default function Answer(props){
    const [singleAnswer, setSingleAnswer]= React.useState(false);
    const [colorState, setColorState]= React.useState("");
    function hitAnswer(){

        setSingleAnswer(prev=>!prev);
        if(props.isHit===false) {
            props.checkCorrectAnswer();
            if(props.answer===props.correctAnswer){
                setColorState("green");
            }
            else{
                setColorState("red");
            }
        }
    }

    return (
        <div style={{backgroundColor: colorState}} onClick={hitAnswer} className="answerBox">
            {props.answer}
        </div>
    )
}