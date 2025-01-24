import React from 'react';

// Child component receiving props
function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

// Parent component passing props
function PropsExample() {
  return (
    <div>
      <h2>Props Example</h2>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default PropsExample;
