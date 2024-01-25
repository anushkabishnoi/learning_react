import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>The count is around : {count}</p>
      <button onClick={updateCount}>Incrementtt💪</button>
    </div>
  );
}

export default Counter;
