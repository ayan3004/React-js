import React from 'react'
import { useState,useEffect,useRef } from 'react'

function Ref() {
    const [inputValue , setinputValue] = useState("")

    const count = useRef(0)
    useEffect(()=>{
count.current = count.current+1
    }
)
  return (
    
    <>
    <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} className='cen' />
    {
        <h1>
        Change : {count.current}<br/>
        Change : {inputValue}
            </h1>
    }
    </>
  )
}

export default Ref