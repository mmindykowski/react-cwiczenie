import { useState } from "react";
import "./Counter.css";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel />
    </div>
  );
};

export default Counter;
