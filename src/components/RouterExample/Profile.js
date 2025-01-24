import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Profile() {
  const { theme } = useTheme();
  // Simulating authentication state
  const isAuthenticated = false;

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    }
  };

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={styles.container}>
      <h2>Profile Page</h2>
      <p>This is a protected route. You can only see this if authenticated.</p>
    </div>
  );
}

export default Profile;
