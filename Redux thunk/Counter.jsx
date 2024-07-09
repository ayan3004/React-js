import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';
// import './Counter.css';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    return (
        <div className="container">
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;
