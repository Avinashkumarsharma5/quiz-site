import React from 'react'
import  './quiz.css'
const quiz = () => {
  return (
    <div className='container'>
<h1>quiz  app</h1>
<hr />
<h2>which device is requried for the internet connection</h2>
<ul>
    <li>modem</li>
    <li>rauter</li>
    <li>lan cable</li>
    <li> pen drive</li>
</ul>
<button>next</button>
<div className='index'> 1 of 5 question</div>
    </div>
  )
}

export default quiz