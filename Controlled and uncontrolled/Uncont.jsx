import React from 'react'
import { useState , useRef } from 'react'
function Uncont() {

const inputValue = useRef(null)
function handleinput(e){
    e.preventDefault()
alert(`Surname : ${inputValue.current.value}`)
}
    
  return (
    <>
    <form onSubmit={handleinput}>
        <label htmlFor="">Enter your Surname : </label>
        <input type="text" ref={inputValue}/><br/>
        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default Uncont