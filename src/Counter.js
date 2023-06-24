import "./Counter.css";

const Counter = () => {
  const counter = Math.floor(Math.random() * 10);

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
