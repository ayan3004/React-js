import { increment, decrement, inc, dec } from "./comp/action";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const count = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);
  const dispatch = useDispatch();

  return (
    <>
    
<center>
<div className="main">
    <h1 className="heading">Counter App</h1>
      
        <h1>Counter 1: {count}</h1>
        <div className="btns">
        <button className="btn1" onClick={() => { dispatch(increment()) }}>Inc +</button><br/><br/>
        <button className="btn" onClick={() => { dispatch(decrement()) }}>Dec -</button>
        </div>
        </div>
</center>
        

    </>
  );
}

export default App;
