import React from 'react'

function Blog(props) {

  return (
    <>
    {/* <ul className='main'>
        {
           props.posts.map((p)=>(
<li key={p.id} className='mp'>
    <div className='mpo'>
        <h1>{p.name}</h1>
        <img src={p.img} alt="" />
    </div>
</li>
           )) 
        }
    </ul> */
    
    <div className='main'>
        {
            props.posts.map((p)=>(
                <div className='mp'>
                    <h1>{p.name}</h1>
                    <img src={p.img} />
                </div>
            ))
        }
    </div>
    
    
    }
    </>
  )
}

export default Blog