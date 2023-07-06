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
    console.log('dzialam');
  }




  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  useEffect(()=>{
    console.log('Wywołanie use effecta');
  }, [counter]);

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      {showClock ? <Clock setShowClock={setShowClock}/> : <p className="clockControll" onClick={()=>setShowClock(true)}>Pokaż zegar</p>}
      <Step />
    </div>
  );
};

export default Counter;
