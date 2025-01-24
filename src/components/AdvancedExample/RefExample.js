import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

function RefExample() {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px',
      marginTop: '20px'
    },
    button: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '8px'
    },
    input: {
      padding: '8px',
      marginBottom: '16px',
      borderRadius: '4px',
      border: `1px solid ${theme.secondary}`
    }
  };

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();

    return () => {
      // Cleanup timer on unmount
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const handleStopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleResetTimer = () => {
    handleStopTimer();
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <h2>useRef Examples</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>DOM Reference</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="This input is focused on mount"
          style={styles.input}
        />
        <button 
          style={styles.button}
          onClick={() => inputRef.current?.focus()}
        >
          Focus Input
        </button>
      </div>

      <div>
        <h3>Timer Reference</h3>
        <p>Time: {time} seconds</p>
        <button style={styles.button} onClick={handleStartTimer}>
          Start
        </button>
        <button style={styles.button} onClick={handleStopTimer}>
          Stop
        </button>
        <button style={styles.button} onClick={handleResetTimer}>
          Reset
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>useRef Use Cases:</h3>
        <ul>
          <li>Accessing DOM elements directly</li>
          <li>Storing mutable values</li>
          <li>Persisting values between renders</li>
          <li>Managing timers and intervals</li>
          <li>Storing previous values</li>
        </ul>
      </div>
    </div>
  );
}

export default RefExample;
