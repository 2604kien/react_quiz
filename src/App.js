import React from "react"
import Quiz from "./Component/Quiz"
export default function App() {

  const [questionList, setQuestionList]=React.useState([]);
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res=>res.json())
      .then(data=>setQuestionList(data.results));

  },[]);
  console.log(questionList);
  const questionElement=questionList.map((question, index)=><Quiz key={index} question={question} correctAnswer={question.correct_answer} />)
  return (
    <div className="App">
      {questionElement}
      <button>Next</button>
    </div>
  );
}

