import React from "react"
import Quiz from "./Component/Quiz"
export default function App() {

  const [questionList, setQuestionList]=React.useState({})
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res=>res.json())
      .then(data=>setQuestionList(data));
  },[]);
  console.log(questionList);
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

