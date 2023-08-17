import React from "react";

export default function Answer(props){
    
    const [colorState, setColorState]= React.useState("");
    
    React.useEffect(()=>{
        if(props.isHit===true) {
        if(props.answer===props.correctAnswer){
            setColorState("green");
        }
    }
    },[props.isHit])
  
    function hitAnswer(){
        console.log(props.answer);
        if(props.isHit===false) {
            props.checkCorrectAnswer();
            if(props.answer===props.correctAnswer){
                setColorState("green");
            }
            else{
                setColorState("red");
            }
        }
        
        console.log(props.isHit);
    }
  
    return (
        <div style={{backgroundColor: colorState}} onClick={hitAnswer} className="answerBox">
            {props.answer}
        </div>
    )
}