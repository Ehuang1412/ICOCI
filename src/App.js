import React from 'react';
import {useSelector, useDispatch } from "react-redux";
import {decrement, increment} from "./actions/actions"
import './App.css';

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> {count} </h1>
      <button onClick={()=>dispatch(decrement())}> Dec </button>
      <button onClick={()=>dispatch(increment())}> Inc </button>
    </div>
  );
}

export default App;
