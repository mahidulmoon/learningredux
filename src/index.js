import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers/index'

//golobalize store


//action
const Increment = () => {
  return {
    type: "INCREMENT"
  }
}
const Decrement = () => {
  return {
    type: "DECREMENT"
  }
}
//reducer
const Counter = (state = 0,action) =>{
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

// let store = createStore(Counter);
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//dispatch store to console
store.subscribe(() => console.log(store.getState()));

//dispatch
//store.dispatch(Increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
