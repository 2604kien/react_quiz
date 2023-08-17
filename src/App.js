import React from "react"
import Quiz from "./Component/Quiz"
export default function App() {
  const [reset, setReset]=React.useState(false);
  const [questionList, setQuestionList]=React.useState([]);
  const [point, setPoint]=React.useState(0);
  
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res=>res.json())
      .then(data=>setQuestionList(data.results));
      console.log(questionList)
  },[reset]);  

  function resetEverything(){
    setReset(prev=>!prev);

  }
  function addPoint(){
    setPoint(prev=>prev+1);
  }
  console.log(point);
  const questionElement=questionList.map((question, index)=><Quiz key={index} reset={reset} addPoint={addPoint} question={question} correctAnswer={question.correct_answer} />);

  return (
    <div className="App">
      {questionElement}
      <button onClick={resetEverything}>Next</button>
    </div>
  );
}

