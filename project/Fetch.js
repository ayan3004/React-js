import React from 'react'
import { useState,useEffect } from 'react'

export const Fetch = () => {
    const [data , setdata] = useState(null)

    useEffect (()=>{
        const fatchingdata  = async () =>{
            const response = await fetch('https://fake-coffee-api.vercel.app/api')
            const jsondata = await response.json()
            console.log(jsondata)
            setdata(jsondata)
        }
        fatchingdata()
    },[])
  return (
    <div className='main'>
    {
    
        data && data.map((el)=>(
            <div className='mp'>
                <img src={el.image_url} alt="" />
                <h1>{el.id}</h1>
                <h3> {el.price}</h3>
                
                <h3>{el.name}</h3>            
                <p>{el.description}</p>
                
            </div>
        ))
    }
    </div>
     )
}
