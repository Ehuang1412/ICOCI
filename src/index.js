import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/reducers";
import { Provider } from "react-redux";
import logger from "redux-logger";



// middleware - function return function
// pass in store to access the state to do calculations
// const myLogger = (store) => {
//   return (next) => {
//     return (action) =>{
//       console.log("middleware ran");
//       return next(action);
//     }
//   }
// }
//3rd party middleware: npm i redux-logger
const myLogger = (store) => (next) => (action) =>{
  console.log("middleware ran");
  return next(action);
}

const secondMiddleware = (store) => (next) => (action) =>{
  console.log( "second middleware ran");
  return next(action);
}

const capAtTen = (store) => (next) => (action) => {
  if(store.getState() >= 10){
    return next({type: "DECREMENT"})
  }
  next(action)
}

const store = createStore(counterReducer, applyMiddleware(myLogger,secondMiddleware,capAtTen,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

