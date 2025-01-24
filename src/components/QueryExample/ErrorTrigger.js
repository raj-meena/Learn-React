import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function ErrorTrigger() {
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
      backgroundColor: '#ff4444',
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  const throwError = () => {
    throw new Error('This is a test error caught by the Error Boundary!');
  };

  return (
    <div style={styles.container}>
      <h3>Error Boundary Test</h3>
      <p>Click the button below to trigger an error:</p>
      <button style={styles.button} onClick={throwError}>
        Trigger Error
      </button>
    </div>
  );
}

export default ErrorTrigger;
