import React , {useState} from 'react'
import  './quiz.css'
import {data} from '../../assets/data';
const quiz = () => {
    let [index,setIndex]= useState(4);
    let [question,setQuestion]= useState(data[index]);

    const checkAnswer = (e,ans) =>{
        if (questiion.ans === ans){
            e.target.classList.add("correct");
        }else{
            e.target.classList.add("wrong");
        }
    }
  return (
    <div className='container'>
<h1>quiz  app</h1>
<hr />
<h2>{index+1}.{question.question}</h2>
<ul>
    <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
    <li  onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
    <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
    <li  onClick={(e)=>{checkAns(e,4)}}>{question.option4} </li>
</ul>
<button>next</button>
<div className='index'> 1 of 5 question</div>
    </div>
  )
}

export default quiz