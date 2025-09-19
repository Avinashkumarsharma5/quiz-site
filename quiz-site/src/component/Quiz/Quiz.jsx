import React, { useRef, useState } from "react";
import "./quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [locked, setLocked] = useState(false);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAnswer = (e, ans) => {
    if (!locked) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        option_array[data[index].ans - 1].current.classList.add("correct"); // ✅ highlight correct
      }
      setLocked(true);
    }
  };

  const nextQuestion = () => {
    if (locked) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setLocked(false);

        // ✅ reset styles
        option_array.forEach((opt) => {
          opt.current.classList.remove("correct");
          opt.current.classList.remove("wrong");
        });
      } else {
        setShowResult(true); // ✅ show result screen
      }
    } else {
      alert("Please select an answer first!");
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setLocked(false);
    setShowResult(false);

    option_array.forEach((opt) => {
      opt.current.classList.remove("correct");
      opt.current.classList.remove("wrong");
    });
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />

      {showResult ? (
        <div className="result">
          <h2>🎉 Quiz Finished!</h2>
          <p>
            Your Score: <b>{score}</b> out of <b>{data.length}</b>
          </p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <h2>
            {index + 1}. {data[index].question}
          </h2>
          <ul className={locked ? "disabled" : ""}>
            <li ref={option1} onClick={(e) => checkAnswer(e, 1)}>
              {data[index].option1}
            </li>
            <li ref={option2} onClick={(e) => checkAnswer(e, 2)}>
              {data[index].option2}
            </li>
            <li ref={option3} onClick={(e) => checkAnswer(e, 3)}>
              {data[index].option3}
            </li>
            <li ref={option4} onClick={(e) => checkAnswer(e, 4)}>
              {data[index].option4}
            </li>
          </ul>
          <button onClick={nextQuestion}>
            {index === data.length - 1 ? "Finish" : "Next"}
          </button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
          <div className="score">Score: {score}</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
