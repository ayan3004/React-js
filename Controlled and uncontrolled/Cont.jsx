import React from 'react'
import { useState } from 'react'

function Cont() {
    const [inputValue , setinputValue] = useState("")
    function handleinput(e){
       e.preventDefault()
       alert(`${inputValue}`)
    }

  return (
   <>
  <form action="" onSubmit={handleinput}>
  <label htmlFor="">Enter your name : </label>
   <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/><br/>
   <button type='submit'>Submit</button>
  </form><br/><br/>
   </>
  )
}

export default Cont