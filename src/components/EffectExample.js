import React, { useState, useEffect } from 'react';

function EffectExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      // This is just an example - normally you'd fetch from a real API
      const mockData = { message: 'Data loaded!' };
      setData(mockData);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Effect Example</h2>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default EffectExample;
