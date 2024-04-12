import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count , setCount] = useState(0)
function increment(){
   setCount(count + 1)
}
function decrement(){
    if(count == 0){
        setCount(0)
 }
 else{
     setCount(count - 1)
 }
}
function reset(){
    setCount(0)
}
  return (
    <div>
   <h3 className='heelo'>
Like This Coffee : {count}
        </h3>
        <div className='co'>     
           <button onClick={increment} className='helo'>Increment</button>
        <button onClick={decrement} className='helo'>Decrement</button>
        <button onClick={reset} className='helo'>Reset</button>
        </div>
    </div>
  )
}

export default Counter