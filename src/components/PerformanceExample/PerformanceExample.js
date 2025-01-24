import React, { Suspense, useState } from 'react';
import ExpensiveList from './ExpensiveList';
import { useTheme } from '../../context/ThemeContext';

// Lazy load component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function PerformanceExample() {
  const [showLazy, setShowLazy] = useState(false);
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    button: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '16px'
    },
    loading: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: `${theme.secondary}20`,
      borderRadius: '8px',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Performance Optimizations</h2>
      
      {/* Expensive List with optimizations */}
      <ExpensiveList />
      
      {/* Lazy Loading Example */}
      <button 
        style={styles.button}
        onClick={() => setShowLazy(prev => !prev)}
      >
        {showLazy ? 'Hide' : 'Show'} Lazy Component
      </button>

      {showLazy && (
        <Suspense fallback={
          <div style={styles.loading}>
            Loading Lazy Component...
          </div>
        }>
          <LazyComponent />
        </Suspense>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>Performance Features Demonstrated:</h3>
        <ul>
          <li>React.memo for component memoization</li>
          <li>useMemo for expensive calculations</li>
          <li>useCallback for stable callbacks</li>
          <li>Lazy loading with React.lazy</li>
          <li>Suspense for loading states</li>
          <li>Virtual list rendering</li>
        </ul>
      </div>
    </div>
  );
}

export default PerformanceExample;
