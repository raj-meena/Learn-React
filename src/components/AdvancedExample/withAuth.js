import React from 'react';
import { useTheme } from '../../context/ThemeContext';

// Higher-Order Component for authentication
function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const { theme } = useTheme();
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

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
        marginBottom: '16px'
      },
      warning: {
        backgroundColor: '#ff000020',
        color: '#ff0000',
        padding: '16px',
        borderRadius: '4px',
        marginBottom: '16px'
      }
    };

    if (!isAuthenticated) {
      return (
        <div style={styles.container}>
          <div style={styles.warning}>
            Please authenticate to access this component
          </div>
          <button
            style={styles.button}
            onClick={() => setIsAuthenticated(true)}
          >
            Login
          </button>
        </div>
      );
    }

    return (
      <div style={styles.container}>
        <div style={{ marginBottom: '16px' }}>
          <button
            style={styles.button}
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withAuth;
