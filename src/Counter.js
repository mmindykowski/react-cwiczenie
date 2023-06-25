import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(17);

  const updateCounter = () => {
    console.log("test");
    setCounter(30);
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
