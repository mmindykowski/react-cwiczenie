import "./Counter.css";

const Counter = (props) => {
  const counter = Math.floor(Math.random() * 10);
  console.log(props.counterInitValue);
  return (
    <div className="counter">
      <p>Counter: {counter}</p>
      <div className="buttonsPanel">
        <button>Add</button>
      </div>
    </div>
  );
};

export default Counter;
