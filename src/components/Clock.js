import { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("komp");

    const interval = setInterval(() => {
      console.log("wykonuje intwerwa");
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("odmontowuje interwal i czyszcze");
      clearInterval(interval);
    };
  }, []);

  return (
    <p>
      {time}
      {""}
      <span className="clockControll" onClick={() => props.setShowClock(false)}>
        x
      </span>
    </p>
  );
};

export default Clock;
