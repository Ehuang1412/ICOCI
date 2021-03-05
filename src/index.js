import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/reducers";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';


// middleware - function return function
// pass in store to access the state to do calculations
const myLogger = (store) => {
  return next => {
    return action =>{
      console.log("middleware ran");
    }
  }
}

const store = createStore(counterReducer, applyMiddleware(myLogger));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
