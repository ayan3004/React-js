import React from 'react'
import { useState , useEffect } from 'react'
import Counter from './Counter'
import logo from './logo.jpeg'


export const Display = () => {
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
    <>
    <header>
    <div className="brand">
            <img src={logo} alt="" />
        </div>
       
        <nav>

            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Contact Us</a>

        </nav>

        <div className="contact">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span><i class="fa-solid fa-user"></i></span>
        <i class="fa-solid fa-mug-hot"></i>
        </div>
    </header>
    <div className='main'>
    {
    
        data && data.map((el)=>(
            <div className='mp'>
                <img src={el.image_url} alt="" />
                <h1>{el.id}</h1>
                <h3>{el.price} $</h3>
                <h3>{el.weight}gm</h3>
                <h6>region : {el.region}</h6>
                <h1 className='heading'>{el.name}</h1>  
                <p>{el.flavor_profile}</p>   
                {/* <h2>{el.grind_option}</h2>        */}
                <p>{el.description}</p>

                <Counter />
            </div>
        ))
    }
    </div>
    </>
  )
}
