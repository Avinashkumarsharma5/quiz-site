import React, { useState } from "react";
import "./quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [locked, setLocked] = useState(false); 
  let [score, setScore] = useState(0);       

  const checkAnswer = (e, ans) => {
    if (!locked) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
      }
      setLocked(true); 
    }
  };

  const nextQuestion = () => {
    if (locked) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setLocked(false);

        
        let options = document.querySelectorAll("li");
        options.forEach((option) => {
          option.classList.remove("correct");
          option.classList.remove("wrong");
        });
      }
    } else {
      alert("Please select an answer first!");
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. {data[index].question}
      </h2>
      <ul className={locked ? "disabled" : ""}>
        <li onClick={(e) => checkAnswer(e, 1)}>{data[index].option1}</li>
        <li onClick={(e) => checkAnswer(e, 2)}>{data[index].option2}</li>
        <li onClick={(e) => checkAnswer(e, 3)}>{data[index].option3}</li>
        <li onClick={(e) => checkAnswer(e, 4)}>{data[index].option4}</li>
      </ul>
      <button onClick={nextQuestion}>Next</button>
      <div className="index">
        {index + 1} of {data.length} questions
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Quiz;
