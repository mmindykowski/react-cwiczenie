import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const updateCounter = () => {
    setCounter(counter + 1);
    
  };

  return (
    <div className="counter">
      <p>Counter: {counter}</p>
      <div className="buttonsPanel">
        <button onClick={updateCounter}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
