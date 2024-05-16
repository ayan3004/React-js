import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


function Editt({ posts, updatePost }) {
  const { id } = useParams();
  let ans = posts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [content, setContent] = useState(ans.content);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updatePost(ans.id, title, content);
    navigate('/');
  }

  return (
    <div className="container">
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <h1>Title:</h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br /><br /><br />
        <h1>Content:</h1>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <br /><br /><br />
        <button type='submit'>UPDATE POST</button>
        <br /><br /><br />
      </form>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}

export default Editt;
