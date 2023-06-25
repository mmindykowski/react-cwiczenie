import { useState } from "react";
import "./Counter.css";
import Display from "./components/Display";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <div className="buttonsPanel">
        <button onClick={updateCounter}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
