import React from 'react'
import { useState } from 'react'

function Count() {
const [count ,  setCount] = useState(0)
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
        <h3>
counter : {count}
        </h3>
        <div className='co'>     
           <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>

    </div>
  )
}

export default Count