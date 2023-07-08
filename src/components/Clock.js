import { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // console.log("Komponent zamontowany");

    const interval = setInterval(() => {
      // console.log("Wykonuję intwerwał");
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      // console.log("Odmontowuję i czyszczę");
      clearInterval(interval);
    };
  }, []);

  useEffect(()=> {
    // console.log('Komponent się aktualizuje');
  })

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
