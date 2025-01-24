import React, { useState } from 'react';

function StateExample() {
  // Example of useState hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default StateExample;
