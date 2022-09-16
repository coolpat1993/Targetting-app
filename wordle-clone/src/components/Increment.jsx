import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incCount = amount => {
    setCount(currCount => currCount + amount);
  };

  return (
    <section>
      <h2>Count: {count}</h2>
      <button onClick={() => incCount(3)}>+3</button>
      <button onClick={() => incCount(5)}>+5</button>
    </section>
  );
};

export default Counter;
