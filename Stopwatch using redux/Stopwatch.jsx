import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { start, stop, reset, tick} from './comp/action';


const Stopwatch = () => {
  const dispatch = useDispatch();
  const { running, time } = useSelector((state) => state);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, dispatch]);

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stop Watch</h1>
      <h1 className="stopwatch-time">{time} seconds</h1>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={() => dispatch(start())}>Start</button>
        <button className="stopwatch-button" onClick={() => dispatch(stop())}>Stop</button>
        <button className="stopwatch-button" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
