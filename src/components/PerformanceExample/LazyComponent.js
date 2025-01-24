import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function LazyComponent() {
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h3>Lazy Loaded Component</h3>
      <p>This component was loaded lazily using React.lazy and Suspense.</p>
      <p>Benefits of lazy loading:</p>
      <ul>
        <li>Reduces initial bundle size</li>
        <li>Improves initial load time</li>
        <li>Better resource utilization</li>
        <li>Improved performance for users</li>
      </ul>
    </div>
  );
}

export default LazyComponent;
