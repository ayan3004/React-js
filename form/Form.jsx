import React from 'react'
import { useState } from 'react'

function Form() {
    const [formdata , setformdata] = useState({
        username : '',
        email : '',
        password : ''
    })
    function handleinput(e){
        const {name , value} = e.target
        setformdata({
            ...formdata,
            [name] : value
        }) 
    }

    function handlesubmit(e){
e.preventDefault()
console.log(formdata)
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <label>Enter your username : </label>
        <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
        <br/>
        <label htmlFor="">Enter your Email : </label>
        <input type="text" name='email' value={formdata.email} onChange={handleinput} />
        <br/>
        <label htmlFor="">Enter your Password : </label>
        <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
        <br/>
        <button type='Submit'>Submit</button>
    </form>
    
    </>
  )
}

export default Form