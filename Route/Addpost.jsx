import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Addpost({addnewpost}) {
    const [title , settitle ]=useState('')
    const [Discription ,setdiscription]=useState('')
    const navigate = useNavigate()
    function handlesubmit(e){
e.preventDefault()
addnewpost(title,Discription)
navigate('/')
    }

  return (
    <>
    <h1>Add post page</h1>
    <form action="" onSubmit={handlesubmit}>
<h2>Title :</h2>
<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
<h2>Discription :</h2>
<textarea name="" id="" value={Discription} onChange={(e)=>setdiscription(e.target.value)}></textarea>
<button type='submit'>Submit</button>
    </form>
   <Link to='/'></Link>
    </>
  )
}

export default Addpost