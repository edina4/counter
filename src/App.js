import React from 'react';
import './App.css';

export default function App() {
  const[counter, setCounter]=React.useState(0)

  function add(){
    setCounter(oldValue => oldValue + 1)
  }

  function subtract(){
    setCounter(oldValue => oldValue - 1)
  }

  return (
    <div className="App">
      <button className='button'
              onClick={subtract}>-</button>
      <div className='count--val'>
        <h1>{counter}</h1>
      </div>
      <button className='button' onClick={add}>+</button>
      
    </div>
  );
}