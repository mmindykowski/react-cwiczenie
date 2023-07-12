import { useEffect, useState } from "react";
import "./Counter.css";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Step from "./components/Step";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);
  const [stepValue, setStepValue] = useState(1);

  const stepChange = (action) => {
    setStepValue(action.target.value)
    // console.log(setStepValue);
  };

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + parseFloat(stepValue));
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    // console.log("Wywołanie use effecta");
  }, []);

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel stepValue={stepValue} updateCounter={updateCounter} />
      {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControll" onClick={() => setShowClock(true)}>
          Pokaż zegar
        </p>
      )}
      <Step stepMethod={stepChange}/>
    </div>
  );
};

export default Counter;
