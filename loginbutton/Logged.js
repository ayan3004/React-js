import React from 'react'
import { useState } from 'react'

function Logged() {
    const[islogin , setislogin] = useState(false)
    function handleout(){
setislogin(false)
    }
    function handlein(){
setislogin(true)
    }

  return (
    <div className='main'>{
      
islogin ?(
  <>
<h1>Wel Come to my Website</h1>
<button onClick={handleout}>Log out</button>
</>
)

:(
  <>
<h1>Please Log in</h1>
<button onClick={handlein}>Log In</button>
</>

)
}
    </div>
  )
}

export default Logged