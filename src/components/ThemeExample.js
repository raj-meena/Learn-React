import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemedButton({ children, onClick }) {
  const { theme } = useTheme();
  
  const buttonStyle = {
    backgroundColor: theme.primary,
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

function ThemedText({ children }) {
  const { theme } = useTheme();
  
  return (
    <p style={{ color: theme.text }}>
      {children}
    </p>
  );
}

function ThemeExample() {
  const { theme, currentTheme, toggleTheme } = useTheme();
  
  const containerStyle = {
    backgroundColor: theme.background,
    padding: '20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: theme.text }}>Theme Context Example</h2>
      
      <ThemedText>
        This component demonstrates the use of React Context and Custom Hooks.
        Current theme is: {currentTheme}
      </ThemedText>
      
      <ThemedButton onClick={toggleTheme}>
        Toggle Theme
      </ThemedButton>

      <div style={{ marginTop: '20px' }}>
        <ThemedText>
          Benefits of Context:
        </ThemedText>
        <ul style={{ color: theme.text }}>
          <li>Avoid prop drilling</li>
          <li>Share state globally</li>
          <li>Easier state management</li>
        </ul>
      </div>
    </div>
  );
}

export default ThemeExample;
