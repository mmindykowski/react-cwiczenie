import { useState } from "react";
import "./Counter.css";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock"

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      <Clock />
    </div>
  );
};

export default Counter;
