import React from 'react'
import { Link } from 'react-router-dom'
function Home(posts) {
  return (
    <>
<h1>Welcome to our website</h1>
{
    posts.map((el)=>{
        <>
        <h2>{el.title}</h2>
        <h4>{el.Discription}</h4>
        </>
    })
}
<Link to='/add'>Add post</Link>
    </>
  )
}

export default Home