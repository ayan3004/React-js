import React from 'react';
import { Link } from 'react-router-dom';


function Home({ posts }) { 
  return (
    <center>
      <div>
      <h1>Welcome To our Page</h1>
      {
        posts.map((el) => (
          <div key={el.id}> 
            <h2>{el.title}</h2>
            <p>{el.content}</p>
          </div>
        ))
      }
      <Link to="/add">ADD POST</Link>
    </div>
    </center>
  );
}

export default Home;