
import './App.css';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';
function App() {
  const [posts , setposts] = useState([])

  function addnewpost(){
let newpost = {
  id : new Date().getTime(),
  title:title,
  Discription :Discription
}
setposts([...posts , newpost])
  }
  return (
   <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home posts ={posts} />}></Route>
        <Route path='/add' element={<Addpost addnewpost={addnewpost}/>}></Route>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
