import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Home() {
  const { theme } = useTheme();
  
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    link: {
      color: theme.primary,
      textDecoration: 'none',
      marginRight: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to React Router Example</h2>
      <p>This example demonstrates:</p>
      <ul>
        <li>Route Configuration</li>
        <li>Navigation using Links</li>
        <li>URL Parameters</li>
        <li>Protected Routes</li>
      </ul>
      <div>
        <Link to="/products" style={styles.link}>View Products</Link>
        <Link to="/profile" style={styles.link}>View Profile</Link>
      </div>
    </div>
  );
}

export default Home;
