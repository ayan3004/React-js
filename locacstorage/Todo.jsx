import React from 'react'
import { useState } from 'react'

function Todo() {
    const [inputvalue , setinputvalue] = useState('')
    const [todos , settodos] = useState([])
    localStorage.setItem("todo",JSON.stringify(todos))
   function addtask(){
    let newtask = {
        task : inputvalue 
    }
    settodos([...todos , newtask])
    setinputvalue("")
   }

  return (
<>
<center>
    
<h1 style={{color : "green"}}>TO-DO LIST</h1>
<input type="text" placeholder='Enter your task' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />&nbsp;&nbsp;&nbsp;
<button onClick={addtask}>Add Task</button>
{
     todos.map((el , i)=>(
        <h1 key={i}>{el.task}</h1>

     ))
}
</center>
</>
  )
}

export default Todo