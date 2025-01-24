import React, { createContext, useContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Theme values
export const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#0066cc',
    secondary: '#666666'
  },
  dark: {
    background: '#222222',
    text: '#ffffff',
    primary: '#66b3ff',
    secondary: '#999999'
  }
};

// Create the provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Value to be provided to consumers
  const value = {
    theme: themes[theme],
    currentTheme: theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
