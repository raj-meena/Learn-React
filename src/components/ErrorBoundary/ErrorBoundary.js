import React from 'react';
import { useTheme } from '../../context/ThemeContext';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.state.error);
    }
    return this.props.children;
  }
}

// Wrapper component to use theme in error fallback
function ErrorBoundary({ children }) {
  const { theme } = useTheme();

  const styles = {
    errorContainer: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      border: '1px solid #ff0000',
      borderRadius: '8px',
      margin: '10px 0'
    },
    errorHeading: {
      color: '#ff0000'
    },
    errorMessage: {
      marginTop: '10px',
      fontFamily: 'monospace',
      backgroundColor: `${theme.background}dd`,
      padding: '10px',
      borderRadius: '4px'
    },
    retryButton: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    }
  };

  const ErrorFallback = ({ error }) => (
    <div style={styles.errorContainer}>
      <h3 style={styles.errorHeading}>Something went wrong!</h3>
      <p>Error Boundary caught the following error:</p>
      <pre style={styles.errorMessage}>
        {error.message}
      </pre>
      <button 
        style={styles.retryButton}
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );

  return (
    <ErrorBoundaryClass fallback={ErrorFallback}>
      {children}
    </ErrorBoundaryClass>
  );
}

export default ErrorBoundary;
