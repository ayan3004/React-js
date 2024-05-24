import React from 'react';
import { Provider } from 'react-redux';
import store from './comp/store';
import Stopwatch from './Stopwatch';
import './App.css';


const App = () => (
  <Provider store={store}>
   <Stopwatch/>
  </Provider>
);

export default App;
