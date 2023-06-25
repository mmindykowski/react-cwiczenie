import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {

  const [counter, setCounter] =useState(17);

  return (
    <div className="counter">
      <p>Counter: {props.counterInitValue}</p>
      <div className="buttonsPanel">
        <button>Add</button>
      </div>
    </div>
  );
};

export default Counter;
