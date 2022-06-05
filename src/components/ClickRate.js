import { React, useState } from 'react'
import '../App.css';
 
export default function ClickRate() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  return (
    <div className="counter">

      <span className="counter__output">{counter}</span>
      <div className="btn__container">
    <button className="btn btn-outline-info btn-lg btn-block" onClick={increase}></button>
      </div>
    </div>
  );
}