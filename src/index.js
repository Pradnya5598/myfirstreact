import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Pradnya";
const age = 23;
const contact = 1234567890;
const city = "Satara";

ReactDOM.render(
  <>
    <h1>Expressions in React</h1>
    <h2>Your name is {name}</h2>
    <h2>Your age is {age}</h2>
    <h2>Your contact is {contact}</h2> 
    <h2>Your city is {city}</h2>
    <h2>Total of 3 and 3 is {3+3}</h2>
  </>,
  document.getElementById('root')
);



reportWebVitals();

