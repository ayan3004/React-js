import React from 'react'
import { useState,useEffect } from 'react'
export const Fetch = () => {
    const [data ,setData] =useState(null)

useEffect(()=>{
    const fatchingdata =async()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const jsondata = await response.json()
        console.log(jsondata)
        setData(jsondata)
    }
    fatchingdata()
},[])
  return (
    
<div className='main'>
{

    data && data.map((el)=>(
        <div className='mp'>
            <img src={el.image} alt="" />
            <h1> {el.title}</h1>
            <p>{el.description}</p>
            <h3>{el.id}</h3>            
            <h2>{el.price}</h2>
        </div>
    ))
}
</div>
    
  )
}
// export default Feathing